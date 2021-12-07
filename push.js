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
    "endpoint": "https://fcm.googleapis.com/fcm/send/f6cabdmqUPM:APA91bFYNgAbgLEfI7x3Qxw9_bIG3k7RPLZ5Dvh-SjLrJTR3Iw_7oraFfLKUZJylN0GegeLRlb8bRRkuWXQLUDO9KAEB1DvhvlzdVEohbWomrPEle5FLlQue_Gp7F03WuLSRNgo7a5f0",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCsP55TZVDtAtuFJ1Ty3LZ8qMw4fRHb9P8OmTWQo2f4454Mtug28NlSIcBG6bV9ET_o_KKrEczljFOOvjWLTT70",
        "auth": "TxH-A1k7UtO2CTexFd-ZRw"
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