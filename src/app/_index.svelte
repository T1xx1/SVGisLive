<script lang="ts">
   import Main from './main/_index.svelte';
   import Title from './title.svelte';
</script>

<Title />
<Main />

<style lang="scss">
   :global(.block) {
      height: 100%;
      width: clamp(500px, 50%, 50%);

      @media (max-width: 1000px) {
         height: 500px;
         width: 99%;
      }
   }
</style>
