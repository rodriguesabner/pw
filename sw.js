self.addEventListener("push", () => {    
    self.registration.sendNotification("oi", {});
})