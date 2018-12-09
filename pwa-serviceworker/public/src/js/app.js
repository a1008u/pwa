let deferredPrompt;

/**
 * Service Workerの存在確認し、特定のファイルをserviceworkerに登録する
 * Service Workerはこのドメイン下ですべての fetch イベントを受け取ります
 */
if('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register('/sw.js')
    .then(() => console.log('Service worker registered'))
    .catch(err => console.log('ServiceWorker registration failed: ', err));
}

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('beforeinstallprompt fired')
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
