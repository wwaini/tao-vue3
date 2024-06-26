import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { testFn1, testFn, testName, testName1 } from './utils/test.js';
import showLoading from './components/myLoading/index.js'

const app = createApp(App);

// 引入并使用自定义指令
import directive from './directives'
app.use(directive);

// 绑定全局方法
app.provide('testFn', testFn)
app.config.globalProperties.testFn1 = testFn1
// 绑定全局变量
app.provide('testName', testName)
app.config.globalProperties['testName1'] = testName1

// 绑定全局方法
app.config.globalProperties.$showLoading = showLoading

app.use(router);
app.mount('#app');