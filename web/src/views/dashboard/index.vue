<template>
    <div class="dashboard">
        <div class="dashboard-sidebar">
            <Card dis-hover>
                <p slot="title">
                    Repositories
                </p>
                <Button type="success" slot="extra" size="small">New repositry</Button>
                <ul class="list-style-none">
                    <li>
                        <Icon type="ios-nutrition-outline" />
                        <a href="#">fujianbang/tracy-api</a>
                    </li>
                    <li>
                        <Icon type="ios-nutrition-outline" />
                        <a href="#">fujianbang/tracy-api</a>
                    </li>
                    <li>
                        <Icon type="ios-nutrition-outline" />
                        <a href="#">fujianbang/tracy-api</a>
                    </li>
                    <li>
                        <Icon type="ios-nutrition-outline" />
                        <a href="#">fujianbang/tracy-api</a>
                    </li>
                </ul>
            </Card>
        </div>
        <div class="dashboard-right">
            <div>
                <p class="text-bold">Browse activity</p>
                <Divider />
                <individual-activity></individual-activity>
            </div>
        </div>
    </div>
</template>

<script>
import IndividualActivity from '@/components/IndividualActivity'
export default {
    name: 'Index',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        IndividualActivity
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './index.scss';
</style>
