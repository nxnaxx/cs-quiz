import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { QuizCardProps } from '@data/quizData';
import DifficultyBar from '@molecules/bar/DifficultyBar';
import Tag from '@atoms/tag/Tag';
import IconFilledButton from '@atoms/button/IconFilledButton';
import useQuizStore from '@store/useQuizStore';
import useOptionStore from '@store/useOptionStore';
import { Difficulty, QuizNum, QuizType, Topic } from 'src/types/quizTypes';

const CardContainer = styled(motion.div)`
  width: 100%;
  min-width: 240px;
  padding: 24px;
  border: 8px solid var(--primary-pale);
  border-radius: 16px;
  background-color: var(--white);
  cursor: pointer;
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
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardTitle = styled.p`
  font-size: var(--fs-xl);
  font-weight: var(--fw-sb);
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export default function QuizCard({ imgSrc, topic, difficulty, quizType, quizNum }: QuizCardProps) {
  const { setOptionValues } = useOptionStore();
  const { resetQuizData } = useQuizStore();
  const navigate = useNavigate();

  const handleCardClick = () => {
    const options: {
      topic: Topic;
      difficulty: Difficulty;
      quizType: QuizType;
      quizNum: QuizNum;
    } = {
      topic,
      difficulty,
      quizType,
      quizNum,
    };

    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined) {
        setOptionValues(key as keyof typeof options, value);
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
            <Tag>{quizType}</Tag>
            <Tag variant="secondary">{`${quizNum}문제`}</Tag>
          </TagWrapper>
          <IconFilledButton>
            <FontAwesomeIcon icon={faArrowRight} />
          </IconFilledButton>
        </CardBottom>
      </CardContent>
    </CardContainer>
  );
}
