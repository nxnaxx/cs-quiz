import { create } from 'zustand';
import { Difficulty, QuizNum, QuizType } from 'src/types/quizTypes';

export interface OptionStore {
  optionValues: {
    difficulty: Difficulty;
    quizNum: QuizNum;
    quizType: QuizType;
  };
  setOptionValues: <K extends keyof OptionStore['optionValues']>(
    key: K,
    value: OptionStore['optionValues'][K],
  ) => void;
  submitData: () => void;
}

const useOptionStore = create<OptionStore>((set) => ({
  optionValues: {
    difficulty: '쉬움',
    quizNum: 10,
    quizType: '객관식',
  },
  setOptionValues: (key, value) =>
    set((state) => ({
      optionValues: {
        ...state.optionValues,
        [key]: value,
      },
    })),
  submitData: () => {
    const { optionValues } = useOptionStore.getState();
    console.log('submit', optionValues);
  },
}));

export default useOptionStore;
