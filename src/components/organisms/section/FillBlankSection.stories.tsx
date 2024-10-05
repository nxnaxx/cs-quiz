import { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import useQuizStore from '@store/useQuizStore';
import { sampleFillBlankData } from 'src/__mocks__/quizMockData';
import FillBlankSection from './FillBlankSection';

const meta: Meta<typeof FillBlankSection> = {
  title: 'organisms/FillBlankSection',
  component: FillBlankSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FillBlankQuiz: Story = {
  render: () => {
    const { quizData, currentQuizNum, setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleFillBlankData);
    }, []);

    return (
      <>
        {quizData && (
          <FillBlankSection
            currentQuizNum={currentQuizNum}
            totalQuizNum={quizData.length}
            question={quizData[currentQuizNum - 1].question}
          />
        )}
      </>
    );
  },
};
