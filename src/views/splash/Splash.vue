<template>
  <section>
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner" @click="login">登录</span>
          </el-dropdown>
        </el-col>
      </el-col>
      <el-col :span="24" class="main">
          <section class="content-container">
            <el-row style="width:25%;float: left">
              <el-col v-for="(item, index) in list_one">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img :src="'http://1e659h7706.iok.la/upload/listimg?imgUrl='+encodeURI(item.imgURL)" class="image">
                  <div class="bottom">
                    <p>{{item.name}}</p>
                    <time class="time">{{ item.imgDate }}</time>
                    <p class="address">{{item.address}}</p>
                    <div class="more">
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <el-row style="width:25%;float: left">
              <el-col v-for="(item, index) in list_tow">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img :src="'http://1e659h7706.iok.la/upload/listimg?imgUrl='+encodeURI(item.imgURL)" class="image">
                  <div class="bottom">
                    <p>{{item.name}}</p>
                    <time class="time">{{ item.imgDate }}</time>
                    <p class="address">{{item.address}}</p>
                    <div class="more">
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <el-row style="width:25%;float: left;">
              <el-col v-for="(item, index) in list_thr">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img :src="'http://1e659h7706.iok.la/upload/listimg?imgUrl='+encodeURI(item.imgURL)" class="image">
                  <div class="bottom">
                    <p>{{item.name}}</p>
                    <time class="time">{{ item.imgDate }}</time>
                    <p class="address">{{item.address}}</p>
                    <div class="more">
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <el-row style="width:25%;float: left">
              <el-col v-for="(item, index) in list_for">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img :src="'http://1e659h7706.iok.la/upload/listimg?imgUrl='+encodeURI(item.imgURL)" class="image">
                  <div class="bottom">
                    <p>{{item.name}}</p>
                    <time class="time">{{ item.imgDate }}</time>
                    <p class="address">{{item.address}}</p>
                    <div class="more">
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </section>
      </el-col>
    </el-row>
  </section>
</template>

<script>
    import $utils from '../../common/js/util'
    import {getIMGList} from '../../api/api'

    export default {
        data() {
            return {
                list_one:null,
                list_tow:null,
                list_thr:null,
                list_for:null,
                index:0
            }
        },
        methods: {
            login: function () {
                this.$router.push('/login');
            },
            initData(){
                var param = new URLSearchParams();
                param.append("params", this.index);
                getIMGList(param).then(result => {
                    let { msg, code, data } = result;
                    if (code !== "SUCCESS") {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    } else {
                        var list1 = []
                        var list2 = []
                        var list3 = []
                        var list4 = []
                        var i;
                        data.forEach(function(item,index){
                            item.imgDate = $utils.formatDate.format(new Date(item.imgDate),'yyyy-MM')
                            if(item.id%4 == 0){
                                list1.push(item)
                            }else if(item.id%4 == 1){
                                list2.push(item)
                            }else if(item.id%4 == 2){
                                list3.push(item)
                            }else{
                                list4.push(item)
                            }
                            i = item.id;
                        });
                        this.index = i
                        this.list_one  = list1
                        this.list_tow  = list2
                        this.list_thr  = list3
                        this.list_for  = list4
                    }
                })
            }
        },
        mounted() {
            this.initData()
        }
    };
</script>

<style scoped lang="scss">
  @import '~scss_vars';
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
      height: 60px;
      line-height: 60px;
      background: $--color-primary;
      color:#fff;
      .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
          cursor: pointer;
          color:#fff;
        }
      }
      .tools{
        padding: 0px 23px;
        width:14px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
      }
    }
    .main {
      display: flex;
      position: absolute;
      top: 60px;
      bottom: 0px;
      overflow: hidden;
      .content-container {
        flex:1;
        overflow-y: scroll;
        padding: 0px;
        .content-wrapper {
          background-color: #eee;
          box-sizing: border-box;
        }
      }
    }
  }
  .time {
    font-size: 12px;
    color:#666
  }

  .address{
    font-size: 10px;
    color:#666666
  }

  .bottom {
    position: relative;
    margin: 13px;
    line-height: 12px;
    text-align: center;
    z-index: 999;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    max-width: 100%;
    display: block;
    cursor: pointer;
    transform: scale(1);
    transition: all 1s ease 0s;
    -webkit-transform: scale(1);
    -webkit-transform: all 1s ease 0s;
  }

  .image:hover{
    transform: scale(2);
    transition: all 2s ease 0s;
    -webkit-transform: scale(2);
    -webkit-transform: all 2s ease 0s;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>