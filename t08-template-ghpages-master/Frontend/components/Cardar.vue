<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->
<template>
    <div class="cardar">
        <div class="image-container">
                  <div class="img-wrapper">
            <img class="img" :src= "image"  />
                  </div>
        </div>
            <div class="info-container">
        <span class="name">{{ name }}</span>
        <span class="area">{{ description }}</span>
            </div> 
            <br>
        <NuxtLink :to = "link" ><button class="open-button">Open description</button></NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(['image','name','description' ,'link'])
</script>

<style>
   .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 2px;
    width: 250px;
    height: 250px;
    overflow: hidden;
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cardar {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
        font-family: 'Raleway', sans-serif;
    width: fit-content;
    height: fit-content;
  }

    .title
    {
        font-size: 2em;
        font-weight: bold;
    }

     .info-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 10px;
  }

    .name {
    font-size: 2em;
    font-weight: bold;
  }

  .button-container {
    margin-top: 10px;
  }

  .open-button {
    padding: 10px 20px;
    background-color: #0d3e6e;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .open-button:hover {
    background-color: #083056;
  }
</style>