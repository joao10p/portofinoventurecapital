<template>
  <main style="background-color: white;">
    <div class="half-height-container">
      <img id="main-img" src="https://pe-insights.com/wp-content/uploads/2020/08/Venture-Capital-1920x1080-1-1080x675.jpg?ff5e19&ff5e19" />
      <h1 class="title-overlay">Portofino Venture Capital</h1>
    </div>

    <div class="figure-container">
      <figure class="figure-item">
        <NuxtLink to="/people" class="nav-link">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgSEHz2skb3gdxMVF94zi81OLYnDousiadHhHM1kBoiSwFzyYyjans9JSvwraUPBGeklM&usqp=CAU" alt="People" />
          <figcaption>
            <h3>PEOPLE</h3>
          </figcaption>
        </NuxtLink>
      </figure>

      <figure class="figure-item">
        <NuxtLink to="/projects" class="nav-link">
          <img src="https://wallpaperaccess.com/full/1930875.jpg" alt="Projects" />
          <figcaption>
            <h3>PROJECTS</h3>
          </figcaption>
        </NuxtLink>
      </figure>

      <figure class="figure-item">
        <NuxtLink to="/areas" class="nav-link">
          <img src="https://m.media-amazon.com/images/I/61vhGrIUIYL._AC_UF894,1000_QL80_.jpg" alt="Areas" />
          <figcaption>
            <h3>AREAS</h3>
          </figcaption>
        </NuxtLink>
      </figure>
    </div>
    <br>
  </main>
</template>

<style>
  #main-img {
    object-fit: cover;
    width: 100%;
    height: 50vh;
  }

  .half-height-container {
    position: relative;
    width: 100%;
        font-family: 'Raleway', sans-serif;
    height: 50vh;
    overflow: hidden;
  }

  .title-overlay {
    position: absolute;
    top: 40%;
    left: 50%;
        font-family: 'Raleway', sans-serif;
    transform: translate(-50%, -50%);
    font-size: 60px;
    font-weight: bold;
    color: white;
    text-align: center;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9);
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
        font-family: 'Raleway', sans-serif;
    align-items: center;
  }

  .figure-container {
    display: flex;
        font-family: 'Raleway', sans-serif;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    margin-top: 20px;
  }

  .figure-item {
    width: 30%;
    text-align: center;
        font-family: 'Raleway', sans-serif;
    cursor: pointer;
    background-color: #f0f0f0;
    border-radius: 10px;
    transition: background-color 0.3s, border-color 0.3s;
  }

  .figure-item img {
    width: 100%;
    height: 200px;
        font-family: 'Raleway', sans-serif;
    object-fit: cover;
    border-radius: 10px;
  }

  .figure-item:hover {
    background-color: #0d3e6e;
    border-color: #0d3e6e;
  }

  .figure-item:hover h3 {
    color: white;
  }

  .nav-link {
    text-decoration: none;
  }

  .nav-link h3 {
    color: #0d3e6e;
        font-family: 'Raleway', sans-serif;
    transition: color 0.3s;
  }
</style>
