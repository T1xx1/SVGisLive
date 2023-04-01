<script>
   import { createEventDispatcher } from 'svelte';

   import BarBtn from '../../../components/barBtn.svelte';

   import plus from '../../../assets/svg/plus.svg';

   const dispatch = createEventDispatcher();

   let click = () => dispatch('new');
</script>

<BarBtn
   {click}
   icon={plus}
   title="New SVG"
/>
