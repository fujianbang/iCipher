import axios from '@/libs/api.request'

export const getApis = () => {
    return axios.request({
        url: '/get_apis',
        method: 'get'
    })
}

export const getApiGroups = () => {
    return axios.request({
        url: '/get_api_groups',
        method: 'get'
    })
}

export const getApiDetail = (id) => {
    return axios.request({
        url: '/get_api_detail',
        method: 'get',
        data: {
            api_id: id
        }
    })
}
