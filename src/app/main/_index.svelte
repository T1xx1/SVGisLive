<script>
   import Bar from './bar/_index.svelte';
   import Editor from './editor/_index.svelte';
   import Out from './out.svelte';

   // @ts-ignore
   import def from '../../assets/svg/def.svg?raw';
   // @ts-ignore
   import logo from '../../assets/svg/logo.svg?raw';

   let svg = logo;
</script>

<main>
   <Bar />
   <Editor bind:svg />
   <Out {svg} />
</main>

<style lang="scss">
   main {
      display: flex;
      flex-direction: column;
      gap: 10px;

      height: 80%;
   }
</style>
