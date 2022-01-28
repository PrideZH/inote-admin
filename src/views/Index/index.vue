<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts'

const chart: any = null;

onMounted(() => {
  const chart = echarts.init(document.getElementById('zoom') as HTMLElement);

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
        data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17']
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
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '活跃用户',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  }

  // 显示图表。
  chart.setOption(option)
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
        <div class="item">521888</div>
      </el-card>
      <el-card class="order-item">
        <template #header>
          <div class="card-header">今日人数</div>
        </template>
        <div class="item">36271</div>
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
