import Vue from 'vue';
import Main from './main.vue';

const NotifyControle = Vue.extend(Main);
let instance;

const Notify = function (options) {
    options = options || {};

    instance = new NotifyControle({
        data: options
    });

    instance.$mount();
    document.body.appendChild(instance.$el);
    instance.isShow = true;
    instance.dom = instance.$el;
    return instance;
}

export default Notify;