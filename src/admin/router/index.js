import Router from 'vue-router';

import Home from 'admin/views/Home';
import NotFound from 'admin/views/NotFound';
import Login from 'admin/views/Login';
import Admin from 'admin/views/Admin';
import AdminFront from 'admin/views/AdminFront';
import ConfigList from 'admin/views/configManage/ConfigList';
import ConfigModify from 'admin/views/configManage/ConfigModify';
import ManageList from 'admin/views/manageList/ManageList';
import RightList from 'admin/views/rightList/RightList';

// 机器人基本设置
import RobotBasicSetup from 'admin/views/robotBasicSetup/RobotBasicSetup';

// 模板文件
// import List from 'admin/views/templates/List';
// import Modify from 'admin/views/templates/Modify';

let routes = [
    { path: '/', redirect: '/admin/ConfigList' },
    { path: '/login', name: 'login', component: Login },
    { path: '/admin', name: 'admin', component: Admin, children: [
        { path: 'home', name: 'home', component: Home },
        { path: 'configList', name: 'configList', component: ConfigList },
        { path: 'configModify', name: 'configModify', component: ConfigModify },
        { path: 'configModify/:id', name: 'configModifyById', component: ConfigModify, props: true },
        { path: 'manageList', name: 'manageList', component: ManageList },
        { path: 'rightList', name: 'rightList', component: RightList },
        // { path: 'list', name: 'list', component: List },
        // { path: 'modify', name: 'modify', component: Modify }
    ] },
    { path: '/adminpage', name: 'adminpage', component: AdminFront, children: [
        { path: 'home', name: 'homePage', component: Home },
        { path: 'configList', name: 'configListPage', component: ConfigList },
        { path: 'configModify', name: 'configModifyPage', component: ConfigModify },
        { path: 'configModify/:id', name: 'configModifyByIdPage', component: ConfigModify, props: true },
        { path: 'manageList', name: 'manageListPage', component: ManageList },
        { path: 'rightList', name: 'rightListPage', component: RightList },
        // { path: 'list', name: 'listPage', component: List },
        // { path: 'modify', name: 'modifyPage', component: Modify },

        { path: 'robotbasicsetup', name: 'robotbasicsetup', component: RobotBasicSetup }
    ] },
    { path: '*', name: 'notfound', component: NotFound }
]

export default () => {
    return new Router({
        // mode: 'history',
        routes
    })
}
