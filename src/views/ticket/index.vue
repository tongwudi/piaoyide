<template>
    <div class="ticket">
        <van-nav-bar title="票夹" fixed />

        <div class="content">
            <ticket-list @view="viewDetail" :list="ticketList" />
        </div>
    </div>
</template>

<script>
import TicketList from "components/TicketList";
export default {
    data() {
        return {
            ticketList: [
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
        "ticket-list": TicketList
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