<script lang="ts">
   import Editor from './editor';

   export let svg;

   let editor = new Editor();
</script>

<textarea
   id="code"
   spellcheck="false"
   bind:this={editor.e}
   bind:value={svg}
   on:keyup={editor.formatter}
/>

<style lang="scss">
   textarea {
      font-size: 1rem;
      resize: none;
   }
</style>
