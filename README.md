# project

A small take-home exercise: implement `generateReceipt` in `main.ts` so it
turns an `inventory` (see `inventory.ts`) and a `cart` (see `submissions.ts`)
into a useful receipt string.

`main.ts` prints the receipt for a sample cart so you can check your work
locally as you go. Swap in the other carts from `submissions.ts` (see the
commented-out lines near the bottom of `main.ts`) to try different inputs.

## Running it

Use whichever JS runtime you have installed — no build step, no dependencies
required.

**Bun**

```bash
bun install   # optional, only needed for editor type-checking
bun main.ts
```

**Node** (v22.6+, run with `--experimental-strip-types` on Node < 23.6)

```bash
node main.ts
```

**Deno**

```bash
deno run main.ts
```

## Files

- `main.ts` — entry point; implement `generateReceipt` here.
- `inventory.ts` — card catalog with variant IDs and prices.
- `submissions.ts` — the three test carts your implementation is run against.
