import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { mobile } from '@styles/responsive';
import { center } from '@styles/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import AngleArrowSVG from '@assets/icons/angle-arrow.svg?react';
import useQuizStore from '@store/useQuizStore';
import useOptionStore from '@store/useOptionStore';
import DifficultyBar from '@molecules/bar/DifficultyBar';
import CircularProgress from '@molecules/bar/CircularProgress';
import QuizResultItem from '@molecules/item/QuizResultItem';
import FilledButton from '@atoms/button/FilledButton';

const ResultContainer = styled.div`
  width: 720px;
  margin: auto;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--white);
  box-shadow: var(--shadow1);

  @media (max-width: ${mobile}) {
    width: calc(100% - 24px * 2);
    margin: 0 24px 64px 24px;
    padding: 20px 20px 32px 20px;
    border-radius: 16px;
  }
`;

const ResultTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: ${mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 24px;
  }
`;

const TopicWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-l);
  font-weight: var(--fw-m);
`;

const AngleArrowIcon = styled(AngleArrowSVG)`
  width: 24px;
  height: 24px;
  color: var(--secondary-dark);
`;

const DifficultyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--dark-300);
`;

const QuizScoreWrapper = styled.div`
  display: flex;
  margin-bottom: 48px;

  @media (max-width: ${mobile}) {
    margin-bottom: 32px;
  }
`;

const Score = styled.div`
  ${center}
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const CheckIcon = styled(FontAwesomeIcon)`
  color: var(--green);
  font-size: 40px;

  @media (max-width: ${mobile}) {
    font-size: 32px;
  }
`;

const XMarkIcon = styled(FontAwesomeIcon)`
  color: var(--red);
  font-size: 40px;

  @media (max-width: ${mobile}) {
    font-size: 32px;
  }
`;

const ScoreNum = styled.p`
  font-size: var(--fs-l);
  font-weight: var(--fw-m);
`;

const ScoreLabel = styled.p`
  color: var(--dark-300);
`;

const ResultList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: ${mobile}) {
    margin-bottom: 32px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function QuizResultSection() {
  const { quizData } = useQuizStore();
  const { optionValues } = useOptionStore();
  const { topic, difficulty } = optionValues;
  const navigate = useNavigate();

  const correctQuizNum = useMemo(() => {
    if (!quizData) return 0;
    return quizData.filter((quiz) => {
      if (quiz.type === '빈칸 맞추기') {
        return quiz.answer.includes(quiz.userAnswer as string);
      }
      return quiz.answer === quiz.userAnswer;
    }).length;
  }, [quizData]);

  const progressPercentage = useMemo(() => {
    if (!quizData) return 0;
    return Math.round((correctQuizNum / quizData.length) * 100);
  }, [correctQuizNum, quizData]);

  const handleGoToMain = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const renderQuizResults = useMemo(() => {
    if (!quizData) return null;
    return quizData.map((quiz, idx) => (
      <QuizResultItem
        key={quiz.question}
        quizType={quiz.type}
        questionNum={idx + 1}
        question={quiz.question}
        answer={quiz.answer}
        userAnswer={quiz.userAnswer}
        commentary={quiz.commentary}
      />
    ));
  }, [quizData]);

  if (!quizData) return null;

  return (
    <ResultContainer>
      <ResultTop>
        <TopicWrapper>
          <AngleArrowIcon />
          {topic}
        </TopicWrapper>
        <DifficultyWrapper>
          난이도
          <DifficultyBar difficulty={difficulty} />
        </DifficultyWrapper>
      </ResultTop>
      <QuizScoreWrapper>
        <Score>
          <CircularProgress progress={progressPercentage} />
        </Score>
        <Score>
          <CheckIcon icon={faCircleCheck} />
          <ScoreNum>{correctQuizNum}</ScoreNum>
          <ScoreLabel>맞은 문제</ScoreLabel>
        </Score>
        <Score>
          <XMarkIcon icon={faCircleXmark} />
          <ScoreNum>{quizData ? quizData.length - correctQuizNum : 0}</ScoreNum>
          <ScoreLabel>틀린 문제</ScoreLabel>
        </Score>
      </QuizScoreWrapper>
      <ResultList>{renderQuizResults}</ResultList>
      <ButtonWrapper>
        <FilledButton onClick={handleGoToMain}>메인으로</FilledButton>
      </ButtonWrapper>
    </ResultContainer>
  );
}
