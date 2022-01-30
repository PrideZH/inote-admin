<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { getAnalysis } from '@/api/statistic';
import * as echarts from 'echarts'
import { Analysis } from '@/types/statistic';

const analysis = ref<Analysis>()
const chart: any = null;

onMounted(() => {
  getAnalysis().then(res => {
    analysis.value = res.data;

    const chart = echarts.init(document.getElementById('zoom') as HTMLElement);

    const date: string[] = [];

    const newUsersData: number[] = [];
    for (let key in analysis.value?.newUsers) {
      date.push(key);
      newUsersData.push(analysis.value?.newUsers[key]);
    }

    const activeUserData: number[] = [];
    for (let key in analysis.value?.activeUsers) {
      activeUserData.push(analysis.value?.activeUsers[key]);
    }

    const option = {
      title: {
        text: '系统折线图'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['新增注册', '活跃用户']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: date
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '新增注册',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: newUsersData
        },
        {
          name: '活跃用户',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: activeUserData
        }
      ]
    }

    // 显示图表。
    chart.setOption(option)
  });
})

onUnmounted(() => {
  if (chart) chart.dispose()
})
</script>

<template>
  <el-card class="introduce">
    <div class="order">
      <el-card class="order-item">
        <template #header>
          <div class="card-header">总人数</div>
        </template>
        <div class="item">{{ analysis?.totalUser }}</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">今日人数</div>
        </template>
        <div class="item">{{ analysis?.todayUser }}</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">公开笔记</div>
        </template>
        <div class="item">{{ analysis?.totalOpenNote }}</div>
      </el-card>
    </div>
    <div id="zoom"></div>
  </el-card>
</template>

<style scoped>
.introduce .order {
  display: flex;
  margin-bottom: 50px;
}
.introduce .order .order-item {
  flex: 1;
  margin-right: 20px;
}

#zoom {
  min-height: 300px;
}
</style>
