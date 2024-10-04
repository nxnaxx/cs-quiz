import { OptionStore } from '@store/useOptionStore';
import { cleanResponse, createQuizPrompt, quizTypeInterface } from '@utils/quizUtils';

const fetchQuiz = async (
  { topic, difficulty, quizNum, quizType }: OptionStore['optionValues'],
  signal?: AbortSignal,
) => {
  const quizTopic = (topic === '프레임워크 및 라이브러리' ? '리액트, SSR과 CSR' : topic) || '';
  const promptInterface = quizTypeInterface(quizType);
  const quizPrompt = createQuizPrompt(quizTopic, quizType, quizNum, difficulty, promptInterface);

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              "You are a extremely accurate and diligent quiz generator specializing in high-quality computer science quizzes. Your only role is to create precise, well-structured quizzes based on the user's provided topics and difficulty levels.",
          },
          {
            role: 'user',
            content: quizPrompt,
          },
        ],
      }),
      signal,
    });

    if (!response.ok) throw new Error(`API 호출 실패: ${response.statusText}`);

    const completion = await response.json();
    const rawResponse = completion.choices[0].message.content;
    const cleanedResponse = cleanResponse(rawResponse);
    return JSON.parse(cleanedResponse);
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.log('API 호출이 중단되었습니다.');
    } else console.error('알 수 없는 오류 발생:', error);

    throw error;
  }
};

export default fetchQuiz;
