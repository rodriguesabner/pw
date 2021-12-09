self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener("push", (event) => {
    let data = {};
    if (event.data) {
        data = event.data.json();
    }

    const options = {
        body: data.content,
        icon: data.icon,
        vibrate: [300, 100, 400, 100, 400, 100, 400],
        badge: data.icon,
        data,
        actions: data.actions
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', function (event) {
    const messageId = event.notification.data;
    console.log('notificationclick', messageId);

    event.notification.close();

    if(event.action === "") {
        clients.openWindow(messageId.url);
        return;
    }

    messageId.actions.map((payload) => {
        if (payload.action === event.action) {
            clients.openWindow(payload.url);
        }
    })
}, false);