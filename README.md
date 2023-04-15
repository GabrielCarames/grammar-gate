# Grammar Gate  📑  ✍🏻

Grammar Gate is a writing tool platform that offers a range of features to enhance your writing skills. Built with Next.js, TailwindCSS, and powered by the [OpenAI ChatGPT API](https://platform.openai.com/docs/guides/chat).

It provides an English ***grammar checker*** that eliminates errors and helps perfect your writing and also a ***text summarizer***, which can quickly and easily condense long passages of text into shorter, more concise versions. 
Perfect for students, professionals, and anyone looking to communicate more effectively. 

## Features

- Grammar Checker
identifies grammatical errors in your text and provides you with a list of suggested corrections. Simply copy and paste your text into our tool, and our checker will analyze your writing for grammar, spelling, and punctuation mistakes. Our grammar checker covers a range of grammatical rules, including verb tense, subject-verb agreement, and articles.

- Text Summarizer
 helps you condense long passages of text into shorter, more concise versions. Simply copy and paste your text into our tool and select the desired summary length. Our summarizer identifies the most important information in your text, so you can get a quick overview without having to read the entire document.

## Desktop site 🖥️

https://user-images.githubusercontent.com/49535753/232237052-61e0e621-af85-4761-bf07-5bd240851a6a.mp4

## Mobile site 📱

https://user-images.githubusercontent.com/49535753/232238492-324875ab-a0fb-4f4a-b9ad-699b116ff935.mp4

## Technologies 💫
[![NextJS](https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logo=Next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/-React.js-blue?style=for-the-badge&logo=React)](https://es.reactjs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=Typescript)](https://www.typescriptlang.org/)
[![Javascript](https://img.shields.io/badge/-Javascript-323330?style=for-the-badge&logo=Javascript&logoColor=F7DF1E)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindui.com/)
[![ChatGPTAPI](https://img.shields.io/badge/-ChatGPT-74ab9c?style=for-the-badge&logo=openai)](https://graphql.org/)

## Install ⚒
Clone and install
```bash
git clone https://github.com/GabrielCarames/grammar-gate.git
pnpm i
```
Run the app locally
```bash
pnpm run dev
```

## Environment variables 🏭
> ***Warning***: You need an OpenAI API key to run this app locally. You can get one here for free: https://platform.openai.com/account/api-keys 

The app needs to use the variables located in the "env.example" file. To access them, follow the following steps:
 - Create a new file named "**.env**" in the root of the app.
 - Copy and paste everything in the "**.env.example**" file into the **.env** file. 

## Deployment 🚀
You can view the deployment by [clicking here](https://grammar-gate-gabrielcarames.vercel.app/).

## Disclaimer ⚠️

- While our grammar checker is designed to provide accurate suggestions for corrections, it may not always be 100% accurate. The tool is best used as a supplement to your own knowledge and judgment about grammar. We are not responsible for any errors or inaccuracies in your writing that may go undetected by the tool.

- Unfortunately, the ChatGPT API is currently very slow due to the high demand and may take a while to get a response from both the grammar checker and text summarizer. Please be patient.
