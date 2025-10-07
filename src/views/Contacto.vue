<template>
  <section class="contacto">
    <h2>Contacto</h2>
    <p>
      Si te interesa alguna obra o deseas una pieza personalizada, completa el formulario y te responderé pronto.
    </p>

    <form @submit.prevent="enviarFormulario">
      <input v-model="nombre" type="text" placeholder="Tu nombre" required />
      <input v-model="email" type="email" placeholder="Tu correo electrónico" required />
      <textarea v-model="mensaje" rows="5" placeholder="Tu mensaje" required></textarea>
      <button type="submit">Enviar mensaje</button>
    </form>

    <p v-if="enviado" style="color:#9fe6e6; margin-top:1rem;">✅ Mensaje enviado correctamente</p>
  </section>
</template>

<script setup>
import { ref } from "vue";

const nombre = ref("");
const email = ref("");
const mensaje = ref("");
const enviado = ref(false);

function enviarFormulario() {
  console.log("Formulario enviado:", { nombre: nombre.value, email: email.value, mensaje: mensaje.value });
  enviado.value = true;
  nombre.value = "";
  email.value = "";
  mensaje.value = "";
}
</script>
