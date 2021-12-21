var fs = require("fs");

//阻塞模式  文件读取完后才执行程序
var data = fs.readFileSync('server.js');
console.log(data.toString());
console.log("finish");

//非阻塞模式 不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。
fs.readFile('package.json',function(err,data){
    if (err) console.error(err); 
    console.log("读取文件内容："+data.toString());
})