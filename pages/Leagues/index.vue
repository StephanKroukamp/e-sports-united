<template>
  <div class="page-root">
    {{leagues}}
  </div>
</template>

<script>
  export default {
    data: () => ({
      leagues: []
    }),
    fetch() {
      this.$fire.firestore
      .collection("leagues")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const league = doc.data();

            const id = doc.id;

            const data = {
              id,
              sport: league.sport
            };
            
            this.leagues.push(data);
        });
      });
    }
  }
</script>