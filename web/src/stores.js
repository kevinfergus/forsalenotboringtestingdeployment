import { readable, writable, get} from 'svelte/store';
export const minPrice = writable(0);
export const maxPrice = writable(2000000);
get(minPrice);
get(maxPrice);

