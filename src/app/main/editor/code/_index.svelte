<script lang="ts">
   import os from '../../os';
   import Editor from './editor';

   let editor = new Editor();
   let svg;

   os.store.subscribe(val => (svg = val));
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
