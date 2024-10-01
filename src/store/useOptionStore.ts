import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { Difficulty, QuizNum, QuizType, Topic } from 'src/types/quizTypes';

export interface OptionStore {
  optionValues: {
    topic: Topic | undefined;
    difficulty: Difficulty;
    quizNum: QuizNum;
    quizType: QuizType;
  };
  setOptionValues: <K extends keyof OptionStore['optionValues']>(
    key: K,
    value: OptionStore['optionValues'][K],
  ) => void;
  resetOptions: () => void;
}

const initialOptionValues: OptionStore['optionValues'] = {
  topic: undefined,
  difficulty: '쉬움',
  quizNum: 10,
  quizType: '객관식',
};

const useOptionStore = create<OptionStore>()(
  persist<OptionStore>(
    (set) => ({
      optionValues: initialOptionValues,
      setOptionValues: (key, value) =>
        set((state) => ({
          optionValues: {
            ...state.optionValues,
            [key]: value,
          },
        })),
      resetOptions: () => set({ optionValues: initialOptionValues }),
    }),
    {
      name: 'options-store',
      getStorage: () => sessionStorage,
    } as PersistOptions<OptionStore>,
  ),
);

export default useOptionStore;
