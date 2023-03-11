<script>
   import Bar from './bar/_index.svelte';
   import Editor from './editor/_index.svelte';

   // @ts-expect-error
   import logo from '../../assets/svg/logo.svg?raw';

   let svg = logo;
</script>

<main>
   <Bar />
   <Editor {svg} />
</main>

<style lang="scss">
   main {
      display: flex;
      flex-direction: column;
      gap: 10px;

      height: 80%;
   }
</style>
