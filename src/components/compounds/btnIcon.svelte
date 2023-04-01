<script>
   import Icon from '../icon.svelte';

   export let icon;
</script>

<button type="button">
   <Icon src={icon} />
</button>

<style lang="scss">
   button {
      background-color: transparent;
      border: none;
      margin: 0;
      padding: 0;
      height: 30px;
      width: 30px;
   }
</style>
