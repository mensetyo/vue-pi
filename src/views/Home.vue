<template>
  <div class="home">
    <Navbar />

    <div class="container mt-4">
      <div class="input-group mb-3">
        <input
        v-model="search"
          type="text"
          class="form-control"
          placeholder="Cari data penyakit..."
          aria-label="Data Penyakit"
          aria-describedby="basic-addon2"
          @keyup="seacrhPenyakit"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            <b-icon-search></b-icon-search>
          </span>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 mt-4"
          v-for="penyakit in penyakits"
          :key="penyakit.id"
        >
          <CardPenyakit :penyakit="penyakit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardPenyakit from "@/components/CardPenyakit.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    CardPenyakit,
  },
  data() {
    return {
      penyakits: [],
      search:''
    };
  },
  methods: {
    setPenyakit(data) {
      this.penyakits = data;
    },
    seacrhPenyakit(){
      axios
      .get("http://localhost:3000/penyakit?q="+this.search)
      .then(response => this.setPenyakit(response.data))
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/penyakit")
      .then((response) => this.setPenyakit(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
