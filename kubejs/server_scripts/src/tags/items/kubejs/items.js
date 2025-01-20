ServerEvents.tags("item", (event) => {
  event.add("forge:dusts", /kubejs:powder.+/);
  event.add("tfc:powders", /kubejs:powder.+/);
  global.metalToolHeads.forEach((tool) => {
    event.add("tfc:metal_item/osmirite", `kubejs:metal/${tool}/osmirite`);
  });
});
