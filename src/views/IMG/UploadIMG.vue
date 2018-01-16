<template>
	<section>
		<el-tabs v-model="activeName2" type="card">
			<el-tab-pane label="图片上传" name="first">
				<el-button style="margin: 0px 10px 10px 0px;" size="small" type="primary" @click="submitUpload">上传到服务器</el-button>
				<el-upload
						action="http://localhost:7891/upload/save"
						list-type="picture-card"
						ref="upload"
						multiple
						:on-preview="handlePictureCardPreview"
						:on-change="onChange"
						:auto-upload="false">
						<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible" size="tiny">
					<img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-tab-pane>
		</el-tabs>
	</section>
</template>

<script>
    export default {
        data () {
            return {
                activeName2: 'first',
                dialogImageUrl: '',
                dialogVisible: false,
				fileList:[]
            }
        },
        methods: {
            submitUpload() {
                // console.log(JSON.stringify(this.$refs.upload.uploadFiles))
                this.$refs.upload.submit();
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>