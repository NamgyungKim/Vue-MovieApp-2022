<template>
  <div class="loading">
    <img
      src="image/loading.png"
      alt="로딩중" />
    <p>Loading...</p>
  </div>
</template>

<style lang="scss" scoped>
.loading{
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 150px;
    animation: loading 2s infinite alternate;
  }
  p{
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>