<script>
  import { onMount, onDestroy } from 'svelte';

  export let currentRoute
  
  import stations from '../stations.js'

  let params = currentRoute.namedParams
  let stationURL = stations[params.station]

  let audioElement

  onMount(() => {
    audioElement.play()
  })

  onDestroy(() => {
    audioElement.src = ''
    console.log('on destroy')
  })
</script>

<svelte:head>
  <title>{params.station}</title>
</svelte:head>

<main>
  <audio bind:this={audioElement} controls autoplay src={stationURL}>
    <track kind='captions' />
  </audio>
</main>
