<!-- glance 图片表格 -->
<template name="glanceImgGrid">
		<!-- 图片表格 -->
		<view class="glance-image-grid" :style="{position : positionS}">
			<!-- 图片行循环 -->
			<view v-for="(item ,index) in imgrows" :key='index'>
				<view class="glance-image-grid-items">
					<view style="width: 100%;" v-for="(items, i) in rowcompose" :key='i' v-if="items.rownum == item.rownum"> 
						<!-- 图片列表 -->
						<image :src="items.src" mode="scaleToFill" :class="[imgradius ? 'glance-imgradius':'noimgradiuscss']" 
							:style="{width: imgdensity+'%',height: [items.imgheight? items.imgheight:imgheight]}"
							@error="imgerr" @click="onClick(items.imghref)">
						</image>
					</view>
			    </view>
				<!-- 图片描述 -->
				<view v-if="imgdes" class="glance-image-grid-items-des">
					<view style="width: 100%;" v-for="(imgdes, k) in rowcompose" :key='k' v-if="imgdes.rownum == item.rownum" :style="{width: imgdensity+'%'}">
						<!-- 描述信息 -->
						<view style="display: flex;flex-flow: column wrap">
							<!-- 营销标签 -->
							<view><view v-if="imgdes.deslabel" class="glance-image-grid-items-des-deslabel">{{ imgdes.deslabel}} </view></view>
							<!-- 品名 -->
							<view><view v-if="imgdes.destext" class="glance-image-grid-items-des-destext">{{ imgdes.destext}}</view></view>
							<!-- 价格 -->
							<view v-if="imgdes.oriprice"  class="glance-image-grid-items-des-price">
								<!-- 原始价 -->
								<text v-if="imgdes.oriprice" class="glance-image-grid-items-des-price-oriprice">￥{{ imgdes.oriprice}}</text>
								<!-- 当前价 -->
								<text v-if="imgdes.curprice" class="glance-image-grid-items-des-price-curprice">￥{{ imgdes.curprice}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
export default {
	name: 'glanceImgGrid',
	props: {
		//img src
		data:Array,
		imgdes:{
			type:Boolean,
			default:false
		},
		imgdensity:{
			type:Number,
			default:95
		},
		imgradius:{
			type:Boolean,
			default:true
		},
		positioninherit:{
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			//图片行数 图片数
			imgrows:[],
			//每图片排版属性
			rowcompose: [],
			imgheight:'150px'
		}
	},
	created: function() {
		if (0 >= this.rows){
			throw new Error("glanceImgGrid 缺失必要属性rows!");
		}else{
			this.data && this.data.forEach((item, index) => {
				// json必需属性检查
				if (0 == item.hasOwnProperty("rownum")){
					throw new Error("glanceImgGrid 缺失必要属性rownum!");
				}else if (0 == item.hasOwnProperty("imghref")){
					throw new Error("glanceImgGrid 缺失必要属性imghref!");
				}else if (0 == item.hasOwnProperty("src")){
					throw new Error("glanceImgGrid 缺失必要属性src!");
				}else{
					// console.log(item)
					let existitem = false
					//计算图片行数、每行图片数
					for (var i = 0; i < this.imgrows.length; i++) {
						if (item.rownum == this.imgrows[i].rownum){
							existitem = true
							this.imgrows[i].cntimgs = this.imgrows[i].cntimgs+1
						}
					}
					if (!existitem) {
						let obj ={rownum:0,cntimgs:0}
						obj.rownum = item.rownum
						obj.cntimgs = 1
						this.imgrows.push(obj)
					}
					// data数据装载
					this.rowcompose.push(item);
				}
			})
			// console.log(this.rowcompose)
			// console.log(this.imgrows)
		}
	},
	computed: {},
	methods: {
		onClick(imghref) {
			this.$emit('imgclick',imghref);
		},
		imgerr: function(e) {
			console.error('图片资源发生error事件，错误信息' + e.detail.errMsg);
		},
		positionS(){
		    if (this.positioninherit) {
				return 'inherit'
			}else{
				return false
			}
		}		
	}
};
</script>

<style lang="scss">
	// 图片表格
	.glance-image-grid {
		// 间隔预留
		// margin-top: 20upx;
		margin-bottom: 20upx;
		margin-left: 20upx;
		margin-right: 20upx;	
	}
	// 项目
	.glance-image-grid-items {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-flow: row nowra;
		align-items: center ;
		justify-content: space-between ;
		}
	// 图片圆角
	.glance-imgradius {
		border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;
	}
	// 项目描述
	.glance-image-grid-items-des{
		margin-left: 5px;
		display: flex;
		display: -webkit-flex;
		flex-flow: row nowra;
		// align-items: center;
		justify-content: space-between ;
		// 营销标签
		&-deslabel{
			background-color: #F40;
			padding: 3px;
			float: left;
			font-size: 9px;
			color: white;
		}
		// 品名
		&-destext{
			text-align:left;
			margin-right: 5px;
			font-size: 14px;
			float: left;
		}
		// 价格
		&-price{
			height: 30px;
			// 当前价
			&-curprice{
				color: #f40;
				float: left;
				font-size: 15px;
			}
			// 原始价
			&-oriprice{
				text-decoration:line-through;
				margin-right: 8px;
				float: left;
				color: #999999;
				font-size: 12px;
			}
		}
	}
</style>
