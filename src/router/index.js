import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import RecordQuery from '@/components/RecordQuery'
import UserManager from '@/components/UserManager'
import SysConfigManager from '@/components/SysConfigManager'
import SysLogQuery from '@/components/SysLogQuery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'UserManager',
          name: 'UserManager',
          component: UserManager
        }, {
          path: 'RecordQuery',
          name: 'RecordQuery',
          component: RecordQuery
        }, {
          path: 'SysConfigManager',
          name: 'SysConfigManager',
          component: SysConfigManager
        }, {
          path: 'SysLogQuery',
          name: 'SysLogQuery',
          component: SysLogQuery
        }
      ]
    }
  ]
})
