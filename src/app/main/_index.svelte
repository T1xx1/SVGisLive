<script>
   import os from './os';

   import Bar from './bar/_index.svelte';
   import Editor from './editor/_index.svelte';

   let svg;

   os.store.subscribe(val => (svg = val));
</script>

<main>
   <Bar on:new={os.new} />
   <Editor {svg} />
</main>

<style lang="scss">
   main {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.2fr 1.8fr;
      grid-auto-flow: row;
   }
</style>
