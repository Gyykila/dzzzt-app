<template>
  <span class="vue-contextmenu-listWrapper" :class="'vue-contextmenuName-' + contextMenuData.menuName">
    <div v-for="item in contextMenuData.menulists" class="context-menu-list">
      <el-button class="button" :type="item.type" @click.stop="fnHandler(item)"><i :class="item.icoName"></i>{{item.btnName}}</el-button>
    </div>
  </span>
</template>
<script>
  export default {
    props: {
      contextMenuData: {
        type: Object,
        requred: false,
        default () {
          return {
            menuName: null,
            axios: {
              x: null,
              y: null
            },
            menulists: [
              {
                fnHandler: 'adddata',
                icoName: 'fa fa-home fa-fw',
                btnName: 'New'
              },
              {
                fnHandler: 'savedata',
                icoName: 'fa fa-home fa-fw',
                btnName: 'Save'
              }
            ]
          }
        }
      },
      transferIndex: {
        type: Number,
        default: 0
      }
    },
    watch: {
      'contextMenuData.axios' (val) {
        var x = val.x
        var y = val.y
        var _this = this
        var index = _this.transferIndex
        var menuName = 'vue-contextmenuName-' + _this.contextMenuData.menuName
        var menu = document.getElementsByClassName(menuName)[index]
        menu.style.display = 'block'
        menu.style.left = x + 'px'
        menu.style.top = y + 'px'
        document.addEventListener('mouseup', function () {
          menu.style.display = 'none'
        }, false)
      }
    },
    methods: {
      fnHandler (item) {
        this.$emit(item.fnHandler)
      }
    }
  }
</script>
<style>
  .vue-contextmenu-listWrapper {
    display: none;
    position: fixed;
    z-index: 9999;
    background: #DFD7E3;
    top: 0;
    left: 0;
  }
  .context-menu-list .button{
    width:150px;
    border-radius: 0px;
  }
</style>
