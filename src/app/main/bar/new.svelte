<script>
   import os from '../os';

   import BarBtn from '../../../components/barBtn.svelte';

   import plus from '../../../assets/svg/plus.svg';
</script>

<BarBtn
   click={os.new}
   icon={plus}
   title="New SVG"
/>
