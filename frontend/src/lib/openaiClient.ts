import OpenAI from "openai";

const configuration = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

export const openaiClient = configuration;