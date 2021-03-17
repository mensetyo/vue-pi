<template>
  <router-link class="nav-link" :to="'/penyakitdetail/'+penyakit.id">
  <div class="card p-3">
    <img :src="'./assets/img/'+penyakit.gambar" alt="selectedDog">
    <h4>Penyakit {{ penyakit.nama }}</h4>
    <p class="color-black">
      Jumlah penyakit saat ini adalah: <b>{{ penyakit.jumlah }}</b
      >, terletak di <i>{{ penyakit.alamat }}</i>
    </p>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "CardPenyakit",
  props: ["penyakit"],
};
</script>

<style>
</style>