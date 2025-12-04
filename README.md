# 🎰 Bot Telegram Gacha Items

Bot Telegram dengan sistem gacha untuk mendistribusikan file/script secara random dengan sistem premium dan reward menarik!

## ✨ Fitur Utama

### 🎮 Sistem Gacha
- **Gacha Normal** - 15x/hari untuk user gratis
- **Gacha 10x** - Gacha 10 item sekaligus
- **Free Gacha** - Unlimited dengan reward kecil
- **Lucky Gacha** - Chance legendary 3x lebih tinggi
- **Premium Gacha** - Guaranteed Epic/Legendary (5x/hari)
- **Mega Gacha** - 50x sekaligus dengan 5+ Legendary guaranteed

### 💎 Sistem Premium
- Gacha unlimited
- Bonus coins 2x
- Daily reward 2x
- Badge premium
- Akses gacha eksklusif

### 🎯 Fitur Lainnya
- Pity system (guaranteed legendary setelah 50 gacha)
- Daily reward
- Inventory system
- Leaderboard
- Redeem code
- Channel verification
- Bot uptime tracking
- User statistics

### 👑 Admin Features
- User management (ban/unban)
- Give premium/coins
- Item management (add/delete)
- Broadcast message
- Database backup
- User analytics

## 📋 Persyaratan

- Node.js v14 atau lebih tinggi
- NPM atau Yarn
- Bot Token dari [@BotFather](https://t.me/BotFather)

## 🚀 Instalasi

1. Clone repository ini:
```bash
git clone https://github.com/Vinss-Store/BotTele-GachaItems.git
cd BotTele-GachaItems
```

2. Install dependencies:
```bash
npm install
```

3. Copy file konfigurasi:
```bash
cp config.example.js config.js
```

4. Edit `config.js` dengan data Anda:
```javascript
global.TokenBot = 'YOUR_BOT_TOKEN'
global.IdOwner = 'YOUR_TELEGRAM_ID'
global.OwnerName = 'Your Name'
global.BotName = 'Your Bot Name'
```

5. Buat folder yang diperlukan:
```bash
mkdir -p all/rewards all/temp logs
```

6. Jalankan bot:
```bash
npm start
```

## 📁 Struktur Folder

```
BotTele-GachaItems/
├── all/
│   ├── rewards/        # Folder untuk file reward gacha
│   ├── temp/           # Folder temporary (auto-generated)
│   ├── database.json   # Database bot (auto-generated)
│   └── user.json       # Data user (auto-generated)
├── logs/               # Log files (auto-generated)
├── config.js           # Konfigurasi bot (buat dari config.example.js)
├── index.js            # File utama bot
├── vinss.js            # Handler commands
├── logger.js           # Logger system
└── package.json        # Dependencies
```

## 🎁 Menambah Reward

1. Letakkan file/folder reward di folder `all/rewards/`
2. Format yang didukung: `.zip`, `.js`, `.7z`, atau folder
3. Bot akan otomatis random file saat gacha

## 🔧 Konfigurasi Channel

Untuk mengaktifkan channel verification:

1. Buat channel Telegram
2. Tambahkan bot sebagai admin di channel
3. Dapatkan Channel ID (gunakan bot seperti @userinfobot)
4. Update `config.js`:
```javascript
global.IdChanel1 = '-1001234567890'  // Channel ID 1
global.IdChanel2 = '-1009876543210'  // Channel ID 2
global.InviteLink1 = 'https://t.me/+xxxxx'
global.InviteLink2 = '@channel_username'
```

## 📝 Command List

### User Commands
- `/start` - Mulai bot
- `/menu` - Tampilkan menu utama
- `/gacha` - Gacha normal
- `/gachax10` - Gacha 10x
- `/gachafree` - Free gacha unlimited
- `/gachalucky` - Lucky gacha (100 coins)
- `/gachapremium` - Premium gacha (premium only)
- `/gachamega` - Mega gacha 50x (premium only)
- `/profile` - Lihat profile
- `/inventory` - Lihat inventory
- `/daily` - Claim daily reward
- `/leaderboard` - Top 10 users
- `/info` - Bot information
- `/uptime` - Bot uptime
- `/premium` - Info premium
- `/redeem <code>` - Redeem code

### Admin Commands
- `/adminmenu` - Menu admin
- `/stats` - Bot statistics
- `/givepremium <id> <days>` - Beri premium
- `/givecoins <id> <amount>` - Beri coins
- `/additem <nama> <rarity>` - Tambah item
- `/deleteitem <nama>` - Hapus item
- `/banuser <id>` - Ban user
- `/unbanuser <id>` - Unban user
- `/broadcast <pesan>` - Broadcast ke semua user
- `/backup` - Backup database

## 🛠️ Teknologi

- [Telegraf](https://telegraf.js.org/) - Telegram Bot Framework
- [Archiver](https://www.npmjs.com/package/archiver) - Zip compression
- Node.js - Runtime environment

## 📊 Database

Bot menggunakan JSON file untuk database:
- `database.json` - Data gacha, items, dan user stats
- `user.json` - Data detail user dan activity log

## 🔒 Keamanan

- Token bot dan data sensitif ada di `config.js` (tidak di-upload ke GitHub)
- Database user tidak di-upload ke repository
- Gunakan `.gitignore` untuk file sensitif

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan:
1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Support

- Channel: [Vinss Students](https://whatsapp.com/channel/0029VaF4IIt1CYoaRgoOaX2i)
- GitHub: [Vinss-Store](https://github.com/Vinss-Store)

## 📄 License

Project ini dibuat untuk edukasi dan pembelajaran.

## 👨‍💻 Author

**Vinss Students**
- YouTube: YT VINSS STUDENTS
- GitHub: [@Vinss-Store](https://github.com/Vinss-Store)
- WhatsApp Channel: [Join Here](https://whatsapp.com/channel/0029VaF4IIt1CYoaRgoOaX2i)

---

⭐ Jangan lupa kasih star jika project ini membantu!
