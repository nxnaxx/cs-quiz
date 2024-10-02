import styled from '@emotion/styled';
import { mobile, tabletL, tabletS } from '@styles/responsive';
import { center, inner } from '@styles/mixins';

const PlayContainer = styled.section`
  width: 100%;
  background-color: var(--white);
`;

const PlayWrapper = styled.div`
  ${inner}
  padding: 320px 40px 160px 40px;

  @media (max-width: ${tabletL}) {
    padding: 280px 96px 144px 96px;
  }

  @media (max-width: ${tabletS}) {
    padding-top: 104px;
  }

  @media (max-width: ${mobile}) {
    padding: 48px 24px 40px 24px;
  }
`;

const Title = styled.h2`
  display: inline-block;
  position: relative;
  margin-bottom: 48px;

  &::before {
    content: '';
    position: absolute;
    right: -4px;
    bottom: -2px;
    width: 56px;
    height: 4px;
    border-radius: 16px;
    background-color: var(--primary);
  }

  @media (max-width: ${tabletL}) {
    &::before {
      width: 50px;
    }
  }
`;

const StepWrapper = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: ${tabletL}) {
    gap: 24px;
  }

  @media (max-width: ${mobile}) {
    flex-direction: column;
  }
`;

const StepContainer = styled.div`
  ${center}
  flex-direction: column;
  flex: 1;
  padding: 16px 24px;

  @media (max-width: ${tabletL}) {
    padding: 16px 0;
  }
`;

const StepImage = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 24px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${tabletL}) {
    width: 144px;
    height: 144px;
  }
`;

const StepTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: var(--fw-m);
`;

const StepDescription = styled.p`
  color: var(--dark-500);
  font-size: var(--fs-l);

  @media (max-width: ${tabletL}) {
    font-size: var(--fs-base);
  }

  @media (max-width: ${tabletS}) {
    padding: 0 16px;
    text-align: center;
  }
`;

export default function HowToPlay() {
  return (
    <PlayContainer>
      <PlayWrapper>
        <Title>플레이 방법</Title>
        <StepWrapper>
          <StepContainer>
            <StepImage>
              <img src="/assets/images/cursor.png" alt="step 1" />
            </StepImage>
            <StepTitle>퀴즈 주제 선택</StepTitle>
            <StepDescription>CS 지식에 관한 다양한 주제가 있어요</StepDescription>
          </StepContainer>
          <StepContainer>
            <StepImage>
              <img src="/assets/images/rank.png" alt="step 1" />
            </StepImage>
            <StepTitle>난이도 및 옵션 선택</StepTitle>
            <StepDescription>난이도와 문제 유형을 선택하세요</StepDescription>
          </StepContainer>
          <StepContainer>
            <StepImage>
              <img src="/assets/images/target.png" alt="step 1" />
            </StepImage>
            <StepTitle>퀴즈 학습하기</StepTitle>
            <StepDescription>퀴즈를 풀며 CS 스킬을 향상시키세요</StepDescription>
          </StepContainer>
        </StepWrapper>
      </PlayWrapper>
    </PlayContainer>
  );
}
