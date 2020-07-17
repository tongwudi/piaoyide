<template>
    <div class="add-ticket">
        <van-nav-bar title="添加票夹" left-arrow @click-left="$router.back()" />

        <van-field v-model="name" placeholder="票夹名称" />

        <van-button block color="linear-gradient(to right, #39ade9, #5962cc)" @click="submit">保存</van-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        };
    },
    methods: {
        submit() {}
    }
};
</script>

<style lang="less" scoped>
.van-cell {
    margin: 20px 0;
    padding-left: 20px;
    padding-right: 20px;
}

.van-button--block {
    width: 90%;
    margin: auto;
    border-radius: 4px;
}
</style>