import styled from '@emotion/styled';
import MainTemplate from '../components/templates/MainTemplate';
import TopicCard from '../components/molecules/card/TopicCard';

const TopicTitle = styled.h2`
  margin-bottom: 48px;
  text-align: center;
`;

const TopicList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
`;

const topics = [
  {
    title: 'HTML/CSS',
    description: '웹 페이지의 구조와 콘텐츠를 정의하고 디자인과 스타일을 지정하는 기술',
    imgSrc: 'src/assets/images/html-css.png',
  },
  {
    title: 'JavaScript',
    description: '웹 브라우저를 위한 객체 기반의 스크립트 프로그래밍 언어',
    imgSrc: 'src/assets/images/javascript.png',
  },
  {
    title: '프레임워크 및 라이브러리',
    description: '기본 구조와 가이드라인을 제공하여 개발을 더 쉽게 해주는 도구',
    imgSrc: 'src/assets/images/library.png',
  },
  {
    title: '네트워크',
    description: '여러 장치들이 데이터를 서로 주고받기 위해 연결된 시스템',
    imgSrc: 'src/assets/images/network.png',
  },
  {
    title: '운영체제',
    description: '사용자와 프로그램 간의 상호작용을 제어하는 소프트웨어 시스템',
    imgSrc: 'src/assets/images/os.png',
  },
  {
    title: '알고리즘 및 자료구조',
    description: '데이터를 효율적으로 저장하고 관리하기 위한 구조적 방식',
    imgSrc: 'src/assets/images/algorithm.png',
  },
  {
    title: '소프트웨어 아키텍처',
    description: '시스템의 구조와 구성 요소들 간의 상호작용을 정의하는 설계',
    imgSrc: 'src/assets/images/architecture.png',
  },
  {
    title: '클라우드와 배포',
    description: '인터넷을 통해 애플리케이션을 실행할 수 있는 원격 서버 기반의 서비스',
    imgSrc: 'src/assets/images/cloud.png',
  },
];

export default function Topic() {
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
