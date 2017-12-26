<template>
	<el-row>
		<el-col :span="4">
			<el-tree
					:data="data"
					:props="defaultProps"
					@node-click="handleNodeClick"></el-tree>
		</el-col>
		<el-col :span="20">
			<el-tabs v-model="activeName2" type="card">
				<el-tab-pane label="物料信息" name="first">
					<el-form ref="form" :inline="true" :model="form" label-width="80px" size="mini">
						<el-form-item label="代码">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="名称">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="全名">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="规格型号">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="物料属性">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="物料分类">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="基本计量单位">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="国际号/材质/品牌">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
					</el-form>
						<el-button type="primary" @click="onSubmit">保存</el-button>
						<el-button>取消</el-button>
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
		</el-col>
	</el-row>
</template>

<script>
    export default {
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                activeName2: 'first',
                form:{}
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    };
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