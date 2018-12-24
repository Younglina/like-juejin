import Vue from 'vue';
import Notify from './notify/main.js';
Vue.prototype.$notify = Notify;

const components = [
    Notify
]

components.forEach(component => {
    Vue.component(component.name, component);
});
const WPubUI = {
    Notify
}
export default WPubUI;