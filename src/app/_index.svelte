<script lang="ts">
   import Editor from './editor.svelte';
   import Out from './out.svelte';

   var svg = '<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><circle cx="50" cy="50" r="20" /></svg>';
</script>

<h1>SVGisLive</h1>
<main>
   <Editor bind:svg />
   <Out {svg} />
</main>
