<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

# 我曾

<div class="grid cards" style = "margin:10px calc(30%) 10px calc(5%)" markdown>

-   :material-book-open-variant:{ .lg .middle } __2020-04-14 写给姐姐 C__

    ---

    我曾畏惧<br>
    穿上这袭白衣<br>
    收起长裙，摘掉手饰<br>
    马尾束进帽子<br>
    脸上留下口罩的压痕<br>
    双手不再柔滑细腻<br>
    我期待着<br>
    患者脱下病服<br>
    精心妆扮，热情洋溢<br>
    沐浴在阳光下<br>
    听着轻松欢快的鸟语<br>
    闻着扑面而来的花香<br>
    <br>
    我曾哭泣<br>
    一个个寂静的夜晚<br>
    独自徘徊在长长的走廊<br>
    消毒水的味道漂浮<br>
    灯光明亮却心生昏黄<br>
    我微笑着<br>
    护士站的电铃响起（指示灯亮起）<br>
    奔向等待我的病房<br>
    执行提灯女神的使命<br>
    打针换药，救死扶伤<br>
    <br>
    我曾恐慌<br>
    新冠肺炎疫情蔓延<br>
    白衣同胞奔赴没有硝烟的战场<br>
    小小的身躯<br>
    挑起一线主力的担当<br>
    我充满希望<br>
    热干面又见面<br>
    樱花已然绽放<br>
    南丁格尔的精神<br>
    我们继承发扬<br>
</div>

