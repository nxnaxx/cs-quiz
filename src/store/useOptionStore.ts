import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { QuizOptions } from 'src/types/quizTypes';

export interface OptionStore {
  optionValues: QuizOptions;
  setOptionValue: <K extends keyof QuizOptions>(
    key: K,
    value: OptionStore['optionValues'][K],
  ) => void;
  resetOptions: () => void;
}

const initialOptionValues: QuizOptions = {
  topic: 'JavaScript',
  difficulty: '쉬움',
  quizNum: 10,
  quizType: '객관식',
};

const useOptionStore = create<OptionStore>()(
  persist(
    (set) => ({
      optionValues: initialOptionValues,
      setOptionValue: (key, value) =>
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
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useOptionStore;
