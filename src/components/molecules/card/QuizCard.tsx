import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { mobile, tabletL, tabletS } from '@styles/responsive';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { QuizCardProps } from '@data/quizData';
import DifficultyBar from '@molecules/bar/DifficultyBar';
import Tag from '@atoms/tag/Tag';
import IconFilledButton from '@atoms/button/IconFilledButton';
import useQuizStore from '@store/useQuizStore';
import useOptionStore from '@store/useOptionStore';
import { QuizOptions } from 'src/types/quizTypes';

const CardContainer = styled(motion.div)`
  width: 100%;
  min-width: 240px;
  padding: 24px;
  border: 8px solid var(--primary-pale);
  border-radius: 16px;
  background-color: var(--white);
  cursor: pointer;

  @media (max-width: ${tabletL}) {
    padding: 16px;
  }

  @media (max-width: ${tabletS}) {
    display: flex;
    gap: 24px;
  }

  @media (max-width: ${mobile}) {
    display: block;
  }
`;

const StepImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  margin-bottom: 24px;
  padding-top: 66.67%;
  border-radius: 16px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${tabletS}) {
    flex: 1;
    margin-bottom: 0;
    padding-top: 33.33%;
  }

  @media (max-width: ${mobile}) {
    margin-bottom: 24px;
    padding-top: 66.67%;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${tabletS}) {
    flex: 1.2;
    gap: 16px;
    padding: 16px 4px 8px 0;
  }

  @media (max-width: ${mobile}) {
    padding: 0;
  }
`;

const CardTitle = styled.p`
  font-size: var(--fs-xl);
  font-weight: var(--fw-sb);

  @media (max-width: ${tabletL}) {
    gap: 12px;
  }
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${tabletS}) {
    margin-top: auto;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${tabletL}) {
    gap: 12px;
  }
`;

export default function QuizCard({ imgSrc, topic, difficulty, quizType, quizNum }: QuizCardProps) {
  const { setOptionValue } = useOptionStore();
  const { resetQuizData } = useQuizStore();
  const navigate = useNavigate();

  const handleCardClick = () => {
    const options: QuizOptions = {
      topic,
      difficulty,
      quizType,
      quizNum,
    };

    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined) {
        setOptionValue(key as keyof typeof options, value);
      }
    });

    resetQuizData();
    navigate('/loading');
  };

  return (
    <CardContainer
      whileHover={{ scale: [null, 1.05, 1.05] }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
    >
      <StepImage>
        <img src={imgSrc} alt={topic} />
      </StepImage>
      <CardContent>
        <DifficultyBar difficulty={difficulty} />
        <CardTitle>{topic}</CardTitle>
        <CardBottom>
          <TagWrapper>
            <Tag size="small">{quizType}</Tag>
            <Tag size="small" variant="secondary">{`${quizNum}문제`}</Tag>
          </TagWrapper>
          <IconFilledButton>
            <FontAwesomeIcon icon={faArrowRight} />
          </IconFilledButton>
        </CardBottom>
      </CardContent>
    </CardContainer>
  );
}
