const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'coderevolution' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6285857537269',
  atasnama : 'Gilzz(Ranzz)'
}

// Other
global.owner = ['6285857537269',"6281236167286"]
global.premium = ['6285857537269']
global.profilebio = ['6285857537269'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.sponsor = 'no sponsors in:('
global.packname = 'Ranzz Botzな'
global.footer = '© 2022 Ranzz X 4K Sanzz'
global.author = 'Owner : Ranzz(Gilzz)\nIg1 : @agilz1120\nIg2 : @Gadaaaa'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'please wait a moment, processing data...',
		den:'*Sorry You Not Register Yet...*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Loading Please Wait..',
		error:'Error :(',
		success:'Success bang!',
		repiar:'This Feature Maintace!',
		botadm:'Jadiin gw admin dulu!',
		admin:'Khusus admin woi!',
		done:'Done!',
		gc:'Only Group Allowed',
		owner:'Only Owner Allowed'
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://g.top4top.io/p_2443v88g61.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
