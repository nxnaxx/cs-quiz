import { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MultipleOptionList from './MultipleOptionList';
import useQuizStore from '@store/useQuizStore';
import { Multiple } from 'src/types/quizTypes';

const meta: Meta<typeof MultipleOptionList> = {
  title: 'organisms/MultipleOptionList',
  component: MultipleOptionList,
};

export default meta;

type Story = StoryObj<typeof meta>;

const sampleData: Multiple[] = [
  {
    type: '객관식',
    question: '다음 중 JavaScript에서 사용되는 화살표 함수의 특징으로 올바르지 않은 것은?',
    options: [
      '간단한 함수 표현에 유용하다.',
      'function 키워드 대신 화살표를 사용한다.',
      '별도의 return 키워드가 없어도 암시적으로 값을 반환한다.',
      '매개변수를 무제한으로 사용할 수 있다.',
    ],
    answer: '매개변수를 무제한으로 사용할 수 있다.',
    userAnswer: null,
    commentary:
      '화살표 함수에서 매개변수를 무제한으로 사용할 수 없으며, 괄호를 사용하여 명시적으로 매개변수를 선언해야 합니다.',
  },
];

export const MultipleList: Story = {
  render: () => {
    const { quizData, setQuizData } = useQuizStore();

    useEffect(() => {
      setQuizData(sampleData);
    }, []);

    return (
      <>
        {quizData && (
          <MultipleOptionList
            currentQuizNum={1}
            multipleOptions={quizData ? (quizData[0] as Multiple).options : []}
          />
        )}
      </>
    );
  },
};
