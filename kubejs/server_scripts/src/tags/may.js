ServerEvents.tags("item", (event) => {
  global.powderList.forEach((powder) => {
    event.add("may:ore_powders", `${powder.mod}:powder/${powder.name}`);
  });
  event.add("may:dirty_dusts", /kubejs:dirty_dust.+/);
  event.add("may:piles", /^kubejs:pile((?!sand).)*$/);
  event.add("may:briquettes", /kubejs:briquette.+/);
  event.add("may:heap/sand", /kubejs:pile\/.+sand/);
  event.add("may:blooms", /kubejs:raw.+bloom/);
  event.add("may:encased_axles", /.fc:wood\/encased_axle\/.+/);
  event.add("may:axles", /.fc:wood\/axle\/.+/);
  event.add("may:ropes", "firmaciv:rope_coil");
  event.add("may:bars", /.+bars.*/);
  event.add("may:spindle", [/kubejs:metal\/spindle\/.+/, "tfc:spindle"]);
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
