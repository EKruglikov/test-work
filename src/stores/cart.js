import { defineStore } from 'pinia'
function parseLocalCart () {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}

export const useCartStore = defineStore('Cart', {
  state: () => ({
    cart: []
  }),
  actions: {
    addItem(item) {
      const inCart = this.cart.find((it) => it.id === item.id);
      if(!inCart) {
        item.inCart = true;
        this.cart.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCart();
      }
    },
    removeItem(item) {
      this.cart = this.cart.filter((it) => it.id !== item.id);
      localStorage.setItem('cart', JSON.stringify(this.cart || '[]'));
    },
    updateCart() {
      const localItems = JSON.parse(localStorage.getItem('cart') || '[]');
      this.cart = localItems;
    },
  }
});

