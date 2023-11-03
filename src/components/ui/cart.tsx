import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";
import CartItem from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/product";

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="flex flex-col gap-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.365rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      <div className="flex h-full flex-col gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="text-center font-semibold">
            Carrinho vazio. Vamos fazer compras?
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
