<template>
  <div class="home-component">

    <div class="jumbotron jumbotron-fluid">
        <div class="container" style="text-align:right; color:#fff">
          <h2>Rural Connect</h2>
          <h3 class="display-5"><span style="color:#fff">Get your Goods DoorStep</span></h3>
        </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Our Best Products</li>
        <li class="ml-auto" aria-current="page"><router-link to="/products">Show All</router-link></li>
      </ol>
      
    </nav>
    <BestProducts></BestProducts>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page">Our Top Products</li>
        <li class="ml-auto" aria-current="page"><router-link to="/products">Show All</router-link></li>
      </ol>
    </nav>
    <TopProducts></TopProducts>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BestProducts from "@/components/products/BestProducts.vue";
import TopProducts from "@/components/products/TopProducts.vue";
export default {
  name: "home",
  components: {
    HelloWorld,
    BestProducts,
    TopProducts
  }
};
</script>
<style>
.jumbotron {
padding: 5rem 0rem;
    background-image: url(https://cdn.shopify.com/s/files/1/2135/7277/products/676_1200x@2x.jpg?v=1503350954);
    background-repeat: no-repeat;
    background-size: 100% 202%;
    background-position: 0px -162px;
}
</style>
