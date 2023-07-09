<!--
    Page description for a single area.
    As described in the SmallCard component, the same component was used for both area and Location since they have the same structure.
-->
<template>
    <main>
           <nav class="breadcrumbs" style="color: #0d3e6e">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/areas">Areas</NuxtLink></li>
        <li><NuxtLink to="">Details</NuxtLink></li>
      </ul>
    </nav>
        <div class = "info-group">
             <img id="main-img" :src="area.image" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ area.name }}</span></p>
                <p class = "data">Description: <span>{{ area.description }}</span></p>
        <NuxtLink :to="`/projects/${area.name}`" ><button class="open-button">View Projects</button></NuxtLink>
            </div>
        </div>
        
        
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.

        <p id = "description" v-html = "newLineOnFullStop(area.description)"></p>
 <SmallCard :title = "area.location.name" :subtitle = "area.location.city" :link = "'/locations/' + area.location.id" />-->
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: area } = await useFetch(useRuntimeConfig().public.serverURL + '/areas/' + id)
</script>

<style>
#view{
            background-color: #0d3e6e;
            color: white;
            border-radius: 20px;
            height: 40px;
            width: 200px;
}

  #view:hover {
    background-color: #083056;
  }

    #main-img {
    width: 30%;
    height: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-group {
        margin-left: 2%;
        margin-right: 2%;
        width: 96%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
        font-family: 'Raleway', sans-serif;
    }

    .data {
        font-weight: bolder;
        font-size: 20pt;
            font-family: 'Raleway', sans-serif;
    }

    .data span {
        font-weight: 100;
            font-family: 'Raleway', sans-serif;
        font-size: 15pt;
    }

    #description {
        padding: 0 20px 0 20px;
            font-family: 'Raleway', sans-serif;
        font-size: 15pt;
    }

    
</style>