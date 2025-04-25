import CartProducts from "@/components/modules/cart/CartProducts";

import ProductBanner from "@/components/modules/products/banner";
import NMContainer from "@/components/ui/core/NMContainer";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";

const CartPage = () => {
  return (
    <NMContainer>
      <ProductBanner title="Cart Page" path="Home - Cart" />
      <div className="grid grid-cols-12 gap-8 my-5">
        <CartProducts />

        <PaymentDetails />
      </div>
    </NMContainer>
  );
};

export default CartPage;
