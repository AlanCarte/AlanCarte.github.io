if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const n=e=>c(e,r),d={module:{uri:r},exports:b,require:n};i[r]=Promise.all(s.map((e=>d[e]||n(e)))).then((e=>(a(...e),b)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/custom.css",revision:"8d5333693fe9afe30852fb60cf72b2eb"},{url:"css/footer-bar.css",revision:"47488e3430344615ea50e21b716c655e"},{url:"css/home.css",revision:"ba627b6136a51d18416833b1e424ad24"},{url:"css/icon.css",revision:"0c1ce11f1b5792571622669729f7c053"},{url:"css/index.css",revision:"5f91533e990281f8171c06cd36184e22"},{url:"css/music.css",revision:"3c4d518adc874ac68c4c6f4e5ddcfce0"},{url:"css/stars.css",revision:"79fe452e5c71209a10caaedad0941df1"},{url:"css/subscribe.css",revision:"1166c7df67d8314c71ba87c7459cc3f0"},{url:"css/tuijian.css",revision:"9ab997bd81ce74a92c350a181ad55ee9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/view.css",revision:"b2beab233c56f4f82ce6ea38d9f95c10"},{url:"css/welcome.css",revision:"715c2af7f10bf6151251e4dd0313e0ec"},{url:"css/widget.css",revision:"dc20d14ca294b70a7945f2025aeee817"},{url:"404.html",revision:"729a4c5e19b54f85356886f324dc988c"},{url:"js/anzhiyu.js",revision:"5e5ad08228e4b6a487ede118f4d7891d"},{url:"js/anzhiyu/ai_abstract.js",revision:"bd7d0416a912651499efa1a2089a9fa0"},{url:"js/anzhiyu/comment_barrage.js",revision:"d27c413b80b8b250eb1493281299a4e3"},{url:"js/anzhiyu/people.js",revision:"19feb32bba8ba6faf0ec882112eb749b"},{url:"js/anzhiyu/random_friends_post.js",revision:"41796840c1aeb32f3407b426744953f5"},{url:"js/anzhiyu/right_click_menu.js",revision:"a348500003a4ee5284b7d4ad0b9bb70a"},{url:"js/calendar.js",revision:"64a20a3eeec598ecf7ebc99203487649"},{url:"js/chinese-lunar.js",revision:"d40a05a26f055d9c23419c98ddaf694b"},{url:"js/danmu.js",revision:"1e8ec2d54ce522de158992ff8b7e1fc6"},{url:"js/easy-Danmaku.js",revision:"b94d4bdd891b3f0832aaa3e439a41bc1"},{url:"js/icon-font.js",revision:"403534d632d588cb6c2477a01e8acbe3"},{url:"js/main.js",revision:"009c5b06b7783559a46b5a66f3163add"},{url:"js/runtime.js",revision:"ff26bd329682cb14569c4c784d7be968"},{url:"js/search/algolia.js",revision:"d6e42f82f4a683ff9ed2796b2839e5db"},{url:"js/search/local-search.js",revision:"408666da48024f36cdc803686fb19da9"},{url:"js/tw_cn.js",revision:"1ab93057e66c00a59bd33c93abd48932"},{url:"js/universe.js",revision:"c8c96de7a14bba0d6bce5844c6b059ad"},{url:"js/utils.js",revision:"cded7acaa0c295c38edf3599ad7baab4"},{url:"js/view.js",revision:"c7ef6be7942bbfe36b02f8e2ca592a60"},{url:"js/welcome.js",revision:"882234e2acf75f463590d838852c9bf0"},{url:"anzhiyu/random.js",revision:"f6d8a8248cdc48b213ca90f63517c510"},{url:"img/01.png",revision:"dd522fc52f2dbd0bac28be4b251c8cba"},{url:"img/01.webp",revision:"a8604cf2bd6312d994f27bd0d6bcd25c"},{url:"img/404.jpg",revision:"b14bacd60367086972a4ceb7a527481c"},{url:"img/404.webp",revision:"a5e1edc2ce492b1dd423542ac886cda6"},{url:"img/512.png",revision:"9d53a668b160790e175feedd83c9f691"},{url:"img/512.webp",revision:"79447f464768f3e27eeba80387a236a0"},{url:"img/algolia.svg",revision:"f60fbbe4a8afa312b3f6d12182558861"},{url:"img/algolia.webp",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/alipay.jpg",revision:"c0359f05e529065c531b1f908c0713e2"},{url:"img/alipay.webp",revision:"f93d8b74b5ea65a040354f225b12a940"},{url:"img/comment_bg.png",revision:"da63b973271b762d2d3601dd48d80898"},{url:"img/comment_bg.webp",revision:"6df7a3d6d759cb227772f7d68ecde645"},{url:"img/default_cover.jpg",revision:"bc51331fa4831fef1136dc67d9b3ee9d"},{url:"img/default_cover.webp",revision:"1a843fc07cb4268c574d934b0fac235b"},{url:"img/favicon.ico",revision:"463fd720116f4237a0dbf0330c144bf9"},{url:"img/friend_404.gif",revision:"9338dfd8f2404692d4c77ff66ffced06"},{url:"img/friend_404.webp",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"d6b808ce6a48efba98bc2ebddffef10e"},{url:"img/loading.webp",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/paint.png",revision:"2ba1351f488b07d92c7aefafcc8fb011"},{url:"img/paint.webp",revision:"d8471e25bca3e87855f9deddfdcc4836"},{url:"img/paper.png",revision:"cc6512be707e4c5089f1e4c76b47c3f5"},{url:"img/paper.webp",revision:"a77d16ad2293a28cbf56848448de9171"},{url:"img/siteicon/15.png",revision:"2ba1351f488b07d92c7aefafcc8fb011"},{url:"img/siteicon/15.webp",revision:"d8471e25bca3e87855f9deddfdcc4836"},{url:"img/siteicon/16.png",revision:"8ab35089262c8514dab31a905e04384c"},{url:"img/siteicon/16.webp",revision:"c095abe4cd0c798f121a1928b5458c9f"},{url:"img/siteicon/30.png",revision:"2ba1351f488b07d92c7aefafcc8fb011"},{url:"img/siteicon/30.webp",revision:"d8471e25bca3e87855f9deddfdcc4836"},{url:"img/siteicon/32.png",revision:"d366e4162ea1e69d0f4ddd429121725d"},{url:"img/siteicon/32.webp",revision:"7b9d362c25a987cda6a9e2cb6ceca867"},{url:"img/siteicon/apple-icon-180.png",revision:"1efeadf849c18e9b8b83769467f709ab"},{url:"img/siteicon/apple-icon-180.webp",revision:"03984ab12ff5ab6e85390c9f2ba7b954"},{url:"img/siteicon/apple-icon-181.png",revision:"2ba1351f488b07d92c7aefafcc8fb011"},{url:"img/siteicon/apple-icon-181.webp",revision:"d8471e25bca3e87855f9deddfdcc4836"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"8a2c309c4b4f62a4bc15a43ff8461f73"},{url:"img/siteicon/manifest-icon-192.maskable.webp",revision:"89585a013f301a667b4b4fc979523d56"},{url:"img/siteicon/manifest-icon-193.maskable.png",revision:"2ba1351f488b07d92c7aefafcc8fb011"},{url:"img/siteicon/manifest-icon-193.maskable.webp",revision:"d8471e25bca3e87855f9deddfdcc4836"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"1ce12b2b78d3be931a9872287729ee8b"},{url:"img/siteicon/manifest-icon-512.maskable.webp",revision:"c5aa46991e483eb42f886179e1fe03da"},{url:"img/siteicon/manifest-icon-513.maskable.png",revision:"2ba1351f488b07d92c7aefafcc8fb011"},{url:"img/siteicon/manifest-icon-513.maskable.webp",revision:"d8471e25bca3e87855f9deddfdcc4836"},{url:"img/wechat.jpg",revision:"5c37f17374ae93aa6c6e306f2ba06849"},{url:"img/wechat.webp",revision:"6320346d8fcb11c884a7dcd066a34619"},{url:"manifest.json",revision:"b45a665b1f43559901e588e3e3139212"},{url:"/",revision:"index-20231030075211657"},{url:"music/",revision:"music-20231030075211657"},{url:"about/",revision:"about-20231030075211657"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
