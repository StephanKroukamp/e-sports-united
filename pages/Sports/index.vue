<template>
  <div class="page-root">
    {{sports}}
  </div>
</template>

<script>
  export default {
    data: () => ({
      sports: []
    }),
    fetch() {
      this.$fire.firestore
      .collection("sports")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const sport = doc.data();

            const id = doc.id;

            const data = {
              id,
              events: sport.events,
              leagues: sport.leagues,
              organizations: sport.organizations
            };
            
            this.sports.push(data);
        });
      });
    }
  }
</script>