<template>
  <div class="loading">
    <div class="loadingContent">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

.<style lang="scss" scoped>
@import "./../../common/css/global.scss";
.loading {
  @include fullScreen();
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
  .loadingContent {
    @include transformCenter();
    z-index: 10;
    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      margin: 0 6px;
      border-radius: 4px;
      vertical-align: middle;
      background: linear-gradient(0deg, #00f4aa 0%, #0e85ff 100%);
      &:nth-child(1) {
        animation: loadingAnim1 1s infinite ease;
      }
      &:nth-child(2) {
        animation: loadingAnim2 1s infinite ease;
      }
      &:nth-child(3) {
        animation: loadingAnim3 1s infinite ease;
      }
      &:nth-child(4) {
        animation: loadingAnim4 1s infinite ease;
      }
      &:nth-child(5) {
        animation: loadingAnim5 1s infinite ease;
      }
    }
  }
}
</style>
