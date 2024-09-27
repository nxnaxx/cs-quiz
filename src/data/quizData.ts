import { Difficulty, QuizNum, QuizType } from 'src/types/quizTypes';

export interface QuizCardProps {
  imgSrc: string;
  title: string;
  difficulty: Difficulty;
  quizType: QuizType;
  quizNum: QuizNum;
}

export const quizCards: QuizCardProps[] = [
  {
    imgSrc: 'src/assets/images/javascript.png',
    title: 'JavaScript',
    difficulty: '쉬움',
    quizType: '객관식',
    quizNum: 10,
  },
  {
    imgSrc: 'src/assets/images/library.png',
    title: '프레임워크 및 라이브러리',
    difficulty: '쉬움',
    quizType: 'OX 퀴즈',
    quizNum: 10,
  },
  {
    imgSrc: 'src/assets/images/algorithm.png',
    title: '알고리즘',
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
