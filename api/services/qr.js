var QRCode = require('qrcode')

QRCode.toDataURL('https://youtube.com', function (err, url) {
    console.log(url)
})

QRCode.toString('https://youtube.com',{type:'terminal'}, function (err, url) {
    console.log(url)
})