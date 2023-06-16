import { defineStore } from 'pinia'
import {cardItems} from "../modules/data";

export const useProductsStore = defineStore('Products', {
    state: () => ({
        items: cardItems
    }),
    actions: {
        search(title) {
            this.items = cardItems.filter((item) => item.title.match(new RegExp(title, 'gi')));
        }
    }
});

