<template>
  <div class="home container-fluid bg-black">
     <form class="" @submit.prevent="getItunes()">
        <div class="form-group">
            <input v-model="searchTerm" type="text" class="form-control" name="artist" placeholder="Type Here to Search" />
            <button type="submit" class="btn btn-success" id="get-music-button">SEARCH</button>
        </div>
    </form>
    <div class="row justify-content-center">
    <div class="col-sm-6 justify-content-center">
      <h4 class="title-text">Results</h4>
      <songs v-for="song in this.itunesPlaylist" :song="song" :inMytunes="false" :key="song.trackId"/>
    </div>
    <div class="col-sm-6 justify-content-center">
      <h4 class="title-text">Playlist</h4>
      <songs v-for="song in this.mytunesPlaylist" :song="song" :inMytunes="true" :key="song.trackId"/>
    </div>
    </div>
  </div>
</template>

<script>
//cd into client and npm run serve to run client side
//node server to run server side

// @ is an alias to /src
import songs from "@/components/song.vue";

export default {
  name: "home",
  components: {
    songs
  },
  data() {
    return {
      searchTerm: ""
    };
  },
  computed: {
    itunesPlaylist() {
      return this.$store.state.itunesPlaylist;
    },
    mytunesPlaylist() {
      return this.$store.state.mytunesPlaylist;
    }
  },
  methods: {
    getItunes() {
      this.$store.dispatch("getItunes", this.searchTerm);
    },
    getMytunes() {
      this.$store.dispatch("getMytunes");
    }
  },
  mounted() {
    this.getMytunes();
  }
};
</script>

<style>
.justfy-content-center {
  display: flex;
  justify-content: center;
}

.justfy-space-between {
  display: flex;
  justify-content: space-between;
}
.bg-black {
  background-color: black;
}

.title-text{
  color:white;
  font-size: 20pt
}
</style>

