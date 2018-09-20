<template>
    <div>
        <div class="top-message" :label-width="80">
            <Alert style="width: 100%">
                <div style="margin-bottom: 10px">
                    <Tag color="success">{{ apiInfo.basic.state }}</Tag>
                    <Tag color="green">{{ apiInfo.basic.protocol }}</Tag>
                    <Tag color="purple">{{ apiInfo.basic.method }}</Tag>
                </div>
                <p class="api-path">{{ apiInfo.basic.path }}</p>
                <template slot="desc">{{ apiInfo.basic.desc }}</template>
            </Alert>
        </div>
        <div>
            <div class="param-item">
                <span class="title">请求头参数</span>
                <Table :columns="requestHeadColumns" :data="requestHeaderData" no-data-text="没有参数"></Table>
            </div>
            <div class="param-item">
                <span class="title">请求体</span>
                <Table :columns="requestParamColumns" :data="requestBodyData" no-data-text="没有参数"></Table>
            </div>
            <div class="param-item">
                <span class="title">响应体</span>
                <Table :columns="responseParamColumns" :data="responseBodyData" no-data-text="没有参数"></Table>
            </div>
            <div class="param-item">
                <Divider orientation="left">案例</Divider>
                <Tabs type="card">
                    <TabPane label="成功示例">
                        <div>成功</div>
                    </TabPane>
                    <TabPane label="失败示例">
                        <div>失败示例</div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
import { getApiDetail } from '@/api/interface'
export default {
    data () {
        return {
            formApiBrief: {
                belong: 'AAA',
                group: 'X-MAN',
                desc: '这是一段描述'
            },
            requestHeadColumns: [{
                title: '名称',
                key: 'name'
            }, {
                title: '值',
                key: 'value'
            }, {
                title: '描述',
                key: 'desc'
            }],
            requestParamColumns: [{
                title: '名称',
                key: 'name'
            }, {
                title: '类型',
                key: 'type'
            }, {
                title: '必填',
                key: 'must'
            }, {
                title: '默认值',
                key: 'default'
            }, {
                title: '描述',
                key: 'desc'
            }],
            responseParamColumns: [{
                title: '名称',
                key: 'name'
            }, {
                title: '类型',
                key: 'type'
            }, {
                title: '描述',
                key: 'desc'
            }],
            requestHeaderData: [],
            requestBodyData: [],
            responseBodyData: [],
            apiInfo: {
                basic: {
                    path: '',
                    desc: '',
                    protocol: '',
                    state: '',
                    method: ''
                }
            }
        }
    },
    created () {},
    mounted () {
        this.initData()
    },
    methods: {
        /*
         * 初始化页面数据
         */
        initData () {
            let self = this

            const currentId = this.$route.params.id
            getApiDetail(currentId).then(res => {
                console.log(res)
                self.apiInfo = {
                    basic: res.data.basic
                }
                self.requestHeaderData = res.data.header
                self.requestBodyData = res.data.body
            })
        }
    }
}
</script>

<style lang="less">
.top-message {
    width: 70%;
    .api-path {
        font-size: 18px;
            font-weight: bolder;
    }
}
.param-item {
    margin-top: 20px;
    span.title {
        display: inline-block;
        font-size: 14px;
        font-weight: bold;
        line-height: normal;
        border-left: 4px solid red;
        padding-left: 7px;
        margin-bottom: 5px;
    }
}
</style>
