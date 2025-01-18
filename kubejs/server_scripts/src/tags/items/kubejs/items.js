ServerEvents.tags("item", (event) => {
  event.add("mekanism:clumps", /kubejs:clump.+/);
  event.add("mekanism:dirty_dusts", /kubejs:dirty_dust.+/);
  event.add("forge:dusts", /kubejs:dust.+/);
  event.add("tfc:powders", /kubejs:powder.+/);
  global.metalToolHeads.forEach((tool) => {
    event.add("tfc:metal_item/osmirite", `kubejs:metal/${tool}/osmirite`);
  });
});
