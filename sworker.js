self.addEventListener("install",e=>{
  
    e.WaitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll([
                "./index.html",
            "./style.css",
            "./img/icon1.png",
            "./img/icon2.png",
            "./img/hotstar.jpg",
            "./img/jio tv.jpg",
            "./img/tata.jpg",
            "./img/vi.png",
            "./Bootstrap/bootstrap.css",
            "./Bootstrap/bootstrap.js",
            "./index2.html" ,
            "./img/4K-Black-Background-Design-Best-Wallpaper-40658.jpg",
            ]);
        })
    )

})
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
})