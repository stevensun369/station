<script>

  export let currentRoute

  import stations from '../stations.js'

</script>

{#each Object.keys(stations) as station}
  <a href={`/station/${station}`}>{station}</a> <br>
{/each}

