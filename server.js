import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import fetch from 'node-fetch'
globalThis.fetch = fetch


async function example() {
    // To use ESM in CommonJS, you can use a dynamic import
    const { ChatGPTAPI } = await import('chatgpt')
  
    const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY })
  
    const res = await api.sendMessage('Hello World!')
    console.log(res.text)
  }

  example()