import { create } from 'zustand';
import { Difficulty, QuizNum, QuizType, Topic } from 'src/types/quizTypes';

export interface OptionStore {
  optionValues: {
    topic?: Topic;
    difficulty: Difficulty;
    quizNum: QuizNum;
    quizType: QuizType;
  };
  setOptionValues: <K extends keyof OptionStore['optionValues']>(
    key: K,
    value: OptionStore['optionValues'][K],
  ) => void;
  resetOptions: () => void;
  submitData: () => void;
}

const initialOptionValues: OptionStore['optionValues'] = {
  topic: undefined,
  difficulty: '쉬움',
  quizNum: 10,
  quizType: '객관식',
};

const useOptionStore = create<OptionStore>((set) => ({
  optionValues: initialOptionValues,
  setOptionValues: (key, value) =>
    set((state) => ({
      optionValues: {
        ...state.optionValues,
        [key]: value,
      },
    })),
  resetOptions: () => set({ optionValues: initialOptionValues }),
  submitData: () => {
    const { optionValues } = useOptionStore.getState();
    console.log('submit', optionValues);
  },
}));

export default useOptionStore;
