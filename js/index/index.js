import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './_pages/app.vue'
import Foo from "./_pages/foo.vue";
import Bar from "./_pages/bar.vue";
import elButton from "./_pages/_element/button.vue";
import elForm from "./_pages/_element/form.vue";
import { Button, Form, FormItem, Input, InputNumber, Radio, RadioGroup, RadioButton, Checkbox , CheckboxButton, CheckboxGroup, Switch, Select, DatePicker, TimeSelect, TimePicker, Col} from 'element-ui';

import ElementUI from 'element-ui' // 导入组件相关样式
// import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.css'

Vue.use(ElementUI)

Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Radio.name, Radio);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(RadioButton.name, RadioButton);
Vue.component(Checkbox.name, Checkbox);
Vue.component(CheckboxButton.name, CheckboxButton);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Switch.name, Switch);
Vue.component(Select.name, Select);
Vue.component(DatePicker.name, DatePicker);
Vue.component(TimeSelect.name, TimeSelect);
Vue.component(TimePicker.name, TimePicker);
Vue.component(Col.name, Col);


const routes = [
  // 全量加载
  { 
    path: '/foo', 
    name: 'foo',
    component: Foo 
  },

  { 
    path: '/_element/button', 
    name: 'button',
    component: elButton
  },
  { 
    path: '/_element/form', 
    name: 'form',
    component: elForm
  },

  { path: '*', redirect: 'foo' }
]

Vue.use(VueRouter)
const router = new VueRouter({ routes })

var app = new Vue({
  el: '#root',
  router,
  render: h => h(App),
  created: function() {}
})