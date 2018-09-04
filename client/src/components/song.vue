<template>
    <div class = "font-color-white">
      <img :src="song.artworkUrl100" alt="">
      <p>Artist: {{song.artistName}}</p>
      <p>Song: {{song.trackName}}</p>
      <p>Album: {{song.collectionName}}</p>
      <audio controls>
      <source :src="song.previewUrl" preload="false">

      </audio>
      <span class="fa" :class="{ 'fa-plus': !inMytunes, 'fa-trash': inMytunes }" @click="addOrRemove()">
      </span>

    </div>
</template>

<script>
export default {
  name: "songComponent",
  props: ["song", "inMytunes"],

  methods: {
    addOrRemove() {
      if (this.inMytunes) {
        this.$store.dispatch('removeFromPlaylist', this.song._id); //delete from playlist
      } else {
        this.$store.dispatch('addToPlaylist', this.song); //add to playlist
      }
    }
  }
};
</script>
<style>
.font-color-white{
  color: white;
}
</style>