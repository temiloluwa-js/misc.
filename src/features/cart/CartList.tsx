import React, { useRef } from "react";
import Button from "src/components/Button/Button";
import CartItem from "src/components/CartItem/CartItem";
import { useStateContext } from "src/context/count-context";
import { ProductProps } from "src/types/Product";
export default function CartList() {
  const { cartItems, totalPrice } = useStateContext();
  const cartRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex flex-col align-middle w-smallWidth md:w-mediumWidth lg:w-96 h-cartHeight overflow-y-auto "
      ref={cartRef}
    >
      <div>
        {cartItems.map((cartItem: ProductProps) => (
          <CartItem
            name={cartItem.name}
            price={cartItem.price}
            key={cartItem.name}
          />
        ))}
      </div>
        <h1 className="dark:text-slate-100 font-extrabold text-2xl w-fit mx-auto mt-4" >Total Price: ${totalPrice}</h1>
        <Button
          handleClick={() => console.log("sup")}
          className={
            "bg-secondary text-lg w-11/12 m-auto mt-4 mb-2 text-white font-bold py-1 transition-colors duration-300 hover:bg-primary hover:text-black"
          }
          text="Proceed To Checkout"
        />

    </div>
  );
}
