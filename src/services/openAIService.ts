import OpenAI from 'openai';
import { OptionStore } from '@store/useOptionStore';
import { cleanResponse, createQuizPrompt, quizTypeInterface } from '@utils/quizUtils';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const fetchQuiz = async ({ topic, difficulty, quizNum, quizType }: OptionStore['optionValues']) => {
  const quizTopic = (topic === '프레임워크 및 라이브러리' ? '리액트, SSR과 CSR' : topic) || '';
  const promptInterface = quizTypeInterface(quizType);
  const quizPrompt = createQuizPrompt(quizTopic, quizType, quizNum, difficulty, promptInterface);

  const completion = await openai.chat.completions.create({
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
    model: 'gpt-3.5-turbo',
  });

  const rawResponse = completion.choices[0].message.content!;
  const response = cleanResponse(rawResponse);
  return JSON.parse(response);
};

export default fetchQuiz;
