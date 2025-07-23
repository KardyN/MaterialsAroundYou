ServerEvents.tags("item", (event) => {
  event.removeAll("tfc:blast_furnace_fuel");
  event.add("tfc:blast_furnace_fuel", "immersiveengineering:coal_coke");
  event.add("tfc:powders", /kubejs:powder.+/);
  global.metalToolHeads.forEach((tool) => {
    event.add("tfc:metal_item/osmirite", `kubejs:metal/${tool}/osmirite`);
  });
  event.removeAllTagsFrom(/tfc:stone\/hammer\/.+/);
  event.add("tfc:blooms", ["kubejs:raw_tin_bloom", "kubejs:refined_tin_bloom"]);
  event.remove("tfc:blooms", /kubejs:.+bloom/);
  event.remove("tfc:axles", /tfc:wood\/encased_axle\/.+/);
  event.add("tfc:encased_axles", /tfc:wood\/encased_axle\/.+/);
  event.add("tfc:lumber", /.+treated_wood_lumber/);
  event.add("tfc:lumber_knapping", /.*lumber.*/);
  event.add("tfc:any_knapping", /.*lumber.*/);
});
