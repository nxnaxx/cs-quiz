import { create } from 'zustand';

export interface Multiple {
  question: string;
  options: string[];
  answer: string;
  userAnswer: string | null;
  commentary: string;
}

export interface TrueFalse {
  question: string;
  answer: boolean;
  userAnswer: boolean | null;
  commentary: string;
}

export interface FillBlank {
  question: string;
  answer: string[];
  userAnswer: string | null;
  commentary: string;
}

export interface QuizStore {
  quizData: Multiple[] | TrueFalse[] | FillBlank[] | undefined;
  currentQuizNum: number;
  setQuizData: (newData: QuizStore['quizData']) => void;
  setUserAnswer: (question: string, userAnswer: boolean | string | null) => void;
  setPrevQuiz: () => void;
  setNextQuiz: () => void;
  resetQuizData: () => void;
  submitData: () => void;
  errors: { [key: string]: string };
  setError: (key: string, message: string) => void;
  clearErrors: (key: string) => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  quizData: undefined,
  currentQuizNum: 1,
  setQuizData: (newData) => set({ quizData: newData }),
  setUserAnswer: (question: string, userAnswer: boolean | string | null) => {
    set((state) => {
      if (!state.quizData) return state;

      const updatedQuizData = state.quizData.map((quiz) => {
        if (quiz.question === question) {
          if ('options' in quiz) {
            return { ...quiz, userAnswer: userAnswer as string };
          } else if (typeof quiz.answer === 'boolean') {
            return { ...quiz, userAnswer: userAnswer as boolean };
          }
          return { ...quiz, userAnswer: userAnswer as string | null };
        }
        return quiz;
      });

      return { quizData: updatedQuizData as QuizStore['quizData'] };
    });
  },
  setPrevQuiz: () => set((state) => ({ currentQuizNum: state.currentQuizNum - 1 })),
  setNextQuiz: () => set((state) => ({ currentQuizNum: state.currentQuizNum + 1 })),
  resetQuizData: () => set({ quizData: undefined }),
  submitData: () => {
    const { quizData } = useQuizStore.getState();
    console.log('submit', quizData);
  },
  errors: {},
  setError: (key, message) =>
    set((state) => ({
      errors: { ...state.errors, [key]: message },
    })),
  clearErrors: (key) =>
    set((state) => {
      const newErrors = { ...state.errors };
      delete newErrors[key];
      return { errors: newErrors };
    }),
}));

export default useQuizStore;
