import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
// 引入混合
import mixin from './mixins'

import * as filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 引入默认样式
import '../static/css/noremall.css';

import {
    Pagination,
    Dialog,
    Input,
    Radio,
    Select,
    Option,
    Button,
    Table,
    TableColumn,
    DatePicker,
    Row,
    Col,
    RadioGroup,
    Tabs,
    TabPane,
    Popover
} from 'element-ui'

// 输入框 单选框 按钮
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Button)
// 分页
Vue.use(Pagination)
// 下拉选择
Vue.use(Select)
Vue.use(Option)
// 布局
Vue.use(Row)
Vue.use(Col)

// 表格
Vue.use(Table)
Vue.use(TableColumn)
// 日期
Vue.use(DatePicker)
// 对话框
Vue.use(Dialog)
// Tab
Vue.use(Tabs)
Vue.use(TabPane)

Vue.use(Popover)


Vue.mixin(mixin)
new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})
