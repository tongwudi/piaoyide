<template>
    <van-row type="flex" justify="space-between">
        <template v-for="item in list">
            <div class="box" :key="item.id" @click="handleClick(item.id)">
                <div class="total">
                    <span>{{ item.total }}</span>
                    <span>￥</span>
                </div>
                <div class="count">{{ item.count | countFilter }}</div>
                <div class="name">{{ item.name }}</div>
            </div>
        </template>
        <div class="box">
            <van-button
                type="default"
                size="large"
                icon="plus"
                @click="$router.push('/add')"
            ></van-button>
        </div>
    </van-row>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleClick(id) {
            this.$emit("view", id);
        }
    },
    filters: {
        countFilter(val) {
            if (parseInt(val) >= 0) return val + "笔消费";
        }
    }
};
</script>

<style lang="less" scoped>
.van-row {
    flex-wrap: wrap;
    .box {
        width: 155px;
        height: 140px;
        margin-bottom: 30px;
        padding: 25px;
        box-sizing: border-box;
        position: relative;
        border-radius: 14px;
        background-color: #3c9cea;
        color: #fff;
        .total {
            font-size: 0;
            margin-bottom: 10px;
            span {
                &:first-child {
                    font-size: 32px;
                }
                &:last-child {
                    font-size: 14px;
                }
            }
        }
        .count {
            font-size: 14px;
            opacity: 0.65;
        }
        .name {
            height: 30px;
            line-height: 30px;
            position: absolute;
            bottom: -10px;
            left: 0;
            font-size: 14px;
            padding: 0 20px;
            border-radius: 15px;
            background-color: #8fc1e9;
        }
        &:last-child {
            height: auto;
            padding: 0;
            background-color: transparent;
        }
    }
    .van-button {
        width: 100px;
        height: 100px;
        border: 2px dashed #d4d4d4;
        border-radius: 8px;
        font-size: 20px;
        color: #928f8f;
    }
}
</style>