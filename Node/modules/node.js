const os=require("os")

console.log("helo world")
console.log("OS",os.type())
console.log("Platform",os.platform())
console.log("CPU Cores",os.cpus().length)
console.log("free memory",os.freemem())
console.log("Total Memory",os.totalmem())