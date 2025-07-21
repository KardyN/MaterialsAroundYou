ServerEvents.tags("item", (event) => {
  event.add("forge:dusts", /kubejs:powder.+/);
  event.add("tfc:powders", /kubejs:powder.+/);
  event.add("may:dirty_dusts", /kubejs:dirty_dust.+/);
  event.add("may:piles", /^kubejs:pile((?!sand).)*$/);
  event.add("may:briquettes", /kubejs:briquette.+/);
  event.add("may:heap/sand", /kubejs:pile\/.+sand/);
  event.add("may:blooms", /kubejs:raw.+bloom/);
  global.metalToolHeads.forEach((tool) => {
    event.add("tfc:metal_item/osmirite", `kubejs:metal/${tool}/osmirite`);
  });
});
