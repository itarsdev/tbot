require('dotenv').config();

const { Telegraf } = require('telegraf');

const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

const WEB_LINK = "https://tma-react-front.vercel.app";

bot.start((ctx) => {
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name; 

    ctx.replyWithMarkdownV2(`*Hey, ${userName}✌ \n\nWelcome to Catacombs\\!*\n\nA whole world of adventures is available to you\\.\nDon't forget to invite your friends\\, the path to success will be faster in a team\\.\n\nThe adventure begins 🚀`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "✨ Visit website", web_app: {url: WEB_LINK} }],
                [{ text: "✅ Subscribe channel", web_app: {url: WEB_LINK} }],
                [{ text: "❓ Help", web_app: {url: WEB_LINK} }],
                [{ text: "👋 Start now", web_app: {url: WEB_LINK} }]
            ],
        },
    });
})

bot.launch();