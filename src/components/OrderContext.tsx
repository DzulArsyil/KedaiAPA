import { createContext, useContext } from "react";
import type { Product } from "../data/business";

export type OrderKind = "order" | "catering" | "general" | "hours" | "directions";

export interface OrderIntent {
  kind: OrderKind;
  product?: Product;
}

/** Satu callback global untuk membuka dialog pemesanan WhatsApp. */
export const OrderContext = createContext<(intent: OrderIntent) => void>(() => undefined);

export function useOrder() {
  return useContext(OrderContext);
}
