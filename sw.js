"use strict";window.self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => caches.delete(cacheName)),
    )),
  );
});

window.self.addEventListener('push', (event) => {
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

  const notification = window.self.registration.showNotification(data.title, options);
  event.waitUntil(notification);
});

window.self.addEventListener(
  'notificationclick',
  (event) => {
    const messageId = event.notification.data;
    event.notification.close();

    if (event.action === '') {
      window.clients.openWindow(messageId.url);
      return;
    }

    messageId.actions.prototype.map((payload) => {
      if (payload.action === event.action) {
        window.clients.openWindow(payload.url);
      }

      return '';
    });
  },
  false,
);
