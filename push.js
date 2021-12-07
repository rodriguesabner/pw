const push = require("web-push");

const vapIdKeys = {
    publicKey: 'BIYU9-MdUzL3bYjmOwuEeBlea33V18PoZ8wkMXU9qcYh1pc5dS63PVf3TEWh-mRJjnxUOZA1bexDbDcRjnoeKlU',
    privateKey: 'ssWDgyb9MU_vK8PiRnzdkGxlFWafZuMdA5RdS60sUZA'
}

const options = {
    vapIdKeys: {
        subject: "mailto:test@abner.com",
        publicKey: vapIdKeys.publicKey,
        privateKey: vapIdKeys.privateKey
    }
}
const sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/csoO-3B_2xk:APA91bFgYdLyt_x798DAueXesPfGBRgxI-ut23hbaMv3sOHgd9KOq4_hjTLOuottiktXO0s5jqn5yLJyXd-j61xsdzeJ2KQH-8Zqf69LGG0FdKAftupy_6ld0JccXe7dpKXLhlG7uuVZ",
    "expirationTime": null,
    "keys": {
        "p256dh": "BPfByE0cXtET1grOjTDZPzuGNhl3FlJJqOG70CX1GsW9m6mbR5N1MBWzBnUiFzbAY1nHAqyLYnmDBBHbzQiKGCE",
        "auth": "JcKEyL55J0uSxwdkCNIaNQ"
    }
}

const data = {
    title: "Abner Rodrigues",
    body: "This is a push notification",
    icon: "https://cdn.iconscout.com/icon/free/png-256/push-notification-2-1175416.png",
    url: "https://abner.com"
}

var payload = 'Here is a payload!';

push.sendNotification(sub, payload, options);