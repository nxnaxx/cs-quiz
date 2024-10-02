import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { mobile, tabletL, tabletS } from '@styles/responsive';
import { inner } from '@styles/mixins';
import FilledButton from '@atoms/button/FilledButton';
import TryItNow from './TryItNow';

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  background-color: var(--background);

  @media (max-width: ${tabletS}) {
    padding-bottom: 120px;
  }

  @media (max-width: ${mobile}) {
    padding-bottom: 80px;
  }
`;

const HeroWrapper = styled.div`
  ${inner}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 40px 520px 40px;

  @media (max-width: ${tabletL}) {
    gap: 40px;
    padding: 104px 96px 480px 96px;
  }

  @media (max-width: ${tabletS}) {
    flex-direction: column;
    padding-bottom: 80px;
  }

  @media (max-width: ${mobile}) {
    gap: 24px;
    padding: 48px 24px 40px 24px;
  }
`;

const HeroContent = styled.div`
  flex: 3;

  @media (max-width: ${tabletL}) {
    flex: 0.5;
  }

  @media (max-width: ${tabletS}) {
    order: 1;
    margin-bottom: 40px;
  }
`;

const HeroTitle = styled.p`
  margin-bottom: 40px;
  color: var(--primary);
  font-size: 4rem;
  font-weight: var(--fw-eb);
  line-height: 1.4;
  text-wrap: balance;

  @media (max-width: ${tabletL}) {
    margin-bottom: 24px;
    font-size: 3rem;
  }

  @media (max-width: ${tabletS}) {
    width: 89%;
    text-wrap: wrap;
  }

  @media (max-width: ${mobile}) {
    font-size: 2.2rem;
  }
`;

const TitleStrong = styled.span`
  color: var(--secondary-dark);
`;

const HeroDescription = styled.p`
  margin-bottom: 40px;
  color: var(--dark-300);
  font-size: var(--fs-xl);
  text-wrap: balance;

  @media (max-width: ${tabletL}) {
    margin-bottom: 32px;
    font-size: var(--fs-l);
    text-wrap: pretty;
  }

  @media (max-width: ${mobile}) {
    text-wrap: wrap;
  }
`;

const HeroImage = styled.div`
  flex: 2;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${tabletL}) {
    flex: 2.5;
    max-width: 328px;
  }

  @media (max-width: ${mobile}) {
    max-width: 75%;
  }
`;

export default function HeroSection() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/topics');
  };

  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroContent>
          <HeroTitle>
            LEVEL UP
            <br />
            YOUR <TitleStrong>CS SKILLS</TitleStrong> WITH QUIZZES
          </HeroTitle>
          <HeroDescription>
            CSQuizHub에서 재미있는 퀴즈를 통해 CS 지식을 쉽게 배우고 즐겨보세요! 직접 정한 난이도와
            문제 유형으로 문제를 풀며 CS 개념을 자연스럽게 익히고, 새로운 스킬을 쌓아보세요.
          </HeroDescription>
          <FilledButton size="large" onClick={handleStartClick}>
            시작하기
          </FilledButton>
        </HeroContent>
        <HeroImage>
          <img src="/assets/images/hero-img.png" alt="hero image" />
        </HeroImage>
      </HeroWrapper>
      <TryItNow />
    </HeroContainer>
  );
}
