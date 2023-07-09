<template >
  <header >
    <h1>Portofino Venture Capital</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About Portofino</NuxtLink>
      <NuxtLink to="/contact">Contact Us</NuxtLink>
    </nav>
  </header>
</template>

<style>
  header {
    background-color: #1c4e80;
    padding: 10px 20px;
    margin-bottom: 5px;
        font-family: 'Raleway', sans-serif;
    border-bottom: 5px solid #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }

  h1 {
    font-size: 24px;
  }

  nav {
    display: flex;
    gap: 30px;
  }

  nav a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: #ffffff;
  }
</style>
