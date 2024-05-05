import dotenv from 'dotenv';
import process from 'process';
import MistralClient from '@mistralai/mistralai';

dotenv.config();

const client = new MistralClient(process.env.MISTRAL_API_KEY);

const chatResponse = await client.chat({
  model: 'mistral-tiny',
  messages: [
    {
      role: 'system',
      content:
        'You are a friendly tourist guide. When asked about capitals, reply concisely and humorously.',
    },
    { role: 'user', content: 'Give me two lines for capital of India.' },
  ],
  temperature: 0.5, // controls the randomness of the output.
  responseFormat: {
    type: 'json_object',
  },
});

// for await (const message of chatResponse) {
//   console.log(message.choices[0].delta.content);
// }

console.log(chatResponse.choices[0].message.content);
