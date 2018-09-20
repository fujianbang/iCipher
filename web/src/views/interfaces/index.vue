<template>
    <div>
        <div class="menu">
            <Card title="分组" :padding="0" dis-hover>
                <CellGroup>
                    <Cell title="全部接口" v-on:click.native="handleGetApis()">
                        <Icon type="ios-options" slot="icon" />
                    </Cell>
                    <template v-for="group in apiGroups">
                        <Cell :title="group.gName" :key="group.id" v-on:click.native="handleGetApis(group.id)">
                            <Icon type="ios-folder" slot="icon" />
                        </Cell>
                    </template>
                </CellGroup>
            </Card>
        </div>
        <div class="content">
            <Card dis-hover>
                <router-view></router-view>
            </Card>
        </div>
    </div>
</template>

<script>
import { getApiGroups } from '@/api/interface'
export default {
    components: {
    },
    data () {
        return {
            apiGroups: []
        }
    },
    mounted () {
        this.initTestData()
    },
    methods: {
        /*
         * 初始化接口数据
         */
        initTestData () {
            // 获取分组情况
            getApiGroups().then(res => {
                this.apiGroups = res.data.groups
            })
        }
    }
}
</script>

<style lang="less">
@import './interface.less';
</style>
