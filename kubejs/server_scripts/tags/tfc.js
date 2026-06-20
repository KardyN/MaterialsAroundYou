ServerEvents.tags("item", (event) => {
  event.removeAll("tfc:blast_furnace_fuel");
  event.add("tfc:blast_furnace_fuel", "immersiveengineering:coal_coke");
  event.add("tfc:powders", /kubejs:powder.+/);
  global.metalToolHeads.forEach((tool) => {
    event.add("tfc:metal_item/osmirite", `kubejs:metal/${tool}/osmirite`);
  });
  event.removeAllTagsFrom(/tfc:stone\/hammer\/.+/);
  event.add("tfc:lumber", /.+treated_wood_lumber/);
  event.add("tfc:lumber_knapping", /.*lumber.*/);
  event.add("tfc:any_knapping", /.*lumber.*/);
  event.remove("tfc:axles", /afc:wood\/encased_axle\/.+/);
  event.add("tfc:usable_on_tool_rack", /kubejs:.+spindle.+/);
  event.add("tfc:pileable_ingots", [
    "mekanism:ingot_osmium",
    "mekanism:ingot_lead",
    "mekanism:ingot_uranium",
  ]);
  event.add("tfc:metal_item/lead", "mekanism:ingot_lead");
  event.add("tfc:metal_item/uranium", "mekanism:ingot_uranium");
});

ServerEvents.tags("block", (event) => {
  event.add("tfc:forge_invisible_whitelist", "create:basin");
});

ServerEvents.tags("fluid", (event) => {
  event.add("tfc:mixable", ["kubejs:boiled_water"]);
  event.add("tfc:hydrating", ["kubejs:boiled_water"]);
  event.add("tfc:usable_in_pot", ["kubejs:boiled_water"]);
  event.add("tfc:usable_in_jug", ["kubejs:boiled_water"]);
  event.add("tfc:usable_in_wooden_bucket", ["kubejs:boiled_water"]);
  event.add("tfc:usable_in_red_steel_bucket", ["kubejs:boiled_water"]);
  event.add("tfc:usable_in_blue_steel_bucket", ["kubejs:boiled_water"]);
  event.add("tfc:usable_in_barrel", ["kubejs:boiled_water"]);
  event.add("tfc:drinkables", ["kubejs:boiled_water"]);
  event.add("tfc:drinkables", ["kubejs:boiled_water"]);
  event.add("tfc:drinkables", ["kubejs:boiled_water"]);
});
