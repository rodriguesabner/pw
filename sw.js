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

    const actions = event.actions;

    event.actions.map((action) => {
        if (action.action.includes(actions)) {
            event.notification.close();

            console.log(action, action.url);
            event.waitUntil(clients.openWindow(action.url));
        }
    });

    switch (event.actions) {
        case 'open_url':
            clients.openWindow(event.notification.data.url); //which we got from above
            break;
        case 'any_other_action':
            clients.openWindow("https://www.example.com");
            break;
    }
}, false);

self.addEventListener('click', function() {
    if (clients.openWindow) {
        clients.openWindow('https://example.blog.com/2015/03/04/something-new.html');
    }
});