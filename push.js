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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eN6w0wcO9ow:APA91bGN2HdGzBbMm7tg8AgyxW-fr_ssiNt9PO0PQVP06WuTWdBW2nNgHgUy51JpsaWSdDl8ZYwucPQB7u1_alE-eoDyZAxP7A-L3kgXMC1bJLdU0EJyxhe8veWUuxrrXJhQ1wv258MT",
    "expirationTime": null,
    "keys": {
        "p256dh": "BGs3ji7Gv0CYWbhdMJMT51kOennNp3ljWDg0pVb4Dj-RzFUYFUVsLVGVTYEeyeqcASRmkTC9BNGttEBHqpSAoRc",
        "auth": "LVDMqcvWTP3P_ND6evBEsw"
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