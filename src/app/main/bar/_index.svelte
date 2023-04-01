<script lang="ts">
   import New from './new.svelte';
</script>

<div id="bar">
   <New on:new />
</div>

<style lang="scss">
   div {
      align-items: center;
      display: flex;

      background-color: #ffb13b;
      border-radius: 5px;
      height: 50px;
      padding: 0 5px;
   }
</style>
