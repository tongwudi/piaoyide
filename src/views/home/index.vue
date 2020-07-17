<template>
    <div class="home">
        <div class="welcome">Welcome</div>
        <div class="title">票易得</div>
        <div class="pic">
            <div class="effect">
                <span>发票</span>
                <span>单据</span>
            </div>
            <span class="tip">一拍即得</span>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
.home {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 55px;
    box-sizing: border-box;
    background-image: url("../../assets/image/bg.png");
    background-size: 100% 100%;
    .welcome {
        padding-left: 20px;
        line-height: 30px;
        font-size: 24px;
        padding-bottom: 2px;
        color: rgba(209, 226, 244, 0.7);
    }
    .title {
        padding-left: 20px;
        line-height: 42px;
        font-size: 30px;
        font-weight: bold;
        color: rgb(209, 226, 244);
    }
    .pic {
        width: 100%;
        height: 350px;
        position: absolute;
        bottom: 16%;
        left: 0;
        background-image: url("../../assets/image/pic.png");
        background-size: 100% 100%;
        .effect {
            line-height: 22px;
            font-size: 16px;
            position: absolute;
            bottom: 85px;
            left: 50px;
            color: rgb(209, 226, 244);
            span {
                margin-right: 15px;
            }
        }
        .tip {
            line-height: 20px;
            font-size: 14px;
            position: absolute;
            bottom: 55px;
            left: 50px;
            color: rgba(209, 226, 244, 0.5);
        }
    }
}
</style>