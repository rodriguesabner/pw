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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eX97ySKUqig:APA91bF-dnwCuejj_Zn0W4X9rvmFqKxmKw6g-RLrcRcJgQ_Dgab0dmzrFgbo6y5tb5MfkQ1OZuE1AbtaWcpeX3crXU2P6YsHN3KJirDAzBHl1tAGUYVGbRTNKS7gXKyt6Ru_oMMvTxQs",
    "expirationTime": null,
    "keys": {
        "p256dh": "BFv2v38BoSV4qxIuWvfZDav9sqEAyhlH6vQyDT-QYhLCno_oQs5PCmk7YAJfqqASE3loLEhRETksCfZMDSwsQJI",
        "auth": "a-e3LDNuoEDRH-8SuXX0iQ"
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