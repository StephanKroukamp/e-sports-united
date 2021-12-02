<template>
  <div class="page-root">
    {{organizations}}
  </div>
</template>

<script>
  export default {
    data: () => ({
      organizations: []
    }),
    fetch() {
      this.$fire.firestore
      .collection("organizations")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const organization = doc.data();

            const id = doc.id;

            const data = {
              id,
              players: organization.players
            };
            
            this.organizations.push(data);
        });
      });
    }
  }
</script>