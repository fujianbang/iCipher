import Main from '@/views/main/index'

export default [
    {
        path: '/',
        name: '_index',
        component: Main,
        redirect: 'index',
        children: [{
            path: '/index',
            name: 'index',
            meta: {
                title: 'iFree | 简洁的可视化接口管理平台'
            },
            component: () => import('@/views/dashboard/index')
        }]
    }, {
        path: '/repository',
        component: Main,
        children: [{
            path: '/repository',
            name: 'repository',
            component: () => import('@/views/repository/index')
        }]
    }, {
        path: '/interfaces',
        name: '_interfaces',
        redirect: 'apis',
        component: Main,
        children: [{
            path: '/interfaces',
            redirect: 'apis',
            component: () => import('@/views/interfaces/index'),
            children: [{
                path: '/interfaces',
                name: 'apis',
                component: () => import('@/views/interfaces/list')
            }, {
                path: '/interfaces/detail/:id',
                name: 'api_detail',
                component: () => import('@/views/interfaces/detail'),
                props: true
            }]
        }]
    }
]
