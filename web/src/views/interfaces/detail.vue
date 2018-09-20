<template>
    <div>
        <div>
            <Button type="error" @click="handleToList">
                <Icon type="ios-options" />
                返回列表
            </Button>
            <ButtonGroup style="margin-left: 22px">
                <Button :type="currentTab === 'VIEW' ? 'success' : 'default'" @click="currentTab = 'VIEW'">
                    <Icon type="ios-eye" />
                    文档
                </Button>
                <Button :type="currentTab === 'TEST' ? 'success' : 'default'" @click="currentTab = 'TEST'">
                    <Icon type="ios-bug" />
                    测试
                </Button>
                <Button :type="currentTab === 'EDIT' ? 'success' : 'default'" @click="currentTab = 'EDIT'">
                    <Icon type="ios-create" />
                    编辑
                </Button>
                <Button :type="currentTab === 'HISTORY' ? 'success' : 'default'" @click="currentTab = 'HISTORY'">
                    <Icon type="ios-pricetags" />
                    历史
                </Button>
            </ButtonGroup>
        </div>
        <Divider />
        <div v-if="currentTab === 'VIEW'">
            <api-document />
        </div>
        <div v-else-if="currentTab === 'TEST'">
            <quick-test />
        </div>
        <div v-else-if="currentTab === 'EDIT'">
            <quick-edit />
        </div>
        <div v-else>
            <update-history />
        </div>
    </div>
</template>

<script>
import ApiDocument from './components/api-document'
import QuickTest from './components/quick-test'
import QuickEdit from './components/quick-edit'
import UpdateHistory from './components/update-history'
export default {
    data () {
        return {
            currentTab: 'VIEW'
        }
    },
    methods: {
        handleToList () {
            this.$router.push({ name: 'apis' })
        }
    },
    components: {
        ApiDocument,
        QuickTest,
        QuickEdit,
        UpdateHistory
    }
}
</script>

<style lang="less">
</style>
