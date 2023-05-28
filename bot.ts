import { Bot } from './deps.deno.ts'

export const bot = new Bot(
  Deno.env.get('6106809664:AAHIwEQTumPx8vVaw-UmiDv32_eDCz9dhhc') || ''
)

bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'))

bot.command('ping', (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`))
