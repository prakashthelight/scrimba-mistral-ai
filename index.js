import dotenv from "dotenv";
import MistralClient from "@mistralai/mistralai";

dotenv.config();

const client = new MistralClient(process.env.MISTRAL_API_KEY);

const chatResponse = await client.chat({
    model: "mistral-tiny",
    messages: [
        {
            role: "user",
            content: "What is the capital of India?"
        }
    ]
});

console.log(chatResponse.choices[0].message.content);



