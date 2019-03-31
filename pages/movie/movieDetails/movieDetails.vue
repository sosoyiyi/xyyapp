<template>
	<view class="page">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- <video @click="tap" class="video" id="demoVideo" :controls="disable" :show-fullscreen-btn="disable" :show-play-btn="disable"
		 :show-center-play-btn="disable" :enable-progress-gesture="disable" @fullscreenchange="fullscreenchange" :src="src">
			<cover-view class="controls-title">简单的自定义 controls</cover-view>
			<cover-image id="play" class="controls-play img" @click="play" src="../../../static/play.png"></cover-image>
			<cover-image id="pause" class="controls-pause img" @click="pause" src="../../../static/pause.png"></cover-image>
		</video> -->
		<web-view id="web-view" webview-styles="width:100%;height:400px;" class="web-view" src="/hybrid/html/play.html"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				src: "",
				videoCtx: null,
				disable: true,
			};
		},
		onLoad(e) {
			this.src = e.playdata.split("$")[3];
			console.log(e.playdata);
			console.log(e.playdata.split("$"));
			this.videoCtx = uni.createVideoContext('demoVideo')

		},
		methods: {
			videoErrorCallback(e) {},
			play(event) {
				this.videoCtx.play();
				uni.showToast({
					title: '开始播放',
					icon: 'none'
				});
			},
			pause(event) {
				this.videoCtx.pause();
				uni.showToast({
					title: '暂停播放',
					icon: 'none'
				});
			},
			tap(event) {
				console.log('11111');
			}

		}

	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #000000;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		top: 0;
		background-color: #000000;
		z-index: 999;
	}
</style>
