import { readable, writable, get} from 'svelte/store';
export const minPrice = writable(0);
export const maxPrice = writable(2000000);
get(minPrice);
get(maxPrice);

export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

