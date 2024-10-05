import { Meta, StoryObj } from '@storybook/react';
import QuizResultItem from './QuizResultItem';

const meta: Meta<typeof QuizResultItem> = {
  title: 'molecules/QuizResultItem',
  component: QuizResultItem,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CorrectMultiple: Story = {
  args: {
    quizType: '객관식',
    questionNum: 1,
    question: 'JavaScript에서 변수를 선언할 때 사용하는 키워드는 무엇인가요?',
    answer: 'var, let, const 모두',
    userAnswer: 'var, let, const 모두',
    commentary: 'JavaScript에서 변수를 선언할 때 var, let, const 키워드를 사용할 수 있습니다.',
  },
  render: (args) => (
    <div style={{ width: '640px' }}>
      <QuizResultItem {...args} />
    </div>
  ),
};

export const IncorrectMultiple: Story = {
  args: {
    quizType: '객관식',
    questionNum: 1,
    question: 'JavaScript에서 변수를 선언할 때 사용하는 키워드는 무엇인가요?',
    answer: 'var, let, const 모두',
    userAnswer: 'var',
    commentary: 'JavaScript에서 변수를 선언할 때 var, let, const 키워드를 사용할 수 있습니다.',
  },
  render: (args) => (
    <div style={{ width: '640px' }}>
      <QuizResultItem {...args} />
    </div>
  ),
};

export const CorrectTrueFalse: Story = {
  args: {
    quizType: 'OX 퀴즈',
    questionNum: 1,
    question: 'JavaScript는 웹 페이지의 레이아웃을 담당하는 스타일 시트 언어이다.',
    answer: false,
    userAnswer: false,
    commentary: 'JavaScript는 웹 페이지의 동적인 요소를 다루는 프로그래밍 언어입니다.',
  },
  render: (args) => (
    <div style={{ width: '640px' }}>
      <QuizResultItem {...args} />
    </div>
  ),
};

export const IncorrectTrueFalse: Story = {
  args: {
    quizType: 'OX 퀴즈',
    questionNum: 1,
    question: 'JavaScript는 웹 페이지의 레이아웃을 담당하는 스타일 시트 언어이다.',
    answer: false,
    userAnswer: true,
    commentary: 'JavaScript는 웹 페이지의 동적인 요소를 다루는 프로그래밍 언어입니다.',
  },
  render: (args) => (
    <div style={{ width: '640px' }}>
      <QuizResultItem {...args} />
    </div>
  ),
};

export const CorrectFillBlank: Story = {
  args: {
    quizType: '빈칸 맞추기',
    questionNum: 1,
    question: '다음 중 JavaScript 함수 외부에서 정의된 변수를 참조하는 개념은 _____이다.',
    answer: ['클로저', 'closure'],
    userAnswer: 'closure',
    commentary:
      '클로저는 JavaScript 함수 외부에서 정의된 변수들에 대한 참조를 유지하는 개념으로, 함수가 변수를 기억하여 사용하는 메커니즘을 가리킨다.',
  },
  render: (args) => (
    <div style={{ width: '640px' }}>
      <QuizResultItem {...args} />
    </div>
  ),
};

export const IncorrectFillBlank: Story = {
  args: {
    quizType: '빈칸 맞추기',
    questionNum: 1,
    question: '다음 중 JavaScript 함수 외부에서 정의된 변수를 참조하는 개념은 _____이다.',
    answer: ['클로저', 'closure'],
    userAnswer: '호이스팅',
    commentary:
      '클로저는 JavaScript 함수 외부에서 정의된 변수들에 대한 참조를 유지하는 개념으로, 함수가 변수를 기억하여 사용하는 메커니즘을 가리킨다.',
  },
  render: (args) => (
    <div style={{ width: '640px' }}>
      <QuizResultItem {...args} />
    </div>
  ),
};

export const NullFillBlank: Story = {
  args: {
    quizType: '빈칸 맞추기',
    questionNum: 1,
    question: '다음 중 JavaScript 함수 외부에서 정의된 변수를 참조하는 개념은 _____이다.',
    answer: ['클로저', 'closure'],
    userAnswer: null,
    commentary:
      '클로저는 JavaScript 함수 외부에서 정의된 변수들에 대한 참조를 유지하는 개념으로, 함수가 변수를 기억하여 사용하는 메커니즘을 가리킨다.',
  },
  render: (args) => (
    <div style={{ width: '640px' }}>
      <QuizResultItem {...args} />
    </div>
  ),
};
