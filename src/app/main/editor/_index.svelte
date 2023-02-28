<script lang="ts">
   import Editor from './editor';
   import onkeyup from './onkeyup';

   export let svg;

   let textarea;

   let editor = new Editor();

   setTimeout(() => {
      editor.e = textarea;
   });
</script>

<textarea
   class="block"
   spellcheck="false"
   bind:this={textarea}
   bind:value={svg}
   on:keyup={() => onkeyup(editor)}
/>

<style>
   textarea {
      font-size: 1rem;
      resize: none;
   }
</style>
