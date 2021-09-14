const VERSION = 'v2';
const cacheName = 'ArNumMate'; // 캐시제목 선언
const cacheList = [ // 캐시할 파일 선언
  './',
  './exchange.html',
  './info.html',
  './manifest.json',
  './favicon.ico',
  './favicon.png',
  './statics/js/onload.js',
  './statics/js/main.js',
  './statics/js/info.js',
  './statics/js/exchange.js',
  './statics/js/convert.js',
  './statics/js/call-api.js',
  './statics/style/theme.css',
  './statics/style/normalize.css',
  './statics/style/main.css',
  './statics/style/font.css',
  './statics/images/app/background-exchange.png',
  './statics/images/app/background-info.png',
];

// const log = msg => {
//   console.log(`[admin] Service Worker ${_version} ${msg}`);
// }

// 2.서비스워커를 설치하고 캐시를 저장함
self.addEventListener('install', event => {
  // console.log('[admin] Service Worker is installed');
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      // console.log('[admin] File is saved at cache');
      return cache.addAll(cacheList);
    })
  );
});

// 3. 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener('activate', event => {
  // console.log('[admin] Service Worker is running');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName) {
          log('Removing old cache ' + key);
          return caches.delete(key);
        }
      }));
    })
  );
});

// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (!response) {
        // console.log("[admin] Data is requested from network", event.request)
        return fetch(event.request);
      }
      // console.log("[admin] Data is requested from cache", event.request)
      return response;
    }).catch(err => console.log(err))
  );
});
