const { Telegraf } = require('telegraf')
const BOT_TOKEN = "7185252124:AAGHxMRCL7V53tg0zdede0e7XMBKAjxN5aw"
const bot = new Telegraf(BOT_TOKEN)

const WEB_LINK = "https://tma-react-front.vercel.app";

bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${WEB_LINK}?start=${startPayload}`;   
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName}! Welcome to EblanTap!*`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "👋 Start now!", web_app: { url: urlSent } }]
            ],
            in: true
        },
    })
})

bot.launch();