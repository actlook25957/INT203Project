const app = {
    data () {
        return {
            image: "./images/L.jpg",
            firstname : 'Traitawat',
            lastname : "Jitchana",
        

        }
    },
}

var mountedApp = Vue.createApp(app).mount('#app')