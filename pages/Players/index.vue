<template>
  <div class="page-root">
    {{players}}
  </div>
</template>

<script>
  export default {
    data: () => ({
      players: []
    }),
    fetch() {
      this.$fire.firestore
      .collection("players")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const player = doc.data();

            const id = doc.id;

            const data = {
              id,
              sports: player.sports,
              organizations: player.organizations
            };
            
            this.players.push(data);
        });
      });
    }
  }
</script>