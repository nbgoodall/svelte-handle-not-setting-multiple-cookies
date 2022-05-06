<script>
  import { onMount } from 'svelte'

  let cookies = []

  onMount(() => cookies = document.cookie.split(';'))
</script>

<ul>
  <h1>Cookies</h1>
  {#each cookies as cookie}
    <li>{ cookie }</li>
  {/each}
</ul>
