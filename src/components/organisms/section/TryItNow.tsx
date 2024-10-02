import styled from '@emotion/styled';
import { mobile, tabletL, tabletS } from '@styles/responsive';
import { inner } from '@styles/mixins';
import { quizCards } from '@data/quizData';
import QuizCard from '@molecules/card/QuizCard';

const TryItContainer = styled.div`
  ${inner}
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 18%);
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

  @media (max-width: ${tabletL}) {
    padding: 0 96px;

    &::before {
      width: calc(100% - 56 * 2px);
    }
  }

  @media (max-width: ${tabletS}) {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;

    &::before {
      display: none;
    }
  }

  @media (max-width: ${mobile}) {
    padding: 0 24px;
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

  @media (max-width: ${tabletL}) {
    &::before {
      width: 92px;
    }
  }

  @media (max-width: ${tabletS}) {
    width: fit-content;
  }

  @media (max-width: ${mobile}) {
    margin-bottom: 40px;
  }
`;

const CardList = styled.div`
  ${inner}
  display: flex;
  gap: 32px;

  @media (max-width: ${tabletL}) {
    gap: 24px;
  }

  @media (max-width: ${tabletS}) {
    flex-direction: column;
    width: 100%;
  }
`;

export default function TryItNow() {
  return (
    <TryItContainer>
      <Title>지금 도전하기</Title>
      <CardList>
        {quizCards.map((props) => (
          <QuizCard key={props.topic} {...props} />
        ))}
      </CardList>
    </TryItContainer>
  );
}
