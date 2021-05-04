import Home from './routes/Home.svelte'
import Station from './routes/Station.svelte'

export default [
  { name: '/', component: Home },
  { name: 'station/:station', component: Station },
]
