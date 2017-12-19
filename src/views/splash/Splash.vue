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
              <el-col v-for="(o, index) in 1" :key="o">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img src="../../assets/z2.jpg" class="image">
                  <div class="bottom">
                    <p>自来也</p>
                    <time class="time">{{ currentDate }}</time>
                    <p class="address">重庆</p>
                    <div class="more">
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <el-row style="width:25%;float: left">
              <el-col v-for="(o, index) in 1" :key="o">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img src="../../assets/z3.jpg" class="image">
                  <div class="bottom" >
                    <p>二世祖</p>
                    <time class="time">{{ currentDate }}</time>
                    <p class="address">成都</p>
                    <div class="more">
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <el-row style="width:25%;float: left;">
              <el-col v-for="(o, index) in 1" :key="o">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img src="../../assets/z4.jpg" class="image">
                  <div class="bottom">
                    <p>凯皇</p>
                    <time class="time">{{ currentDate }}</time>
                    <p class="address">大理</p>
                    <div class="more">
                      <i class="el-icon-more"></i>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>

            <el-row style="width:25%;float: left">
              <el-col v-for="(o, index) in 1" :key="o">
                <el-card class="my-card" :body-style="{ padding:'0px'}">
                  <img src="../../assets/z5.jpg" class="image">
                  <div class="bottom">
                    <p>丝带</p>
                    <time class="time">{{ currentDate }}</time>
                    <p class="address">青海</p>
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
    import util from '../../common/js/util'

    export default {
        data() {
            return {
                currentDate: util.formatDate.format(new Date(), 'yyyy-MM-dd')
            }
        },
        methods: {
            login: function () {
                this.$router.push('/login');
            },
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