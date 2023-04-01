<script lang="ts">
   import Footer from './footer/_index.svelte';
   import Header from './header/_index.svelte';
   import Main from './main/_index.svelte';
</script>

<Header />
<Main />
<Footer />

<style lang="scss">
   :global(:root) {
      font-family: Arial, Helvetica, sans-serif;
      height: 100%;
   }

   :global(body) {
      margin: 0 10px;
      height: 100%;
   }

   :global(#app) {
      grid-template-columns: 1fr;
      grid-template-rows: 0.5fr 2.3fr 0.2fr;
      grid-auto-columns: 1fr;
      grid-auto-flow: row;
      height: 100%;
   }
</style>
