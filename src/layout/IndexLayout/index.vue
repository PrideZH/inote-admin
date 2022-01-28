<script setup lang="ts">
import Header from './components/Header.vue';
import { computed } from 'vue';
import { useAppStore } from '@/store';
import { Management, Menu, Odometer, Setting } from '@element-plus/icons-vue';

const appStore = useAppStore();
const isCollapse = computed(() => appStore.isCollapse);
const menuWidth = computed(() => {
  return appStore.isCollapse ? 60 : 200;
});
</script>

<template>
  <el-container class="container">
    <el-aside class="aside" :width="menuWidth + 'px'">
      <div class="logo">
        <img src="/favicon.ico" />
        <span v-if="!isCollapse" style="flex-shrink: 0">iNote Admin</span>
      </div>
      <div class="line" />
      <el-menu
        background-color="#222832"
        text-color="#fff"
        :collapse="isCollapse"
        :router="true"
        :collapse-transition="false"
      >
        <el-sub-menu index="dashboard">
          <template #title>
            <el-icon><Odometer /></el-icon>
            <span>Dashboard</span>
          </template>
          <el-menu-item index="/workbench">工作台</el-menu-item>
          <el-menu-item index="/analysis">数据分析</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="permission">
          <template #title>
            <el-icon><Management /></el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item index="/admin">管理员管理</el-menu-item>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/permission">权限管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="manage">
          <template #title>
            <el-icon><Menu /></el-icon>
            <span>模块管理</span>
          </template>
          <el-menu-item index="/category">标签管理</el-menu-item>
          <el-menu-item index="/good">笔记管理</el-menu-item>
          <el-menu-item index="/guest">用户管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="system">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="/account">修改密码</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container class="content">
      <el-header class="header"><Header /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-menu {
  border-right: none !important;
}
.el-sub-menu {
  border-top: 1px solid hsla(0, 0%, 100%, .05);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
</style>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 20px;
  color: #fff;
}

.container {
  height: 100vh;
}

.aside {
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  transition: width 0.5s;
}

.header {
  padding: 0 4px;
  border-bottom: 1px solid #eee;
}

.line {
  border-top: 1px solid hsla(0,0%,100%,.05);
  border-bottom: 1px solid rgba(0,0,0,.2);
}
</style>
