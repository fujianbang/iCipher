import Mock from 'mockjs'

export const getApis = req => {
    let resp = Mock.mock({
        'apis|0-10': [
            {
                'id': '@zip',
                'iName': '@ctitle(3, 5)',
                'iUrl|1-3': /\/[a-z]{4,6}/,
                'iCreator': '@name',
                'iUpdator': '@name',
                'iUpdateDate': '@datetime',
                'status|1': ['启用', '维护', '弃用', '待定', '开发', '测试', '对接', 'BUG'],
                'type|1': ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'PATCH']
            }
        ]
    })
    return resp
}

export const getApiGroups = req => {
    return Mock.mock({
        'groups|1-5': [
            {
                'id': '@guid',
                'gName': '@ctitle(2,5)'
            }
        ]
    })
}

export const getApiDetail = req => {
    console.log(JSON.parse(req.body))
    return Mock.mock({
        'basic': {
            'path|1-4': /\/[a-z]{4,6}/,
            'desc': '@ctitle(10, 20)',
            'state|1': ['启用', '维护', '弃用', '待定', '开发', '测试', '对接', 'BUG'],
            'method|1': ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT', 'PATCH'],
            'protocol|1': ['HTTP', 'HTTPS']
        },
        'header|1-4': [
            {
                'name': '@word',
                'value': '@word',
                'desc': '@ctitle'
            }
        ],
        'body|1-4': [
            {
                'name': '@word',
                'type|1': ['string', 'integer', 'float', 'double'],
                'must|1': ['Y', 'N'],
                'default': '@word',
                'desc': '@ctitle'
            }
        ]
    })
}
