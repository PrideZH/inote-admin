<script setup lang="ts">
import IconBtn from '@/components/IconBtn.vue';
import { useAppStore } from '@/store';
import { Expand, Fold } from '@element-plus/icons-vue';
import { computed, ref } from 'vue';

const name = ref<string>('Dashboard');

const appStore = useAppStore();
const isCollapse = computed(() => appStore.isCollapse);

const toggleCollapse = (): void => {
  appStore.updateSettings({isCollapse: !isCollapse.value});
};

const userInfo = ref({
  nickName: 'PrideZH',
  loginUserName: '332842890@qq.com'
});

const logout = () => {
  localStorage.removeItem('token')
}
</script>

<template>
  <div class="header">
    <div class="left">
      <IconBtn style="height: 40px;" @click="toggleCollapse">
        <el-icon :size="24">
          <Expand v-if="isCollapse" />
          <Fold v-else />
        </el-icon>
      </IconBtn>
      <span>{{ name }}</span>
    </div>
    <div class="right">
      <el-popover placement="bottom"
                  :width="320"
                  trigger="click"
                  popper-class="popper-user-box">
        <template #reference>
          <div class="author">
            <i class="icon el-icon-s-custom" />
            {{ userInfo && userInfo.nickName || '' }}
            <i class="el-icon-caret-bottom" />
          </div>
        </template>
        <div class="nickname">
          <p>登录名：{{ userInfo && userInfo.loginUserName || '' }}</p>
          <p>昵称：{{ userInfo && userInfo.nickName || '' }}</p>
          <el-tag size="small" effect="dark" class="logout" @click="logout">退出</el-tag>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
}

 .author {
  margin-left: 10px;
  cursor: pointer;
}
</style>
