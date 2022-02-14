import Button from './button/index';
import Icon from './icon/index';
import Message from './message/index';

const components = [Button, Icon];

export function install(Vue) {
    components.map((component) => {
        Vue.use(component);
    });
    Vue.config.globalProperties.$mui = {
        message: Message,
    };
}

export default {
    version: '1.0.0-alpha.1',
    install,
    Button,
    Icon
}
