import Vue from 'vue';
import App from './App.vue';
import iView from 'iview';
import Vant from 'vant';
import './registerServiceWorker'

// common components
// header
import HrytHeader from './components/common/HrytHeader.vue';
// footer
import HrytFooter from './components/common/HrytFooter.vue';
// button
import HrytMenu from './components/common//button/HrytMenu.vue';
import HrytAddComplex from './components/common/button/HrytAddComplex.vue';
// ui
import HrytCoverBox from './components/common/HrytCoverBox.vue';
import HrytMenuPanel from './components/common/HrytMenuPanel.vue';

// business components


// store
import store from './store';

// router
import router from './router';

// util
import {
  axios,
  errorHandler
} from './utils';

// css
import 'iview/dist/styles/iview.css';
import 'vant/lib/index.css';
import i18n from './i18n'

Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(Vant);

Vue.component("hryt-menu", HrytMenu);
Vue.component("hryt-header", HrytHeader);
Vue.component("hryt-menu-panel", HrytMenuPanel);
Vue.component("hryt-footer", HrytFooter);
Vue.component("hryt-add-complex", HrytAddComplex);
Vue.component("hryt-cover-box", HrytCoverBox);

// 定义全局变量
Vue.prototype.$http = axios;
Vue.config.errorHandler = errorHandler;
Vue.prototype.$throw = (error) => errorHandler(error, this);

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')