<template>
	<section>
		<el-tabs v-model="activeName" type="card">
			<el-tab-pane label="菜单管理" name="first">
				<el-row>
					<el-col :span="6">
						<div @contextmenu.prevent="showMenu($event)">
							<el-tree
									:data="treeMenu"
									:props="defaultProps"
									default-expand-all
									node-key="id"
									@node-click="handleNodeClick">
							</el-tree>
							<vue-context-menu :contextMenuData="contextMenuData"
											  @addRoot="addRoot"
											  @addChild="addChild"></vue-context-menu>
						</div>
					</el-col>
					<el-col :span="18">
						<el-form ref="form" :model="form" label-width="80px">
							<el-form-item label="菜单名字">
								<el-input v-model="form.label"></el-input>
							</el-form-item>
							<el-form-item label="路径">
								<el-input v-model="form.path"></el-input>
							</el-form-item>
							<el-form-item label="显示顺序">
								<el-input-number v-model="form.seq" :disabled="true"></el-input-number>
							</el-form-item>
							<el-form-item label="图标">
								<el-select v-model="form.iconCls" filterable placeholder="请选择">
									<el-option
											v-for="item in options"
											:key="item.value"
											:label="item.label"
											:value="item.value">
											<i :class="item.value"></i>
											<span style="float: right; color: #8492a6; font-size: 13px">{{ item.label }}</span>
									</el-option>
								</el-select>
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

			<el-tab-pane label="权限管理" name="secound">
				<el-container>
					<el-select v-model="role" placeholder="请选择">
						<el-option
								v-for="item in listRole"
								:key="item.id"
								:label="item.name"
								:value="item.name"
                                disabled>
						</el-option>
					</el-select>
					<el-button type="primary" @click="dialogFormVisible = true" disabled><i class="el-icon-edit el-icon--left"></i>新增用户组</el-button>
					<el-button type="primary" @click="onSaveRole"><i class="el-icon-upload el-icon--left"></i>保存修改</el-button>
					<el-tree
							:data="roleMenu"
							node-key="id"
							:props="defaultProps"
							show-checkbox
							:default-checked-keys="roleform.menusIDs"
							default-expand-all
                            check-strictly="true"
                            ref="tree2"
							style="margin-top: 15px;">
					</el-tree>

					<el-dialog title="新增用户组" :visible.sync="dialogFormVisible">
						<el-form :model="roleform">
							<el-form-item label="用户名称">
								<el-input v-model="roleform.name" auto-complete="off"></el-input>
							</el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="onAddRole">确 定</el-button>
						</div>
					</el-dialog>
				</el-container>
			</el-tab-pane>
		</el-tabs>
	</section>
</template>

<script>
    import { getMenuTree,saveMenus,getRoleList,saveRoleMenu } from '../../api/api'
    import VueContextMenu from '../../components/VueContextMenu'
	import $utils from '../../common/js/util'
	let id = 0
    export default {
        components: {VueContextMenu},
        data() {
            return {
                activeName:"first",
                treeMenu: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                curNode:null,
                role:null,
                roleId:null,
                listRole: [],
				roleMenu:[],
                contextMenuData: {
                    menuName: 'demo',
                    axios: {
                        x: null,
                        y: null
                    },
                    menulists: [
                        {
                            fnHandler: 'addRoot',
                            icoName: 'fa fa-home fa-fw',
                            btnName: '新增根节点',
							type:""
                        },
                        {
                            fnHandler: 'addChild',
                            icoName: 'el-icon-plus el-icon--left',
                            btnName: '新增子节点',
                            type:""
                        }
                    ]
                },
                form: {},
                dialogFormVisible: false,
                roleform: {
                    name: '',
					menusIDs:[]
                },
                options: [{"value":"el-icon-upload","label":"el-icon-upload"},{"value":"el-icon-circle-error","label":"el-icon-error"},{"value":"el-icon-success","label":"el-icon-success"},{"value":"el-icon-warning","label":"el-icon-warning"},{"value":"el-icon-sort-down","label":"el-icon-sort-down"},{"value":"el-icon-sort-up","label":"el-icon-sort-up"},{"value":"el-icon-arrow-left","label":"el-icon-arrow-left"},{"value":"el-icon-circle-plus","label":"el-icon-circle-plus"},{"value":"el-icon-circle-plus-outline","label":"el-icon-circle-plus-outline"},{"value":"el-icon-arrow-down","label":"el-icon-arrow-down"},{"value":"el-icon-arrow-right","label":"el-icon-arrow-right"},{"value":"el-icon-arrow-up","label":"el-icon-arrow-up"},{"value":"el-icon-back","label":"el-icon-back"},{"value":"el-icon-circle-close","label":"el-icon-circle-close"},{"value":"el-icon-date","label":"el-icon-date"},{"value":"el-icon-circle-close-outline","label":"el-icon-circle-close-outline"},{"value":"el-icon-caret-left","label":"el-icon-caret-left"},{"value":"el-icon-caret-bottom","label":"el-icon-caret-bottom"},{"value":"el-icon-caret-top","label":"el-icon-caret-top"},{"value":"el-icon-caret-right","label":"el-icon-caret-right"},{"value":"el-icon-close","label":"el-icon-close"},{"value":"el-icon-d-arrow-left","label":"el-icon-d-arrow-left"},{"value":"el-icon-check","label":"el-icon-check"},{"value":"el-icon-delete","label":"el-icon-delete"}]
            }
        },
        methods: {
            addRoot() {
                const Child = {
					id:null,
					label:"新菜单"+id++,
					path:"",
					hidden:false,
					iconCls:null,
					parent:null,
					seq:this.treeMenu.length,
					children:[]
				}
                this.treeMenu.push(Child)
            },
			showMenu (event) {
                var x = event.clientX
                var y = event.clientY
                this.curNode = event.target.innerText
                this.contextMenuData.axios = {
                    x, y
                }
            },
            addChild () {
                this.treeMenu.forEach((child)=>{
                    if(child.label == this.curNode){
                        var Child = {
                            id:null,
                            label:"新菜单"+id++,
                            path:"",
                            hidden:false,
                            iconCls:null,
                            parent:child.id,
                            seq:child.children.length,
                            children:[]
                        }
                        child.children.push(Child)
                    }
                })
            },
            onSaveMenu () {
                var requestparams = {menus:this.treeMenu};
                var param = new URLSearchParams();
                param.append("params", JSON.stringify(requestparams));
                param.append("token", $utils.getUserToken())
                saveMenus(param).then(result => {
                    let { msg, code, data } = result
					this.$message({
						message: msg,
						type: 'success'
					});
                    this.$emit('refreshbizlines', null);
                });
			},
            onDelete () {
				if(this.form.parent){
				    console.log(JSON.stringify(this.form))
                    this.treeMenu[(this.form.parent-1)].children.splice((this.form.seq),1)
				}else{
                    this.treeMenu.splice((this.form.seq),1)
				}
			},
            handleNodeClick(data) {
                this.form = data
            },
            onSaveRole() {
                var checked = this.$refs.tree2.getCheckedKeys()
                var requestparams = { roleId: this.roleId, menusIds: checked};
                var param = new URLSearchParams();
                param.append("params", JSON.stringify(requestparams));
                param.append("token", $utils.getUserToken())
                saveRoleMenu(param).then(result => {
                    let { msg, code, data } = result;
                    this.$message({
                        message: msg,
                        type: 'info'
                    });
                    this.$emit('refreshbizlines', null);
                });
            },
            onAddRole() {
                this.roleform.menusIDs = []
				this.dialogFormVisible = false
                this.roleMenu = this.listRole[0].menus
                this.listRole.push({id:null,name:this.roleform.name,menus:[]})
                this.role = this.roleform.name
            },
			initData() {
                var requestparams = {};
                var param = new URLSearchParams();
                param.append("params", JSON.stringify(requestparams));
                param.append("token", $utils.getUserToken());
                getMenuTree(param).then(result => {
                    let { msg, code, data } = result;
                    if (code !== "SUCCESS") {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        this.treeMenu = data
                    }
                })
				getRoleList(param).then(result => {
					let { msg, code, data } = result;
					if (code !== "SUCCESS") {
						this.$message({
							message: msg,
							type: 'error'
						});
					} else {
						this.listRole = data
						this.role = this.listRole[0].name
						this.roleId = this.listRole[0].id
						this.roleMenu = this.listRole[0].menus
						var s = [];
						this.roleMenu.forEach(function(item){
							if(item.hidden === false){
								s.push(item.id)
							}
							item.children.forEach(function(child){
								if(child.hidden === false){
									s.push(child.id)
								}
							})
						})
						this.roleform.menusIDs = s;
					}
				})
			}
        },
        mounted() {
            this.initData()
        }
    }
</script>

<style scoped>

</style>