<script>
   import Editor from './editor.svelte';
   import Out from './out.svelte';

   var svg = '<svg xmlns="http://www.w3.org/2000/svg" height="500" width="500"><circle cx="50" cy="50" r="20" /></svg>';
</script>

<main>
   <Editor bind:svg />
   <Out {svg} />
</main>

<style lang="scss">
   main {
      display: flex;
      gap: 10px;
      height: 89vh;

      @media (max-width: 1000px) {
         flex-direction: column;
      }
   }
</style>
