import { FillBlank, Multiple, TrueFalse } from 'src/types/quizTypes';

export const sampleMultipleData: Multiple[] = [
  {
    type: '객관식',
    question: 'JavaScript에서 변수를 선언할 때 사용하는 키워드는 무엇인가요?',
    options: ['var', 'let', 'const', 'var, let, const 모두'],
    answer: 'var, let, const 모두',
    userAnswer: null,
    commentary: 'JavaScript에서 변수를 선언할 때 var, let, const 키워드를 사용할 수 있습니다.',
  },
  {
    type: '객관식',
    question: '다음 중 JavaScript의 데이터 타입이 아닌 것은?',
    options: ['string', 'boolean', 'array', 'function'],
    answer: 'array',
    userAnswer: null,
    commentary:
      'JavaScript의 데이터 타입 중 array는 데이터 구조를 나타내는 타입으로 기본 데이터 타입은 아닙니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 숫자를 다루는 데이터 타입은?',
    options: ['string', 'number', 'boolean', 'null'],
    answer: 'number',
    userAnswer: null,
    commentary: 'JavaScript에서 숫자를 다루는 데이터 타입은 number입니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 두 값을 비교할 때 일치 연산자로 사용하는 기호는?',
    options: ['==', '===', '!=', '!=='],
    answer: '===',
    userAnswer: null,
    commentary:
      'JavaScript에서 일치 연산자로 두 값이 타입과 값이 동일한지 비교할 때 === 기호를 사용합니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 반복문을 실행할 때 사용하는 키워드는 무엇인가요?',
    options: ['loop', 'repeat', 'while', 'for'],
    answer: 'for',
    userAnswer: null,
    commentary: 'JavaScript에서 반복문을 실행할 때 for 키워드를 사용합니다.',
  },
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
  {
    type: '객관식',
    question: 'JavaScript에서 HTML 문서의 특정 요소를 선택하기 위해 사용하는 메서드는 무엇인가요?',
    options: ['selectElement', 'querySelector', 'getElementByClass', 'getById'],
    answer: 'querySelector',
    userAnswer: null,
    commentary:
      'JavaScript에서 HTML 문서의 특정 요소를 선택하기 위해 querySelector 메서드를 사용합니다.',
  },
  {
    type: '객관식',
    question: '다음 중 JavaScript에서 사용되는 조건문으로 올바른 것은?',
    options: ['if-else', 'switch-case', 'for-loop', 'while'],
    answer: 'if-else',
    userAnswer: null,
    commentary:
      'JavaScript에서 조건문으로 if-else 문을 사용하여 조건에 따라 다른 동작을 수행할 수 있습니다.',
  },
  {
    type: '객관식',
    question:
      'JavaScript에서 배열을 생성할 때 대괄호 [ ] 안에 데이터를 넣어서 생성하는데, 이 데이터를 무엇이라고 하나요?',
    options: ['key-value pair', 'index', 'element', 'property'],
    answer: 'element',
    userAnswer: null,
    commentary:
      'JavaScript에서 배열을 생성할 때 대괄호 안에 넣는 데이터를 각각 element라고 합니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 함수를 정의할 때 사용하는 키워드는 무엇인가요?',
    options: ['define', 'function', 'variable', 'declaration'],
    answer: 'function',
    userAnswer: null,
    commentary: 'JavaScript에서 함수를 정의할 때 function 키워드를 사용합니다.',
  },
];

export const sampleTrueFalseData: TrueFalse[] = [
  {
    type: 'OX 퀴즈',
    question: 'JavaScript는 웹 페이지의 레이아웃을 담당하는 스타일 시트 언어이다.',
    answer: false,
    userAnswer: null,
    commentary: 'JavaScript는 웹 페이지의 동적인 요소를 다루는 프로그래밍 언어입니다.',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript의 확장자는 '.js'이다.",
    answer: true,
    userAnswer: null,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript는 변수를 선언할 때 'var', 'let', 'const' 키워드를 사용한다.",
    answer: true,
    userAnswer: null,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 '===' 연산자는 데이터 타입을 비교하지 않고 값만 비교한다.",
    answer: false,
    userAnswer: null,
    commentary: '=== 연산자는 값과 함께 데이터 타입도 비교합니다.',
  },
  {
    type: 'OX 퀴즈',
    question:
      'JavaScript의 배열(Array)은 정해진 크기를 가지고 있어 동적으로 크기를 조절할 수 없다.',
    answer: false,
    userAnswer: null,
    commentary: 'JavaScript 배열은 동적으로 크기를 조절할 수 있습니다.',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'if-else'문은 조건에 따라 코드 블록을 실행하거나 건너뛸 수 있다.",
    answer: true,
    userAnswer: null,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'null'은 값이 정의되지 않은 상태를 나타낸다.",
    answer: true,
    userAnswer: null,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'parseInt()' 함수는 문자열을 정수로 변환할 때 사용한다.",
    answer: true,
    userAnswer: null,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'let' 키워드를 사용한 변수는 재할당이 불가능하다.",
    answer: false,
    userAnswer: null,
    commentary: 'let으로 선언된 변수는 재할당이 가능합니다.',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'NaN'은 'Not a Number'의 준말로, 숫자가 아님을 나타내는 값이다.",
    answer: true,
    userAnswer: null,
    commentary: '',
  },
];

export const sampleFillBlankData: FillBlank[] = [
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 변수를 선언할 때 사용하는 키워드는 _____이다.',
    answer: ['let', '변수'],
    userAnswer: null,
    commentary:
      'JavaScript에서 변수를 선언할 때는 let 키워드를 사용하며, 변수란 값이 저장되는 공간을 가리킨다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript에서 사용되는 데이터 타입이 아닌 것은? _____',
    answer: ['Boolean', '부동소수'],
    userAnswer: null,
    commentary:
      'JavaScript에서 부동소수 (floating point)는 데이터 타입이 아니며, Boolean은 참과 거짓을 표현하는 데이터 타입이다.',
  },
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 함수를 선언할 때 사용하는 키워드는 _____이다.',
    answer: ['function', '함수'],
    userAnswer: null,
    commentary:
      'JavaScript에서 함수를 선언할 때는 function 키워드를 사용하며, 함수는 일련의 작업을 수행하는 코드 블록이다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript 함수 외부에서 정의된 변수를 참조하는 개념은 _____이다.',
    answer: ['클로저', 'closure'],
    userAnswer: null,
    commentary:
      '클로저는 JavaScript 함수 외부에서 정의된 변수들에 대한 참조를 유지하는 개념으로, 함수가 변수를 기억하여 사용하는 메커니즘을 가리킨다.',
  },
  {
    type: '빈칸 맞추기',
    question:
      'JavaScript에서 배열의 각 요소를 순회하면서 작업을 수행하기 위해 사용되는 메서드는 _____이다.',
    answer: ['forEach', '각'],
    userAnswer: null,
    commentary:
      'forEach 메서드는 배열의 각 요소를 순회하면서 지정된 작업을 수행하는 메서드이며, 반복문을 대체할 수 있다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript에서 사용되는 비동기 처리를 위한 객체는 _____이다.',
    answer: ['Promise', '프로미스'],
    userAnswer: null,
    commentary:
      'Promise는 JavaScript에서 비동기 작업을 쉽게 처리하기 위한 객체로, 성공 또는 실패 시의 처리를 정의할 수 있다.',
  },
  {
    type: '빈칸 맞추기',
    question:
      'JavaScript에서 객체의 특정 속성을 가져오거나 설정하기 위해 사용되는 연산자는 _____이다.',
    answer: ['도트', 'dot'],
    userAnswer: null,
    commentary:
      '도트 연산자는 객체의 특정 속성을 가져오거나 설정하는 데 사용되며, 객체의 속성에 접근할 때 유용하다.',
  },
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 조건문을 표현하기 위해 사용되는 키워드는 _____이다.',
    answer: ['if', '만약'],
    userAnswer: null,
    commentary:
      'JavaScript에서 조건문을 표현할 때 if 키워드를 사용하며, 주어진 조건에 따라 프로그램의 흐름을 제어할 수 있다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript에서 사용되는 반복문이 아닌 것은? _____',
    answer: ['repeat', '반복'],
    userAnswer: null,
    commentary:
      'JavaScript에서 repeat 반복문은 사용되지 않으며, for, while, do-while 반복문이 있습니다.',
  },
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 예외 처리를 위해 사용되는 키워드는 _____이다.',
    answer: ['try', '시도'],
    userAnswer: null,
    commentary:
      'JavaScript에서 예외 처리를 위해 try 키워드를 사용하여 예외 발생 가능한 코드를 묶어 처리할 수 있으며, catch와 finally 블록과 함께 사용된다.',
  },
];

export const sampleMultipleResult: Multiple[] = [
  {
    type: '객관식',
    question: 'JavaScript에서 변수를 선언할 때 사용하는 키워드는 무엇인가요?',
    options: ['var', 'let', 'const', 'var, let, const 모두'],
    answer: 'var, let, const 모두',
    userAnswer: 'var, let, const 모두',
    commentary: 'JavaScript에서 변수를 선언할 때 var, let, const 키워드를 사용할 수 있습니다.',
  },
  {
    type: '객관식',
    question: '다음 중 JavaScript의 데이터 타입이 아닌 것은?',
    options: ['string', 'boolean', 'array', 'function'],
    answer: 'array',
    userAnswer: 'array',
    commentary:
      'JavaScript의 데이터 타입 중 array는 데이터 구조를 나타내는 타입으로 기본 데이터 타입은 아닙니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 숫자를 다루는 데이터 타입은?',
    options: ['string', 'number', 'boolean', 'null'],
    answer: 'number',
    userAnswer: 'number',
    commentary: 'JavaScript에서 숫자를 다루는 데이터 타입은 number입니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 두 값을 비교할 때 일치 연산자로 사용하는 기호는?',
    options: ['==', '===', '!=', '!=='],
    answer: '===',
    userAnswer: '==',
    commentary:
      'JavaScript에서 일치 연산자로 두 값이 타입과 값이 동일한지 비교할 때 === 기호를 사용합니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 반복문을 실행할 때 사용하는 키워드는 무엇인가요?',
    options: ['loop', 'repeat', 'while', 'for'],
    answer: 'for',
    userAnswer: 'for',
    commentary: 'JavaScript에서 반복문을 실행할 때 for 키워드를 사용합니다.',
  },
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
    userAnswer: '매개변수를 무제한으로 사용할 수 있다.',
    commentary:
      '화살표 함수에서 매개변수를 무제한으로 사용할 수 없으며, 괄호를 사용하여 명시적으로 매개변수를 선언해야 합니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 HTML 문서의 특정 요소를 선택하기 위해 사용하는 메서드는 무엇인가요?',
    options: ['selectElement', 'querySelector', 'getElementByClass', 'getById'],
    answer: 'querySelector',
    userAnswer: 'getElementByClass',
    commentary:
      'JavaScript에서 HTML 문서의 특정 요소를 선택하기 위해 querySelector 메서드를 사용합니다.',
  },
  {
    type: '객관식',
    question: '다음 중 JavaScript에서 사용되는 조건문으로 올바른 것은?',
    options: ['if-else', 'switch-case', 'for-loop', 'while'],
    answer: 'if-else',
    userAnswer: 'if-else',
    commentary:
      'JavaScript에서 조건문으로 if-else 문을 사용하여 조건에 따라 다른 동작을 수행할 수 있습니다.',
  },
  {
    type: '객관식',
    question:
      'JavaScript에서 배열을 생성할 때 대괄호 [ ] 안에 데이터를 넣어서 생성하는데, 이 데이터를 무엇이라고 하나요?',
    options: ['key-value pair', 'index', 'element', 'property'],
    answer: 'element',
    userAnswer: 'element',
    commentary:
      'JavaScript에서 배열을 생성할 때 대괄호 안에 넣는 데이터를 각각 element라고 합니다.',
  },
  {
    type: '객관식',
    question: 'JavaScript에서 함수를 정의할 때 사용하는 키워드는 무엇인가요?',
    options: ['define', 'function', 'variable', 'declaration'],
    answer: 'function',
    userAnswer: 'function',
    commentary: 'JavaScript에서 함수를 정의할 때 function 키워드를 사용합니다.',
  },
];

export const sampleTrueFalseResult: TrueFalse[] = [
  {
    type: 'OX 퀴즈',
    question: 'JavaScript는 웹 페이지의 레이아웃을 담당하는 스타일 시트 언어이다.',
    answer: false,
    userAnswer: false,
    commentary: 'JavaScript는 웹 페이지의 동적인 요소를 다루는 프로그래밍 언어입니다.',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript의 확장자는 '.js'이다.",
    answer: true,
    userAnswer: false,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript는 변수를 선언할 때 'var', 'let', 'const' 키워드를 사용한다.",
    answer: true,
    userAnswer: true,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 '===' 연산자는 데이터 타입을 비교하지 않고 값만 비교한다.",
    answer: false,
    userAnswer: true,
    commentary: '=== 연산자는 값과 함께 데이터 타입도 비교합니다.',
  },
  {
    type: 'OX 퀴즈',
    question:
      'JavaScript의 배열(Array)은 정해진 크기를 가지고 있어 동적으로 크기를 조절할 수 없다.',
    answer: false,
    userAnswer: false,
    commentary: 'JavaScript 배열은 동적으로 크기를 조절할 수 있습니다.',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'if-else'문은 조건에 따라 코드 블록을 실행하거나 건너뛸 수 있다.",
    answer: true,
    userAnswer: true,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'null'은 값이 정의되지 않은 상태를 나타낸다.",
    answer: true,
    userAnswer: false,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'parseInt()' 함수는 문자열을 정수로 변환할 때 사용한다.",
    answer: true,
    userAnswer: true,
    commentary: '',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'let' 키워드를 사용한 변수는 재할당이 불가능하다.",
    answer: false,
    userAnswer: false,
    commentary: 'let으로 선언된 변수는 재할당이 가능합니다.',
  },
  {
    type: 'OX 퀴즈',
    question: "JavaScript에서 'NaN'은 'Not a Number'의 준말로, 숫자가 아님을 나타내는 값이다.",
    answer: true,
    userAnswer: true,
    commentary: '',
  },
];

export const sampleFillBlankResult: FillBlank[] = [
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 변수를 선언할 때 사용하는 키워드는 _____이다.',
    answer: ['let', '변수'],
    userAnswer: 'let',
    commentary:
      'JavaScript에서 변수를 선언할 때는 let 키워드를 사용하며, 변수란 값이 저장되는 공간을 가리킨다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript에서 사용되는 데이터 타입이 아닌 것은? _____',
    answer: ['Boolean', '부동소수'],
    userAnswer: null,
    commentary:
      'JavaScript에서 부동소수 (floating point)는 데이터 타입이 아니며, Boolean은 참과 거짓을 표현하는 데이터 타입이다.',
  },
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 함수를 선언할 때 사용하는 키워드는 _____이다.',
    answer: ['function', '함수'],
    userAnswer: 'function',
    commentary:
      'JavaScript에서 함수를 선언할 때는 function 키워드를 사용하며, 함수는 일련의 작업을 수행하는 코드 블록이다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript 함수 외부에서 정의된 변수를 참조하는 개념은 _____이다.',
    answer: ['클로저', 'closure'],
    userAnswer: '클로저',
    commentary:
      '클로저는 JavaScript 함수 외부에서 정의된 변수들에 대한 참조를 유지하는 개념으로, 함수가 변수를 기억하여 사용하는 메커니즘을 가리킨다.',
  },
  {
    type: '빈칸 맞추기',
    question:
      'JavaScript에서 배열의 각 요소를 순회하면서 작업을 수행하기 위해 사용되는 메서드는 _____이다.',
    answer: ['forEach', '각'],
    userAnswer: 'forEach',
    commentary:
      'forEach 메서드는 배열의 각 요소를 순회하면서 지정된 작업을 수행하는 메서드이며, 반복문을 대체할 수 있다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript에서 사용되는 비동기 처리를 위한 객체는 _____이다.',
    answer: ['Promise', '프로미스'],
    userAnswer: 'Promise',
    commentary:
      'Promise는 JavaScript에서 비동기 작업을 쉽게 처리하기 위한 객체로, 성공 또는 실패 시의 처리를 정의할 수 있다.',
  },
  {
    type: '빈칸 맞추기',
    question:
      'JavaScript에서 객체의 특정 속성을 가져오거나 설정하기 위해 사용되는 연산자는 _____이다.',
    answer: ['도트', 'dot'],
    userAnswer: '도트',
    commentary:
      '도트 연산자는 객체의 특정 속성을 가져오거나 설정하는 데 사용되며, 객체의 속성에 접근할 때 유용하다.',
  },
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 조건문을 표현하기 위해 사용되는 키워드는 _____이다.',
    answer: ['if', '만약'],
    userAnswer: 'if',
    commentary:
      'JavaScript에서 조건문을 표현할 때 if 키워드를 사용하며, 주어진 조건에 따라 프로그램의 흐름을 제어할 수 있다.',
  },
  {
    type: '빈칸 맞추기',
    question: '다음 중 JavaScript에서 사용되는 반복문이 아닌 것은? _____',
    answer: ['repeat', '반복'],
    userAnswer: 'repeat',
    commentary:
      'JavaScript에서 repeat 반복문은 사용되지 않으며, for, while, do-while 반복문이 있습니다.',
  },
  {
    type: '빈칸 맞추기',
    question: 'JavaScript에서 예외 처리를 위해 사용되는 키워드는 _____이다.',
    answer: ['try', '시도'],
    userAnswer: 'try',
    commentary:
      'JavaScript에서 예외 처리를 위해 try 키워드를 사용하여 예외 발생 가능한 코드를 묶어 처리할 수 있으며, catch와 finally 블록과 함께 사용된다.',
  },
];
