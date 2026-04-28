function placeOrder(item) {
    return new Promise(function(resolve, reject) {
        console.log("Placing order for " + item + "...");
        setTimeout(function() {
            resolve(item);
        }, 1000);
    });
 }
 
 
 function shipOrder(item) {
    return new Promise(function(resolve, reject) {
        console.log("Shipping " + item + "...");
        setTimeout(function() {
            resolve(item);
        }, 1000);
    });
 }
 
 
 function deliverOrder(item) {
    return new Promise(function(resolve, reject) {
        console.log("Delivering " + item + "...");
        setTimeout(function() {
            resolve(item + " delivered to your door! ✅");
        }, 1000);
    });
 }
 
 
 placeOrder("Laptop")
    .then(function(item) {
        return shipOrder(item);
    })
    .then(function(item) {
        return deliverOrder(item);
    })
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });
 

































    function downloadFile() {
        return new Promise(function(resolve, reject) {
            let downloadSuccess = true;
            console.log("File downloading...");
            setTimeout(function() {
                if (downloadSuccess) {
                    resolve("file.txt");
                } else {
                    reject("File download failed!");
                }
            }, 2000);
        });
     }
     function processFile(fileName) {
        return new Promise(function(resolve, reject) {
            let processSuccess = true;
            console.log("Processing " + fileName + "...");
            setTimeout(function() {
                if (processSuccess) {
                    resolve(fileName + " processed successfully!");
                } else {
                    reject("File processing failed!");
                }
            }, 2000);
        });
     }
     
     
    //  downloadFile()
    //     .then(function(fileName) {
    //         return processFile(fileName);   // pass result to next step
    //     })
    //     .then(function(result) {
    //         console.log(result);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });






        async function startProcess() {
           try {
            let fileName= await downloadFile() 
           let result= await processFile(fileName)
           console.log(result);
           
           } catch (error) {
                console.log(error);
           }
        }

        startProcess()
     