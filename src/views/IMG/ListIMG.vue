<template>
	<section>
		<el-tabs v-model="activeName2" type="card">
			<el-tab-pane label="图片列表" name="first">
				<el-row>
					<el-col :span="6">
							<el-table
									:data="SLIMGLsit"
									max-height="500"
									style="width: 100%"
									:show-header="false"
									highlight-current-row
									@row-click="handleClick">
								<el-table-column>
									<template slot-scope="scope">
										<div>
											<img :src="scope.row.imgSLURL" class="image">
										</div>
										<div style="float: right">
											<i class="el-icon-time"></i>
											<span style="margin-left: 10px">{{ scope.row.imgDate }}</span>
										</div>
										<div>
											<span style="margin-left: 10px"></span>
										</div>
										<div style="float: right;margin-top: 5px">
											<span style="margin-left: 10px">{{ scope.row.up }}</span>
										</div>
									</template>
								</el-table-column>
							</el-table>
					</el-col>

					<el-col :span="18">
						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item label="图片标签">
								<el-input v-model="form.name"></el-input>
							</el-form-item>
							<el-form-item label="图片日期">
								<el-input v-model="form.imgDate"></el-input>
							</el-form-item>
							<el-form-item label="点赞数">
								<el-input-number v-model="form.up" :disabled="true"></el-input-number>
							</el-form-item>
							<el-form-item label="是否隐藏">
								<el-switch v-model="form.hidden"></el-switch>
							</el-form-item>
							<el-form-item>
								<el-button type="primary">保存</el-button>
								<el-button type="danger">删除</el-button>
							</el-form-item>
						</el-form>
					</el-col>
				</el-row>
			</el-tab-pane>
		</el-tabs>
	</section>
</template>

<script>
	import {getIMGSLList} from '../../api/api'
    import $utils from '../../common/js/util'

    export default {
        data () {
            return {
                activeName2: 'first',
                form:{},
				SLIMGLsit:[]
            }
        },
        methods: {
            initData() {
                var param = new URLSearchParams();
                param.append("params", 0);
                param.append("token", $utils.getUserToken());
                getIMGSLList(param).then(result => {
                    let { msg, code, data } = result;
                    if (code !== "SUCCESS") {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        this.SLIMGLsit = data
                        this.SLIMGLsit.forEach(function (item) {
                            item.imgDate = $utils.formatDate.format(new Date(item.imgDate),'yyyy-MM')
                        })
                    }
                })
			},
            handleClick(row, event, column) {
                this.form = row
			}
        },
        mounted() {
            this.initData()
        }
    }
</script>

<style scoped lang="scss">
	.image {
		width: 60px;
		height: 60px;
		float: left;
	}

</style>