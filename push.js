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
    "endpoint": "https://fcm.googleapis.com/fcm/send/cHyl0pYYZ1E:APA91bH_yOoXoLR1RnfB49jO2xbiBN8GRCMlKVf-1knTfxnlAm6XeLm9s_uXwyObogzoCUsxI30Mk2nrLaCAUvXZcG1_qFIdc8aT0CzKuaH0z7J188yY7kCrTHd0YP1fNDyVaVXYSacS",
    "expirationTime": null,
    "keys": {
        "p256dh": "BLxD1d4yRhWPyoLQhv7AePWKcITJ_EcExMingLAiEZWyBkABjO15ijz41mwykKCt50f6kOmDkLZ1oVijiM77hXk",
        "auth": "6J7pgWXmdexVT3mA_RFZAA"
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