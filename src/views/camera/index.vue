<template>
    <div class="camera fixed-box">
        <div class="camera-top">
            <van-icon name="close" @click="$router.back()" />
            <van-tabs v-model="active" type="card">
                <van-tab title="单张"></van-tab>
                <van-tab title="多张"></van-tab>
            </van-tabs>
        </div>

        <div class="camera-box"></div>

        <ul class="camera-list" v-if="active == 1">
            <template v-for="index in 3">
                <li :key="index">
                    <div class="close">
                        <img src="../../assets/image/close.png" width="100%" height="100%" />
                    </div>
                    <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                </li>
            </template>
            <li>
                <van-button icon="plus" block type="primary" />
            </li>
        </ul>

        <div class="camera-bottom">
            <div class="shot" v-if="!isComplete" @click="isComplete = !isComplete">
                <img src="../../assets/image/camera.png" alt />
            </div>
            <div class="shot" v-else @click="isComplete = !isComplete">
                <img src="../../assets/image/complete.png" alt />
                <span class="shot-txt">完成</span>
            </div>
            <div class="album">
                <img class="album-box" src="../../assets/image/album.png" alt />
                <span class="album-txt">相册</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            isComplete: false
        };
    }
};
</script>

<style lang="less" scoped>
.camera {
    padding: 30px 20px 20px;
    background-color: rgba(20, 15, 38, 0.58);
    display: flex;
    flex-direction: column;
    .camera-top {
        position: relative;
    }
    .camera-box {
        flex: 1;
        margin-top: 30px;
        background-color: #fff;
    }
    .camera-list {
        margin-top: 15px;
        display: flex;
        li {
            width: 74px;
            height: 74px;
            margin-right: 10px;
            position: relative;
            .close {
                width: 18px;
                height: 18px;
                position: absolute;
                left: -9px;
                top: -9px;
                z-index: 10;
                img {
                    display: block;
                }
            }
            &:last-child {
                margin-right: 0;
                .van-button--block {
                    height: 100%;
                    background-color: transparent;
                    border: 2px solid #d4d4d4;
                }
                .van-button__icon {
                    font-size: 24px;
                    color: #cecece;
                }
            }
        }
    }
    .camera-bottom {
        margin: 30px 0;
        position: relative;
        .shot {
            width: 66px;
            height: 66px;
            border-radius: 50%;
            background-color: #fff;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                width: 25px;
                height: 20px;
            }
            &-txt {
                font-size: 12px;
                margin-top: 5px;
                color: #5f6472;
                text-align: center;
            }
        }
        .album {
            position: absolute;
            right: 30px;
            bottom: 0;
            display: flex;
            flex-direction: column;
            &-box {
                width: 38px;
                height: 38px;
            }
            &-txt {
                font-size: 14px;
                margin-top: 5px;
                color: #fff;
                text-align: center;
            }
        }
    }
}
/deep/.van-tabs__nav {
    background-color: #47444d;
}
/deep/.van-tabs__nav--card {
    margin: 0 100px;
    border-radius: 20px;
    border: none;
    overflow: hidden;
}
/deep/.van-tabs__nav--card .van-tab {
    color: #fff;
    border-right: none;
}
/deep/.van-tabs__nav--card .van-tab.van-tab--active {
    background-color: #fff;
    color: #232a38;
    border-radius: 20px;
}
.van-icon-close {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 26px;
    color: #fff;
    z-index: 5;
}
.van-image {
    z-index: 3;
}
</style>