import { ChangeEvent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import QuizTemplate, { QuizTemplateProps } from '@templates/QuizTemplate';
import useQuizStore from '@store/useQuizStore';

interface FillBlankSectionProps extends QuizTemplateProps {}

const AnswerInput = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px;
  border: 1px solid var(--dark-100);
  border-radius: 8px;
  resize: none;

  &:focus {
    outline-color: var(--primary);
  }
`;

export default function FillBlankSection({
  currentQuizNum,
  totalQuizNum,
  question,
}: FillBlankSectionProps) {
  const { quizData, setUserAnswer, setNextQuiz } = useQuizStore();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue((quizData?.[currentQuizNum - 1]?.userAnswer as string) || '');
  }, [currentQuizNum, quizData]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleNextClick = () => {
    setUserAnswer(currentQuizNum - 1, inputValue.trim());
    setNextQuiz();
    setInputValue('');
  };

  return (
    <QuizTemplate
      currentQuizNum={currentQuizNum}
      totalQuizNum={totalQuizNum}
      question={question}
      onNextClick={handleNextClick}
    >
      <AnswerInput value={inputValue} onChange={handleInputChange}></AnswerInput>
    </QuizTemplate>
  );
}
