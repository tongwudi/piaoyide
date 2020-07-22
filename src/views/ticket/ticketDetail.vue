<template>
    <div class="ticket-detail">
        <van-nav-bar fixed left-arrow @click-left="$router.back()" />

        <div class="content">
            <van-cell-group>
                <van-cell center value="出租车发票">
                    <template #icon>
                        <van-image
                            width="75"
                            height="75"
                            src="https://img.yzcdn.cn/vant/ipad.jpeg"
                            @click="previewss"
                        />
                    </template>
                </van-cell>
            </van-cell-group>

            <van-form @submit="modify">
                <van-field
                    input-align="right"
                    name="value"
                    v-model="value"
                    label="发票夹"
                    placeholder="发票夹"
                />
                <van-field
                    readonly
                    clickable
                    input-align="right"
                    name="date"
                    :value="date"
                    label="开票时间"
                    placeholder="点击选择时间"
                    @click="showDatePicker = true"
                />
                <van-field
                    input-align="right"
                    name="value"
                    v-model="value"
                    label="类型"
                    placeholder="类型"
                />
                <van-field
                    class="money-field"
                    input-align="right"
                    type="number"
                    name="money"
                    v-model="money"
                    label="金额"
                    placeholder="金额"
                >
                    <template #extra v-if="money">
                        <span class="currency">￥</span>
                    </template>
                </van-field>
                <van-field
                    input-align="right"
                    name="msg"
                    v-model="msg"
                    rows="1"
                    autosize
                    label="备注"
                    type="textarea"
                    placeholder="请输入备注"
                />
                <van-field
                    input-align="right"
                    name="value"
                    v-model="value"
                    label="发票代码"
                    placeholder="发票代码"
                />
                <van-field
                    input-align="right"
                    type="number"
                    name="value"
                    v-model="number"
                    label="里程"
                    placeholder="里程"
                />
                <van-field
                    input-align="right"
                    name="time"
                    :value="time"
                    readonly
                    clickable
                    label="上车时间"
                    placeholder="点击选择时间"
                    @click="showPicker = true"
                />
                <van-field
                    input-align="right"
                    name="time"
                    :value="time"
                    readonly
                    clickable
                    label="下车时间"
                    placeholder="点击选择时间"
                    @click="showPicker = true"
                />

                <van-row type="flex">
                    <van-button
                        block
                        icon="delete"
                        color="linear-gradient(to right, #465877, #232a38)"
                        @click="del"
                        native-type="button"
                    >删除</van-button>
                    <van-button
                        block
                        icon="edit"
                        color="linear-gradient(to right, #39ade9, #5962cc)"
                        native-type="submit"
                    >保存</van-button>
                </van-row>
            </van-form>
        </div>
        <div class="box"></div>

        <van-popup v-model="showDatePicker" position="bottom">
            <van-datetime-picker
                v-model="currentTime"
                type="date"
                @confirm="onDateConfirm"
                @cancel="showDatePicker = false"
                :formatter="formatter"
            />
        </van-popup>

        <van-popup v-model="showPicker" position="bottom">
            <van-datetime-picker type="time" @confirm="onConfirm" @cancel="showPicker = false" />
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            money: "",
            number: "",
            date: "",
            msg: "",
            time: "",
            showDatePicker: false,
            showPicker: false,
            currentTime: new Date()
        };
    },
    methods: {
        previewss() {
            this.$imagePreview(["https://img.yzcdn.cn/vant/ipad.jpeg"]);
        },

        formatter(type, val) {
            if (type === "year") {
                return `${val}年`;
            } else if (type === "month") {
                return `${val}月`;
            } else if (type === "day") {
                return `${val}日`;
            }
            return val;
        },

        onDateConfirm(date) {
            let year = `${date.getFullYear()}`;
            let month = `${date.getMonth() + 1}`;
            let day = `${date.getDate()}`;

            month = parseInt(month) < 10 ? "0" + month : month;
            day = parseInt(day) < 10 ? "0" + day : day;

            this.date = `${year}-${month}-${day}`;
            this.showDatePicker = false;
        },

        onConfirm(time) {
            this.time = time;
            this.showPicker = false;
        },

        modify(values) {
            console.log("submit", values);
        },

        del() {}
    }
};
</script>

<style lang="less" scoped>
.content {
    padding: 15px 20px;
    .money-field {
        /deep/ .van-field__value {
            font-size: 22px;
        }
        /deep/ .van-field__control {
            color: #e63b50;
        }
        ::placeholder {
            font-size: 14px;
        }
        .currency {
            font-size: 12px;
            line-height: 15px;
            color: #e63b50;
            margin: 10px 0 5px;
        }
    }
}

.box {
    height: 50px;
}

.van-cell-group {
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
}

.van-cell__value--alone {
    text-align: right;
    font-size: 16px;
    color: #343b47;
}

/deep/ .van-field__label {
    color: #0e0f16;
}

.van-row {
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
</style>