<template>
    <div >
        <!-- <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />-->
        <router-view></router-view>
gffdg
        <footer-bar v-show="$route.meta.footShow" />
    </div>
</template>

<script>
import FooterBar from "components/FooterBar";
export default {
    components: {
        "footer-bar": FooterBar
    }
};
</script>