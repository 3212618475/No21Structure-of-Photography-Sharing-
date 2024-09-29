import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import huodong from '@/views/modules/huodong/list'
    import huodongCollection from '@/views/modules/huodongCollection/list'
    import huodongLiuyan from '@/views/modules/huodongLiuyan/list'
    import huodongYuyue from '@/views/modules/huodongYuyue/list'
    import news from '@/views/modules/news/list'
    import sucai from '@/views/modules/sucai/list'
    import sucaiCollection from '@/views/modules/sucaiCollection/list'
    import sucaiLiuyan from '@/views/modules/sucaiLiuyan/list'
    import sucaishipin from '@/views/modules/sucaishipin/list'
    import sucaishipinCollection from '@/views/modules/sucaishipinCollection/list'
    import sucaishipinLiuyan from '@/views/modules/sucaishipinLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryHuodong from '@/views/modules/dictionaryHuodong/list'
    import dictionaryHuodongCollection from '@/views/modules/dictionaryHuodongCollection/list'
    import dictionaryHuodongYuyueYesno from '@/views/modules/dictionaryHuodongYuyueYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionarySucai from '@/views/modules/dictionarySucai/list'
    import dictionarySucaiCollection from '@/views/modules/dictionarySucaiCollection/list'
    import dictionarySucaishipin from '@/views/modules/dictionarySucaishipin/list'
    import dictionarySucaishipinCollection from '@/views/modules/dictionarySucaishipinCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryHuodong',
        name: '活动类型',
        component: dictionaryHuodong
    }
    ,{
        path: '/dictionaryHuodongCollection',
        name: '收藏表类型',
        component: dictionaryHuodongCollection
    }
    ,{
        path: '/dictionaryHuodongYuyueYesno',
        name: '报名状态',
        component: dictionaryHuodongYuyueYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionarySucai',
        name: '图片素材类型',
        component: dictionarySucai
    }
    ,{
        path: '/dictionarySucaiCollection',
        name: '收藏表类型',
        component: dictionarySucaiCollection
    }
    ,{
        path: '/dictionarySucaishipin',
        name: '视频素材类型',
        component: dictionarySucaishipin
    }
    ,{
        path: '/dictionarySucaishipinCollection',
        name: '收藏表类型',
        component: dictionarySucaishipinCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/huodong',
        name: '活动',
        component: huodong
      }
    ,{
        path: '/huodongCollection',
        name: '活动收藏',
        component: huodongCollection
      }
    ,{
        path: '/huodongLiuyan',
        name: '活动留言',
        component: huodongLiuyan
      }
    ,{
        path: '/huodongYuyue',
        name: '活动报名',
        component: huodongYuyue
      }
    ,{
        path: '/news',
        name: '公告资讯',
        component: news
      }
    ,{
        path: '/sucai',
        name: '图片素材',
        component: sucai
      }
    ,{
        path: '/sucaiCollection',
        name: '图片素材收藏',
        component: sucaiCollection
      }
    ,{
        path: '/sucaiLiuyan',
        name: '图片素材留言',
        component: sucaiLiuyan
      }
    ,{
        path: '/sucaishipin',
        name: '视频素材',
        component: sucaishipin
      }
    ,{
        path: '/sucaishipinCollection',
        name: '视频素材收藏',
        component: sucaishipinCollection
      }
    ,{
        path: '/sucaishipinLiuyan',
        name: '视频素材留言',
        component: sucaishipinLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
