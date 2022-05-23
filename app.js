const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            bookList: [
                { title: 'name of the wind', author: 'patrick rothfuss' },
                { title: 'the way of kinds', author: 'brandon sanderson' },
                { title: 'the final empire', author: 'brandon sanderson' }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

    }
})

app.mount('#app')