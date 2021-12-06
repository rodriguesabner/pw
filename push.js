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
    "endpoint": "https://fcm.googleapis.com/fcm/send/cE9XdEPKIsY:APA91bF_A9b1bSeIBJbrCoMGsYasD2UCfH2mIEedJ0besBFjOwnXSYG4EfrVqzEJc3E8aDXQFBQtZb6CVQ-40vB_pVz0Ne3BD6qKPqlZQTfsS03822EkQ6lFV6l3SzcwI289zT0EOr7R",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCqTCWCMfW_5vH82xDR8-OWm27C-af6dRn50L18xGiyESNfNEGJu9UVeyKFGrAUfVc1Sw0woKJRFoYK5TJG1iko",
        "auth": "-vo84qM_HlgyY5CszPuzDw"
    }
}

push.sendNotification(sub, "Testeeeee")