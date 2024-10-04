export type Topic =
  | 'HTML/CSS'
  | 'JavaScript'
  | '프레임워크 및 라이브러리'
  | '네트워크'
  | '운영체제'
  | '알고리즘 및 자료구조'
  | '소프트웨어 아키텍처'
  | '클라우드와 배포';
export type Difficulty = '쉬움' | '보통' | '어려움';
export type QuizType = '객관식' | 'OX 퀴즈' | '빈칸 맞추기';
export type QuizNum = 5 | 10 | 15;

export interface BaseQuiz {
  question: string;
  commentary: string;
}

export interface Multiple extends BaseQuiz {
  type: '객관식';
  options: string[];
  answer: string;
  userAnswer: string | null;
}

export interface TrueFalse extends BaseQuiz {
  type: 'OX 퀴즈';
  answer: boolean;
  userAnswer: boolean | null;
}

export interface FillBlank extends BaseQuiz {
  type: '빈칸 맞추기';
  answer: string[];
  userAnswer: string | null;
}

export type Quiz = Multiple | TrueFalse | FillBlank;

export interface QuizOptions {
  topic: Topic;
  difficulty: Difficulty;
  quizType: QuizType;
  quizNum: QuizNum;
}
