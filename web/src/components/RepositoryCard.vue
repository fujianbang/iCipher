<template>
    <Card>
        <div class="repo-title flex-box">
            <Icon type="ios-switch-outline" size="26" />
            <p class="text-bold">Tracy API</p>
        </div>

        <div class="repo-content" style="height: 40px">
        </div>

        <div class="repo-foot flex-box">
            <p class="text-grey">fujianbang0ops</p>
            <p class="text-grey">1天前更新</p>
        </div>
    </Card>
</template>

<script>
export default {
    name: 'RepositoryCard',
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/common.scss';
.ivu-card {
    width: 320px;
    padding: 0 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    .repo-title {
        align-items: center;
        p {
            padding-left: 8px;
            display: inline-block;
            font-size: 16px;
        }
    }
    .repo-foot {
        justify-content: space-between;
        p {
            font-size: 12px;
        }
    }
}
</style>
