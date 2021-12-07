self.addEventListener("push", (event) => {
    console.log("Push data received", event);

    let data = {};
    if (event.data) {
        data = event.data.json();
    }

    const options = {
        body: data.content,
        icon: "/src/images/icons/app-icon-96x96.png",
        badge: "/src/images/icons/app-icon-96x96.png",
        data: {
            url: data.openUrl
        },
        actions: [
            {
                action: "yes",
                title: "👍"
            },
            {
                action: "no",
                title: "👎"
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    )
})