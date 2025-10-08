<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的旅游时间轴与足迹地图</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(120deg, #3494E6, #EC6EAD);
            color: white;
            border-radius: 10px;
            margin-bottom: 40px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        /* 修复时间轴容器 */
        .timeline-container {
            position: relative;
            padding: 40px 0;
            overflow: visible; /* 确保中线可见 */
        }
        /* 清除浮动 - 关键修复 */
        .timeline-container::after {
            content: '';
            display: table;
            clear: both;
        }
        /* 时间轴中线 */
        .timeline-line {
            position: absolute;
            width: 6px;
            background: linear-gradient(to bottom, #3494E6, #EC6EAD);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
            border-radius: 10px;
            z-index: 1;
        }
        .timeline-item {
            padding: 20px 0;
            position: relative;
            width: 50%;
            clear: both;
        }
        /* 左右交替布局 */
        .timeline-item:nth-child(odd) {
            float: left;
            padding-right: 50px;
        }
        .timeline-item:nth-child(even) {
            float: right;
            padding-left: 50px;
        }
        /* 时间轴节点 */
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 24px;
            right: -12px;
            background-color: #3494E6;
            border: 4px solid #fff;
            top: 30px;
            border-radius: 50%;
            z-index: 2;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .timeline-item:nth-child(even)::after {
            left: -12px;
            background-color: #EC6EAD;
        }
        /* 内容卡片 */
        .timeline-content {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .timeline-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .date {
            background: linear-gradient(120deg, #3494E6, #EC6EAD);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: bold;
            display: inline-block;
            margin-bottom: 15px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        }
        .location {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: #2c3e50;
            display: flex;
            align-items: center;
        }
        .location i {
            margin-right: 10px;
            color: #e74c3c;
        }
        .description {
            margin-bottom: 15px;
            line-height: 1.6;
        }
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        .tag {
            background: #f1f1f1;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            color: #666;
        }
        /* 响应式设计 */
        @media screen and (max-width: 768px) {
            .timeline-line {
                left: 31px;
            }
            .timeline-item {
                width: 100%;
                padding-left: 80px;
                padding-right: 0;
            }
            .timeline-item:nth-child(odd),
            .timeline-item:nth-child(even) {
                float: none;
                padding-right: 0;
                padding-left: 80px;
            }
            .timeline-item::after {
                left: 19px;
                right: auto;
            }
            .timeline-item:nth-child(even)::after {
                left: 19px;
            }
        }
        /* 调试信息 */
        .debug-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin-top: 40px;
            border-left: 4px solid #3498db;
        }
        .debug-info h3 {
            color: #3498db;
            margin-bottom: 15px;
        }
        .debug-info ul {
            padding-left: 20px;
        }
        .debug-info li {
            margin-bottom: 10px;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>我的旅游时光轴</h1>
            <p class="subtitle">记录旅途中的美好时光与地点</p>
        </div>
        <div class="timeline-container">
            <!-- 时间轴中线 -->
            <div class="timeline-line"></div>
            <!-- 时间轴项目1 -->
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2018年4月5日 - 4月7日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/jiangsu/wuxi/">江苏 · 无锡</a></h2>
                    <p class="description">游无锡鼋头渚，感受“太湖明珠”的落樱缤纷。</p>
                    <div class="tags">
                        <span class="tag">太湖明珠</span>
                        <span class="tag">禅意</span>
                        <span class="tag">美食</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2018年11月23日 - 11月25日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/jiangsu/nanjing/">江苏 · 南京</a></h2>
                    <p class="description">六朝烟雨浸润千年文脉，钟山毓秀映照金陵风华，明城墙的厚重，秦淮河的旖旎。</p>
                    <div class="tags">
                        <span class="tag">六朝古都</span>
                        <span class="tag">文化</span>
                        <span class="tag">美食</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2019年4月5日 - 4月6日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/zhejiang/hangzhou/">浙江 · 杭州</a></h2>
                    <p class="description">西湖烟雨风雅，龙井茶香氤氲，杭州以山水为卷、文化为墨，绘就一幅诗画江南的醉美长卷。</p>
                    <div class="tags">
                        <span class="tag">西湖</span>
                        <span class="tag">龙井</span>
                        <span class="tag">丝绸</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2019年12月14日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 苏州 · 天平山</h2>
                    <p class="description">天平山以“红枫、奇石、清泉”三绝闻名，是融合自然奇观与范仲淹历史文化的江南胜境，深秋枫景尤为震撼‌。</p>
                    <div class="tags">
                        <span class="tag">红枫</span>
                        <span class="tag">奇石</span>
                        <span class="tag">清泉</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2019年6月22日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 南京 · 房东的猫演唱会</h2>
                    <p class="description">“生活”演唱会南京站于太阳宫剧场举行，以治愈系音乐和校园情怀为核心，带来温暖而贴近生活的视听体验‌。</p>
                    <div class="tags">
                        <span class="tag">“生活”</span>
                        <span class="tag">民谣</span>
                        <span class="tag">校园情怀</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2020年9月4日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 苏州 · 御窑金砖博物馆</h2>
                    <p class="description">以“开物、成器、致用”为主线，通过文物、场景与互动展陈，揭秘明清皇家御用金砖从选土到铺墁紫禁城的完整历程，展示活态非遗技艺与运河文化‌。</p>
                    <div class="tags">
                        <span class="tag">御窑金砖</span>
                        <span class="tag">非遗</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2021年4月4日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 上海 · 野生动物园</h2>
                    <p class="description">国家级5A景区，通过车入区、步行区和水域探秘三大板块，展示200余种珍稀动物，并提供互动体验与特色表演‌。</p>
                    <div class="tags">
                        <span class="tag">5A</span>
                        <span class="tag">互动体验</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2021年6月19日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 上海 · 崇明花博会</h2>
                    <p class="description">以“花开中国梦”为主题，“一心一轴六馆六园”的生态化布局，展示全国及国际特色花卉，融合可持续技术，打造兼具艺术性与科技性的国家级花卉盛宴‌‌。</p>
                    <div class="tags">
                        <span class="tag">花开中国梦</span>
                        <span class="tag">生态创新</span>
                    </div>
                </div>
            </div>
            <!-- 时间轴项目2 -->
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2021年10月22日 - 10月23日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="https://www.douyin.com/user/MS4wLjABAAAA3shEtLqFq7-HiGjmUL-4t_qiv4qn_aGLh2VGj0Cj7tFDu7Bt5x-hbZ_VCyhDfA4Z?from_tab_name=main&modal_id=7025062790121442560">浙江 · 嘉兴乌镇戏剧节</a></h2>
                    <p class="description">第八届乌镇戏剧节以“茂”为主题，通过四大单元集中呈现24部特邀剧目及青年竞演作品。</p>
                    <div class="tags">
                        <span class="tag">“茂”</span>
                        <span class="tag">戏剧聚焦</span>
                        <span class="tag">跨界融合</span>
                    </div>
                </div>
            </div>
            <!-- 时间轴项目3 -->
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2022年8月20日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="https://www.douyin.com/user/MS4wLjABAAAA3shEtLqFq7-HiGjmUL-4t_qiv4qn_aGLh2VGj0Cj7tFDu7Bt5x-hbZ_VCyhDfA4Z?from_tab_name=main&modal_id=7134000575657692431">苏州 · 新裤子演唱会</a></h2>
                    <p class="description">“我们最好的时光就是现在”苏州站以3万人体育场规模创下独立乐队纪录，通过机器人、黑洞等视觉符号与经典曲目，结合前沿技术呈现了一场兼具情怀与创新的摇滚盛宴。</p>
                    <div class="tags">
                        <span class="tag">摇滚</span>
                        <span class="tag">独立</span>
                        <span class="tag">经典</span>
                    </div>
                </div>
            </div>
            <!-- 时间轴项目4 -->
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2023年3月25日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 上海 · 松江广富林遗址</h2>
                    <p class="description">上海千年历史的缩影，以水下博物馆和良渚文化遗存为核心，融合考古展示与徽派建筑景观，被誉为“上海之根”‌。</p>
                    <div class="tags">
                        <span class="tag">良渚文化</span>
                        <span class="tag">上海之根</span>
                        <span class="tag">水下博物馆</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2023年9月2日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="https://www.douyin.com/user/MS4wLjABAAAA3shEtLqFq7-HiGjmUL-4t_qiv4qn_aGLh2VGj0Cj7tFDu7Bt5x-hbZ_VCyhDfA4Z?from_tab_name=main&modal_id=7274434178899348773">上海 · 伍佰演唱会</a></h2>
                    <p class="description">“万人KTV”式合唱，赛博朋克舞台，在梅赛德斯-奔驰文化中心打造了一场融合经典曲目与即兴互动的摇滚盛宴‌。</p>
                    <div class="tags">
                        <span class="tag">摇滚</span>
                        <span class="tag">万人KTV</span>
                        <span class="tag">‌Rock Star</span>
                    </div>
                </div>
            </div>
            <!-- 时间轴项目5 -->
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2023年9月28日 - 10月6日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 山东 · 济南青岛游</h2>
                    <p class="description">我们结婚了~</p>
                    <div class="tags">
                        <span class="tag">婚礼</span>
                        <span class="tag">旅游</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2023年12月30日 - 2024年1月1日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/zhejiang/shengsi/">浙江 · 舟山嵊泗</a></h2>
                    <p class="description">舟山群岛北部的“海上仙山”，以渔场资源、海岛奇观和长三角枢纽地位为核心，融合千年海洋文化与现代旅游魅力‌。</p>
                    <div class="tags">
                        <span class="tag">海上仙山</span>
                        <span class="tag">东海鱼仓</span>
                        <span class="tag">海岛文化</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2024年3月11日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="https://www.douyin.com/user/MS4wLjABAAAAXD3xE4ARhbdpqQvDvQPzN3oHenEyIBdWzGV5GYHRosqGUn8nvJuz1aoPVScoUCX1?from_tab_name=main&modal_id=7345057202794663218">苏州 · 乔迁之喜</a></h2>
                    <p class="description">历经一年的设计、拆装和买买买，经过半年散味儿，终于入住新家了。</p>
                    <div class="tags">
                        <span class="tag">乔迁大喜</span>
                        <span class="tag">细水长流</span>
                        <span class="tag">招财进宝</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2024年3月31日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="https://www.douyin.com/user/MS4wLjABAAAAXD3xE4ARhbdpqQvDvQPzN3oHenEyIBdWzGV5GYHRosqGUn8nvJuz1aoPVScoUCX1?from_tab_name=main&modal_id=7353587431561530634">江苏 · 南通音乐节</a></h2>
                    <p class="description">以多元音乐阵容为核心，融合文旅特色与户外狂欢的青春盛会，助力城市文化活力升级‌。</p>
                    <div class="tags">
                        <span class="tag">摇滚</span>
                        <span class="tag">户外狂欢</span>
                        <span class="tag">青春活力</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2024年4月6日 - 4月11日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/hainan/sanya/">海南 · 三亚</a></h2>
                    <p class="description">在亚龙湾白色沙滩上放松，蜈支洲岛、南山文化旅游区感受自然，亚特兰蒂斯水世界蹦极蹦迪。</p>
                    <div class="tags">
                        <span class="tag">海滩</span>
                        <span class="tag">度假</span>
                        <span class="tag">水上运动</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2024年4月12日 - 4月18日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/yunnan/dali/">云南 · 昆明·丽江·大理</a></h2>
                    <p class="description">探索丽江古城的石板街道，感受纳西族文化；慢游苍山洱海，登上玉龙雪山，品尝地道的过桥米线。</p>
                    <div class="tags">
                        <span class="tag">古镇</span>
                        <span class="tag">文化</span>
                        <span class="tag">雪山</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2024年9月6日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="https://www.douyin.com/user/MS4wLjABAAAA3shEtLqFq7-HiGjmUL-4t_qiv4qn_aGLh2VGj0Cj7tFDu7Bt5x-hbZ_VCyhDfA4Z?from_tab_name=main&modal_id=7411565645935987977">上海 · 周传雄演唱会</a></h2>
                    <p class="description">“情歌教父”经典旋律，唤醒青春记忆‌。</p>
                    <div class="tags">
                        <span class="tag">经典情歌</span>
                        <span class="tag">青春记忆</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2025年1月11日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="https://www.douyin.com/user/MS4wLjABAAAA3shEtLqFq7-HiGjmUL-4t_qiv4qn_aGLh2VGj0Cj7tFDu7Bt5x-hbZ_VCyhDfA4Z?from_tab_name=main&modal_id=7459353391278411065">上海 · 谢天笑演唱会</a></h2>
                    <p class="description">“超级本能”巡演，跨界音乐实验与高规格舞台设计‌。</p>
                    <div class="tags">
                        <span class="tag">摇滚</span>
                        <span class="tag">古筝</span>
                        <span class="tag">电子</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2025年4月3日 - 4月5日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/zhejiang/lishui/">浙江 · 丽水</a></h2>
                    <p class="description">“浙江绿谷”，集梯田云海、古村秘境、畲族风情于一体，是自然与人文交织的江南诗意栖居地‌。</p>
                    <div class="tags">
                        <span class="tag">古堰画乡</span>
                        <span class="tag">文化</span>
                        <span class="tag">仙都</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2025年6月21日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/yanchanghui/ych/zsh2025/">昆山 · 张韶涵演唱会</a></h2>
                    <p class="description">「觅光」演唱会以科技赋能舞台，用音乐诠释“伤疤变武器”的励志内核‌。</p>
                    <div class="tags">
                        <span class="tag">觅光</span>
                        <span class="tag">流行</span>
                        <span class="tag">天后</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2025年7月12日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i> 苏州 · 拙政园</h2>
                    <p class="description">苏州最具代表性的明代江南园林，以水景为核心、诗画意境为灵魂，融合自然与人文之美，中国四大名园之一‌‌。</p>
                    <div class="tags">
                        <span class="tag">古典园林</span>
                        <span class="tag">文化遗产</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2025年9月27日 - 9月29日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/shandong/qingdao/">山东 · 青岛</a></h2>
                    <p class="description">再游青岛，回学校‌故地重游，漫步在海边。</p>
                    <div class="tags">
                        <span class="tag">校园</span>
                        <span class="tag">海滩</span>
                    </div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <span class="date">2025年10月1日 - 10月4日</span>
                    <h2 class="location"><i class="fas fa-map-marker-alt"></i><a href="http://love.cscottage.top/trip/liaoning/dalian/">辽宁 · 大连</a></h2>
                    <p class="description">海滨明珠，山海交融，历史底蕴，兼具国际化与烟火气‌。</p>
                    <div class="tags">
                        <span class="tag">海滨</span>
                        <span class="tag">百年有轨列车</span>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <p>© 我的旅行日记 | 记录美好时光</p>
        </footer>
    </div>
    <script>
        // 添加简单的滚动动画效果
        document.addEventListener('DOMContentLoaded', function() {
            const timelineItems = document.querySelectorAll('.timeline-content');
            // 初始隐藏所有时间轴项目
            timelineItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
            // 滚动显示动画
            function checkScroll() {
                timelineItems.forEach(item => {
                    const itemTop = item.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (itemTop < windowHeight * 0.85) {
                        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }
                });
            }
            // 初始检查
            checkScroll();
            // 滚动时检查
            window.addEventListener('scroll', checkScroll);
        });
    </script>
</body>
</html>
