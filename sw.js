self.addEventListener("push", (opts) => {
    console.log("Push data received", opts);

    const { data } = opts;

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

    opts.waitUntil(
        self.registration.showNotification(data.title, options)
    )
})