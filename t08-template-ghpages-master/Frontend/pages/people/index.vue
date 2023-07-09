<template>
  <main>
        <nav class="breadcrumbs" style="color: #0d3e6e">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/people">People</NuxtLink></li>
      </ul>
    </nav>
    <div class="form-container">
      <label for="education-filter">Education filter</label>
      <select id="education-filter" v-model="education">
        <option value="">All Education</option>
        <option value="High School">High School</option>
        <option value="Bachelor">Bachelor's Degree</option>
        <option value="Master">Master's Degree</option>
        <option value="PhD">PhD</option>
      </select>
    </div>

    <h1>People</h1>
    <div id="card-container">
      <Card
        v-for="person of filteredPeople"
        :key="person.id"
        :image="person.image"
        :name="person.name"
        :education="person.education"
        :expertise="person.expertise"
        :link="'/people/' + person.id"
      />
    </div>
  </main>
</template>

<script setup>
  // useRuntimeConfig provides us with environment variables set up in the nuxtconfig file
  const { data: people } = await useFetch(
    useRuntimeConfig().public.serverURL + "/people"
  );

  // Define the education filter
  const education = ref("");

  const filteredPeople = computed(() => {
    // Checking for values where the full list is provided
    if (education.value === "") return people.value;

    const arr = [];

    // Filtering the people
    for (let person of people.value) {
      if (
        education.value === "all" ||
        person.education.toLowerCase() === education.value.toLowerCase()
      ) {
        arr.push(person);
      }
    }

    // Returning the filtered people
    return arr;
  });
</script>

<style>


  main {
    display: flex;
        font-family: 'Raleway', sans-serif;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    gap: 10px;
  }


  
</style>
