<script>
   import Code from './code/_index.svelte';
   import Out from './out.svelte';

   export let svg;
</script>

<div id="editor">
   <Code bind:svg />
   <Out {svg} />
</div>

<style lang="scss">
   div {
      display: flex;
      gap: 10px;

      @media (max-width: 1000px) {
         flex-direction: column;
      }
   }
</style>
