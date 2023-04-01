<script lang="ts">
   import os from '../os';


   let svg;

   os.store.subscribe(val => (svg = val));
</script>

<div id="out">{@html svg}</div>

<style lang="scss">
   div {
      align-items: center;
      display: flex;
      justify-content: center;

      border: 1px solid;

      > :global(svg) {
         border: 1px solid;
      }
   }
</style>
