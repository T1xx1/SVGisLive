<script>
   import Editor from './editor/_index.svelte';
   import Out from './out.svelte';

   // @ts-ignore
   import def from '../../assets/svg/def.svg?raw';
   // @ts-ignore
   import logo from '../../assets/svg/logo.svg?raw';

   let svg = logo;
</script>

<main>
   <Editor bind:svg />
   <Out {svg} />
</main>

<style lang="scss">
   main {
      display: flex;
      gap: 10px;
      height: 82.2vh;

      @media (max-width: 1000px) {
         flex-direction: column;
      }
   }
</style>
