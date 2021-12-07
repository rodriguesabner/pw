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
    "endpoint": "https://fcm.googleapis.com/fcm/send/duBUArJrYrc:APA91bGvODhl7Q3HwP3LjYMHHeHhX1eKPK-mouIRKm_LJNOAYF5QDlSwnFfezWZtI6vw8Qw4jsiDV78jUdXnqlyq3_Rkq2Nbp500BcOsgnJwjYINcpgVLYENszk4CUL8_rV_LIGjyKHY",
    "expirationTime": null,
    "keys": {
        "p256dh": "BPGqHh6oQt2rvEbflrgTdvT9xPzPCAVCCV3Cf19iQdQzTKU237_JcXCjm6A7jyhgTR1e5kbmRooGQbMWr0eMU6k",
        "auth": "JOlh3e3QTedMkfjC8nR6Dw"
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
            title: "👍"
        },
        {
            action: "new_reservation",
            title: "😁"
        }
    ]
}

push.sendNotification(sub, JSON.stringify(data));