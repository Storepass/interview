export interface CartItem {
  variantId: number | null;
  quantity: number;
}

// Three test carts the candidate's receipt function should handle.

// Happy path — all valid variant IDs and quantities
export const submissionHappy = [
  { variantId: 39429563678917, quantity: 2 },
  { variantId: 44583880556741, quantity: 1 },
  { variantId: 44407736074437, quantity: 3 },
];

// Multiple variants from the same card (different conditions)
export const submissionDupe = [
  { variantId: 39429563678917, quantity: 2 },
  { variantId: 39429564039365, quantity: 1 },
  { variantId: 39429564432581, quantity: 1 },
  { variantId: 41660300132549, quantity: 2 },
];

// Bad data — invalid IDs, negative/zero quantities, missing fields
export const submissionBad: CartItem[] = [
  { variantId: 39429563678917, quantity: 2 },
  { variantId: 99999999999999, quantity: 1 },
  { variantId: 44583880556741, quantity: -3 },
  { variantId: 41660300230853, quantity: 0 },
  { variantId: null, quantity: 1 },
  { quantity: 2 },
];
