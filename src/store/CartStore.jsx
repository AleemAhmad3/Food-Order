import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find((i) => i._id === item._id);
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };
    }),
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item._id !== itemId),
    })),
  updateQuantity: (itemId, quantity) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () =>
    set(() => ({
      cartItems: [],
    })),
}));

export default useCartStore;
