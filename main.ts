import { inventory } from "./inventory.ts";
import { type CartItem, submissionHappy } from "./submissions.ts";

// `inventory` is the card catalog (see inventory.ts). Each cart item's
// `variantId` should match a variant on one of those cards; `quantity` is
// how many of that variant to add to the order.
//
// TODO: turn a cart into a useful receipt, and print it below.

const cart: CartItem[] = submissionHappy;

console.log(cart);
