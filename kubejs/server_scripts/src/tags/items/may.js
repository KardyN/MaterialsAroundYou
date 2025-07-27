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
});
