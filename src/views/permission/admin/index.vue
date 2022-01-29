<script setup lang="ts">
import { Admin } from '@/types/admin';
import { dateFormat } from '@/utils/date';
import { getAdminList } from '@/api/admin';
import { onMounted, ref } from 'vue';
import { Page } from '@/types/global';

const admins = ref<Page<Admin>>();
const currentPage = ref<number>(1);
const pageSize = ref<number>(10);

onMounted(() => {
  getAdminList(currentPage.value, pageSize.value).then(res => {
    admins.value = res.data;
  });
});
</script>

<template>
  <el-card class="table-query">
    <el-form :inline="true">
      <el-form-item label="用户名">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>重置</el-button>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card>
    <div class="table-operate">
      <el-button type="primary">添加</el-button>
    </div>
    <el-table :data="admins?.records">
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="name" label="昵称" />
      <el-table-column prop="createTime" label="创建时间" min-width="160px">
        <template #default="scope">{{ dateFormat(scope.row.createTime) }}</template>
      </el-table-column>
      <el-table-column prop="role" label="角色" />
      <el-table-column prop="remark" label="备注" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button type="text" size="small">Detail</el-button>
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage"
      :page-size="pageSize"
      :total="admins?.total"
    >
    </el-pagination>
  </el-card>
</template>

<style scoped>
.table-query {
  margin-bottom: 16px;
}

.table-query >>> .el-card__body {
  padding-bottom: 0;
}
</style>
