"use strict";self.addEventListener('push', (event) => {
  console.log(event);

  let data = {};
  if (event.data) {
    data = event.data.json();
  }

  const options = {
    body: data.content,
    icon: data.icon,
    vibrate: [300, 100, 400, 100, 400, 100, 400],
    badge: data.icon,
    data,
    actions: data.actions,
  };

  const notification = self.registration.showNotification(data.title, options);
  event.waitUntil(notification);
});

self.addEventListener(
  'notificationclick',
  (event) => {
    const messageId = event.notification.data;
    event.notification.close();

    if (event.action === '') {
      clients.openWindow(messageId.url);
      return;
    }

    messageId.actions.prototype.map((payload) => {
      if (payload.action === event.action) {
        clients.openWindow(payload.url);
      }

      return '';
    });
  },
  false,
);
