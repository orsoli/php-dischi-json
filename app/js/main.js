import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      songsList: [], // Store the song lists
      clickedSong: {}, // Store clicked song cards
      isActive: false, // Flag using to toggle class d-none in modal html
    };
  },
  methods: {
    // Define a function to get api
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
    // Define a function to get cliicked song
    getClickedSong(i) {
      this.clickedSong = this.songsList[i];
      console.log(this.clickedSong); // test console log
      this.isActive = true;
      console.log(this.isActive); // Test console log
    },
    //Define function to close the modal
    closeModal() {
      this.isActive = false;
    },
  },

  created() {
    this.getSongList();
  },
}).mount("#app");
