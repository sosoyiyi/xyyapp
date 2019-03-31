<template>
	<view>
		<!--占位-->
		<view class="place" style="height:30upx"></view>
		<!-- 轮播图 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" circular="true" indicator-active-color="#ffffff">
						<swiper-item style="border-radius: 10px;" v-for="swiper in swiperList" :key="swiper.sid" @tap="toSwiper(swiper)">
							<image style="width:100%" class="swiper-item" :src="swiper.img"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<!--占位-->
			<view class="place" style="height:60upx"></view>
			<!-- 分类 -->
			<view style="width:90%; align-items center; margin: 0 auto;">
				<view class="" style="display: flex; flex-flow: row wrap;justify-content:space-between  ;align-items:center;">
					<view style="display:flex;flex-flow:column;justify-content:center;align-items:center;line-height: 45px;">
						<text v-bind:style="{ color: '#4876FF', fontSize: fontSize + 'px' }" class="iconfont icon-dianying"></text>
						<text v-bind:style="{ color: '#8F8F94', fontSize: 14 +'px' }">电影</text>
					</view>
					<view style="display:flex;flex-flow:column;justify-content:center;align-items:center;line-height: 45px;">
						<text v-bind:style="{ color: '#D2691E', fontSize: fontSize + 'px' }" class="iconfont icon-dianshiju"></text>
						<text v-bind:style="{ color: '#8F8F94', fontSize: 14 +'px' }">电视剧</text>
					</view>
					<view style="display:flex;flex-flow:column;justify-content:center;align-items:center;line-height: 45px;">
						<text v-bind:style="{ color: '#90EE90', fontSize: fontSize + 'px' }" class="iconfont icon-dongman"></text>
						<text v-bind:style="{ color: '#8F8F94', fontSize: 14 +'px' }">动漫</text>
					</view>
					<view style="display:flex;flex-flow:column;justify-content:center;align-items:center;line-height: 45px;">
						<text v-bind:style="{ color: '#B22222', fontSize: fontSize + 'px' }" class="iconfont icon-zongyi"></text>
						<text v-bind:style="{ color: '#8F8F94', fontSize: 14 +'px' }">综艺</text>
					</view>
				</view>
			</view>
		</view>
		<!--分割线 -->
		<view class="splite-line"></view>
		<!--占位-->
		<view class="place" style="height:10upx"></view>
		<view class="uni-padding-wrap" style="display:flex;flex-flow:row;justify-content:space-between;align-items:center;line-height: 45px;">
			<text style="color:#8F8F94">最近更新</text>
		</view>
		<glanceImgGrid :imgdes=true :imgradius=true @imgclick="openMovieDetail" :data="zjgxGrids">
		</glanceImgGrid>

		<!--分割线 -->
		<view class="splite-line"></view>
		<!--占位-->
		<view class="place" style="height:10upx"></view>
		<view class="uni-padding-wrap" style="display:flex;flex-flow:row;justify-content:space-between;align-items:center;">
			<text style="color:#8F8F94">电影</text>
			<text style="color:#8F8F94">更多<text class="iconfont icon-next"></text></text>
		</view>
		<glanceImgGrid :imgdes=true :imgradius=true @imgclick="openMovieDetail" :data="dyGrids">
		</glanceImgGrid>

		<!--分割线 -->
		<view class="splite-line"></view>
		<!--占位-->
		<view class="place" style="height:10upx"></view>
		<view class="uni-padding-wrap" style="display:flex;flex-flow:row;justify-content:space-between;align-items:center;line-height: 45px;">
			<text style="color:#8F8F94">连续剧</text>
			<text style="color:#8F8F94">更多<text class="iconfont icon-next"></text></text>
		</view>
		<glanceImgGrid :imgdes=true :imgradius=true @imgclick="openMovieDetail" :data="dsGrids">
		</glanceImgGrid>
		<!--分割线 -->
		<view class="splite-line"></view>
		<!--占位-->
		<view class="place" style="height:10upx"></view>
		<view class="uni-padding-wrap" style="display:flex;flex-flow:row;justify-content:space-between;align-items:center;line-height: 45px;">
			<text style="color:#8F8F94">综艺</text>
			<text style="color:#8F8F94">更多<text class="iconfont icon-next"></text></text>
		</view>
		<glanceImgGrid :imgdes=true :imgradius=true @imgclick="openMovieDetail" :data="zyGrids">
		</glanceImgGrid>
		<!--分割线 -->
		<view class="splite-line"></view>
		<!--占位-->
		<view class="place" style="height:10upx"></view>
		<view class="uni-padding-wrap" style="display:flex;flex-flow:row;justify-content:space-between;align-items:center;line-height: 45px;">
			<text style="color:#8F8F94">动漫</text>
			<text style="color:#8F8F94">更多<text class="iconfont icon-next"></text></text>
		</view>
		<glanceImgGrid :imgdes=true :imgradius=true @imgclick="openMovieDetail" :data="dmGrids">
		</glanceImgGrid>
	</view>

</template>

<script>
	import glanceImgGrid from '../../components/glance-glanceImgGrid.vue';
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				fontColor: '#231edf',
				fontSize: 0,
				indicatorDots: true,
				circular: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				//轮播
				swiperList: [{
						sid: 0,
						src: '自定义src0',
						img: '../../static/HM-shophome/swiper-img/0.jpg'
					},
					{
						sid: 1,
						src: '自定义src1',
						img: '../../static/HM-shophome/swiper-img/1.jpg'
					},
					{
						sid: 2,
						src: '自定义src2',
						img: '../../static/HM-shophome/swiper-img/2.jpg'
					},
					{
						sid: 3,
						src: '自定义src3',
						img: '../../static/HM-shophome/swiper-img/3.jpg'
					}
				], //分类
				zjgxGrids: [], //最近更新（宫格）
				dyGrids: [], //电影（宫格）
				dsGrids: [], //电视（宫格）
				zyGrids: [], //综艺 （宫格）
				dmGrids: [], //动漫（宫格）

			}
		},
		components: {
			glanceImgGrid
		},
		onLoad() {
			var _this = this;
			const res = uni.getSystemInfoSync();
			this.fontSize = res.windowWidth / 6;
			uni.startPullDownRefresh({
				success: (e) => {
					console.log(JSON.stringify(e));
				},
				fail: (e) => {
					console.log(JSON.stringify(e));
				}
			})
			var r = 0;
			for (var i = 0; i < 9; i++) {
				if (i % 3 == 0) {
					r++
				}
				this.zjgxGrids.push({
					src: "../../static/img/movie/load.gif",
					destext: "",
					rownum: r,
					imghref: ""
				})
				this.dyGrids.push({
					src: "../../static/img/movie/load.gif",
					destext: "",
					rownum: r,
					imghref: ""
				})
				this.dsGrids.push({
					src: "../../static/img/movie/load.gif",
					destext: "",
					rownum: r,
					imghref: ""
				})
				this.zyGrids.push({
					src: "../../static/img/movie/load.gif",
					destext: "",
					rownum: r,
					imghref: ""
				})
				this.dmGrids.push({
					src: "../../static/img/movie/load.gif",
					destext: "",
					rownum: r,
					imghref: ""
				})

			}
		},
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../HM-search/HM-search'
			})
		},
		onPullDownRefresh() {
			var _this = this;
			console.log(_this.hostDomain + '/ys/recent/9')
			uni.request({
				url: _this.hostDomain + '/ys/recent/9',
				header: {
					'content-type': 'application/x-www-form-urlencoded',
				},
				success: (res) => {
					var rownum = 0;
					for (var i = 0; i < res.data.data.zjgx.length; i++) {
						_this.zjgxGrids[i].src = res.data.data.zjgx[i].vPic;
						_this.zjgxGrids[i].destext = res.data.data.zjgx[i].vName;

						_this.dyGrids[i].src = res.data.data.dy[i].vPic;
						_this.dyGrids[i].destext = res.data.data.dy[i].vName;

						_this.dsGrids[i].src = res.data.data.ds[i].vPic;
						_this.dsGrids[i].destext = res.data.data.ds[i].vName;

						_this.zyGrids[i].src = res.data.data.zy[i].vPic;
						_this.zyGrids[i].destext = res.data.data.zy[i].vName;

						_this.dmGrids[i].src = res.data.data.dm[i].vPic;
						_this.dmGrids[i].destext = res.data.data.dm[i].vName;
						if (i % 3 == 0) {
							rownum++;
						}
						_this.zjgxGrids[i].rownum = rownum;
						_this.zjgxGrids[i].imghref = res.data.data.zjgx[i].playData;


						_this.dyGrids[i].rownum = rownum;
						_this.dyGrids[i].imghref = res.data.data.dy[i].playData;;


						_this.dsGrids[i].rownum = rownum;
						_this.dsGrids[i].imghref = res.data.data.ds[i].playData;;


						_this.zyGrids[i].rownum = rownum;
						_this.zyGrids[i].imghref = res.data.data.zy[i].playData;;

						_this.dmGrids[i].rownum = rownum;
						_this.dmGrids[i].imghref = res.data.data.dm[i].playData;;
					}
					uni.stopPullDownRefresh();
				},
				fail: (e) => {
					console.log(JSON.stringify(e));
					uni.stopPullDownRefresh();

				}
			})
			console.log("下拉刷新");
		},
		methods: {
			openMovieDetail(imghref) {
				console.log(imghref)
				uni.navigateTo({
					url: "../movie/movieDetails/movieDetails?playdata=" + imghref,
				})
			}
		},
	}
</script>

<style lang="scss">
	.swiper {
		height: 300upx;
	}

	.swiper-item {
		display: block;
		height: 300upx;
		line-height: 300upx;
		text-align: center;
	}

	.splite-line {
		width: 97.9%;
		border: 4px solid #F0F0F0;
	}
</style>
