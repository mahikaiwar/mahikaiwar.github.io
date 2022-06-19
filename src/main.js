import {createApp} from 'vue';
import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';

createApp(App).use(router).use(VueViewer).mount('#app');
