<template>
  <div class="not-found">
    <img
      src="image/notFound.png"
      alt="Search or enter movie title" />
    <div class="text">
      <span>404</span>
      <p>NotFound</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.not-found{
  display: flex;
  justify-content: center;
  margin: 100px 30px 0;
  border-radius: 10px;
  min-width: 700px;
  background-color: rgba($color: #fff, $alpha: .5);
  .text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  img{
    width: 300px;
  }
  span{
    font-size: 100px;
    font-weight: bold;
  }
  p{
    font-size: 50px;
    font-weight: bold;
  }
  
}
</style>