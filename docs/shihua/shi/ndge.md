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

# 南丁格尔的脚印

<div class="grid cards" style = "margin:10px calc(30%) 10px calc(5%)" markdown>

-   :material-book-open-variant:{ .lg .middle } __2020-04-14 写给姐姐 C__

    ---

    五月的小路<br>
    翠柳如烟，暖风馨香<br>
    榆钱挂黄又添新绿<br>
    桃花散落，蜂蝶正忙<br>
    可我走的这条小路啊<br>
    不能用花香点妆<br>
    这条路上，病魔伏击<br>
    尽头是阳光，也许误入天堂<br>
    <br>
    她说<br>
    "护士是没有翅膀的天使"<br>
    洁白的羽衣下<br>
    柔弱娇小的身体蕴藏能量<br>
    在这伤痕丛生的小路<br>
    和死神对抗<br>
    守候这一径的鲜红<br>
    支撑暴雨中的避风港<br>
    <br>
    爱心，耐心，信心，责任心<br>
    用心守护这路上的每一条生命<br>
    追寻着南丁格尔的脚印<br>
    负重前行，接过提灯<br>
    点亮一盏生命之光<br>
</div>

