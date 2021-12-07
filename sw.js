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

    event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', function (event) {
    const messageId = event.notification.data;
    console.log('notificationclick', messageId);

    event.notification.close();

    // //dynamic click action
    // event.waitUntil(
    //     clients.openWindow(messageId.url)
    // );

    event.actions.map((arr) => {
        arr.some((action) => {
            if (action.action === arr.action) {
                clients.openWindow(action.url);
            }
        });
    })
}, false);