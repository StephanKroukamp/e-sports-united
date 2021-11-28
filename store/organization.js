export const state = () => (
{
  snapshot: null,
  organizations: null,
});

export const getters = 
{
  getSnapshot: state => state.snapshot,
  getOrganizations: state => state.organizations,
};

export const mutations = 
{
  setSnapshot: (state, payload) => state.snapshot = payload,
  setOrganizations: (state, payload) => state.organizations = payload,
};

export const actions = 
{
  fetchOrganizations({ commit }) 
  {
    return new Promise((resolve, reject) => 
    {
      try 
      {
        const snapshot = this.$fire.firestore.collection('organizations').onSnapshot(snaps => 
        {
          commit('setOrganizations', snaps.docs.map(v => ({ id: v.id, ...v.data() })));
        }, err => console.log('organization/fetchOrganizations err:', err));

        commit('setSnapshot', snapshot); // as jy wil unsubscribe van die snapshot listener later, sodat jy nie meer product updates ontvang nie (bv on logout) kan jy getters.snapshot() call
       
        return resolve();
      } 
      catch (err) 
      {
        console.log('organization/fetchOrganizations err:', err);
        
        return reject(err);
      }
    });
  }
};