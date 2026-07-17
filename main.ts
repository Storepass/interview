import { type Card, inventory } from "./inventory.ts";
import {
  type CartItem,
  submissionBad,
  submissionDupe,
  submissionHappy,
} from "./submissions.ts";

function generateReceipt(inventory: Card[], cart: CartItem[]): string {
  // TODO: Implement generateReceipt such that it returns useful information
  return "Hello, world!";
}

const cart: CartItem[] = submissionHappy;
// const cart: CartItem[] = submissionDupe;
// const cart: CartItem[] = submissionBad;

console.log(generateReceipt(inventory, cart));