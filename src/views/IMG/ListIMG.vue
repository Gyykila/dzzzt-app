<template>
	<section>
		<el-tabs v-model="activeName2" type="card">
			<el-tab-pane label="图片列表" name="first">
				<el-row>
					<el-col :span="6">
						<div class="scrollwrapper-container scrollwrapper">
							<div class="scrollwrapper-content">
								<el-card v-for="(index) in 30" :body-style="{ padding:'0px',margin:'0px'}">
									<img src="../../assets/z4.jpg" class="image">
									<p class="p-date">2017-12-18 10:00</p>
									<p class="p-content">ascasc</p>
									<p class="p-up">520</p>
								</el-card>
							</div>

						</div>
					</el-col>

					<el-col :span="18">
						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item label="图片标签">
								<el-input v-model="form.label"></el-input>
							</el-form-item>
							<el-form-item label="图片日期">
								<el-input v-model="form.date"></el-input>
							</el-form-item>
							<el-form-item label="点赞数">
								<el-input-number v-model="form.up" :disabled="true"></el-input-number>
							</el-form-item>
							<el-form-item label="是否隐藏">
								<el-switch v-model="form.hidden"></el-switch>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" @click="onSaveMenu">保存</el-button>
								<el-button type="danger" @click="onDelete">删除</el-button>
							</el-form-item>
						</el-form>
					</el-col>
				</el-row>
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
        }
    }
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	.image {
		max-width: 80px;
		float: left;
	}
	.p-content{
		float: left;

	}
	.p-date{
		float: right;
		font-size: 12px;
		color: #8c939d;
	}
	.p-up{
		float: left;

	}
	.scrollwrapper-container{
		width: 100%;
		height: 500px;
		overflow: auto;
		float: left;
		border: none;
	}
	.scrollwrapper-content{
		margin-right: 5px;
	}
	.scrollwrapper::-webkit-scrollbar {/*滚动条整体样式*/
		width: 10px;
		height: 1px;
	}
	.scrollwrapper::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		background: $--color-primary;
	}
	.scrollwrapper::-webkit-scrollbar-track {/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		border-radius: 10px;
		background: #eeeeee;
	}
</style>