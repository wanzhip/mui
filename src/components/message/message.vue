<template>
  <div
    style="color: red; border: 1px solid"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
    v-show="visible"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    duration: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      closed: false,
      timer: 0,
      visible: false
    };
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        // this.$el.addEventListener("transitionend", this.destroyElement); // 移除元素
      }
    },
  },
  methods: {
    close() {
      this.closed = true;
    },
    clearTimer() {
      console.log("enter");
      clearTimeout(this.timer);
    },
    startTimer() {
      console.log("leave");
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  mounted() {
    this.visible = true;
    this.startTimer();
  },
};
</script>
