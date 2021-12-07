self.addEventListener("push", (event) => {
    let data = {};
    if (event.data) {
        data = event.data.json();
    }

    console.log("Push data", data);

    const options = {
        body: data.content,
        icon: "/src/images/icons/app-icon-96x96.png",
        vibrate: [300, 100, 400, 100, 400, 100, 400],
        badge: "/src/images/icons/app-icon-96x96.png",
        data: {
            url: data.openUrl
        },
        actions: data.actions
    };

    event.waitUntil(self.registration.showNotification(data.title, options))
});

self.addEventListener('notificationclick', function (event) {
    console.log(event.actions);

    switch (event.actions) {
        case 'pre_checkin':
            event.notification.close();
            clients.openWindow(event.actions["pre_checkin"].url); //which we got from above
            break;
        case 'new_reservation':
            event.notification.close();
            event.waitUntil(clients.openWindow(event.actions["new_reservation"].url));
            break;
    }
}, false);