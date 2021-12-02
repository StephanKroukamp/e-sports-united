<template>
  <div class="page-root">
    {{events}}
  </div>
</template>

<script>
  export default {
    data: () => ({
      events: []
    }),
    fetch() {
      this.$fire.firestore
      .collection("events")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
            const event = doc.data();

            const id = doc.id;

            const data = {
              id,
              sport: event.sport
            };
            
            this.events.push(data);
        });
      });
    }
  }
</script>