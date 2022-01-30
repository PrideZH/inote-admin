<script setup lang="ts">
import { User } from '@/types/user';
import { dateFormat } from '@/utils/date';
import { getUserList } from '@/api/user';
import { onMounted, ref } from 'vue';
import { Page } from '@/types/global';
import { Delete, EditPen } from '@element-plus/icons-vue';

const users = ref<Page<User>>();
const currentPage = ref<number>(1);
const pageSize = ref<number>(10);

onMounted(() => {
  getUserList(currentPage.value, pageSize.value).then(res => {
    users.value = res.data;
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
    <el-table :data="users?.records">
      <el-table-column prop="id" label="UID" />
      <el-table-column prop="username" label="账号" min-width="200px" />
      <el-table-column prop="nickname" label="名称" min-width="120px" />
      <el-table-column prop="delFlag" label="状态" />
      <el-table-column prop="createTime" label="创建时间" min-width="160px">
        <template #default="scope">{{ dateFormat(scope.row.createTime) }}</template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button type="text" size="small" :icon="Delete" style="color: #f56c6c">删除</el-button>
          <el-button type="text" size="small" :icon="EditPen">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage"
      :page-size="pageSize"
      :total="users?.total"
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
