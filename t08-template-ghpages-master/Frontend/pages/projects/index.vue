<template>
  <main>
     <nav class="breadcrumbs" style="color: #0d3e6e">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="">Projects</NuxtLink></li>
      </ul>
    </nav>
    <div class="form-container">
      <label for="price-filter">Maximum Price</label>
      <input id="price-filter" type="text" placeholder="Price filter" v-model="price" />
    </div>

    <div class="form-container">
      <label for="area-filter">Area filter</label>
      <select id="area-filter" v-model="area">
        <option value="all">All Areas</option>
        <option value="Green">Green</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
      </select>
    </div>

    <h1>Projects</h1>
    <div id="card-container">
      <Cardpro
        v-for="project of filtered"
        :key="project.id"
        :name="project.name"
        :areaname="project.areaname"
        :areaname1="project.areaname1"
        :price="project.price"
        :subtitle="project.subtitle"
        :image="project.image"
        :link="'/projects/' + project.id"
      />
    </div>
  </main>
</template>

<script setup>
  // useRuntimeConfig provides us with environment variables set up in the nuxtconfig file
  const { data: projects } = await useFetch(useRuntimeConfig().public.serverURL + '/projects');

  // Define the price and area filters
  const price = ref(0);
  const area = ref("all");

  const filtered = computed(() => {
    // Checking for values where the full list is provided
    if (price.value == 0 && area.value === "all") return projects.value;

    const arr = [];

    // Filtering the list
    for (let project of projects.value) {
      if (price.value > 0 && project.price >= price.value) continue;
      if (area.value !== "all" && project.areaname !== area.value && project.areaname1 !== area.value) continue;
      arr.push(project);
    }

    // Returning the filtered list
    return arr;
  });
</script>

<style>

 .breadcrumbs {
       font-family: 'Raleway', sans-serif;
    color: #0d3e6e;
  }

  .breadcrumb-link {
    color: inherit;
        font-family: 'Raleway', sans-serif;
    transition: color 0.3s;
  }


  #card-container {
    display: flex;
    flex-wrap: wrap;
        font-family: 'Raleway', sans-serif;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    gap: 20px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
        font-family: 'Raleway', sans-serif;
    gap: 10px;
  }

  .form-container {
        background-color: #0d3e6e;
    color: white;
    width: 90%;
    border-radius: 10px;
        font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: flex-start;
    gap: 20px;
    padding: 20px;
  }

  .breadcrumbs {
        font-family: 'Raleway', sans-serif;
    margin-bottom: 20px;
  }

  .breadcrumbs ul {
    list-style: none;
    padding: 0;
        font-family: 'Raleway', sans-serif;
    margin: 0;
  }

  .breadcrumbs li {
    display: inline-block;
        font-family: 'Raleway', sans-serif;
    margin-right: 5px;
  }

  .breadcrumbs li:last-child {
    font-weight: bold;
        font-family: 'Raleway', sans-serif;
        color: #083056;
  }

  .breadcrumbs li::after {
    content: "/";
    margin-left: 5px;
        font-family: 'Raleway', sans-serif;
    margin-right: 5px;
        color: #083056;
  }

  .breadcrumbs li:last-child::after {
    content: "";
        font-family: 'Raleway', sans-serif;
        color: #083056;
  }

  .breadcrumbs a {
    text-decoration: none;
        font-family: 'Raleway', sans-serif;
    color: #0d3e6e;
  }

    .breadcrumb-link:hover {
          font-family: 'Raleway', sans-serif;
    color: #083056;
  }

   .form-container label {
         font-family: 'Raleway', sans-serif;
    /* Resto do estilo */
    color: white;
  }

  .form-container input {
    /* Resto do estilo */
    background-color: #fff;
        font-family: 'Raleway', sans-serif;
    color: #0d3e6e;
  }

  .form-container select {
    /* Resto do estilo */
    background-color: white;
        font-family: 'Raleway', sans-serif;
    color: #0d3e6e;
  }
</style>

