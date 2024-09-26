import styled from '@emotion/styled';
import { topics } from '@data/topics';
import MainTemplate from '@templates/MainTemplate';
import TopicCard from '@molecules/card/TopicCard';

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
  return (
    <MainTemplate>
      <TopicTitle>주제 선택</TopicTitle>
      <TopicList>
        {topics.map((props) => (
          <TopicCard key={props.title} {...props} />
        ))}
      </TopicList>
    </MainTemplate>
  );
}
