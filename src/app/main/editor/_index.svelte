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

<style>
   textarea {
      font-size: 1rem;
      height: 50%;
      resize: none;
   }
</style>
