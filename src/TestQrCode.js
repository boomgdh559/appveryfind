var QRCode = require('qrcode');

QRCode.toFile('./QRCode/59130500068.png', "0x0917B0D3b4d9e97Cd7f15a04d87262D9E4444C4a", {
    color: {
        dark: '#000000',  // Blue dots
        light: '#0000' // Transparent background
    },
    scale: 128

}, function (err) {
    if (err) throw err
    console.log('done')
})





