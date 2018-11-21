/**
 * Created by wayne on 2018/10/31.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Layout = {template: '<div>Layout Start <router-view></router-view> Layout End</div>'}

const Foo = {template: '<div>Foo</div>'};
const Bar = {template: '<div>Bar</div>'};
const Todo = {template: '<div>Todo</div>'};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/todo',
      component: Layout,
      children: [
        {
          path: '/todo',
          component: Todo
        }
      ]
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    }
  ]
});