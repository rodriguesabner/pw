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
    "endpoint": "https://fcm.googleapis.com/fcm/send/dp5SlxPWRdk:APA91bF9blt7luLJzTeWhm57YhDHQuQc7fhTazByVy9NnB6g-mwwbKxuaiK_tV0SKYAF3hUo8w5VQWwZ_SyAZ2dZePWo335gxADVtJzKEXZrlNCKASU4YBwjLKsd7Kl7GKxWtWn_cRJZ",
    "expirationTime": null,
    "keys": {
        "p256dh": "BO2vMiSY4-oAnY3mfqTu75qNLcVVHHTErN7XVH65odiP9LrTKhIxmqK9tjwaR_dq0Wimi2VRw9jEiCc_4IQ7Oyg",
        "auth": "hLlB6hmUeWpMzqo4N-sZXQ"
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