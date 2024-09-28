import { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import useQuizStore, { Multiple } from '@store/useQuizStore';
import MultipleSection from './MultipleSection';
import { sampleMultipleData } from '@data/dummyData';

const meta: Meta<typeof MultipleSection> = {
  title: 'organisms/MultipleSection',
  component: MultipleSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Muliple: Story = {
  render: () => {
    const { quizData, currentQuizNum, setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleMultipleData);
    }, []);

    return (
      <>
        {quizData && (
          <MultipleSection
            currentQuizNum={currentQuizNum}
            totalQuizNum={quizData.length}
            question={(quizData[currentQuizNum - 1] as Multiple).question}
            options={(quizData[currentQuizNum - 1] as Multiple).options}
          />
        )}
      </>
    );
  },
};
