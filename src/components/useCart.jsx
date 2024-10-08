import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      products: [],
      cart: [],
      isLoading: false,
      hasErrors: false,
      addProductToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
      // removeProductFromCart: (state) => delete state.cart[index],
      clearCart: () => set({ cart: [] }),
      fetchProducts: async (url) => {
        set(() => ({ loading: true }));
        try {
          const response = await fetch(
            "https://v2.api.noroff.dev/online-shop/"
          );
          const json = await response.json();
          const results = json.data;
          console.log(results);
          set((state) => ({
            products: (state.products = results),
            isLoading: false,
          }));
        } catch (error) {
          set(() => ({ hasErrors: true, isLoading: false }));
        }
      },
    }),
    {
      name: "cart",
    }
  )
);

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  // const removeProductFromCart = useCartStore((state) => state.removeProductFromCart);
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const isLoading = useCartStore((state) => state.isLoading);
  const hasErrors = useCartStore((state) => state.hasErrors);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  function addToCart(product) {
    addProductToCart(product);
  }

  function clearTheCart() {
    clearCart();
    window.localStorage.clear();
  }

  function findTotal() {
    const prices = cart.map((cart) => cart.discountedPrice);

    return prices.reduce((a, b) => a + b, 0).toFixed(2);
  }

  return {
    products,
    cart,
    isLoading,
    hasErrors,
    addToCart,
    clearTheCart,
    fetchProducts,
    findTotal,
  };
}

export { useCart };
