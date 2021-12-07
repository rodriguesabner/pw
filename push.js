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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eE1jAJDSsXo:APA91bEx6uzZxNJ2h_c27HSXuGMDnIE7-GGYlU-JaNnoDeK5e8l_2UzCjtlTnkhbzzNScUiwV8o8IA6gMGXCmHVqXCXb6KicVjj45Zg_KSN1dymUdP1_P21bP1-Dwv0EgkaBr2BOTcmF",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEAlV8m5PwcIMvDltny-6DOm4onhIXwDE3i6tnyHVX8Bmr13GQe8n0XAr3fwwKfvEnwUgj6yAnD3T55sPV_O4tM",
        "auth": "w8bfDYZ3s32_0nynghgl-A"
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