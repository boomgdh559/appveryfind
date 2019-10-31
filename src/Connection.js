//Web3 0.20
const Web3 = require('web3');
//const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8543'));
const web3 = new Web3(new Web3.providers.HttpProvider('http://rinkeby.infura.io/v3/03a66aafd8f04156b8d48aac7060af71'));

var transcriptAbi = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"stdId","type":"uint256"},{"name":"stdName","type":"string"},{"name":"stdDegree","type":"string"},{"name":"stdGPA","type":"string"},{"name":"stdDateGrad","type":"string"},{"name":"json","type":"string"}],"name":"addTranscript","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"stdId","type":"uint256"},{"name":"json","type":"string"}],"name":"editJSONTranscript","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"stdId","type":"uint256"}],"name":"showJSONTranscript","outputs":[{"name":"json","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"stdId","type":"uint256"}],"name":"showTranscript","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"degree","type":"string"},{"name":"gpa","type":"string"},{"name":"dateGrad","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ident","type":"address"}],"name":"verifyQRCode","outputs":[{"name":"id","type":"uint256"},{"name":"name","type":"string"},{"name":"degree","type":"string"},{"name":"gpa","type":"string"},{"name":"dateGrad","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]);
var transcriptAddr = "0xA9020a84F30637F29d988804Ef76B0e302815fd6";

transcriptAbi.options.address = transcriptAddr
// (async() => {
//    await transcript.showTranscript(1001,(err,res)=>{
//        console.log(res)
//    })
// })()



module.exports = {web3,transcriptAbi};