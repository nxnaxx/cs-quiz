import { Meta, StoryObj } from '@storybook/react';
import QuizCard from './QuizCard';

const meta: Meta<typeof QuizCard> = {
  title: 'molecules/QuizCard',
  component: QuizCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Card1: Story = {
  args: {
    imgSrc: '/assets/images/javascript.png',
    topic: 'JavaScript',
    difficulty: '쉬움',
    quizType: '객관식',
    quizNum: 10,
  },
  render: (args) => (
    <div style={{ width: '320px' }}>
      <QuizCard {...args} />
    </div>
  ),
};

export const Card2: Story = {
  args: {
    imgSrc: '/assets/images/library.png',
    topic: '프레임워크 및 라이브러리',
    difficulty: '보통',
    quizType: 'OX 퀴즈',
    quizNum: 10,
  },
  render: (args) => (
    <div style={{ width: '320px' }}>
      <QuizCard {...args} />
    </div>
  ),
};
