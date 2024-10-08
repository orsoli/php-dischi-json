import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {};
  },
  methods: {
    getSongList() {
      axios
        .get("http://localhost:8888/php-dischi-json/db/dischi.json")
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },

  created() {
    this.getSongList();
  },
}).mount("#app");
