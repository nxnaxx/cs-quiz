import { create } from 'zustand';

export interface QuizStore {
  quizData:
    | {
        question: string;
        options: string[];
        answer: string;
        userAnswer: string | undefined;
        commentary: string;
      }[]
    | undefined;
  setQuizData: (newData: QuizStore['quizData']) => void;
  setUserAnswer: (question: string, userAnswer: string) => void;
  resetQuizData: () => void;
  submitData: () => void;
}

const useQuizStore = create<QuizStore>((set) => ({
  quizData: undefined,
  setQuizData: (newData) => set({ quizData: newData }),
  setUserAnswer: (question: string, userAnswer: string) =>
    set((state) => ({
      quizData: state.quizData?.map((quiz) =>
        quiz.question === question ? { ...quiz, userAnswer } : quiz,
      ),
    })),
  resetQuizData: () => set({ quizData: undefined }),
  submitData: () => {
    const { quizData } = useQuizStore.getState();
    console.log('submit', quizData);
  },
}));

export default useQuizStore;
