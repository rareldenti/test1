<script setup>
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { useRouter } from "vue-router";

// 获取用户状态
const userStore = useAuthStore();
const token = userStore.userinfo.token;

// 设置 Axios 默认头部
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// 路由实例
const router = useRouter();
// 退出函数
const logout = () => {
  // 清除用户信息
  userStore.clear();
  // 确保 token 被清除
  console.log(userStore.userinfo.token); // 应该为空
  // 移除 Axios 默认头部
  delete axios.defaults.headers.common["Authorization"];
  // 跳转到登录页面
  router.push("/login");
};
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header
        ><h1>主页</h1>
        <el-button type="danger" @click="logout"> 退出 </el-button></el-header
      >
      <el-container>
        <el-aside width="200px"
          ><el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>分类管理</span>
                  </template>
                  <el-menu-item-group title="分类">
                    <el-menu-item index="/add/category">添加分类</el-menu-item>
                    <el-menu-item index="/category">分类列表</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
              </el-menu>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>图书管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">添加图书</el-menu-item>
                    <el-menu-item index="1-2">图书列表</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
              </el-menu>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-sub-menu index="3">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>订单管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-2">订单详情</el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>
              </el-menu>
            </el-col>
          </el-row></el-aside
        >
        <el-main> <router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d0d7e0;
}
.el-aside {
  height: calc(100vh-60px);
}
.logout-button:hover {
  background-color: #e74c3c;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
