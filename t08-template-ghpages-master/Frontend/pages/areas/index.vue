<!--
    Page with the list of all the area.
    As described in the Card component, the same component was used for both Dog and area since they have the same structure.
-->
<template>
    <main>
        <nav class="breadcrumbs" style="color: #0d3e6e">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/areas">Areas</NuxtLink></li>
      </ul>
    </nav>
        <h1>Areas</h1>
        <div id="card-container">
            <Cardar 
                v-for="area of areas" 
                :image="area.image" 
                :name="area.name" 
                :description="area.description" 
                :link="'/areas/' + area.id" 
            />
        </div>

       
    </main>
</template>

<script>
    /*
        The defineNuxtComponent gets us access to the asyncData property.
        This is the first function that is called by nuxt when the page is called.
        We can use this to pre-load the data to make it available to the user.
    */
    export default defineNuxtComponent({
        async asyncData() {
            // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
            const areas = await $fetch(useRuntimeConfig().public.serverURL + '/areas')

            return {
                areas
            }
        }
    })
</script>

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
            font-family: 'Raleway', sans-serif;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
            font-family: 'Raleway', sans-serif;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    #form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
            font-family: 'Raleway', sans-serif;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

    

</style>