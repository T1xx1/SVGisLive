<script>
   import Bar from './bar/_index.svelte';
   import Editor from './editor/_index.svelte';
</script>

<main>
   <Bar />
   <Editor />
</main>

<style lang="scss">
   main {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.2fr 1.8fr;
      grid-auto-flow: row;
   }
</style>
