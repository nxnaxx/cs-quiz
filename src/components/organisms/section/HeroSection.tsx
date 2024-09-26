import styled from '@emotion/styled';
import { inner } from '../../../styles/mixins';
import FilledButton from '../../atoms/button/FilledButton';

const HeroContainer = styled.section`
  width: 100%;
  background-color: var(--background);
`;

const HeroWrapper = styled.div`
  ${inner}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 40px 520px 40px;
`;

const HeroContent = styled.div`
  flex: 3;
`;

const HeroTitle = styled.p`
  margin-bottom: 40px;
  color: var(--primary);
  font-size: 4rem;
  font-weight: var(--fw-eb);
  line-height: 1.4;
  text-wrap: balance;
`;

const TitleStrong = styled.span`
  color: var(--secondary-dark);
`;

const HeroDescription = styled.p`
  margin-bottom: 40px;
  color: var(--dark-300);
  font-size: var(--fs-xl);
  text-wrap: balance;
`;

const HeroImage = styled.div`
  flex: 2;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function HeroSection() {
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
          <FilledButton size="large">시작하기</FilledButton>
        </HeroContent>
        <HeroImage>
          <img src="src/assets/images/hero-img.png" alt="hero image" />
        </HeroImage>
      </HeroWrapper>
    </HeroContainer>
  );
}
