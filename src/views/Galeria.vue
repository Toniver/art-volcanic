<template>
  <div class="galeria-container">
    <h2 class="galeria-titulo">Galería</h2>

    <div v-if="loading" class="text-center">Cargando cuadros...</div>

    <div v-else class="galeria-grid">
      <div
        v-for="cuadro in cuadros"
        :key="cuadro._id"
        class="cuadro-card"
        @click="abrirModal(cuadro)"
      >
        <div class="cuadro-imagen">
          <img :src="cuadro.imagen" :alt="cuadro.titulo" />
        </div>
        <div class="cuadro-info">
          <h3>{{ cuadro.titulo }}</h3>
          <p class="anio"><b>Año: </b>{{ cuadro.anio }}</p>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div v-if="modalVisible" class="modal-overlay" @click.self="cerrarModal">
      <div class="modal-content">
        <img :src="cuadroSeleccionado.imagen" :alt="cuadroSeleccionado.titulo" />
        <div class="modal-text">
          <h3>{{ cuadroSeleccionado.titulo }}</h3>
          <p><strong>Técnica:</strong> {{ cuadroSeleccionado.tecnica }}</p>
          <p><strong>Año:</strong> {{ cuadroSeleccionado.anio }}</p>
          <p>{{ cuadroSeleccionado.descripcion }}</p>
          <button @click="cerrarModal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createClient } from "@sanity/client";

const cuadros = ref([]);
const loading = ref(true);
const modalVisible = ref(false);
const cuadroSeleccionado = ref(null);

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2024-08-25",
  useCdn: true,
});

onMounted(async () => {
  try {
    cuadros.value = await client.fetch(`*[_type == "cuadro"]{
      _id,
      titulo,
      anio,
      tecnica,
      descripcion,
      "imagen": imagen.asset->url
    }`);
  } catch (error) {
    console.error("Error al obtener cuadros:", error);
  } finally {
    loading.value = false;
  }
});

function abrirModal(cuadro) {
  cuadroSeleccionado.value = cuadro;
  modalVisible.value = true;
  document.body.style.overflow = "hidden"; // 🔒 Bloquea scroll del fondo
}

function cerrarModal() {
  modalVisible.value = false;
  document.body.style.overflow = ""; // 🔓 Restaura scroll al cerrar
}

</script>
