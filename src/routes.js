import Splash from './views/splash/Splash.vue'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import MenuManager from './views/manager/MenuManager.vue'


import UploadIMG from './views/IMG/UploadIMG'
import ListIMG from './views/IMG/ListIMG'

let routes = [
    {
        path: '/splash',
        component: Splash,
        name: '',
        hidden: true
    },
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '主页',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页'},
            { path: '/MenuManager', component: MenuManager, name: '菜单管理' },
            { path: '/UploadIMG', component: UploadIMG, name: '图片上传' },
            { path: '/ListIMG', component: ListIMG, name: '图片列表' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;