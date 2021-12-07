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
    "endpoint": "https://fcm.googleapis.com/fcm/send/cZAIhw5ATHg:APA91bEDI_UkF1d2uVvSX2dIpU1Du2jq1KN-4OnfLWL6JKyH_GGTtwlReVmJw-sK6YzUPDl_BVmDD-WHyTtQ6ve8MCVfF14TkZopBz9UcfLiCUG6QdwHyoXE5nw1IEakzJgjG5UWuQ5K",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEJEekgWCv3VvmKelVF8h4LH33sQsx5la2fNDLu6kqGES2qEiDgqHvnLBQ3fdZmKs-hgveR5N1t1myG-jAtXee0",
        "auth": "GjnjVHjASlETTDNMTIPY_w"
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