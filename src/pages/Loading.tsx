import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { center, cubeSlide, dotsLoad } from '@styles/mixins';
import useOptionStore from '@store/useOptionStore';
import useQuizStore from '@store/useQuizStore';
import fetchQuiz from '@services/openAIService';

const LoadingContainer = styled.div`
  ${center}
  flex-direction: column;
  gap: 8px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--primary-pale);
  --size: 40px;
`;

const Isometric = styled.div`
  position: relative;
  transform: rotateX(55deg) rotateZ(-45deg) translate(calc(var(--size) * -2), 0);
  margin-bottom: calc(3 * var(--size));
`;

const Box = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: var(--secondary-pale);
  animation: ${cubeSlide} 0.9s cubic-bezier(0.65, 0.53, 0.59, 0.93) infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &::before {
    top: 50%;
    right: 100%;
    transform: skew(0deg, -45deg);
    background: var(--primary);
  }
  &::after {
    transform: skew(-45deg, 0deg);
    top: 100%;
    right: 50%;
    background: var(--secondary);
  }
  &:nth-of-type(1) {
    --sx: 50%;
    --sy: -50%;
    --ex: 150%;
    --ey: 50%;
  }
  &:nth-of-type(2) {
    --sx: -50%;
    --sy: -50%;
    --ex: 50%;
    --ey: -50%;
  }
  &:nth-of-type(3) {
    --sx: 150%;
    --sy: 50%;
    --ex: 50%;
    --ey: 50%;
  }
  &:nth-of-type(4) {
    --sx: 50%;
    --sy: 50%;
    --ex: -50%;
    --ey: -50%;
  }
`;

const LoadingText = styled.h2`
  color: var(--primary-dark);
`;

const Dots = styled.span`
  position: relative;
  color: transparent;

  &::before {
    content: '.';
    display: inline-block;
    position: absolute;
    bottom: -5px;
    margin-left: 2px;
    color: var(--primary-dark);
    animation: ${dotsLoad} 1.5s linear infinite;
  }
`;

export default function Loading() {
  const navigate = useNavigate();
  const { optionValues } = useOptionStore();
  const { setQuizData } = useQuizStore();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const quiz = await fetchQuiz(optionValues, signal);

        optionValues.quizType === '객관식'
          ? setQuizData(quiz['Multiple'])
          : optionValues.quizType === 'OX 퀴즈'
            ? setQuizData(quiz['TrueFalse'])
            : setQuizData(quiz['FillBlank']);

        navigate('/quiz', { state: { quizType: optionValues.quizType } });
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <LoadingContainer>
      <Isometric>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Isometric>
      <LoadingText>
        퀴즈 생성 중<Dots>...</Dots>
      </LoadingText>
    </LoadingContainer>
  );
}
