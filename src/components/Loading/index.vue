<template>
    <van-overlay :show="show">
        <van-loading size="24px" vertical>加载中...</van-loading>
    </van-overlay>
</template>

<script>
export default {
    // props: {
    //     show: {
    //         type: Boolean,
    //         required: true
    //     }
    // },
    data() {
        return {
            show: false
        };
    }
};
</script>
