var posts=["2023/07/15/Java面试题基础/","2023/06/25/Git简单笔记/","2023/07/20/Map集合/","2023/06/20/MyBatis基础人篇/","2023/06/15/hello-world/","2023/08/06/Redis/","2023/06/30/带你了解Linux/","2023/06/09/Markdown语法与外挂标签写法汇总/","2023/06/25/javaEE/","2023/07/01/Linux命令大全--上/","2023/07/28/设计模式/","2023/06/15/微机原理与接口技术/","2023/06/15/C语言基础篇/","2023/07/01/Linux命令大全--下/","2023/07/25/线程和锁/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://pic-1318708771.cos.ap-beijing.myqcloud.com/test/202307031657136.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","hundredSuffix":"","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活","siteshot":"https://pic-1318708771.cos.ap-beijing.myqcloud.com/test/202306232207146.png"},{"name":"轻笑Chuckle","hundredSuffix":"","link":"https://www.qcqx.cn/","avatar":"https://www.qcqx.cn/img/head.webp","descr":"漫天倾尘 风中轻笑","siteshot":"https://www.qcqx.cn/img/qcqx.webp"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","siteshot":"https://npm.elemecdn.com/akilar-friends@latest/siteshot/akilar.top.jpg","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","siteshot":"https://pic-1318708771.cos.ap-beijing.myqcloud.com/test/202307121733295.png","rss":"/atom.xml"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{"name":"JayHrn","link":"https://blog.jayhrn.com","avatar":"https://npm.elemecdn.com/hrn-blog@1.0.0/avatar.svg","descr":"念念不忘，必有回响"},{"name":"杜老师说","hundredSuffix":"","link":"https://dusays.com","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.qjqq.cn/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活","siteshot":"https://avatar.qjqq.cn/1/647571edf20a9.webp!avatar"},{"name":"小植の小破站","link":"https://blog.xiaoztx.top","avatar":"https://blog.xiaoztx.top/img/xiaozhi.jpg","descr":"生生不息，好运不止"},{"name":"Black Flies","link":"https://www.yyyzyyyz.cn/","avatar":"https://npm.elemecdn.com/imgscdn/img/202111191951780.JPG","descr":"When nothing goes right,just go left."},{"name":"神经蛙`Blog","link":"https://hexo.sjava.cn/","avatar":"https://hexo.sjava.cn/img/pic.png","descr":"种一棵树最好的时间是十年前，其次是现在。","siteshot":"https://lx95.top/upload/2022/04/215738-1544450258391e.jpg"},{"name":"虹色轨迹🌠","link":"https://ovoz.cn","avatar":"https://ovoz.cn/assets/avatar.webp","descr":"做一颗星星，有棱有角，黑暗中闪闪发光🍭🍭🍭","siteshot":"https://ovoz.cn/assets/ovoz.cn.jpg"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };