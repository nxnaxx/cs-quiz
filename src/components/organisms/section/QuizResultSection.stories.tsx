import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import useOptionStore from '@store/useOptionStore';
import useQuizStore from '@store/useQuizStore';
import {
  sampleFillBlankResult,
  sampleMultipleResult,
  sampleTrueFalseResult,
} from 'src/__mocks__/quizMockData';
import QuizResultSection from './QuizResultSection';
import Home from '@pages/Home';

const meta: Meta<typeof QuizResultSection> = {
  title: 'organisms/QuizResultSection',
  component: QuizResultSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MultipleResult: Story = {
  render: () => {
    const { setOptionValue } = useOptionStore();
    const { setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleMultipleResult);
      setOptionValue('topic', 'JavaScript');
      setOptionValue('difficulty', '쉬움');
      setOptionValue('quizType', '객관식');
    }, []);

    return (
      <BrowserRouter>
        <QuizResultSection />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  },
};

export const TrueFalseResult: Story = {
  render: () => {
    const { setOptionValue } = useOptionStore();
    const { setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleTrueFalseResult);
      setOptionValue('topic', 'JavaScript');
      setOptionValue('difficulty', '보통');
      setOptionValue('quizType', 'OX 퀴즈');
    }, []);

    return (
      <BrowserRouter>
        <QuizResultSection />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  },
};

export const FillBlankResult: Story = {
  render: () => {
    const { setOptionValue } = useOptionStore();
    const { setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleFillBlankResult);
      setOptionValue('topic', 'JavaScript');
      setOptionValue('difficulty', '어려움');
      setOptionValue('quizType', '빈칸 맞추기');
    }, []);

    return (
      <BrowserRouter>
        <QuizResultSection />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  },
};
