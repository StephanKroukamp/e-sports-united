export default ({ app, store }, inject) => {
    inject('notifier', {
        showMessage({ content = '', color = '', timeout = 1000 }) {
            store.commit('snackbar/showMessage', { content, color, timeout })
        }
    })
}