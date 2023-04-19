<template>
  <Carousel :slideCount="4" :items="items"></Carousel>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
  components: {
    Carousel
  },
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=10')
        const data = await response.json()
        this.items = data
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

div,
span,
object,
iframe,
img,
table,
caption,
thead,
tbody,
tfoot,
tr,
tr,
td,
article,
aside,
canvas,
details,
figure,
hgroup,
menu,
nav,
footer,
header,
section,
summary,
mark,
audio,
video {
  border: 0;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
address,
cit,
code,
del,
dfn,
em,
ins,
q,
samp,
small,
strong,
sub,
sup,
b,
i,
hr,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
legend,
label {
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

article,
aside,
canvas,
figure,
figure img,
figcaption,
hgroup,
footer,
header,
nav,
section,
audio,
video {
  display: block;
}

a {
  text-decoration: none;
}

button {
  border: 0;
  outline: 0;
  cursor: pointer;
}

li {
  list-style: none;
}

a img {
  border: 0;
}

:focus {
  outline: 0;
}

img {
  display: block;
  width: 100%;
}

body {
  background-color: black;
  color: #fff;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.slider {
  position: relative;
  margin: 0 20px;
  padding: 20px 0;
  overflow: hidden;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.3s ease;
  justify-content: space-between;
}

.slider-item {
  flex: 0 0 auto;
  max-width: 100%;
  transition: all .3s linear;
  cursor: pointer;
}

.slider-item.active {
  transform: scale(1.05)
}

@media (min-width: 768px) {
  .slider-item {
    padding-right: 20px;
  }
}


.slider-item:last-child {
  padding-right: 0px;
}

.slider-item img {
  display: block;
  width: 100%;
  height: 100%;
}

.inner {
  position: relative;
}

.slider-btn {
  background-color: transparent;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.slider-btn img {
  max-width: 30px;
}

.slider-btn-previous {
  top: 50%;
  left: 50px;
  transform: translateX(-50%);
}

.slider-btn-next {
  top: 50%;
  right: 20px;
  transform: translateX(-50%);
}</style>