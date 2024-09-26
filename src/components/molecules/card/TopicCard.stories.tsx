import { Meta, StoryObj } from '@storybook/react';
import TopicCard from './TopicCard';

const meta: Meta<typeof TopicCard> = {
  title: 'molecules/TopicCard',
  component: TopicCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Card1: Story = {
  args: {
    imgSrc: 'src/assets/images/html-css.png',
    title: 'HTML/CSS',
    description: '웹 페이지의 구조와 콘텐츠를 정의하고 디자인과 스타일을 지정하는 기술',
  },
  render: (args) => (
    <div style={{ width: '282px' }}>
      <TopicCard {...args} />
    </div>
  ),
};

export const Card2: Story = {
  args: {
    imgSrc: 'src/assets/images/cloud.png',
    title: '클라우드와 배포',
    description: '인터넷을 통해 애플리케이션을 실행할 수 있는 원격 서버 기반의 서비스',
  },
  render: (args) => (
    <div style={{ width: '282px' }}>
      <TopicCard {...args} />
    </div>
  ),
};
