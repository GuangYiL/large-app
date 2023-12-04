import {createApp} from 'vue'
import './styles.css'
import App from './App.vue'
import 'virtual:uno.css'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';

// import { BorderBox1 } from '@dataview/datav-vue3'


const app = createApp(App);
app.use(ArcoVue);
app.use(ArcoVueIcon);
//@ts-ignore
// app.use(BorderBox1);
app.mount('#app');
