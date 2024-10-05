import { Difficulty, QuizNum, QuizOptions, QuizType } from 'src/types/quizTypes';

export interface QuizCardProps extends QuizOptions {
  imgSrc: string;
}

export const quizCards: QuizCardProps[] = [
  {
    imgSrc: '/assets/images/javascript.png',
    topic: 'JavaScript',
    difficulty: '쉬움',
    quizType: '객관식',
    quizNum: 10,
  },
  {
    imgSrc: '/assets/images/library.png',
    topic: '프레임워크 및 라이브러리',
    difficulty: '쉬움',
    quizType: 'OX 퀴즈',
    quizNum: 10,
  },
  {
    imgSrc: '/assets/images/algorithm.png',
    topic: '알고리즘 및 자료구조',
    difficulty: '보통',
    quizType: '빈칸 맞추기',
    quizNum: 10,
  },
];

interface optionDatatype {
  difficulty: Difficulty[];
  quizNum: QuizNum[];
  quizType: QuizType[];
}

export const quizOptions: optionDatatype = {
  difficulty: ['쉬움', '보통', '어려움'],
  quizNum: [5, 10, 15],
  quizType: ['객관식', 'OX 퀴즈', '빈칸 맞추기'],
};
