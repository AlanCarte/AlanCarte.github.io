function danmu(){if("/comments/"!=location.pathname||document.body.clientWidth<768)return;console.log(1);const e=new EasyDanmaku({page:"/comments/",el:"#danmu",line:10,speed:20,hover:!0,loop:!0});let t=saveToLocal.get("danmu");if(t)e.batchSend(t,!0);else{let a=[];function n(e){return e=(e=(e=(e=(e=e.replace(/<\/*br>|[\s\uFEFF\xA0]+/g,"")).replace(/<img.*?>/g,"[图片]")).replace(/<a.*?>.*?<\/a>/g,"[链接]")).replace(/<pre.*?>.*?<\/pre>/g,"[代码块]")).replace(/<.*?>/g,"")}fetch("https://ait.haodene.love/",{method:"POST",body:JSON.stringify({event:"GET_RECENT_COMMENTS",includeReply:!1,pageSize:100}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((({data:t})=>{t.forEach((e=>{null==e.avatar&&(e.avatar="https://cravatar.cn/avatar/d615d5793929e8c7d70eab5f00f7f5f1?d=mp"),a.push({avatar:e.avatar,content:e.nick+"："+n(e.comment),url:e.url+"#"+e.id})})),e.batchSend(a,!0),saveToLocal.set("danmu",a,.02)}))}document.getElementById("danmuBtn").innerHTML="<button class=\"hideBtn\" onclick=\"document.getElementById('danmu').classList.remove('hidedanmu')\">显示弹幕</button> <button class=\"hideBtn\" onclick=\"document.getElementById('danmu').classList.add('hidedanmu')\">隐藏弹幕</button>"}danmu(),document.addEventListener("pjax:complete",danmu);