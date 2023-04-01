import { writable } from 'svelte/store';

// @ts-expect-error
import def from '../../assets/svg/def.svg?raw';
// @ts-expect-error
import logo from '../../assets/svg/logo.svg?raw';

const os = {
   store: writable(logo),

   new() {
      os.store.update(val => val = def);
   }
};



export default os;