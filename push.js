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
    "endpoint": "https://fcm.googleapis.com/fcm/send/cj3EUAy3Mxw:APA91bGRPjCbWVxsT05Jn3Xcijz2j1yVaWPrTZvIA6Ebo9f_by_o1r2Et5o5XY8USi9pXPirV2ZEHOxfifD--KVQj7NMRVDg7Rf03bdrwhkTjI5xSERZpm9EvPobwqj5W17ISuqavymB",
    "expirationTime": null,
    "keys": {
        "p256dh": "BH7YvNeVGaqs-bTRv8Cu--MxH1cLfvGSdIi-V8xwtdg11EfIceIMrTC3jJk3jMPM06VvVtqmGCn1ILezW3Lzxyg",
        "auth": "Fu7fOMJh2r14AjvqCNh7RA"
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