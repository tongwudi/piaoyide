<template>
    <van-tabbar v-model="active" route fixed>
        <van-tabbar-item replace to="/ticket">
            <template #icon="props">
                <img :src="props.active ? ticketIcon.active : ticketIcon.normal" />
            </template>
            <span>票夹</span>
        </van-tabbar-item>
        <van-tabbar-item to="/camera" class="foot-bar--round">
            <template #icon>
                <img :src="shotIcon" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/mine">
            <template #icon="props">
                <img :src="props.active ? mineIcon.normal : mineIcon.active" />
            </template>
            <span>我的</span>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            shotIcon: require("../assets/image/icon/shot.png"),
            ticketIcon: {
                active: require("../assets/image/icon/ticketActive.png"),
                normal: require("../assets/image/icon/ticket.png")
            },
            mineIcon: {
                active: require("../assets/image/icon/mine.png"),
                normal: require("../assets/image/icon/mineActive.png")
            }
        };
    }
};
</script>

<style lang="less" scoped>
.foot-bar--round {
    flex: none;
    position: relative;
    top: -50%;
    border-radius: 50%;
    z-index: 2;
    /deep/ .van-tabbar-item__icon {
        margin-bottom: 0;
        img {
            width: 64px;
            height: 64px;
        }
    }
}
</style>
