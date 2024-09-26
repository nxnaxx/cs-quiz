import styled from '@emotion/styled';
import { inner } from '../../../styles/mixins';
import QuizCard from '../../molecules/card/QuizCard';

const TryItContainer = styled.div`
  ${inner}
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, -30%);
  z-index: 1010;
  width: 100%;
  padding: 0 40px;

  &::before {
    content: '';
    position: absolute;
    bottom: -15%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -9999;
    width: 100%;
    height: 280px;
    border-radius: 40px;
    background-color: var(--primary-lighter);
  }
`;

const Title = styled.h2`
  display: inline-block;
  position: relative;
  margin-bottom: 64px;

  &::before {
    content: '';
    position: absolute;
    right: -4px;
    bottom: -2px;
    width: 104px;
    height: 4px;
    border-radius: 16px;
    background-color: var(--primary);
  }
`;

const CardList = styled.div`
  ${inner}
  display: flex;
  gap: 32px;
`;

export default function TryItNow() {
  return (
    <TryItContainer>
      <Title>지금 도전하기</Title>
      <CardList>
        <QuizCard
          imgSrc="src/assets/images/javascript.png"
          title="JavaScript"
          difficulty="easy"
          quizType="객관식"
          quizNums={10}
        />
        <QuizCard
          imgSrc="src/assets/images/library.png"
          title="프레임워크 및 라이브러리"
          difficulty="easy"
          quizType="OX 퀴즈"
          quizNums={10}
        />
        <QuizCard
          imgSrc="src/assets/images/algorithm.png"
          title="알고리즘"
          difficulty="normal"
          quizType="빈칸 맞추기"
          quizNums={10}
        />
      </CardList>
    </TryItContainer>
  );
}
