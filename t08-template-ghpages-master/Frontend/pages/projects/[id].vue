<!--
    Page description for a single project.
    As described in the SmallCard component, the same component was used for both project and Location since they have the same structure.
-->
<template>

    <main>
        <nav class="breadcrumbs" style="color: #0d3e6e">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="">Details</NuxtLink></li>
      </ul>
    </nav>
        <div class = "info-group">
            <img id="main-img" :src="project.image" />
            <img id="main-img" :src="project.image1" />
            <img id="main-img" :src="project.image2" />

                        

            </div>
             <div id = "data-container">
                <p class = "data">Name: <span>{{ project.name }}</span></p>
                 <p class = "data">Subtitle: <span>{{ project.subtitle }}</span></p>                 
                <p class = "data">Price: <span>{{ project.price }}</span></p>  
                <p class = "data">Person: <span>{{ project.people }}</span></p> 
        </div>
        <h2>Description</h2>
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->
        <p id = "description" v-html = "newLineOnFullStop(project.description)"></p>
                        <p class = "data">Área: <span>{{ project.areaname }}</span> <span>{{ project.areaname1 }}</span></p>
       <!-- <SmallCard :title = "project.location.name" :subtitle = "project.location.city" :link = "'/locations/' + project.location.id" />-->
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: project } = await useFetch(useRuntimeConfig().public.serverURL + '/projects/' + id)
</script>

<style>
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
        width: 100%;
        display: flex;
        flex-direction: row;
            font-family: 'Raleway', sans-serif;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .data {
        font-weight: bolder;
            font-family: 'Raleway', sans-serif;
        font-size: 20pt
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

     .breadcrumbs {
    color: #0d3e6e;
        font-family: 'Raleway', sans-serif;
  }

  .breadcrumb-link {
    color: inherit;
        font-family: 'Raleway', sans-serif;
    transition: color 0.3s;
  }

  .breadcrumb-link:hover {
    color: #083056;
        font-family: 'Raleway', sans-serif;
    text-decoration: underline;
  }
</style>