<template>
    <div id="main">
        <div class="nav-header">
            <div class="tracy-content">
                <div class="nav-menu">
                    <div class="nav-logo">
                        <img :src="logo">
                    </div>
                    <div class="search">
                        <Input suffix="ios-search" placeholder="Search to ..." style="width: 230px" />
                    </div>
                    <ul class="nav-menu-list list-style-none text-bold">
                        <li>
                            <router-link :to="{ name: 'index'}">HOME</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'repository' }">REPOSITORY</router-link>
                        </li>
                        <li>TEAM</li>
                        <li>
                            <router-link :to="{ name: 'apis' }">INTERFACE</router-link>
                        </li>
                        <li>STATUS</li>
                        <li>SUPPORT</li>
                    </ul>
                </div>
                <div class="nav-user">
                    <ul class="nav-menu-list list-style-none text-bold">
                        <li>LOGIN</li>
                        <li>LOGOUT</li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="padding: 20px">
            <router-view/>
        </div>
    </div>
</template>

<script>
import logo from '@/assets/img/logo.png'
export default {
    name: 'Main',
    components: {
        logo
    },
    data () {
        return {
            logo
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/common.scss';
body {
    margin: 0px;
    min-width: 1200;
    line-height: 1.5;
    font-size: 14px;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.nav-header {
    padding: 12px 20px;
    color: rgb(255,255,255);
    background-color: #24292e;
    .tracy-content {
        display: flex !important;
        justify-content: space-between;
        margin: 0 auto;
        .nav-menu-list {
            display: flex !important;
            align-items: center;
            margin: 0;
            padding-left: 10px;
            li {
                padding: 0 8px;
                line-height: 2;
                cursor: pointer;
                a {
                    color: white;
                }
            }
            li:hover {
                color: rgba(255,255,255,0.75);
            }
        }
        .nav-menu {
            display: flex;
            align-items: center;
            .nav-logo {
                margin-right: 17px;
                img {
                    width: 32px;
                    height: 32px;
                }
            }
            .search {
                .ivu-input{
                    background-color: #404448;
                    border: 1px solid #404448;
                }
            }
        }
        .nav-user {
            display: flex;
            align-items: center;
        }
    }
}
</style>
