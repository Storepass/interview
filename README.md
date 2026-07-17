# project

A small coding exercise: given a card inventory and a cart, produce a useful
receipt.

Start from `main.ts` — it has a sample cart already wired up so you can run
it and see where things stand as you go.

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

- `main.ts` — start here.
- `inventory.ts` — card catalog with variant IDs and prices.
- `submissions.ts` — sample cart data.
