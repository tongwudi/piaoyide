<template>
    <div class="ticket">
        <van-nav-bar title="票夹" fixed />

        <div class="content">
            <ticket-holder @view="viewDetail" :list="TicketHolder" />
        </div>
    </div>
</template>

<script>
import TicketHolder from "./component/TicketHolder";
export default {
    data() {
        return {
            TicketHolder: [
                {
                    id: 1,
                    total: 234.0,
                    count: 10,
                    name: "新票夹"
                },
                {
                    id: 2,
                    total: 234.0,
                    count: 10,
                    name: "新票夹"
                },
                {
                    id: 3,
                    total: 234.0,
                    count: 10,
                    name: "新票夹"
                }
            ]
        };
    },
    components: {
        "ticket-holder": TicketHolder
    },
    filters: {
        countFilter(val) {
            if (parseInt(val) >= 0) return val + "笔消费";
        }
    },
    methods: {
        viewDetail(id) {
            this.$router.push({ name: "ticketList" });
        }
    }
};
</script>

<style lang="less" scoped>
.content {
    padding: 30px 18px;
    padding-bottom: 0;
}
</style>