import Mock from 'mockjs'
import { getApis, getApiGroups, getApiDetail } from './interface'

Mock.mock(/\/get_apis/, getApis)
Mock.mock(/\/get_api_groups/, getApiGroups)
Mock.mock(/\/get_api_detail/, getApiDetail)

export default Mock
