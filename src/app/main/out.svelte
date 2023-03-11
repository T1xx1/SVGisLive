<script lang="ts">
   import '../../assets/styles/global.scss';

   export let svg;
</script>

<div class="block">{@html svg}</div>

<style lang="scss">
   div {
      align-items: center;
      display: flex;
      justify-content: center;
      
      border: 1px solid;
      height: 50%;

      > :global(svg) {
         border: 1px solid;
      }
   }
</style>
