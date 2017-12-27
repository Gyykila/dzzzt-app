<template>
	<el-row>
		<el-col :span="4">
			<el-table
					:data="data"
					max-height="500"
					style="width: 100%"
					:show-header="false"
					highlight-current-row
					@row-click="handleClick">
				<el-table-column>
					<template slot-scope="scope">
						<div>
							<span style="margin-left: 10px">{{ scope.row.name }}</span>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</el-col>
		<el-col :span="20">
			<el-tabs v-model="activeName2" type="card">
				<el-tab-pane label="物料信息" name="first">
					<el-form ref="form" :inline="true" :model="form" label-width="80px" size="mini">
						<el-form-item label="代码">
							<el-input v-model="form.code"></el-input>
						</el-form-item>
						<el-form-item label="名称">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="全名">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="规格型号">
							<el-input v-model="form.model"></el-input>
						</el-form-item>
						<el-form-item label="物料属性">
							<el-input v-model="form.property"></el-input>
						</el-form-item>
						<el-form-item label="物料分类">
							<el-input v-model="form.classify"></el-input>
						</el-form-item>
						<el-form-item label="基本计量单位">
							<el-input v-model="form.unit"></el-input>
						</el-form-item>
						<el-form-item label="国际号/材质/品牌">
							<el-input v-model="form.brand"></el-input>
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
    import {saveItem, getItemList} from '../../../api/api'
    import $utils from '../../../common/js/util'
    export default {
        data() {
            return {
                data: [],
                activeName2: 'first',
                form:{}
            };
        },
        methods: {
            initData() {
                var param = new URLSearchParams();
                param.append("params", null);
                param.append("token", $utils.getUserToken());
                getItemList(param).then(result => {
                    let { msg, code, data } = result;
                    if (code !== "SUCCESS") {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        this.data = data
                    }
                })
            },
            handleClick(row, event, column) {
                this.form = row
			},
            handleNodeClick(data) {
                console.log(data);
            },
            onSubmit() {
                var param = new URLSearchParams();
                param.append("params", JSON.stringify(this.form));
                param.append("token", $utils.getUserToken());
                saveItem(param).then(result => {
                    let { msg, code, data } = result;
					this.$message({
						message: msg,
						type: 'warning'
					});
                    this.initData();
                })
			}
        },
        mounted() {
            this.initData()
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