// window.Vue = require('vue');
import Vue from 'vue'


Vue.directive('fadescroll', {
    inViewport (el) {
        var rect = el.getBoundingClientRect();
        return !(rect.bottom < 0 || rect.right < 0 ||
            rect.left > window.innerWidth ||
            rect.top > window.innerHeight)
    },
    bind(el, binding) {
        el.classList.add('hnn__before-enter');
        el.$onScroll = function() {
            if (binding.def.inViewport(el)) {
                el.classList.add('hnn__enter');
                el.classList.remove('hnn__before-enter');
                binding.def.unbind(el, binding)
            }
        }
        document.addEventListener('scroll', el.$onScroll);
    },
    inserted(el, binding) {
        el.$onScroll();
    },
    unbind(el, binding) {
        document.removeEventListener('scroll', el.$onScroll);
        delete el.$onScroll;
    }
});
