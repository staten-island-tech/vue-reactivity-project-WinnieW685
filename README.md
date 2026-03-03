# Vue Reactivity Project Feedback
**Student:** Winnie W

This is a flower shop app with plant listings, a login component, and an add-to-cart flow — a solid structure with good reactive thinking, but there are a few bugs preventing the cart from working.

## Vite CLI – Mastery
`package.json` correctly includes `vite` and `vue` with proper scripts.

## Iteration in Vue – Mastery
`v-for="plant in plants"` with `:key="plant.title"` in `MainPage.vue` — correct structure with a unique key.

## Data Binding – Approaching
`plants` is correctly declared as `ref([...])`. However, `bought` (the cart array) has a bug: inside the `addToCart` function, `bought.push(...)` is used instead of `bought.value.push(...)`. In `<script setup>`, you must always access a ref's value through `.value`:

```js
// Current (broken — won't update reactively):
bought.push(plant)

// Fix:
bought.value.push(plant)
```

## Click Methods – Approaching
`addToCart` is connected with `@click="addToCart(plant)"` — correct wiring. But the function has two bugs:

1. `bought.push(...)` → should be `bought.value.push(...)`
2. `console.log(boughtPlants)` → `boughtPlants` doesn't exist; it should be `bought.value` or just `bought`

```js
function addToCart(plant) {
  bought.value.push(plant)
  console.log(bought.value)  // fixed
}
```

The `login` function in `UserCreate.vue` works correctly — great job there.

## Reactive UI – Approaching
The flower cards render correctly from reactive data. The login/greeting in `UserCreate.vue` updates reactively when the user logs in — nice. However, `bought` never updates due to the `.value` bug above, and the cart is never rendered in the template, so users can't see what they've added.

## Semantic HTML – Approaching
`<h1>`, `<h2>`, `<h3>`, and `<button>` are used appropriately. The card grid uses a `<div class="container">` wrapper — this works, but `<ul>/<li>` would be more semantic for a list of products. Also, **`MainPageCart.vue` references `plant.name`** but the data object uses `plant.title` — this will render as `undefined`:

```html
<!-- Broken — data has 'title', not 'name': -->
{{ plant.name }}

<!-- Fix: -->
{{ plant.title }}
```

## BEM CSS – Approaching
`.container` and `.card` classes are defined in the style block. These are close but not BEM — true BEM would be `flower-shop__container` and `flower-shop__card`. Add the block prefix and use modifiers:
- `flower-shop__card--featured`
- `flower-shop__button--add`

## Bonus – Aesthetics – Approaching
Flexbox layout and card borders give a clean structure. Images aren't loading (check the image paths). Adding colors, hover effects, and a visible cart count would add a lot of polish.

## Summary of Critical Fixes
1. **Fix `bought.push(plant)` → `bought.value.push(plant)`** in `MainPage.vue` — this is breaking the cart.
2. **Fix `console.log(boughtPlants)` → `console.log(bought.value)`** — `boughtPlants` is undefined.
3. **Fix `plant.name` → `plant.title`** in `MainPageCart.vue` — your data uses `title`, not `name`.
4. **Render the `bought` array in the template** — show the cart so users can see it update.
