<template>
	<section>
		<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
			<el-tab-pane label="物料信息" name="first">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="活动名称">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="活动区域">
						<el-select v-model="form.region" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="活动时间">
						<el-col :span="11">
							<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
						</el-col>
						<el-col class="line" :span="2">-</el-col>
						<el-col :span="11">
							<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
						</el-col>
					</el-form-item>
					<el-form-item label="即时配送">
						<el-switch v-model="form.delivery"></el-switch>
					</el-form-item>
					<el-form-item label="活动性质">
						<el-checkbox-group v-model="form.type">
							<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
							<el-checkbox label="地推活动" name="type"></el-checkbox>
							<el-checkbox label="线下主题活动" name="type"></el-checkbox>
							<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<el-form-item label="特殊资源">
						<el-radio-group v-model="form.resource">
							<el-radio label="线上品牌商赞助"></el-radio>
							<el-radio label="线下场地免费"></el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="活动形式">
						<el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</el-tab-pane>

			<el-tab-pane label="工艺路线" name="second">

			</el-tab-pane>

			<el-tab-pane label="图纸档案" name="third">
				<el-carousel :interval="4000" type="card" height="300px">
					<el-carousel-item v-for="item in 6" :key="item">
						<h3>{{ item }}</h3>
					</el-carousel-item>
				</el-carousel>

				<el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
					<i class="el-icon-upload"></i>
					<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
					<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-tab-pane>
		</el-tabs>
	</section>
</template>

<script>
    export default {
        data () {
            return {
				activeName2: 'first',
                form:{}
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
	.upload-demo{
		margin-left: 35%;
	}

	.el-carousel__item {
		text-align: center;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>