<script lang="ts">
   import Editor from './editor';

   export let svg;

   let editor = new Editor();
</script>

<textarea
   class="block"
   spellcheck="false"
   bind:this={editor.e}
   bind:value={svg}
   on:keyup={editor.formatter}
/>
<style lang="scss">
   div {
      display: flex;
      gap: 10px;

      @media (max-width: 1000px) {
         flex-direction: column;
      }
   }
</style>
