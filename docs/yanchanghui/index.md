---
icon: micro
---

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>居中控制的无限滚动走马灯</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
            width: 100%;
            max-width: 1200px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .header {
            text-align: center;
            margin-bottom: 3rem;
            width: 100%;
        }
        h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #4cc9f0, #4361ee);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.8;
            margin-bottom: 2rem;
        }
        .carousel-section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }
        .carousel-container {
            width: 100%;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        .carousel-mask {
            mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 10%,
                black 90%,
                transparent 100%
            );
            -webkit-mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 10%,
                black 90%,
                transparent 100%
            );
        }
        .carousel-track {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
        }
        .carousel-track:hover {
            animation-play-state: paused;
        }
        .carousel-item {
            width: 300px;
            height: 400px;
            margin: 0 15px;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            flex-shrink: 0;
            position: relative;
        }
        .carousel-item:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
            z-index: 10;
        }
        .carousel-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
        .carousel-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            padding: 1rem;
            transform: translateY(100%);
            transition: transform 0.3s ease;
            text-align: center;
            color: #eff3f4ff
        }
        .carousel-item:hover .carousel-caption {
            transform: translateY(0);
        }
        /* 控制区域 - 居中显示 */
        .control-panel {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding: 1.5rem;
            background: rgba(0, 0, 255, 0.08);
            border-radius: 12px;
            width: 100%;
            max-width: 800px;
        }
        .controls {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
        }
        .button {
            background: linear-gradient(45deg, #4361ee, #4cc9f0);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: 600;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 10px rgba(67, 97, 238, 0.3);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(67, 97, 238, 0.5);
        }
        .indicators {
            display: flex;
            gap: 0.8rem;
            justify-content: center;
        }
        .indicator {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #4cc9f0;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.3s ease;
        }
        .indicator.active {
            background: #4361ee;
            transform: scale(1.2);
        }
        .speed-label {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #4cc9f0;
            text-align: center;
        }
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
        @media (max-width: 768px) {
            .carousel-item {
                width: 250px;
                height: 180px;
            }
            h1 {
                font-size: 2.2rem;
            }
        }
        @media (max-width: 480px) {
            .carousel-item {
                width: 220px;
                height: 160px;
            }
            h1 {
                font-size: 1.8rem;
            }
            .button {
                padding: 0.6rem 1.2rem;
                font-size: 0.9rem;
            }
            .controls {
                flex-direction: column;
                width: 100%;
            }
            .button {
                width: 100%;
            }
        }
        .explanation {
            max-width: 800px;
            background: rgba(255, 255, 255, 0.08);
            padding: 2rem;
            border-radius: 12px;
            margin-top: 3rem;
            line-height: 1.6;
            text-align: center;
        }
        .explanation h2 {
            margin-bottom: 1rem;
            color: #4cc9f0;
        }
        .code-block {
            background: rgba(0, 0, 0, 0.3);
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            margin: 1.5rem 0;
            font-family: 'Fira Code', monospace;
            font-size: 0.9rem;
            text-align: left;
        }
        .highlight {
            color: #4cc9f0;
            font-weight: bold;
        }
        .footer {
            margin-top: 3rem;
            text-align: center;
            opacity: 0.7;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>演唱会/音乐节全记录</h1>
            <p class="subtitle">那些青春记忆里的和新生代的声音，那些摇滚/民谣/流行乐~</p>
        </div>
        <div class="carousel-section">
            <div class="carousel-container carousel-mask">
                <div class="carousel-track">
                    <!-- 图片项将由JavaScript生成 -->
                </div>
            </div>
            <div class="control-panel">
                <p class="speed-label">调整滚动速度：</p>
                <div class="indicators">
                    <div class="indicator active" data-speed="20"></div>
                    <div class="indicator" data-speed="30"></div>
                    <div class="indicator" data-speed="40"></div>
                </div>
                <div class="controls">
                    <div class="button" id="pauseBtn">
                        <i class="fas fa-pause"></i> 暂停动画
                    </div>
                    <div class="button" id="resumeBtn">
                        <i class="fas fa-play"></i> 继续动画
                    </div>
                    <div class="button" id="reverseBtn">
                        <i class="fas fa-exchange-alt"></i> 反向滚动
                    </div>
                </div>
            </div>
        </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const carouselTrack = document.querySelector('.carousel-track');
            const images = [
                { src: 'img/fddm2019.jpg', title: '房东的猫', link: 'http://love.cscottage.top/yanchanghui/ych/fddm2019/' },
                { src: 'img/xkz2022.jpg', title: '新裤子', link: 'http://love.cscottage.top/yanchanghui/ych/xkz2022/' },
                { src: 'img/wb2023.jpg', title: '伍佰', link: 'http://love.cscottage.top/yanchanghui/ych/wb2023/' },
                { src: 'img/ntzl2024.jpg', title: '南通紫琅音乐节', link: 'http://love.cscottage.top/yanchanghui/ych/ntzl2024/' },
                { src: 'img/zcx2024.jpg', title: '周传雄', link: 'http://love.cscottage.top/yanchanghui/ych/zcx2024/' },
                { src: 'img/xtx2024.jpg', title: '谢天笑', link: 'http://love.cscottage.top/yanchanghui/ych/xtx2024/' },
                { src: 'img/zsh2025.jpg', title: '张韶涵', link: 'http://love.cscottage.top/yanchanghui/ych/zsh2025/' }
            ];
            // 生成图片元素
            function generateCarouselItems() {
                // 清空现有内容
                carouselTrack.innerHTML = '';
                // 创建两倍数量的项目以实现无缝循环
                for (let i = 0; i < 2; i++) {
                    images.forEach((image, index) => {
                        const item = document.createElement('div');
                        item.className = 'carousel-item';
                        const img = document.createElement('img');
                        img.src = image.src;
                        img.alt = image.title;
                        const caption = document.createElement('div');
                        caption.className = 'carousel-caption';
                        caption.textContent = image.title;
                        const link = document.createElement('a');
                        link.href = image.link;
                        link.target = '_blank';
                        link.style.display = 'block';
                        link.style.height = '100%';
                        link.appendChild(img);
                        item.appendChild(link);
                        item.appendChild(caption);
                        carouselTrack.appendChild(item);
                    });
                }
            }
            generateCarouselItems();
            // 控制按钮功能
            const pauseBtn = document.getElementById('pauseBtn');
            const resumeBtn = document.getElementById('resumeBtn');
            const reverseBtn = document.getElementById('reverseBtn');
            const indicators = document.querySelectorAll('.indicator');
            pauseBtn.addEventListener('click', () => {
                carouselTrack.style.animationPlayState = 'paused';
            });
            resumeBtn.addEventListener('click', () => {
                carouselTrack.style.animationPlayState = 'running';
            });
            reverseBtn.addEventListener('click', () => {
                const currentAnimation = getComputedStyle(carouselTrack).animation;
                if (currentAnimation.includes('reverse')) {
                    carouselTrack.style.animation = 'scroll 30s linear infinite';
                } else {
                    carouselTrack.style.animation = 'scroll 30s linear infinite reverse';
                }
            });
            // 速度指示器
            indicators.forEach(indicator => {
                indicator.addEventListener('click', () => {
                    const speed = indicator.getAttribute('data-speed');
                    // 更新动画持续时间
                    carouselTrack.style.animationDuration = `${speed}s`;
                    // 更新激活状态
                    indicators.forEach(ind => ind.classList.remove('active'));
                    indicator.classList.add('active');
                });
            });
        });
    </script>
</body>
</html>
