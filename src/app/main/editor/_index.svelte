<script>
   import Code from './code/_index.svelte';
   import Out from './out.svelte';
</script>

<div id="editor">
   <Code />
   <Out />
</div>

<style lang="scss">
   div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1fr;
      grid-auto-flow: row;
   }
</style>
