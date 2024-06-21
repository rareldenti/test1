<script setup>
import { ref } from "vue";
import axios from "axios";
// import{fetchCategory,delCategory,putCategory}from "@/api/admin/BookCategory";
const tableData = ref([]);
const getCategory= axios.get("http://localhost:3000/admin/category").then(res=>{
  tableData.value = res.data
  })
//修改分类
const edit = (cid)=>{
  console.log(cid);
}
</script>
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">分类主页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">分类页</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item> 分类列表</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="cid" label="分类ID" width="180" />
      <el-table-column prop="name" label="分类名" width="180" />
      <el-table-column prop="" label="操作" >
        <template #default="{row}">
          <!-- {{ row }} -->
          <el-button type="info" @click="edit(row.cid)">修改</el-button>
          <el-button type="danger">删除</el-button></template>
       
       </el-table-column>
    </el-table>
  
    <template #footer
      ><div class="demo-pagination-block">
        <div class="demonstration">All combined</div>
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange" /></div
    ></template>
  </el-card>
</template>
<style scoped>
.el-card {
  margin-top: 15px;
  widows: 100%;
}
</style>
