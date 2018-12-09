# Progressive Web Apps - Complete Guide
PWAを理解する

## PWAを理解する
- Understanding the App Manifest

## 手順(How to Use)
```Node
npm install
npm start
```

## lifecycle
index.html -> app.js(loads) -> sw.js(registers)

    what's doing the sw.js?
    1.Installation -> install Event
    2.Activation -> activate Event (service worker now controls all pages of scope)
    3.Idle -> fetch(trigger) -> index.html
    4.Terminated
   
## Q&A 
    Q. What's the difference between Web Workers and Service Workers?
    
    A. Service Workers are a special type of Web Workers. 
        Web Workers also run on a background thread, decoupled from the DOM. 
        They don't keep on living after the page is closed though. 
        The Service Worker on the other hand, 
        keeps on running (depending on the operating system) 
        and also is decoupled from an individual page. 
    
