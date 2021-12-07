self.addEventListener("push", (event) => {
    let data = {};
    if (event.data) {
        data = event.data.json();
    }

    console.log("Push data", data);

    const options = {
        body: data.content,
        icon: "/src/images/icons/app-icon-96x96.png",
        badge: "/src/images/icons/app-icon-96x96.png",
        data: {
            url: data.openUrl
        },
        actions: data.actions
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    )
});

self.addEventListener('notificationclick', function (event) {
    console.log(event.action);
    switch (event.action) {
        case 'open_url':
            clients.openWindow(event.notification.data.url); //which we got from above
            break;
        case 'any_other_action':
            clients.openWindow("https://www.example.com");
            break;
    }
}, false);