export const state = () => (
{
  snapshot: null,
  sports: null,
});

export const getters = 
{
  getSnapshot: state => state.snapshot,
  getSports: state => state.sports,
};

export const mutations = 
{
  setSnapshot: (state, payload) => state.snapshot = payload,
  setSports: (state, payload) => state.sports = payload
};

export const actions = 
{
  fetchSports({ commit }) 
  {
    return new Promise((resolve, reject) => 
    {
      try 
      {
        const snapshot = this.$fire.firestore.collection('sports').onSnapshot(snaps => 
        {
          var xxx = snaps.docs.map(function (doc) {
            const data = doc.data()
            
            data.id = doc.id;
            
            return data;
          });
          
          commit('setSports', xxx);
        }, err => console.log('sport/fetchSports err:', err));

        commit('setSnapshot', snapshot); // as jy wil unsubscribe van die snapshot listener later, sodat jy nie meer product updates ontvang nie (bv on logout) kan jy getters.snapshot() call
       
        return resolve();
      } 
      catch (err) 
      {
        console.log('sport/fetchSports err:', err);
        
        return reject(err);
      }
    });
  }
};