import { createApp } from 'vue'
import App from './App.vue'
import Button from './components/button/index';
import Icon from './components/icon/index';
import MUI from './components/index';

const app = createApp(App);
// app.use(Button).use(Icon).mount('#app')
app.use(MUI).mount('#app')
console.log(222)
console.log(Button);
console.log(Icon);
