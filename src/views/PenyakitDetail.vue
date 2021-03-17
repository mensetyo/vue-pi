<template>
  <div class="penyakit-detail">
    <Navbar />

    <div class="container">
      <div class="col-md-6 mt-4">
        <h4>Penyakit {{ penyakits.nama }}</h4>
        <img class="img-thumbnail" :src="'../assets/img/'+penyakits.gambar" alt="Gambar" />
        <p class="color-black mt-3">
          Jumlah penyakit saat ini adalah: <b>{{ penyakits.jumlah }}</b
          >, terletak di <i>{{ penyakits.alamat }}</i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "PenyakitDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      penyakits: [],
      search: "",
    };
  },
  methods: {
    setPenyakit(data) {
      this.penyakits = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/penyakit/" + this.$route.params.id)
      .then((response) => this.setPenyakit(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
</style>