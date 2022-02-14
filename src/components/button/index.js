import Button from './button.vue';
console.log(Button);
Button.install = function (Vue) {
  const version = Number(Vue.version.split('.')[0])
  console.log(version, 'version');
  if (version === 3) {
    console.warn('This plugin requires Vue 3')
  }
  console.log('调用');
  Vue.component(Button.name, Button);
};

export default Button;
