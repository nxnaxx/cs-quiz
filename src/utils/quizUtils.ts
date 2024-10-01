import { Difficulty, QuizNum, QuizType, Topic } from 'src/types/quizTypes';

export const createQuizPrompt = (
  topic: string,
  quizType: QuizType,
  quizNum: QuizNum,
  difficulty: Difficulty,
  promptInterface: string,
) => {
  return `
    다음은 ${topic}에 대한 ${quizType} 문제를 생성하기 위한 인터페이스입니다. 
    반드시 **순수 JSON 데이터**만 생성해 주세요. 
    형식에 맞추어, 불필요한 텍스트 없이 정확한 JSON만 출력해 주세요.
    **중요:** JSON 데이터는 {로 시작하고 }로 끝나야 합니다.
    최근 1시간 안에 ${topic}과 관련한 ${quizType} 문제로 생성한 동일한 문제는 포함하지 말고 중복이 없도록 해주세요.
    
    ${
      quizType === '객관식'
        ? `
      - **객관식 문제의 경우**: 
      - 반드시 **사지선다**로 설정해 주세요.
      - **정답은 반드시 하나**여야 하며, 질문에 대한 정확한 정답을 option에 넣어 주세요.
      - 정답은 **options 배열 내 한 개의 요소**로 명확히 포함해 주세요.
      - 그러므로 나머지 세 개의 요소는 잘못된 정답이어야 합니다.
      `
        : quizType === '빈칸 맞추기'
          ? `
      - **빈칸 맞추기 문제의 경우**:
      - 질문에는 반드시 빈칸(예: _____)을 포함해 주세요.
      - 대소문자를 구분하며, 완전히 동일한 단어는 중복하지 않습니다.
      - 의미가 동일한 단어(예: '자원'과 'resource', '인가'와 'Authorization')를 각각 개별 요소로 구분하여 **answers 배열**에 포함해 주세요. 예를 들어, "['자원', 'resource']"와 같이 입력.
      - 단, 프로그래밍 언어에서 사용되는 조건문, 연산자, 반복문과 같은 용어는 정확한 명령어만 포함시켜주세요.
      - JSON 형식에서는 한글과 영어로 된 정답을 분리해서 배열에 넣어 주세요. 동일한 의미를 가진 단어라도, 한글과 영어를 개별로 포함해 주세요.`
          : `
      - **OX 퀴즈 문제의 경우**:
      - 질문은 정답이 true(예) 또는 false(아니오)로 구분될 수 있어야 하며, **정답은 반드시 하나(true 또는 false)**여야 합니다.`
    }
    
    문제는 인터페이스 구조에 맞추어 정답을 포함하고, 추가적인 설명이나 불필요한 텍스트는 출력하지 마세요. 정답에 대한 간단히 해설을 commentary 변수에 포함해 주세요.
    ${promptInterface}
    **단, userAnswer의 값은 null로 고정해주세요.**

    아래 기준에 맞는 ${quizNum}개의 ${topic} 관련 ${quizType} 문제를 난이도로 한국어로 생성해 주세요:
    - **난이도 설정**: ${difficulty}
      - 쉬움: 컴퓨터 공학을 학습한 비전공자가 풀 수 있을 정도의 쉬운 문제.
      - 보통: 컴퓨터 공학 전공자가 관련 내용을 학습해야 풀 수 있는 문제.
      - 어려움: 해당 주제에 대한 깊은 이해가 필요하고, 문제 해결을 위해 추가적인 학습이 필요한 문제.
  `;
};

export const quizTypeInterface = (quizType: QuizType) => {
  let promptInterface = '';

  if (quizType === '객관식') {
    promptInterface = `
      interface Quiz {
        Multiple: {
          question: string;
          options: string[];
          answer: string;
          userAnswer: string | null;
          commentary: string;
        }[];
      }
    `;
  } else if (quizType === 'OX 퀴즈') {
    promptInterface = `
      interface Quiz {
        TrueFalse: {
          question: string;
          answer: boolean;
          userAnswer: boolean | null;
          commentary: string;
        }[];
      }
    `;
  } else if (quizType === '빈칸 맞추기') {
    promptInterface = `
      interface Quiz {
        FillBlank: {
          question: string;
          answer: string[];
          userAnswer: string | null;
          commentary: string;
        }[];
      }
    `;
  }
  return promptInterface;
};

export const cleanResponse = (rawResponse: string): string => {
  const jsonStart = rawResponse.indexOf('{');
  const jsonEnd = rawResponse.lastIndexOf('}');
  if (jsonStart !== -1 && jsonEnd !== -1) {
    return rawResponse.substring(jsonStart, jsonEnd + 1);
  }
  throw new Error('Given rawResponse has Invalid JSON format');
};
