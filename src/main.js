import { createApp } from 'vue'
import routes from './routes'
import store from './store'
import App from './App'
import Loading from './components/Loading'

const app = createApp(App)
app.component('Loading',Loading)
app.use(routes)
app.use(store)
app.mount('#app')
