<center> 
<script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
</center> 

# <span id="jinrishici-sentence">今日诗词</span>

<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
/>


<style>
    /*圆角*/
#rcorners1 {
  border-radius: 25px;
  background: linear-gradient(to right, rgba(189, 224, 245), rgba(218, 232, 241), rgba(238, 237, 238));
  /* #F0EFEB; F5F4F1*/
  padding: 20px;
  width: 100%;
  height: 100px;
  text-align: center;
  font-size: 16px;
}
#rcorners2 {
  border-radius: 25px;
  border: 2px solid #518FC1;
  padding: 20px;
  width: 100%;
  height: 100%;
  font-size: 16px;
}
    .date-display {
        color: #4351AF;
    }
</style>

<div id="rcorners2" >

<div id="rcorners1" class="date-display">
    <p class="p1"></p>
</div>

<script defer>
    function format(newDate) {
        const day = newDate.getDay();
        const y = newDate.getFullYear();
        const m = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth() + 1;
        const d = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
        const h = newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
        const min = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes();
        const s = newDate.getSeconds() < 10 ? `0${newDate.getSeconds()}` : newDate.getSeconds();
        const dict = {1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六", 0: "天"};
        
        return `${y}年${m}月${d}日 ${h}:${min}:${s} 星期${dict[day]}`;
    }

    const timerId = setInterval(() => {
        const newDate = new Date();
        const p1 = document.querySelector(".p1");
        if (p1) {
            p1.textContent = format(newDate);
        }
    }, 1000);
</script>

</div>

!!! pied-piper1 "“画写物外形，要物形不改；诗传画外意，贵有画中态。”"

    === "诗情"
        - [x] [《鹊桥仙》](http://love.cscottage.top/shihua/shi/queqiaoxian/)

        - [x] [《如果我是》](http://love.cscottage.top/shihua/shi/ruguowoshi/)

        - [x] [《你说，你想去看海》](http://love.cscottage.top/shihua/shi/kanhai/)

        - [x] [《盼暖春来》](http://love.cscottage.top/shihua/shi/pannuanchunlai/)

        - [x] [《想有个房间》](http://love.cscottage.top/shihua/shi/fangjian/)

        - [x] [《一剪梅》](http://love.cscottage.top/shihua/shi/yijianmei/)

    === "画意"
        一些“拙劣的”，只有感情没有技巧的模仿~

        - [C](http://love.cscottage.top/shihua/hua/c/kumu/)

        - [S](http://love.cscottage.top/shihua/hua/s/20180829/)