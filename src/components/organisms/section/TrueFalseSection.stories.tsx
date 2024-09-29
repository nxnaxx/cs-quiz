import { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import useQuizStore, { TrueFalse } from '@store/useQuizStore';
import { sampleTrueFalseData } from '@data/dummyData';
import TrueFalseSection from './TrueFalseSection';

const meta: Meta<typeof TrueFalseSection> = {
  title: 'organisms/TrueFalseSection',
  component: TrueFalseSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TrueOrFalse: Story = {
  render: () => {
    const { quizData, currentQuizNum, setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleTrueFalseData);
    }, []);

    return (
      <>
        {quizData && (
          <TrueFalseSection
            currentQuizNum={currentQuizNum}
            totalQuizNum={quizData.length}
            question={(quizData[currentQuizNum - 1] as TrueFalse).question}
          />
        )}
      </>
    );
  },
};
