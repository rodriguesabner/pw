self.addEventListener("push", (event) => {
    let data = {};
    if (event.data) {
        data = event.data.json();
    }

    const options = {
        body: data.content,
        icon: "/src/images/icons/app-icon-96x96.png",
        vibrate: [300, 100, 400, 100, 400, 100, 400],
        badge: "/src/images/icons/app-icon-96x96.png",
        data,
        actions: data.actions
    };

    const notification = new Notification(data.title, options);
    event.waitUntil(self.registration(notification))

    notification.addEventListener("click", (event) => {
        console.log(event);

        event.waitUntil(clients.matchAll().then((clients) => {
            clients.forEach((client) => {
                if (client.url === data.url) {
                    client.focus();
                }
            })
        }))
    })
});

self.addEventListener('notificationclick', function (event) {
    const messageId = event.notification.data;
    console.log('notificationclick', messageId);

    event.notification.close();

    if (event.action === 'pre_checkin') {
        clients.openWindow("https://www.venithoteis.com/");
    } else if (event.action === 'new_reservation') {
        clients.openWindow("https://adminrc.zooxpass.com/");
    } else {
        clients.openWindow("https://zooxdemo.rc.zooxpass.com/");
    }
}, false);