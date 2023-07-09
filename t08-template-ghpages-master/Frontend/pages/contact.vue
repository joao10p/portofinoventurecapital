<template>
  <main>
    <div class="contact-info">
      <h2>Contact Information</h2>
      <ul>
        <li>E-mail: mail@shelter.it</li>
        <li>Tel: 053684864351</li>
      </ul>
    </div>
    <div class="form-container">
      <h2>Send us a Message</h2>
      <form @submit.prevent="sendForm">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Your Name" />
        </div>
        <div>
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email" placeholder="Your E-mail" />
        </div>
        <div id="message-div">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" placeholder="Write your message here"></textarea>
        </div>
        <br />
        <button class="send-button" type="submit">Send Message</button>
      </form>
    </div>
  </main>
</template>

<script setup>
//send contact form to backend on port 3001

  const name = ref('')
  const email = ref('')
  const message = ref('')

  const sendForm = async () => {
    const data = {
      name: name.value,
      email: email.value,
      message: message.value
    }

    const response = await fetch('http://localhost:3001/contact', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    console.log(result)
  }


 

</script>

<style>
#map {
  width: 100%;
}
</style>
Neste exemplo, importamos as dependências necessárias do Vue e do Leaflet. Usamos o hook onMounted para garantir que o código de inicialização do mapa seja executado após o componente ser montado.

Dentro do hook onMounted, criamos um novo mapa Leaflet com a localização de Milão, na Itália, e definimos a visualização inicial com a função setView. Em seguida, adicionamos uma camada de tile do OpenStreetMap ao mapa usando L.tileLayer e adicionamos um marcador com a função L.marker. O método bindPopup permite adicionar um pop-up ao marcador com um texto informativo.

Certifique-se de ter instalado as dependências corretas, incluindo o Vue, o Leaflet e o Leaflet CSS, além de importar corretamente os arquivos e estilos






<style>
  main {
    width: 100%;
        font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .contact-info {
    width: 90vw;
        font-family: 'Raleway', sans-serif;
    padding: 20px;
    background-color: white;
    border-bottom: 2px solid #0d3e6e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact-info h2 {
    font-size: 24px;
    font-weight: bold;
        font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
  }

  .contact-info ul {
    list-style: none;
        font-family: 'Raleway', sans-serif;
    padding: 0;
    margin: 0;
  }

  .contact-info li {
        font-family: 'Raleway', sans-serif;
    margin-bottom: 10px;
  }

  .form-container {
    width: 95vw;
        font-family: 'Raleway', sans-serif;
    padding: 20px;
    border: 2px solid #0d3e6e;
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
  }

  .form-container h2 {
        font-family: 'Raleway', sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  form div {
        font-family: 'Raleway', sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  textarea {
    width: 93%;
    min-height: 5.1em;
        font-family: 'Raleway', sans-serif;
    resize: vertical;
  }

  input {
        font-family: 'Raleway', sans-serif;
    width: 93%;
  }

  label {
        font-family: 'Raleway', sans-serif;
    width: 7%;
    font-size: 13pt;
    font-weight: bold;
  }

  .send-button {
    width: 100%;
    align-self: center;
    padding: 8px;
        font-family: 'Raleway', sans-serif;
    border-radius: 5px;
    background-color: #0d3e6e;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s, text-decoration 0.3s;
  }

  .send-button:hover {
    background-color: #083056;
        font-family: 'Raleway', sans-serif;
    border: 2px solid black;
    text-decoration: underline;
  }

  .map {
    width: 90vw;
        font-family: 'Raleway', sans-serif;
    height: 100%;
  }

  @media screen and (max-width: 650px) {
    main {
      flex-direction: column;
    }

    .contact-info,
    .form-container {
          font-family: 'Raleway', sans-serif;
      width: 90%;
    }

    .map {
      width: 90%;
    }
  }
</style>

