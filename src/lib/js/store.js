import { writable } from "svelte/store";
export let hide_menu = writable(false);
export let show_menu = writable(true);

export let hide_logo = writable(false);
export let scroll_y = writable(0);
