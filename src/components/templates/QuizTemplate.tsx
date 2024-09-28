import styled from '@emotion/styled';
import useQuizStore from '@store/useQuizStore';
import LinearProgress from '@molecules/bar/LinearProgress';
import GhostButton from '@atoms/button/GhostButton';
import FilledButton from '@atoms/button/FilledButton';

export interface QuizTemplateProps {
  currentQuizNum: number;
  totalQuizNum: number;
  question: string;
  children?: React.ReactNode;
}

const QuizContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 800px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--white);
  box-shadow: var(--shadow1);
`;

const QuizTop = styled.div``;

const QuestionNum = styled.p`
  margin-bottom: 4px;
  color: var(--primary);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-sb);
`;

const Question = styled.p`
  font-size: var(--fs-xl);
  font-weight: var(--fw-m);
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin: auto;
`;

export default function QuizTemplate({
  currentQuizNum,
  totalQuizNum,
  question,
  children,
}: QuizTemplateProps) {
  const { setPrevQuiz, setNextQuiz } = useQuizStore();

  const handlePrevClick = () => {
    setPrevQuiz();
  };

  const handleNextClick = () => {
    setNextQuiz();
  };

  return (
    <>
      <QuizContainer>
        <QuizTop>
          <LinearProgress currentSteps={currentQuizNum} totalSteps={totalQuizNum} />
          <QuestionNum>Q{currentQuizNum}</QuestionNum>
          <Question>{question}</Question>
        </QuizTop>
        {children}
        <ButtonWrapper>
          <GhostButton disabled={currentQuizNum === 1} onClick={handlePrevClick}>
            이전
          </GhostButton>
          {currentQuizNum === totalQuizNum ? (
            <FilledButton>제출</FilledButton>
          ) : (
            <FilledButton onClick={handleNextClick}>다음</FilledButton>
          )}
        </ButtonWrapper>
      </QuizContainer>
    </>
  );
}
