<script>
   import Icon from '../icon.svelte';

   export let icon;
</script>

<label>
   <input type="checkbox" />
   <Icon src={icon} />
</label>

<style lang="scss">
   label {
      display: flex;
   }
</style>
