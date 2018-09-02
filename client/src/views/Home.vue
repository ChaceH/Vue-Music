<template>
  <div class="home container-fluid">
     <form class="" @submit="getItunes()">
        <div class="form-group">
            <input v-model="searchTerm" type="text" class="form-control" name="artist" placeholder="Artist Name" />
            <button type="submit" class="btn btn-success" id="get-music-button">Get Music</button>
        </div>
    </form>
    <div class="row">
    <div class="col-xs-6">
      <h4>Itunes</h4>
      <songs v-for="song in this.itunesPlaylist" :song="song" :inMytunes="false" :key="song.trackId"/>
    </div>
    <div class="col-xs-6">
      <h4>MyTunes</h4>
      <songs v-for="song in this.mytunesPlaylist" :song="song" :inMytunes="true" :key="song.trackId"/>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import songs from "@/components/song.vue";

export default {
  name: "home",
  components: {
    songs
  },
  data(){
    return {
      searchTerm: ""
    }
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
    getItunes(){
      this.$store.dispatch('getItunes', this.searchTerm);
    },
    getMytunes(){
      this.$store.dispatch('getMytunes')
    }
  },
  mounted() {
    this.getMytunes()
  }
};
</script>
