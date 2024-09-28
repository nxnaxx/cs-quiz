import { QuizStore } from '@store/useQuizStore';

export const sampleMultipleData: QuizStore['quizData'] = [
  {
    question: 'JavaScript에서 변수를 선언할 때 사용하는 키워드는 무엇인가요?',
    options: ['var', 'let', 'const', 'var, let, const 모두'],
    answer: 'var, let, const 모두',
    userAnswer: null,
    commentary: 'JavaScript에서 변수를 선언할 때 var, let, const 키워드를 사용할 수 있습니다.',
  },
  {
    question: '다음 중 JavaScript의 데이터 타입이 아닌 것은?',
    options: ['string', 'boolean', 'array', 'function'],
    answer: 'array',
    userAnswer: null,
    commentary:
      'JavaScript의 데이터 타입 중 array는 데이터 구조를 나타내는 타입으로 기본 데이터 타입은 아닙니다.',
  },
  {
    question: 'JavaScript에서 숫자를 다루는 데이터 타입은?',
    options: ['string', 'number', 'boolean', 'null'],
    answer: 'number',
    userAnswer: null,
    commentary: 'JavaScript에서 숫자를 다루는 데이터 타입은 number입니다.',
  },
  {
    question: 'JavaScript에서 두 값을 비교할 때 일치 연산자로 사용하는 기호는?',
    options: ['==', '===', '!=', '!=='],
    answer: '===',
    userAnswer: null,
    commentary:
      'JavaScript에서 일치 연산자로 두 값이 타입과 값이 동일한지 비교할 때 === 기호를 사용합니다.',
  },
  {
    question: 'JavaScript에서 반복문을 실행할 때 사용하는 키워드는 무엇인가요?',
    options: ['loop', 'repeat', 'while', 'for'],
    answer: 'for',
    userAnswer: null,
    commentary: 'JavaScript에서 반복문을 실행할 때 for 키워드를 사용합니다.',
  },
  {
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
  {
    question: 'JavaScript에서 HTML 문서의 특정 요소를 선택하기 위해 사용하는 메서드는 무엇인가요?',
    options: ['selectElement', 'querySelector', 'getElementByClass', 'getById'],
    answer: 'querySelector',
    userAnswer: null,
    commentary:
      'JavaScript에서 HTML 문서의 특정 요소를 선택하기 위해 querySelector 메서드를 사용합니다.',
  },
  {
    question: '다음 중 JavaScript에서 사용되는 조건문으로 올바른 것은?',
    options: ['if-else', 'switch-case', 'for-loop', 'while'],
    answer: 'if-else',
    userAnswer: null,
    commentary:
      'JavaScript에서 조건문으로 if-else 문을 사용하여 조건에 따라 다른 동작을 수행할 수 있습니다.',
  },
  {
    question:
      'JavaScript에서 배열을 생성할 때 대괄호 [ ] 안에 데이터를 넣어서 생성하는데, 이 데이터를 무엇이라고 하나요?',
    options: ['key-value pair', 'index', 'element', 'property'],
    answer: 'element',
    userAnswer: null,
    commentary:
      'JavaScript에서 배열을 생성할 때 대괄호 안에 넣는 데이터를 각각 element라고 합니다.',
  },
  {
    question: 'JavaScript에서 함수를 정의할 때 사용하는 키워드는 무엇인가요?',
    options: ['define', 'function', 'variable', 'declaration'],
    answer: 'function',
    userAnswer: null,
    commentary: 'JavaScript에서 함수를 정의할 때 function 키워드를 사용합니다.',
  },
];
