if("serviceWorker" in navigator){
    
    navigator.serviceWorker.register("sworker.js").then(registration=>{
        console.log("Service worker registerd")
        console.log(registration);

    }).catch(error=>{
        console.log("Service worker error")
        console.log(error)

    })

}else{
    alert("service worker not found")
}