<template>
  <div class="slider">
    <div class="slider-wrapper" :style="{ transform: 'translateX(' + position + 'px)' }">
      <div @click="sliderSelect(index)" :class="{ 'active': select === index }" v-for="(item, index) in items"
        :key="index" class="slider-item" :style="{ width: slideWidth + 'px' }">
        <img :src="item.download_url" :alt="item.author">
      </div>
    </div>
    <button class="slider-btn slider-btn-previous" @click="previous"><img src="../assets/left_arrow.svg" alt=""></button>
    <button class="slider-btn slider-btn-next" @click="next"><img src="../assets/right_arrow.svg" alt=""></button>

  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    slideCount: Number,
  },
  data() {
    return {
      position: 0,
      currentIndex: 0,
      slideWidth: 0,
      select: null,
    }
  },
  created() {
    window.addEventListener('resize', this.updateSlideCount)
  },
  destroyed() {
    window.removeEventListener('resize', this.updateSlideCount)
  },
  methods: {
    updateSlideCount() {
      if (window.innerWidth > 768) {
        if (this.slideCount == 0) {
          this.slideWidth = this.$el.clientWidth
        } else {
          this.slideWidth = this.$el.clientWidth / this.slideCount;
        }
      } else {
        this.slideWidth = this.$el.clientWidth
      }
      this.position = -this.currentIndex * this.slideWidth;
    },
    sliderSelect(index) {
      this.select = index;
    },
    previous() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.items.length - this.slideCount;
        this.position = -this.currentIndex * this.slideWidth;
      } else {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
        this.position = -this.currentIndex * this.slideWidth;
      }
    },
    next() {
      if (this.currentIndex + this.slideCount >= this.items.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = Math.min(this.currentIndex + 1, this.items.length - this.slideCount);
      }
      this.position = -this.currentIndex * this.slideWidth;
    }
  },
  computed: {
    disablePrev() {
      return this.currentIndex === 0
    },
    disableNext() {
      return this.currentIndex === this.items.length - this.slideCount
    }
  },
  mounted() {
    this.updateSlideCount()
  }
}
</script>