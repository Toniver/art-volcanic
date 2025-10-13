<template>
  <section class="contacto">
    <h2>Contacto</h2>
    <p>
      Si te interesa alguna obra o deseas una pieza personalizada, completa el
      formulario y te responderé pronto.
    </p>

    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <!-- Campo oculto para Netlify -->
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>No llenar: <input name="bot-field" /></label>
      </p>

      <input type="text" name="nombre" placeholder="Tu nombre" required />
      <input
        type="email"
        name="correo"
        placeholder="Tu correo electrónico"
        required
      />
      <textarea name="mensaje" placeholder="Tu mensaje" required></textarea>
      <button type="submit">Enviar mensaje</button>
    </form>
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
