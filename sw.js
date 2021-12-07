self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Return true if you want to remove this cache,
                    // but remember that caches are shared across
                    // the whole origin
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