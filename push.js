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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eTypuGAbi98:APA91bEXsim_I6MKJysW8geqpn0ERjydQO2A-DNyrD6WVrcFMS3YCouYTsC1Ze8byoycikD9546g4sOJm6Ptlndhky017u5pNBeXdAbTJ-uVuAYSpkgiCjqgCNtLYTbIaaWbWXIxSLUz",
    "expirationTime": null,
    "keys": {
        "p256dh": "BKF9kGHbFhWV7p4hHgmGf4t_NI-0yoGOfbW5WZVFeQ79BLVdQU7-ylybeeOZBMcg5FzphXbTJWwO2DioCXx92Rg",
        "auth": "TwbiO_zJhA5Zdlaer9YYVg"
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