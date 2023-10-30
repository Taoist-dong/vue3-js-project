import { createRouter, createWebHistory } from "vue-router";
// 项目其他页面路由（推荐使用）
import Practice from "./practice/phonePractice.js";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...Practice]
});

export default router;

