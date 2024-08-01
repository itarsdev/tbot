require('dotenv').config();

const { Telegraf } = require('telegraf');

const { BOT_TOKEN } = process.env;
const bot = new Telegraf(BOT_TOKEN);

const WEB_LINK = "https://tma-react-front.vercel.app";

bot.start((ctx) => {
    const user = ctx.message.from;
    const userName = user.username ? user.first_name : `@${user.username}`; 

    ctx.replyWithMarkdownV2(`*Привет, ${userName}*✌ \n\nДобро пожаловать в *Catacombs\\!*\n\nДля тебя открывается целый мир приключений, проходи заданя, повышай уровень и зарабатывай как можно больше\\.\n\nРассскажи всем друзьям, приглашай их\\, путь к успеху в команде намного быстрее\\.\n\nПриключение начинается 🚀`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "✨ Посетить сайт", web_app: {url: WEB_LINK} }],
                [{ text: "✅ Подписаться на официальный канал", web_app: {url: WEB_LINK} }],
                [{ text: "❓ Как играть?", web_app: {url: WEB_LINK} }],
                [{ text: "💪 Вход в катакомбы", web_app: {url: WEB_LINK} }]
            ],
        },
    });
})

bot.launch();