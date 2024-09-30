import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import useOptionStore from '@store/useOptionStore';
import useQuizStore from '@store/useQuizStore';
import {
  sampleMultipleResult,
  sampleTrueFalseResult,
  sampleFillBlankResult,
} from '@data/dummyData';
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
    const { setOptionValues } = useOptionStore();
    const { setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleMultipleResult);
      setOptionValues('topic', 'JavaScript');
      setOptionValues('difficulty', '쉬움');
      setOptionValues('quizType', '객관식');
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
    const { setOptionValues } = useOptionStore();
    const { setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleMultipleResult);
      setOptionValues('topic', 'JavaScript');
      setOptionValues('difficulty', '보통');
      setOptionValues('quizType', 'OX 퀴즈');
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
    const { setOptionValues } = useOptionStore();
    const { setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleFillBlankResult);
      setOptionValues('topic', 'JavaScript');
      setOptionValues('difficulty', '어려움');
      setOptionValues('quizType', '빈칸 맞추기');
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
