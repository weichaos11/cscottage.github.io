<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>樱花背景特效网页</title>
    <style>
        /* 樱花样式 */
        .sakura {
            position: fixed;
            width: 20px;
            height: 20px;
            background-color: pink;
            border-radius: 50%;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
            animation: fall linear infinite;
        }
        @keyframes fall {
            0% {
                transform: translateY(-100px) rotate(0deg);
            }
            100% {
                transform: translateY(110vh) rotate(360deg);
            }
        }
    </style>
</head>
<body>
    <!--<h1>樱花飘落的背景效果</h1>-->
    <script>
        function createSakura() {
            const sakura = document.createElement('div');
            sakura.classList.add('sakura');
            // 随机位置和大小
            sakura.style.left = Math.random() * 100 + 'vw';
            sakura.style.animationDuration = Math.random() * 5 + 5 + 's'; // 随机动画时长
            sakura.style.opacity = Math.random(); // 随机透明度
            document.body.appendChild(sakura);
            // 动画结束后移除元素
            setTimeout(() => {
                sakura.remove();
            }, 10000); // 设置和动画时间一致
        }
        // 每隔300毫秒生成一个樱花
        setInterval(createSakura, 300);
    </script>
</body>
</html>

<div class="grid cards" style = "margin:10px calc(30%) 10px calc(5%)" markdown>

-   :material-book-open-variant:{ .lg .middle } __C & S__

    ---

    正彷徨<br>
    雨歇微凉<br>
    见落尽海棠  --S<br>
    <br>
    乍回眸<br>
    风送清香<br>
    还百艳群芳  --C<br>
</div>

