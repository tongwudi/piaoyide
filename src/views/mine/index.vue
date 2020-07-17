<template>
    <div class="user">
        <van-nav-bar title="我的" />

        <van-cell-group>
            <van-cell title="是否登录" :value="isLogin" />
            <van-cell title="关于" is-link />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: ""
        };
    }
};
</script>