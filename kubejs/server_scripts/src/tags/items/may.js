ServerEvents.tags("item", (event) => {
  event.add("may:dirty_dusts", /kubejs:dirty_dust.+/);
  event.add("may:piles", /^kubejs:pile((?!sand).)*$/);
  event.add("may:briquettes", /kubejs:briquette.+/);
  event.add("may:heap/sand", /kubejs:pile\/.+sand/);
  event.add("may:blooms", /kubejs:raw.+bloom/);
});
