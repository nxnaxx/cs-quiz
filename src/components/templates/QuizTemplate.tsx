import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import useQuizStore from '@store/useQuizStore';
import LinearProgress from '@molecules/bar/LinearProgress';
import GhostButton from '@atoms/button/GhostButton';
import FilledButton from '@atoms/button/FilledButton';

export interface QuizTemplateProps {
  currentQuizNum: number;
  totalQuizNum: number;
  question: string;
  onNextClick?: () => void;
  children?: React.ReactNode;
}

const QuizContainer = styled.section`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--white);
  box-shadow: var(--shadow1);
`;

const QuizTop = styled.div`
  margin-bottom: 40px;
`;

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

const ValidationMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
  color: var(--red);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 40px;
`;

export default function QuizTemplate({
  currentQuizNum,
  totalQuizNum,
  question,
  onNextClick,
  children,
}: QuizTemplateProps) {
  const { quizData, setPrevQuiz, setNextQuiz, errors, setError } = useQuizStore();

  const handlePrevClick = () => {
    setPrevQuiz();
  };

  const handleNextClick = () => {
    if (
      quizData &&
      (quizData[currentQuizNum - 1].userAnswer !== null ||
        Array.isArray(quizData[currentQuizNum - 1].answer))
    ) {
      setNextQuiz();
    } else setError('userAnswer', '답변을 선택해주세요.');
  };

  return (
    <QuizContainer>
      <QuizTop>
        <LinearProgress currentSteps={currentQuizNum} totalSteps={totalQuizNum} />
        <QuestionNum>Q{currentQuizNum}</QuestionNum>
        <Question>{question}</Question>
      </QuizTop>
      {children}
      {errors.userAnswer && (
        <ValidationMessage>
          <FontAwesomeIcon icon={faCircleExclamation} />
          {errors.userAnswer}
        </ValidationMessage>
      )}
      <ButtonWrapper>
        <GhostButton disabled={currentQuizNum === 1} onClick={handlePrevClick}>
          이전
        </GhostButton>
        {currentQuizNum === totalQuizNum ? (
          <FilledButton>제출</FilledButton>
        ) : (
          <FilledButton onClick={onNextClick || handleNextClick}>다음</FilledButton>
        )}
      </ButtonWrapper>
    </QuizContainer>
  );
}
