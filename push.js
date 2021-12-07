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
    "endpoint": "https://fcm.googleapis.com/fcm/send/dqkapiqqJ6E:APA91bF8dEqe1bWHaSFud-rwM9_LDVi3cMmSAzZ4wvXdEu4nHbsvPtD21frayC_uRt_YsZdpvzzeBjkYui-eow69jeTznxvFAhkJauv2Y26APxhpyYpRdnW4G2Li3d3FKJs0r9lEP0g3",
    "expirationTime": null,
    "keys": {
        "p256dh": "BAJTTtkLT6zQi8PoahZHmcT7132kvKG7fZ4qPajmcA7w-F7rKhKrFBaJLzVzeCS1YIEmvTvcxuu5QOAu_YeYPBQ",
        "auth": "viUBGPWH4lNELLdBzwb-DA"
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