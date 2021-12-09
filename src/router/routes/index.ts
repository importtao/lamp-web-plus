import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';

import { PAGE_NOT_FOUND_ROUTE, REDIRECT_ROUTE } from '../constant';

import { mainOutRoutes } from './mainOut';
import { PageEnum } from '/@/enums/pageEnum';
import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [PAGE_NOT_FOUND_ROUTE, ...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/sys/login/Login.vue'),
  meta: {
    title: t('routes.basic.login'),
  },
};

/**
 * 前端路由，不会显示到菜单
 */
export const ConstRouter: AppRouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: LAYOUT,
    redirect: '/home/workbench',
    meta: {
      icon: 'bx:bx-home',
      title: t('routes.dashboard.welcome'),
    },
    children: [
      {
        path: 'workbench',
        name: 'Workbench',
        component: () => import('/@/views/dashboard/workbench/index.vue'),
        meta: {
          title: t('routes.dashboard.workbench'),
          affix: true,
        },
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: LAYOUT,
    redirect: '/dashboard/workbench',
    meta: {
      icon: 'bx:bx-home',
      title: t('routes.dashboard.dashboard'),
    },
    children: [

      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('/@/views/lamp/welcome/index.vue'),
        meta: {
          title: t('routes.dashboard.welcome'),
          icon: 'bx:bx-home',
        },
      },
      {
        path: 'analysis',
        name: 'Analysis',
        component: () => import('/@/views/dashboard/analysis/index.vue'),
        meta: {
          title: t('routes.dashboard.analysis'),
        },
      },
    ],
  },

  // 内置非菜单路由部分路由不能在惨淡里显示
  {
    path: '/inner',
    name: 'materialsEdit',
    component: LAYOUT,
    redirect: '/materialsEdit',
    meta: {
      icon: 'bx:bx-home',
      title: t('routes.dashboard.dashboard'),
    },
    children: [
      {
        path: 'materialsEdit/:id',
        name: 'materialsEdit',
        component: () => import('/@/views/lamp/materials/materialsBaseInfo/editForm/index.vue'),
        meta: {
          title: '编辑物料',
          icon: 'bx:bx-home',
          carryParam: true,
        },
      },
      {
        path: 'skuDetails/:id',
        name: 'skuDetails',
        component: () => import('/@/views/lamp/materials/materialsBaseInfo/buyTask/skuDetails/index.vue'),
        meta: {
          title: 'sku详情',
          icon: 'bx:bx-home',
          carryParam: true,
        },
      },
      {
        path: 'materialsDetails/:id',
        name: 'materialsDetails',
        component: () => import('/@/views/lamp/materials/materialsBaseInfo/details/index.vue'),
        meta: {
          title: '物料详情',
          icon: 'bx:bx-home',
          carryParam: true,
        },
      },
      {
        path: 'taskItemDetailList/:id',
        name: 'taskItemDetailList',
        component: () => import('/@/views/lamp/materials/buyTask/buyTaskItemList.vue'),
        meta: {
          title: '采购任务列表',
          icon: 'bx:bx-home',
          carryParam: true,
        },
      },
      {
        path: 'buyTaskOrderList/:id',
        name: 'buyTaskOrderList',
        component: () => import('/@/views/lamp/materials/buyTask/buyTaskOrderList.vue'),
        meta: {
          title: '采购任务订单',
          icon: 'bx:bx-home',
          carryParam: true
        },
      },
      {
        path: 'buyOrderDetail/:id',
        name: 'buyOrderDetail',
        component: () => import('/@/views/lamp/materials/buyOrder/detail.vue'),
        meta: {
          title: '采购订单详情',
          icon: 'bx:bx-home',
          carryParam: true
        }
      },
      {
        path: 'lackApplyDetail/:id',
        name: 'lackApplyDetail',
        component: () => import('/@/views/lamp/materials/lackApply/detail.vue'),
        meta: {
          title: '新物料详情',
          icon: 'bx:bx-home',
          carryParam: true
        }
      },
      {
        path: 'categoryLackApplyDetail/:id',
        name: 'categoryLackApplyDetail',
        component: () => import('/@/views/lamp/materials/categoryLackApply/detail.vue'),
        meta: {
          title: '物资缺型申报详情',
          icon: 'bx:bx-home',
          carryParam: true
        },
      }
    ],
  },
];

// Basic routing without permission
export const basicRoutes = [LoginRoute, RootRoute, ...mainOutRoutes, REDIRECT_ROUTE];
