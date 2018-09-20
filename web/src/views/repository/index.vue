<template>
    <div class="repository">
        <div class="func-btn-group">
            <Button type="success">新增仓库</Button>
            <Button type="default">导入仓库</Button>
        </div>
        <div class="resp-content flex-box">
            <repository-card></repository-card>
            <repository-card></repository-card>
            <repository-card></repository-card>
            <repository-card></repository-card>
            <repository-card></repository-card>
            <repository-card></repository-card>
            <repository-card></repository-card>
        </div>
    </div>
</template>

<script>
import RepositoryCard from '@/components/RepositoryCard'
export default {
    name: 'Repository',
    data () {
        return {
        }
    },
    components: {
        RepositoryCard
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common.scss';
@import './repository.scss';
</style>
