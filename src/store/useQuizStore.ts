import { Quiz } from 'src/types/quizTypes';
import { create } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';

export interface QuizStore {
  quizData: Quiz[] | null;
  currentQuizNum: number;
  errors: { [key: string]: string };
  setQuizData: (newData: QuizStore['quizData']) => void;
  setUserAnswer: (quizIdx: number, userAnswer: string | boolean | null) => void;
  setPrevQuiz: () => void;
  setNextQuiz: () => void;
  resetQuizData: () => void;
  setError: (key: string, message: string) => void;
  clearErrors: (key: string) => void;
}

const useQuizStore = create<QuizStore>()(
  persist(
    (set) => ({
      quizData: null,
      currentQuizNum: 1,
      errors: {},
      setQuizData: (newData) => set({ quizData: newData }),
      setUserAnswer: (quizIdx, userAnswer) => {
        set((state) => {
          if (!state.quizData) return state;
          const updatedQuizData = [...state.quizData];
          const currentQuiz = updatedQuizData[quizIdx];

          if ('options' in currentQuiz) {
            updatedQuizData[quizIdx] = { ...currentQuiz, userAnswer: userAnswer as string };
          } else if (typeof currentQuiz.answer === 'boolean') {
            updatedQuizData[quizIdx] = { ...currentQuiz, userAnswer: userAnswer as boolean };
          } else {
            updatedQuizData[quizIdx] = { ...currentQuiz, userAnswer: userAnswer as string | null };
          }
          return { quizData: updatedQuizData as QuizStore['quizData'] };
        });
      },
      setPrevQuiz: () =>
        set((state) => ({ currentQuizNum: Math.max(1, state.currentQuizNum - 1) })),
      setNextQuiz: () =>
        set((state) => ({
          currentQuizNum: Math.min(state.quizData?.length || 1, state.currentQuizNum + 1),
        })),
      resetQuizData: () => set({ quizData: null, currentQuizNum: 1, errors: {} }),
      setError: (key, message) => set((state) => ({ errors: { ...state.errors, [key]: message } })),
      clearErrors: (key) =>
        set((state) => {
          if (key) {
            const { [key]: _, ...rest } = state.errors;
            return { errors: rest };
          }
          return { errors: {} };
        }),
    }),
    {
      name: 'quiz-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useQuizStore;
