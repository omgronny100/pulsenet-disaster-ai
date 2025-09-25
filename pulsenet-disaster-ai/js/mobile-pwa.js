// mobile-pwa.js
// Registers service worker, caches assets, handles push notifications

export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(reg => console.log('Service Worker registered:', reg))
            .catch(err => console.error('Service Worker registration failed:', err));
    }
}

export function requestPushPermission() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                // Subscribe to push notifications (requires backend)
                console.log('Push notifications enabled');
            }
        });
    }
}

export function cacheAssets(assets) {
    if ('caches' in window) {
        caches.open('pulsenet-cache').then(cache => {
            cache.addAll(assets);
        });
    }
}
