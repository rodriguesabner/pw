const push = require("web-push");

const vapIdKeys = {
    publicKey: 'BIYU9-MdUzL3bYjmOwuEeBlea33V18PoZ8wkMXU9qcYh1pc5dS63PVf3TEWh-mRJjnxUOZA1bexDbDcRjnoeKlU',
    privateKey: 'ssWDgyb9MU_vK8PiRnzdkGxlFWafZuMdA5RdS60sUZA'
}

push.setVapidDetails(
    "mailto:test@abner.com",
    vapIdKeys.publicKey,
    vapIdKeys.privateKey
);

const sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/c0YG-0738vQ:APA91bFmW0tmIDC5EpCmVT7xAZ2NHbkOvLI4U0IoODZqZIEFnjNwOhxmtB8opVdgKFL5rKkfhkyIkoNki1wJG59zXC1RXFyiLHfqdYPYZDPwA4FocpPEdphKZMZJVAkMqtNyTlUdZImD",
    "expirationTime": null,
    "keys": {
        "p256dh": "BK471UNp4frd-zotDDf00yK85umDKC5pKcBCs4MAmnbE_jOxmmvB401epwCJIFQCV1DKlI5gKxTIZjrjniBzwpY",
        "auth": "oL43M1FE9dC8gFte2vJmzQ"
    }
}

const data = {
    title: "Venit Hotel Barra",
    content: "Seu checkin foi confirmado!",
    icon: "https://cdn.iconscout.com/icon/free/png-256/push-notification-2-1175416.png",
    url: "https://zoox.com",
    actions: [
        {
            action: "pre_checkin",
            title: "Realizar Web Checkin",
            url: "https://zooxdemo.rc.zooxpass.com/"
        },
        {
            action: "new_reservation",
            title: "Nova Reserva",
            url: "https://adminrc.zooxpass.com/"
        }
    ]
}

push.sendNotification(sub, JSON.stringify(data));