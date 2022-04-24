if("serviceWorker" in navigator){
    
    navigator.serviceWorker.register("./script/sworker.js").then(registration=>{
        console.log("Service worker registerd")
        console.log(registration);

    }).catch(error=>{
        console.log("Service worker error")
        console.log(error)

    })

}else{
    alert("servide worker not found")
}