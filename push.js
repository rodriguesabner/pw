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
    "endpoint": "https://fcm.googleapis.com/fcm/send/csoO-3B_2xk:APA91bFgYdLyt_x798DAueXesPfGBRgxI-ut23hbaMv3sOHgd9KOq4_hjTLOuottiktXO0s5jqn5yLJyXd-j61xsdzeJ2KQH-8Zqf69LGG0FdKAftupy_6ld0JccXe7dpKXLhlG7uuVZ",
    "expirationTime": null,
    "keys": {
        "p256dh": "BPfByE0cXtET1grOjTDZPzuGNhl3FlJJqOG70CX1GsW9m6mbR5N1MBWzBnUiFzbAY1nHAqyLYnmDBBHbzQiKGCE",
        "auth": "JcKEyL55J0uSxwdkCNIaNQ"
    }
}

const data = {
    title: "Checkin Chegando",
    content: "Seu checkin foi confirmado!",
    icon: "https://cdn.iconscout.com/icon/free/png-256/push-notification-2-1175416.png",
    openUrl: "https://zoox.com",
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