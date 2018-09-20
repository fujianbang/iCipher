<template>
    <div>
        <div class="btn-group">
            <Button type="error">新增接口</Button>
            <Button type="default">导入接口</Button>
        </div>
        <Table :columns="interfaceColumns" :data="interfaceData"></Table>
    </div>
</template>

<script>
import { getApis } from '@/api/interface'
export default{
    data () {
        return {
            interfaceColumns: [
                {
                    title: '接口名称',
                    key: 'iName',
                    width: 180,
                    render: (h, params) => [
                        h('Tag', {
                            props: {
                                color: 'green'
                            }
                        }, params.row.status),
                        h('span', params.row.iName)
                    ]
                },
                {
                    title: '接口路径',
                    key: 'iUrl',
                    render: (h, params) => [
                        h('Tag', {
                            props: {
                                color: 'cyan'
                            }
                        }, params.row.type),
                        h('span', params.row.iUrl)
                    ]
                },
                {
                    title: '创建者',
                    key: 'iCreator',
                    width: 140
                },
                {
                    title: '最近更新者',
                    key: 'iUpdator',
                    width: 140
                },
                {
                    title: '更新日期',
                    key: 'iUpdateDate',
                    width: 150
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginLeft: '2px',
                                    marginRight: '2px'
                                },
                                on: {
                                    click: () => {
                                        this.$router.push({
                                            name: 'api_detail',
                                            params: {
                                                id: params.row.id
                                            }
                                        })
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                style: {
                                    marginLeft: '2px',
                                    marginRight: '2px'
                                },
                                on: {
                                    click: () => {
                                        this.$Message.error('DELETE')
                                    }
                                }
                            }, '删除')
                        ])
                    }
                }
            ],
            interfaceData: []
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
            // 获取默认接口
            getApis().then(res => {
                this.interfaceData = res.data.apis
            })
        },
        handleGetApis (gid) {
            getApis(gid).then(res => {
                this.interfaceData = res.data.apis
            })
        }
    }
}
</script>

<style lang="less">
</style>
