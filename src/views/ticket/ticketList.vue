<template>
    <div class="ticket-list">
        <van-nav-bar
            title="新票夹"
            fixed
            left-arrow
            :right-text="ischeck? '取消':'选择'"
            @click-left="$router.back()"
            @click-right="ischeck = !ischeck"
        />

        <div class="content">
            <van-row type="flex" justify="space-between" class="ticket-list-top">
                <van-col>
                    <div class="sel-time">
                        <span>2020年7月</span>
                        <img src="../../assets/image/icon/arrow-down.png" alt />
                    </div>
                </van-col>
                <van-col>
                    <div class="money">
                        支出：
                        <span>{{money |currencyFilter }}</span>
                    </div>
                    <div class="total">{{total | totalFilter}}</div>
                </van-col>
            </van-row>

            <van-list
                v-model="loading"
                :loading-text="loadingText"
                :finished="finished"
                :finished-text="finishedText"
                :error.sync="error"
                error-text="请求失败，点击重新加载"
                @load="onLoad"
                :style="{ marginBottom: ischeck ? '50px' : ''}"
            >
                <van-cell
                    center
                    title="交通"
                    label="拍照时间：2020-07-03"
                    v-for="item in 10"
                    :key="item"
                    @click="!ischeck && detail()"
                >
                    <template #icon>
                        <img src="https://img.yzcdn.cn/vant/ipad.jpeg" alt />
                    </template>
                    <template #extra>
                        <span v-if="!ischeck">16.00</span>
                        <van-checkbox v-else v-model="checked" shape="square"></van-checkbox>
                    </template>
                </van-cell>
            </van-list>

            <van-row class="ticket-list-btn" type="flex" v-if="ischeck">
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
            ischeck: false,
            list: [],
            loading: false,
            finished: false,
            error: false,
            loadingText: "加载中...",
            finishedText: "没有更多了",
            checked: false
        };
    },
    filters: {
        currencyFilter(val) {
            if (val) return val + "￥";
        },
        totalFilter(val) {
            return "共" + val + "笔";
        }
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                for (let i = 0; i < 5; i++) {
                    this.list.push(this.list.length + 1);
                }

                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 15) {
                    this.finished = true;
                }
            }, 1000);
        },

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

    .van-list {
        margin-top: 10px;
    }
    .van-cell {
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
        .van-cell__title {
            margin-left: 10px;
        }
        img {
            height: 80px;
        }
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