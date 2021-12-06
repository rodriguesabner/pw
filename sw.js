self.addEventListener("push", (data) => {
    console.log("Push data received", data);
    
    const data = {
        title: "Push Notification",
        content: "Click to see the notification",
        openUrl: "/"
    };
    
    const options = {
        body: data.content,
        icon: "/src/images/icons/app-icon-96x96.png",
        badge: "/src/images/icons/app-icon-96x96.png",
        data: {
        url: data.openUrl
        }
    };
    
    self.registration.showNotification(data.title, options);
})