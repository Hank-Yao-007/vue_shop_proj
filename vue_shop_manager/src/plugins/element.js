import Vue from 'vue'
import {
    Button, Form, FormItem, Input, Message, Progress, Header, Aside, Main, container,
    col, menu, row, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem, Card,
    Table, TableColumn, Switch
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Progress)

Vue.use(container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(col)
Vue.use(menu)
Vue.use(row)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

//users
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.prototype.$message = Message
