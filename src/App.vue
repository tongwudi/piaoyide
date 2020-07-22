<template>
    <div id="app" v-cloak>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};

// 禁止手机端扩大和缩小手势
window.onload = function() {
    document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
    });
};
</script>
