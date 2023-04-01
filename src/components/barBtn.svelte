<script lang="ts">
   import BtnIcon from './compounds/btnIcon.svelte';
   import ToggleIcon from './compounds/toggleIcon.svelte';

   export let click;
   export let icon;
   export let title;
   export let type = 'btn';
</script>

<div {title} on:click={click}>
   {#if type === 'btn'}
      <BtnIcon {icon} />
   {:else if type === 'toggle'}
      <ToggleIcon {icon} />
   {/if}
</div>

<style lang="scss">
   div {
      align-items: center;
      display: flex;
      justify-content: center;

      height: 30px;
      width: fit-content;

      border-radius: 5px;
      cursor: pointer;
      padding: 5px;

      &:hover {
         background-color: #fff;
      }

      &:has(input:checked) {
         background-color: #fff;
      }
   }
</style>
