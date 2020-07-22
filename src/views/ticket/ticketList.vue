<template>
    <div class="ticket-list">
        <van-nav-bar
            title="新票夹"
            fixed
            left-arrow
            :right-text="isChange ? '取消' : '选择'"
            @click-left="$router.back()"
            @click-right="isChange = list ? !isChange : isChange"
        />

        <div class="content">
            <van-row class="ticket-list-top" type="flex" justify="space-between">
                <van-col>
                    <div class="sel-time">
                        <span>2020年7月</span>
                        <img src="../../assets/image/arrow-down.png" alt />
                    </div>
                </van-col>
                <van-col>
                    <div class="money">
                        支出：
                        <span>{{ money | moneyFilter }}</span>
                    </div>
                    <div class="total">{{ total | totalFilter }}</div>
                </van-col>
            </van-row>

            <div class="ticket-list" :style="{ marginBottom: isChange ? '50px' : ''}" v-if="list">
                <div class="ticket-item" v-for="item in list" :key="item" @click="!isChange && detail()">
                    <van-row type="flex">
                        <van-checkbox v-if="isChange" v-model="checked" shape="square"></van-checkbox>
                        <van-image width="90" height="90" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <div class="ticket-item-info">
                            <van-row type="flex" justify="space-between">
                                <span class="name">交通</span>
                                <span class="price">50</span>
                            </van-row>
                            <van-divider />
                            <div class="info-time">拍照时间：2020-07-03</div>
                        </div>
                    </van-row>
                </div>
            </div>
            <van-empty v-else description="暂无数据" />

            <van-row class="ticket-list-btn" type="flex" v-if="isChange">
                <van-button
                    block
                    icon="delete"
                    color="linear-gradient(to right, #465877, #232a38)"
                    @click="del"
                >删除</van-button>
                <van-button
                    block
                    icon="exchange"
                    color="linear-gradient(to right, #39ade9, #5962cc)"
                    @click="handleMove"
                >移动</van-button>
            </van-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            money: "376.45",
            total: 15,
            isChange: false,
            list: 20,
            checked: false
        };
    },
    filters: {
        moneyFilter(val) {
            if (val) return val + "￥";
        },
        totalFilter(val) {
            return "共" + val + "笔";
        }
    },
    mounted() {
        this.$loading.show();
        let timer = setTimeout(() => {
            this.$loading.hide()
            clearTimeout(timer);
        }, 2000);
    },
    methods: {
        getDataList() {},

        detail() {
            this.$router.push({
                name: "ticketDetail",
                params: {
                    id: 1
                }
            });
        },

        del() {
            this.$dialog
                .confirm({
                    title: "标题",
                    message: "弹窗内容",
                    beforeClose(action, done) {
                        if (action === "confirm") {
                            setTimeout(() => {
                                this.$toast("fdsfs");
                                done();
                            }, 1000);
                        } else {
                            done();
                        }
                    }
                })
                .catch(() => {}); // 不加catch会报一个 Uncaught (in promise) cancel 警告，但是不影响
        },

        handleMove() {
            this.$toast.loading({
                message: "加载中...",
                forbidClick: true,
                duration: 0
            });

            setTimeout(() => {
                this.$toast.clear();
            }, 2000);
        }
    }
};
</script>

<style lang="less" scoped>
.content {
    padding: 20px;
    padding-bottom: 0;
    .ticket-list-top {
        font-size: 14px;
        margin-bottom: 10px;
        .sel-time {
            line-height: 28px;
            padding: 0 15px;
            border-radius: 15px;
            color: rgb(14, 15, 22);
            background-color: #fff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            img {
                width: 12px;
                height: 8px;
                margin-left: 5px;
            }
        }
        .money span {
            color: rgb(230, 59, 80);
        }
        .total {
            color: rgb(189, 189, 189);
            text-align: right;
        }
    }

    .ticket-item {
        padding: 15px;
        margin-bottom: 10px;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        &-info {
            flex: 1;
            padding: 2px 0;
            line-height: 30px;
            .name {
                font-size: 16px;
                color: #0e0f16;
            }
            .price {
                font-size: 24px;
                color: #e63b50;
                &::after {
                    content: "￥";
                    display: inline-block;
                    font-size: 16px;
                    line-height: 20px;
                }
            }
            .info-time {
                font-size: 14px;
                color: #bdbdbd;
            }
        }
    }
    .van-checkbox {
        margin-right: 10px;
    }
    .van-image {
        flex: none;
        margin-right: 15px;
    }
    .van-divider {
        margin: 10px 0;
    }

    .ticket-list-btn {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        .van-button {
            height: 50px;
            font-size: 16px;
            border-radius: 0;
        }
    }
}
</style>