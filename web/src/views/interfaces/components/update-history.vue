<template>
    <div style="padding-left: 30px">
        <Timeline>
            <TimelineItem color="green">
                <p class="time">2018.08.09</p>
                <p class="content">fujianbang修改了接口的路径为/timeine/test</p>
            </TimelineItem>
            <TimelineItem color="blue">
                <p class="time">2018.08.02</p>
                <p class="content">fujianbang创建了该接口</p>
            </TimelineItem>
            <TimelineItem color="red">
                <p class="time">2018.08.02</p>
                <p class="content">fujianbang创建了该接口</p>
            </TimelineItem>
        </Timeline>
    </div>
</template>

<script>
// import { getApiDetail } from '@/api/interface'
export default {
    data () {
        return {
        }
    },
    mounted () {
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.time{
    font-size: 14px;
    font-weight: bold;
}
.content{
    padding-left: 5px;
}
</style>
