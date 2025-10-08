
<!-- 在头部添加预加载关键资源 -->
<link rel="preload" href="img/surer.jpg" as="image" fetchpriority="high">
<link rel="preload" href="img/chaos.jpg" as="image">
<div class="header-row">
  <!-- 左侧：文字内容 -->
  <div class="header-text">
    <div class="header-title">Chaos & Surer</div>
    <div class="header-subtitle">
      <span class="header-subtitle-inner">
        Two Troublemakers' Zone Journey
        <svg width="400" height="18" class="header-underline" xmlns="http://www.w3.org/2000/svg">
          <path d="M8,12 Q38,18 68,12 Q98,6 128,12 Q158,18 188,12 Q218,6 248,12 Q278,18 308,12"
            stroke="#6ecbff" stroke-width="5" fill="none"
            stroke-linecap="round" stroke-linejoin="round"
            style="filter: blur(0.2px); opacity: 0.85;" />
        </svg>
      </span>
    </div>
    <div class="header-btns">
      <a href="https://love.cscottage.top" target="_blank" class="header-btn">Home</a>
      <a href="mailto:weichaos111@outlook.com" class="header-btn">Contact me</a>
    </div>
  </div>
  <!-- 右侧：头像及光辉 -->
  <div class="header-avatar">
    <div class="flip-glow-ultimate">
      <div class="flip-glow-ultimate-glow"></div>
      <div class="flip-glow-ultimate-imgs">
        <img src="img/surer.jpg" alt="Back Image" class="flip-glow-ultimate-back" loading="eager" fetchpriority="high" width="280" height="280">
        <img src="img/chaos.jpg" alt="Front Image" class="flip-glow-ultimate-front" loading="lazy" width="280" height="280">
      </div>
    </div>
  </div>
</div>

<!-- 移动端显示的标语 -->
<div class="mobile-motto">
  <h1>心之所向 素履以往</h1>
</div>

<style>
/* ====== 布局主容器 ====== */
.header-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  margin: 48px 0 32px 0;
  flex-wrap: wrap;
  min-height: 320px;
}

/* ====== 左侧文字区 ====== */
.header-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 260px;
  max-width: 420px;
  flex: 1 1 320px;
  padding: 0 8px;
}

.header-title {
  font-size: 2.2rem;
  /* font-family: 'LXGW WenKai', 'Segoe UI', 'PingFang SC', 'Hiragino Sans', Arial, sans-serif; */
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
  background: linear-gradient(to right, #3a8dde, #d6a88fff, #e85d12ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
  align-items: center;
  text-shadow: 0 2px 10px rgba(106, 203, 255, 0.13);
}

.header-subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
  position: relative;
  margin-bottom: 22px;
  /* font-family: 'LXGW WenKai', 'Segoe UI', 'PingFang SC', Arial, sans-serif; */
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap; /* 防止文本换行 */
}

.header-subtitle-inner {
  color: #757575;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  letter-spacing: 0.5px;
  white-space: nowrap; /* 确保文本不会换行 */
  width: auto; /* 确保宽度自适应内容 */
}

/* Safari特定修复 */
@media not all and (min-resolution:.001dpcm) { 
  @supports (-webkit-appearance:none) {
    .header-subtitle-inner {
      display: inline-block;
      width: auto !important;
      min-width: 280px; /* 确保足够宽度容纳文本 */
    }
  }
}

/* 添加深色模式的文字颜色适配 - 更强烈的对比度 */
@media (prefers-color-scheme: dark) {
  .header-subtitle {
    color: #757575;
  }
  
  .header-subtitle-inner {
    color: #757575;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5) !important; /* 增强阴影 */
  }
  
  .header-motto {
    color: #d0d0d0 !important; /* 更亮的灰色 */
  }
  
  /* 确保SVG波浪线在深色模式下可见 */
  .header-underline path {
    stroke: #6ecbff !important; /* 确保波浪线颜色鲜明 */
    opacity: 1 !important;
  }
}

.header-underline {
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: none;
}

.header-motto {
  /* font-family: 'LXGW WenKai', sans-serif; */
  font-size: 1.2rem;
  color: #757575;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 22px;
  opacity: 0.92;
}

.header-btns {
  display: flex;
  gap: 18px;
  margin-top: 8px;
}

.header-btn {
  display: inline-block;
  padding: 7px 22px;
  font-size: 1rem;
  font-weight: 500;
  color: #3a8dde;
  background: #f5faff;
  border: 1.5px solid #b6eaff;
  border-radius: 24px;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border 0.2s;
  box-shadow: 0 2px 8px rgba(106, 203, 255, 0.07);
}
.header-btn:hover {
  background: #e6f4ff;
  color: #222;
  border-color: #3a8dde;
}

/* 夜间模式按钮样式 */
@media (prefers-color-scheme: dark) {
  .header-btn {
    color: #6ecbff;
    background: rgba(30, 41, 59, 0.8);
    border-color: rgba(110, 203, 255, 0.4);
    box-shadow: 0 2px 8px rgba(106, 203, 255, 0.1);
  }
  
  .header-btn:hover {
    background: rgba(110, 203, 255, 0.15);
    color: #ffffff;
    border-color: #6ecbff;
  }
}

/* 为使用 data-md-color-scheme 的主题添加支持 */
[data-md-color-scheme="slate"] .header-btn {
  color: #6ecbff;
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(110, 203, 255, 0.4);
  box-shadow: 0 2px 8px rgba(106, 203, 255, 0.1);
}

[data-md-color-scheme="slate"] .header-btn:hover {
  background: rgba(110, 203, 255, 0.15);
  color: #ffffff;
  border-color: #6ecbff;
}

/* ====== 右侧头像区 ====== */
.header-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  flex: 0 0 280px;
}

.flip-glow-ultimate {
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-glow-ultimate-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 320px; height: 320px; /* 从360px减小到320px */
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(circle at 60% 40%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 60%, transparent 100%),
    conic-gradient(from 0deg,
      #ff9edb 0%, #a2d8ff 20%, #a8ffb0 40%, #fff5a8 60%, #ffb0b0 80%, #ff9edb 100%
    );
  filter: blur(50px) brightness(1.1) saturate(1.2); /* 减小模糊半径和亮度 */
  opacity: 0.85; /* 降低不透明度 */
  animation: 
    glow-ultimate-rotate 15s linear infinite, 
    glow-ultimate-breath 5s ease-in-out infinite alternate,
    glow-ultimate-hue 25s linear infinite;
}

@keyframes glow-ultimate-rotate {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
@keyframes glow-ultimate-breath {
  0% { opacity: 0.7; filter: blur(50px) brightness(1.05) saturate(1.1); transform: translate(-50%, -50%) scale(0.92);}
  50% { opacity: 0.85; filter: blur(55px) brightness(1.15) saturate(1.25); transform: translate(-50%, -50%) scale(1.0);}
  100% { opacity: 0.7; filter: blur(50px) brightness(1.05) saturate(1.1); transform: translate(-50%, -50%) scale(0.92);}
}

/* 为深色模式添加特定的光辉调整 */
@media (prefers-color-scheme: dark) {
  .flip-glow-ultimate-glow {
    width: 300px; height: 300px; /* 在深色模式下进一步减小 */
    filter: blur(45px) brightness(0.95) saturate(1.1); /* 降低亮度 */
    opacity: 0.75; /* 降低不透明度 */
  }
  
  @keyframes glow-ultimate-breath {
    0% { opacity: 0.65; filter: blur(45px) brightness(0.9) saturate(1.0); transform: translate(-50%, -50%) scale(0.9);}
    50% { opacity: 0.75; filter: blur(50px) brightness(1.0) saturate(1.15); transform: translate(-50%, -50%) scale(0.98);}
    100% { opacity: 0.65; filter: blur(45px) brightness(0.9) saturate(1.0); transform: translate(-50%, -50%) scale(0.9);}
  }
}

@keyframes glow-ultimate-hue {
  0% { filter: blur(60px) brightness(1.2) saturate(1.3) hue-rotate(0deg); }
  50% { filter: blur(60px) brightness(1.2) saturate(1.3) hue-rotate(20deg); }
  100% { filter: blur(60px) brightness(1.2) saturate(1.3) hue-rotate(0deg); }
}

.flip-glow-ultimate-imgs {
  position: relative;
  width: 280px;
  height: 280px;
  perspective: 1200px;
  z-index: 2;
}
.flip-glow-ultimate-imgs img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 8px 24px rgba(14, 30, 37, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2);
  backface-visibility: hidden;
  transition: transform 1.2s cubic-bezier(.4,2,.6,1), box-shadow 0.3s ease;
  background: #fff;
}
.flip-glow-ultimate-imgs img.flip-glow-ultimate-back {
  z-index: 1;
  transform: rotateY(0deg);
}
.flip-glow-ultimate-imgs img.flip-glow-ultimate-front {
  z-index: 0;
  transform: rotateY(180deg);
}
.flip-glow-ultimate-imgs:hover img.flip-glow-ultimate-back {
  transform: rotateY(180deg);
  z-index: 2;
  box-shadow: 0 12px 32px rgba(14, 30, 37, 0.25);
}
.flip-glow-ultimate-imgs:hover img.flip-glow-ultimate-front {
  transform: rotateY(0deg);
  z-index: 3;
  box-shadow: 0 12px 32px rgba(14, 30, 37, 0.25);
}

/* ====== 响应式布局 ====== */
@media (max-width: 1100px) {
  .header-row {
    gap: 32px;
  }
  .header-title {
    font-size: 2.2rem;
  }
  .flip-glow-ultimate,
  .flip-glow-ultimate-imgs {
    width: 200px;
    height: 200px;
  }
  .flip-glow-ultimate-glow {
    width: 260px;
    height: 260px;
  }
}
@media (max-width: 700px) {
  .header-row {
    flex-direction: column-reverse;
    gap: 0px; /* 减少到最小间距 */
    min-height: unset;
    margin: 12px 0 12px 0; /* 减小上下边距 */
  }
  .header-text {
    align-items: center;
    text-align: center;
    max-width: 98vw;
    margin-top: -10px; /* 添加负边距拉近与头像的距离 */
  }
  .header-avatar {
    margin-bottom: 0px; /* 移除底部间距 */
  }
  .header-title {
    margin-bottom: 12px; /* 减小标题下方间距 */
  }
  .header-subtitle {
    margin-bottom: 16px; /* 减小副标题下方间距 */
  }
  .header-motto {
    margin-bottom: 16px; /* 减小座右铭下方间距 */
  }
  
  /* 调整头像大小，使其在移动端更小 */
  .flip-glow-ultimate,
  .flip-glow-ultimate-imgs {
    width: 220px;
    height: 220px;
  }
  .flip-glow-ultimate-glow {
    width: 220px;
    height: 220px;
  }
}
/* 添加一个额外的样式类，可以直接应用到元素上 */
.dark-visible-text {
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5) !important;
}

/* 移动端样式 */
.mobile-motto {
  display: none;
  text-align: center;
  padding: 15px 0;
  margin: 10px 0;
}

.mobile-motto h1 {
  font-size: 1.8rem;
  color: #757575;
  /* font-family: 'LXGW WenKai', 'Segoe UI', 'PingFang SC', Arial, sans-serif; */
  font-weight: 500;
  margin: 0;
}

@media (max-width: 700px) {
  /* 隐藏原有头部 */
  .header-row {
    display: none !important;
  }
  
  /* 显示移动端标语 */
  .mobile-motto {
    display: block;
  }
}
</style>


<style>
/* 默认显示换行 */
/* .desktop-only {
  display: none; 
} */

/* 减少分隔线的边距 */
hr {
  margin: 0.5rem 0 !important;
}

/* 减少卡片网格的间距 */
/*.grid.cards {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}*/

/* 减少卡片内部的间距 */
/*.grid.cards > ul > li {
  padding: 0.8rem !important;
}*/

/* 减少卡片之间的间距 */
.grid.cards > ul {
  gap: 0.5rem !important;
}

/* 减少问候框的边距 */
#greeting {
  margin-bottom: 10px !important;
  padding: 8px !important;
}
</style>


<div id="greeting" class="greeting-container">
  <span id="greeting-text" class="greeting-text">加载中...</span>
</div>

<style>
  .greeting-container {
    text-align: center;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    background-color: rgba(240, 240, 240, 0.5);
    border: 1px solid rgba(200, 200, 200, 0.3);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  .greeting-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
    /* font-family: 'LXGW WenKai', sans-serif; */
    /* 添加最小高度避免布局抖动 */
    min-height: 1.5rem;
  }
  
  /* 夜间模式适配 */
  [data-md-color-scheme="slate"] .greeting-container {
    background-color: rgba(30, 41, 59, 0.6);
    border-color: rgba(80, 100, 140, 0.2);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  }
  
  [data-md-color-scheme="slate"] .greeting-text {
    color: #e0e0e0;
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .greeting-container {
      padding: 10px;
      margin-bottom: 15px;
    }
    
    .greeting-text {
      font-size: 1.3rem;
    }
  }
</style>

<script>
  // 优化的问候函数
  function updateGreeting() {
    const greetingElement = document.getElementById('greeting-text');
    if (!greetingElement) {
      // 如果元素不存在，延迟重试
      setTimeout(updateGreeting, 100);
      return;
    }

    const hour = new Date().getHours();
    let greeting;
    
    if (hour >= 0 && hour < 5) {
      greeting = "夜深了，注意休息 🌙";
    } else if (hour >= 5 && hour < 7) {
      greeting = "早安，新的一天开始啦 🌅";
    } else if (hour >= 7 && hour < 9) {
      greeting = "早上好，开始美好的一天 ☀️";
    } else if (hour >= 9 && hour < 11) {
      greeting = "上午好，保持专注 ✨";
    } else if (hour >= 11 && hour < 13) {
      greeting = "中午好，该休息一下了 🍲";
    } else if (hour >= 13 && hour < 15) {
      greeting = "午后时光，继续加油 ☕";
    } else if (hour >= 15 && hour < 18) {
      greeting = "下午好，别忘了喝水 🌤️";
    } else if (hour >= 18 && hour < 20) {
      greeting = "傍晚好，放松一下吧 🌆";
    } else if (hour >= 20 && hour < 22) {
      greeting = "晚上好，享受宁静时光 🌃";
    } else {
      greeting = "夜深了，早点休息哦 🌠";
    }
    
    greetingElement.textContent = greeting;
  }

  // 多重保险的初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateGreeting);
  } else {
    // DOM 已经加载完成
    updateGreeting();
  }

  // 额外的后备方案
  if (document.getElementById('greeting-text')) {
    updateGreeting();
  } else {
    // 如果元素还没有加载，等待一下
    setTimeout(updateGreeting, 200);
  }
</script>

<br>

<br>

<br>

<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <style>
        *{
    /* 初始化 */
    margin: 0;
    padding: 0;
}
.body{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg,#80d0c7,#13547a);
    margin: 3px;
}
.container{
    /* 相对定位 */
    position: relative;
    /* 弹性布局 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 允许换行 */
    flex-wrap: wrap;
    padding: 30px;
}
.container .card{
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    margin: 50px 15px;
    padding: 20px 15px;
    border-radius: 5px;
    /* 阴影 */
    box-shadow: 0 5px 200px rgba(0,0,0,0.5);
    /* 动画过渡 */
    transition: 0.3s ease-in-out;
}
.container .card:hover{
    height: 420px;
}
.container .card .img-box{
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 5px;
    /* 溢出隐藏 */
    overflow: hidden;
    top: -60px;
    left: 5px;
    /* 阴影 */
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 1;
}
.container .card .img-box img{
    width: 100%;
	border-radius: 10px;
}
.container .card .text-box{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    /* 设置元素不可见 */
    visibility: hidden;
    /* 不透明度 */
    opacity: 0;
    transition: 0.3s ease-in-out;
}
.container .card .text-box p{
    text-align: left;
    line-height: 25px;
    margin-top: 10px;
    font-size: 15px;
    color: #555;
}
.container .card:hover .text-box{
    /* 鼠标移入，设置元素可见 */
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    /* 动画延迟0.2秒 */
    transition-delay: 0.2s;
}
</style>
</head>

<div class="body">
    <div class="container">
        <div class="card">
            <div class="img-box">
                <img src="img/xiamu.jpg">
            </div>
            <div class="text-box">
                <h2><strong>抖音</strong></h2>
                <p><a href="https://www.douyin.com/user/MS4wLjABAAAAXD3xE4ARhbdpqQvDvQPzN3oHenEyIBdWzGV5GYHRosqGUn8nvJuz1aoPVScoUCX1?from_tab_name=main&is_search=0&list_name=follow&nt=0"><strong>@是麦子呀</strong></a><br>我的电子日记，<br>记录自己平凡的日常📷</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="img/xiaodingdang.jpg">
            </div>
            <div class="text-box">
                <h2><strong>抖音</strong></h2>
                <p><a  href="https://www.douyin.com/user/MS4wLjABAAAA3shEtLqFq7-HiGjmUL-4t_qiv4qn_aGLh2VGj0Cj7tFDu7Bt5x-hbZ_VCyhDfA4Z?from_tab_name=main&is_search=0&list_name=follow&nt=0"><strong>@麦子黄了</strong></a><br>不足道也的日常😋</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="img/kenan.jpg">
            </div>
            <div class="text-box">
                <h2><strong>知乎</strong></h2>
                <p><a  href="https://www.zhihu.com/people/zhi-yi-73-45"><strong>@只一<strong></a><br>自问自答~</p>
            </div>
        </div>
        <div class="card">
            <div class="img-box">
                <img src="img/wukong.jpg">
            </div>
            <div class="text-box">
                <h2><strong>哔哩哔哩</strong></h2>
                <p><a  href="https://space.bilibili.com/2069187267/?spm_id_from=333.999.0.0"><strong>@一颗麦子呀</strong></a><br> 一个有态度的女生。记录自己重启人生找回生活的日常❤️</p>
            </div>
        </div>
    </div>
</div>

</html>