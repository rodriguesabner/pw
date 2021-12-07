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
    "endpoint": "https://fcm.googleapis.com/fcm/send/flm0G7I6mfw:APA91bFBoC4alwug68ZvfAIqFqgEQIxdrIHwQZ_IGOX7_l0v4kCxSUHOSC-uWjNfjUw53naBdKK8SiocnMDfxYjJ0ELmD83XwdRf2fITFjfn0kh3uKLrlIiOgdUBPA3BTEI9KNfBuU4-",
    "expirationTime": null,
    "keys": {
        "p256dh": "BH0gwppdBvs8NcS1-OuTCRhU9Nqnn8TgLozNuk4GquzaSsu020_TSK4SeIL_bqJAHSFpRZlYPneCo-UvMezLa1s",
        "auth": "OhhotQSJgLZqWmax5TJ0Ag"
    }
}

const data = {
    title: "Venit Hotel Barra",
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