<template>
  <div id="main" style="width: 600px; height: 400px;border:1px solid #eee;"></div>
</template>
<script setup>
import * as echarts from 'echarts';
import { onMounted, reactive, ref } from "vue";
let myChart = ref(null)
let xData = ref(['8-1', '8-2', '8-3', '8-4', '8-5', '8-6', '8-7', '8-8', '8-9']);
let lData = ref(['银票', '商票', '财司票']);
let option = ref(null)
onMounted(() => {
  init()
})
const init = () => {
  option = reactive({
    color: ['#ff9900', '#ffd555', '#5b8ff9', '#9ac5ff', '#c6e6ff', '#91cc75'], // 柱条色
    grid: {
      top: 80,
      bottom: 43,
    },
    title: {
      show: true,
      text: '会滚的Echarts图',
      axisLabel: {
        color: '#333',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 10,
        width: 50,
        height: 10
      },
      z: 5,
      left: 20,
      top: 20
    },
    // 浮层
    tooltip: {
      // 浮层背景边框色设置透明
      borderColor: 'transparent',
      trigger: 'axis',
      showContent: true,
      padding: 8,
      axisLabel: {
        color: '#FFF',
        fontSize: 16
      },
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      // 提示框显示在页面内
      confine: true,
      // 浮层需要显示内容，把params打印出来看看，用解构，find，reduce的方法获取
      formatter: (params) => {
        return params.reduce((acc, cur) => {
          const { color, seriesName, value } = cur;
          return [...acc, `<div style="margin-top:-18px;display:flex;justify-content:start;align-items:center;">
            <span style="display:inline-block;width:4px;height:4px;background-color:${color};margin-right:8px;"></span>
            <span style="text-align:left;width:80px;">${seriesName}</span>
            <span style="text-align:right;">${value}张</span>
            </div>`
          ]
        },
          [`<div style="text-align:left;">${params[0].name}</div>`]
        ).join('</br>');
      },
    },
    xAxis: {
      // 刻度线隐藏
      axisTick: { show: false },
      type: 'category',
      // x轴数据
      data: xData.value,
      nameTextStyle: {
        fontSize: 16,
        color: '#ccc'
      },
      // 点击图出现竖线
      axisPointer: {
        type: 'shadow',
        show: true,
        shadowStyle: { color: '#eee' },
        z: 0
      },
      // x轴线样式
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: '#ddd'
        }
      },
      // x轴文字颜色
      axisLabel: {
        show: true,
        // x轴标签文字离x轴距离
        padding: [10, 0, 0, 0],
        fontSize: 10,
        color: '#ccc',
        // x轴间隔几个显示
        interval: 0,
        // x轴文字可以通过substr，条件判断，模板字符串进行展示，rich修改样式
        // formatter: (params)=> { 
        //   console.log('xAxis', params);
        // }
      }
    },
    yAxis: {
      type: 'value',
      show: true,
      axisTick: { show: false },
      // y轴横刻度线样式
      splitLine: {
        lineStyle: {
          color: '#eee',
          type: 'dashed'
        }
      },
      axisLine: { show: false },
    },
    dataZoom: [
      {
        // 滚动条
        type: 'slider',
        show: true,
        bottom: 32,
        right: 63,
        left: 'auto',
        // 滚动条颜色
        fillerColor: '#ddd',
        // 滚动条左右详情数字隐藏
        showDetail: false,
        // 滚动条左右缩放手柄样式
        handleStyle: {
          color: '#ddd',
          borderColor: '#ddd',
        },
        // 无移动手柄
        moveHandleSize: 0,
        // 滚动条中无阴影无颜色
        dataBackground: {
          lineStyle: { opacity: 0 },
          areaStyle: { opacity: 0 }
        },
        selectedDataBackground: {
          lineStyle: { opacity: 0 },
          areaStyle: { opacity: 0 }
        },
        // 滚动条不缩短伸长
        brushSelect: false,
        // 从头开始，最多显示7条数据
        startValue: xData.length - 7,
        endValue: xData.length - 1,
        maxValueSpan: 6,
        minValueSpan: 6,
        // 滚动条宽度
        height: 8,
        // 平移也缩放
        zoomLock: true,
      },
      {
        type: 'inside'
      }
    ],
    legend: {
      show: true,
      // 图例圆角
      icon: 'roundRect',
      data: lData,
      top: 20,
      // 图例大小
      itemHeight: 8,
      itemWidth: 8,
      // 图例离右侧距离
      right: 20,
      textStyle: {
        fontSize: 15,
        color: '#ccc'
      }
    },
    // series数据可从后台拿数据动态展示，push到option中
    series: [
      {
        name: '银票',
        type: 'bar',
        barGap: '0.5',
        barCategoryGap: '1',
        barWidth: 8,
        itemStyle: { borderRadius: [2, 2, 0, 0] },
        data: [70, 2, 3, 4, 5, 23, 7, 8, 9]
      }, {
        name: '商票',
        type: 'bar',
        barGap: '0.5',
        barCategoryGap: '1',
        barWidth: 8,
        itemStyle: { borderRadius: [2, 2, 0, 0] },
        data: [170, 2, 3, 4, 5, 6, 7, 14, 9]
      }, {
        name: '财司票',
        type: 'bar',
        barGap: '0.5',
        barCategoryGap: '1',
        barWidth: 8,
        itemStyle: { borderRadius: [2, 2, 0, 0] },
        data: [211, 2, 3, 4, 5, 6, 4, 12, 1120]
      }
    ]
  });
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.getElementById('main'));
  // 绘制图表
  myChart.setOption(option);
}

</script>

<style scoped lang="scss"></style>