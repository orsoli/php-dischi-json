import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      songsList: [], // Store the song lists
    };
  },
  methods: {
    getSongList() {
      axios
        .get("http://localhost:8888/php-dischi-json/db/dischi.json")
        .then((response) => {
          // handle success
          this.songsList = response.data;
          console.log(this.songsList);
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
