import { useEffect } from 'react';
import styled from '@emotion/styled';
import { topics } from '@data/topics';
import MainTemplate from '@templates/MainTemplate';
import TopicCard from '@molecules/card/TopicCard';
import OptionModal from '@organisms/modal/OptionModal';
import useOptionStore, { OptionStore } from '@store/useOptionStore';
import usePreventScroll from '@hooks/usePreventScroll';
import { Topic } from 'src/types/quizTypes';

const TopicTitle = styled.h2`
  margin-bottom: 48px;
  text-align: center;
`;

const TopicList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

export default function Topics() {
  const { optionValues, setOptionValues, resetOptions } = useOptionStore();
  const { isOpened, useOpenRef, handleToggleOpen } = usePreventScroll(false);

  useEffect(() => {
    if (!isOpened) resetOptions();
  }, [isOpened]);

  const handleCardClick = <K extends keyof OptionStore['optionValues']>(
    value: OptionStore['optionValues'][K],
  ) => {
    setOptionValues('topic', value as Topic);
    handleToggleOpen();
  };

  return (
    <MainTemplate>
      <TopicTitle>주제 선택</TopicTitle>
      <TopicList>
        {topics.map((props) => (
          <TopicCard
            key={props.title}
            {...props}
            onCardClick={() => handleCardClick(props.title)}
          />
        ))}
      </TopicList>
      {isOpened && (
        <OptionModal
          ref={useOpenRef}
          topic={optionValues['topic']!}
          onCloseModal={handleToggleOpen}
        />
      )}
    </MainTemplate>
  );
}
