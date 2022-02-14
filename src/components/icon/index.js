import Icon from './icon.vue';
console.log(Icon);
Icon.install = function (Vue) {
  console.log('调用icon');
  Vue.component(Icon.name, Icon);
};

export default Icon;
