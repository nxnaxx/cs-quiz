import { Difficulty, QuizNums, QuizType } from 'src/types/quizTypes';

export interface QuizCardProps {
  imgSrc: string;
  title: string;
  difficulty: Difficulty;
  quizType: QuizType;
  quizNums: QuizNums;
}

export const quizCards: QuizCardProps[] = [
  {
    imgSrc: 'src/assets/images/javascript.png',
    title: 'JavaScript',
    difficulty: 'easy',
    quizType: '객관식',
    quizNums: 10,
  },
  {
    imgSrc: 'src/assets/images/library.png',
    title: '프레임워크 및 라이브러리',
    difficulty: 'easy',
    quizType: 'OX 퀴즈',
    quizNums: 10,
  },
  {
    imgSrc: 'src/assets/images/algorithm.png',
    title: '알고리즘',
    difficulty: 'normal',
    quizType: '빈칸 맞추기',
    quizNums: 10,
  },
];
