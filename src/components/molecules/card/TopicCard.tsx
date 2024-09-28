import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface TopicCardProps {
  imgSrc: string;
  title: string;
  description: string;
  onCardClick: () => void;
}

const CardContainer = styled(motion.div)`
  width: 100%;
  border-radius: 16px;
  background-color: var(--white);
  box-shadow: var(--shadow1);
  cursor: pointer;

  &:hover {
    box-shadow: var(--color-shadow1);
  }
`;

const Thumbnail = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 66.67%;
  border-radius: 16px 16px 0 0;

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
  padding: 16px 20px;
`;

const CardTitle = styled.p`
  margin-bottom: 8px;
  font-size: var(--fs-l);
  font-weight: var(--fw-sb);
`;

const CardDescription = styled.p`
  display: -webkit-box;
  overflow: hidden;
  color: var(--dark-300);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
`;

export default function TopicCard({ imgSrc, title, description, onCardClick }: TopicCardProps) {
  return (
    <CardContainer
      whileHover={{ scale: [null, 1.05, 1.05] }}
      transition={{ duration: 0.3 }}
      onClick={onCardClick}
    >
      <Thumbnail>
        <img src={imgSrc} alt={title} />
      </Thumbnail>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
}
