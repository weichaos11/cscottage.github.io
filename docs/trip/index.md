---
hide:
  #- navigation
  - toc
---
# Map

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>旅游地图</title>
</head>

<body>

<style type="text/css">
*{margin:0;padding:0;list-style-type:none;}
a,img{border:0;text-decoration:none;}

.clearfix:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}
*html .clearfix{height:1%}


.map-service{position:relative;height:760px;background:url(img/map_balck_whole_bg.jpg) center no-repeat}
.map-service-right{margin-left:80px;padding-top:60px}
.china-map{width:748px;height:618px;background:url(img/map_black_bg.png) center no-repeat;position:relative;}
.region-list{position:absolute;left:0;top:0}

@-webkit-keyframes warn{
0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}
100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}
}
@-moz-keyframes warn{
0%{-moz-transform:scale(0);transform:scale(0);opacity:1}
100%{-moz-transform:scale(1);transform:scale(1);opacity:0}
}
@-o-keyframes warn{
0%{-o-transform:scale(0);transform:scale(0);opacity:1}
100%{-o-transform:scale(1);transform:scale(1);opacity:0}
}
@keyframes warn{
0%{-webkit-transform:scale(0);-moz-transform:scale(0);-o-transform:scale(0);transform:scale(0);opacity:1}
100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);opacity:0}
}
.area-box .dot{position:absolute;left:0;width:10px;height:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:#a2a9b4;opacity:1;filter:alpha(opacity=100)}
.area-box .pulse{position:absolute;top:-28px;left:-28px;height:66px;width:66px;border:2px solid #b7b7b7;-webkit-border-radius:48px;-moz-border-radius:48px;border-radius:48px;-webkit-box-shadow:0 0 4px #82878f,0 0 10px #82878f inset;-moz-box-shadow:0 0 4px #82878f,0 0 10px #82878f inset;box-shadow:0 0 4px #82878f,0 0 10px #82878f inset;opacity:.12;filter:alpha(opacity=0);-webkit-animation:warn 2s ease-out both;-moz-animation:warn 2s ease-out both;-o-animation:warn 2s ease-out both;animation:warn 2s ease-out both;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-o-animation-iteration-count:infinite;animation-iteration-count:infinite;background:0 0}
.area-box .delay-01{-webkit-animation-delay:0;-moz-animation-delay:0;-o-animation-delay:0;animation-delay:0}
.area-box .delay-02{-webkit-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}
.area-box .delay-03{-webkit-animation-delay:.8s;-moz-animation-delay:.8s;-o-animation-delay:.8s;animation-delay:.8s}
.area-box .delay-04{-webkit-animation-delay:1.2s;-moz-animation-delay:1.2s;-o-animation-delay:1.2s;animation-delay:1.2s}
.area-box .delay-05{-webkit-animation-delay:1.6s;-moz-animation-delay:1.6s;-o-animation-delay:1.6s;animation-delay:1.6s}
.area-box .delay-06{-webkit-animation-delay:2s;-moz-animation-delay:2s;-o-animation-delay:2s;animation-delay:2s}
.area-box .delay-07{-webkit-animation-delay:2.4s;-moz-animation-delay:2.4s;-o-animation-delay:2.4s;animation-delay:2.4s}
.area-box .delay-08{-webkit-animation-delay:-.4s;-moz-animation-delay:-.4s;-o-animation-delay:-.4s;animation-delay:-.4s}
.area-box .delay-09{-webkit-animation-delay:-.8s;-moz-animation-delay:-.8s;-o-animation-delay:-.8s;animation-delay:-.8s}
.area-box .delay-10{-webkit-animation-delay:-1.2s;-moz-animation-delay:-1.2s;-o-animation-delay:-1.2s;animation-delay:-1.2s}
.area-box .delay-11{-webkit-animation-delay:4s;-moz-animation-delay:4s;-o-animation-delay:4s;animation-delay:4s}
.region-list.active .area-box .dot{background:#009fd9}
.region-list.active .area-box .pulse{border-color:#009fd9;top:-39px;left:-39px;height:88px;width:88px;-webkit-box-shadow:0 0 12px #0080d9,0 0 20px #0080d9 inset;-moz-box-shadow:0 0 12px #0080d9,0 0 20px #0080d9 inset;box-shadow:0 0 12px #0080d9,0 0 20px #0080d9 inset}
.region-list.waite .area-box .dot{background:#f90}
.region-list.waite .area-box .pulse{border-color:#f90}
.show-regin{position:absolute;left:2px;height:0;top:0;width:11px;opacity:0;-o-transition:all .5s ease-in-out;-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}
.online-node .show-regin,.region-list:hover .show-regin,.underline-node .show-regin,.waite-node .show-regin{height:127px;opacity:1}
.show-regin span{width:80px;position:absolute;left:8px;top:-11px;padding:6px 10px;font-size:14px;color:#ccc;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;text-align:center;white-space:nowrap;}
.postition-10 .show-regin span{left:0}
.postition-6 .show-regin span{left:-72px}
.area-box{z-index:77}
.show-regin{z-index:66}
.region-list.active .show-regin span{position:relative;color:#ccc}
.region-list.waite .show-regin span{color:#ccc}
.postition-1{left:302px;top:308px}
.postition-2{left:401px;top:403px}
.postition-3{left:358px;top:516px}
.postition-4{left:473px;top:348px}
.postition-5{left:526px;top:394px}
.postition-6{left:526px;top:515px}
.postition-7{left:652px;top:200px}
.postition-7.region-list.active .area-box .pulse{top:-50px;left:-50px;width:110px;height:110px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}
.postition-8{left:559px;top:229px}
.postition-9{left:625px;top:365px}
.postition-9.region-list.active .area-box .pulse{top:-50px;left:-50px;width:110px;height:110px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}
.postition-10{left:554px;top:539px}
.postition-11{left:604px;top:300px}
.postition-12{left:485px;top:600px}
.postition-13{left:470px;top:250px}
.postition-14{left:650px;top:371px}
.postition-15{left:625px;top:415px}
.douhao{width:0}
</style>

<div class="map-service">
	<div class="map-service-right">
		<div class="china-map">
			<!--<div class="region-list postition-1">
				<div class="area-box">
					<span class="dot"></span>
					<span class="pulse delay-01"></span>
					<span class="pulse delay-02"></span>
				</div>
			</div>
			<div class="region-list active postition-2 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>四川</span></div>
			</div>-->
			<div class="region-list waite postition-3 waite-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-01"></span>
					<span class="pulse delay-01"></span>
          <span class="pulse delay-02"></span>
					</div>
        <div class="show-regin"><span><a href="https://love.cscottage.top/trip/yunnan/dali/">云南</a></span></div>
			</div>
			<div class="region-list waite postition-4 waite-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-01"></span>
					<span class="pulse delay-02"></span>
					</div>
				<div class="show-regin"><span><a href="http://love.cscottage.top/trip/shanxi/xian/">陕西</a></span></div>
			</div>
			<!--<div class="region-list active postition-5 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>湖北</span></div>
			</div>
			 <div class="region-list active postition-6 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>广东</span></div>
			</div>
			<div class="region-list active postition-13 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-04"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-03"></span></div>
				<div class="show-regin"><span>内蒙古</span></div>
			</div>-->
			<div class="region-list  active  postition-11 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span><a href="http://love.cscottage.top/trip/shandong/qingdao/">山东</a></span></div>
			</div>
			<!--<div class="region-list active postition-7 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-10"></span>
					<span class="pulse delay-09"></span>
					<span class="pulse delay-08"></span></div>
				<div class="show-regin"><span>辽宁</span></div>
			</div>
			<div class="region-list active postition-8 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></span></div>
				<div class="show-regin"><span>北京</span></div>
			</div>-->
			<div class="region-list active postition-9 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-10"></span>
					<span class="pulse delay-09"></span>
					<span class="pulse delay-08"></span></div>
				<div class="show-regin"><span><a href="http://love.cscottage.top/trip/jiangsu/suzhou/">江苏</a></span></div>
			</div>
			<!--<div class="region-list active postition-10 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span>香港</span></div>
			</div>-->
      <div class="region-list active postition-12 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-06"></span>
					<span class="pulse delay-05"></span>
					<span class="pulse delay-04"></span></div>
				<div class="show-regin"><span><a href="http://love.cscottage.top/trip/hainan/sanya/">海南</a></span></div>
			</div>
      <div class="region-list active postition-14 online-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-10"></span>
					<span class="pulse delay-09"></span>
					<span class="pulse delay-08"></span></div>
				<div class="show-regin"><span><a href="http://love.cscottage.top/trip/shanghai/shanghai/">上海</a></span></div>
			</div>
      <div class="region-list waite postition-15 waite-node">
				<div class="area-box"><span class="dot"></span><span class="pulse delay-01"></span>
					<span class="pulse delay-02"></span>
					</div>
				<div class="show-regin"><span><a href="http://love.cscottage.top/trip/zhejiang/hangzhou/">浙江</a></span></div>
			</div>
	
		</div>
	</div>
</div>

<div style="text-align:center;clear:both">
<script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>
<script src="/follow.js" type="text/javascript"></script>
</div>

</body>
</html>