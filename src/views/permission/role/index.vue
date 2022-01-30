<script setup lang="ts">
import { Role } from '@/types/role';
import { dateFormat } from '@/utils/date';
import { getRoleList } from '@/api/role';
import { onMounted, ref } from 'vue';
import { Page } from '@/types/global';

const roles = ref<Page<Role>>();
const currentPage = ref<number>(1);
const pageSize = ref<number>(10);

onMounted(() => {
  getRoleList(currentPage.value, pageSize.value).then(res => {
    roles.value = res.data;
  });
});
</script>

<template>
  <el-card class="table-query">
    <el-form :inline="true">
      <el-form-item label="名称">
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
    <el-table :data="roles?.records">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="createTime" label="创建时间" min-width="160px">
        <template #default="scope">{{ dateFormat(scope.row.createTime) }}</template>
      </el-table-column>
      <el-table-column prop="permission" label="权限" />
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
      :total="roles?.total"
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
