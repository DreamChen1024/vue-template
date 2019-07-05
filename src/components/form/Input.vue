<template>
  <div class="input">
    <input type="input" id="input" placeholder="请输入内容" />
    <label for="input">请输入内容</label>
    <div class="bottom-line"></div>
  </div>
</template>

<style lang="scss">
$width: 500px;
$label-font-color: #3f4f5b;
$label-focus-font-color: rgb(82, 97, 108);
$border-bottom-color: #d5d5d5;
$focus-border-color: rgb(101, 141, 181);
$transform-top: 10px;
$transform-time: 0.3s;
$scale: 0.9;

.input {
  width: $width;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-flow: column-reverse;
  flex-flow: column-reverse;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  margin: 100px auto
}

.input input {
  -webkit-box-ordinal-group: 11;
  order: 10;
  -ms-flex-order: 10;
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 0;
  font-size: 20px;
  border-bottom: 1px solid $border-bottom-color;
  text-indent: 10px;
}

.input input::-moz-placeholder {
  opacity: 0;
}

.input input::-webkit-input-placeholder {
  opacity: 0;
}

.input input:-ms-input-placeholder {
  opacity: 0;
}

.input input, .input label {
  transition: all $transform-time;
}

.input label {
  -webkit-box-ordinal-group: 101;
  -ms-flex-order: 100;
  order: 100;
  color: $label-font-color;
  -webkit-transform-origin: left bottom;
  transform-origin: left bottom;
  -webkit-transform: translate(10px, 40px);
  transform: translate(0px, 40px);
}

.input .bottom-line {
  order: 2;
  width: 0;
  height: 2px;
  background: $focus-border-color;
  transition: all $transform-time;
}

.input input:focus {
  border-bottom-color: #fff;
}

.input input:focus ~ div, .input input:not(:placeholder-shown) ~ div {
  width: 100%
}

.input input:focus + label, .input input:not(:placeholder-shown) + label {
  color: $label-focus-font-color;
  -webkit-transform: translate(10px) scale($scale);
  transform: translate(10px) scale($scale)
}

</style>
