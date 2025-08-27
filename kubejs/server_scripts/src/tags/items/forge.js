ServerEvents.tags("item", (event) => {
  event.add("forge:dusts", /kubejs:powder.+/);
  event.add("forge:hot_ingots", /tfc:metal.+/);
  event.remove("forge:dusts/sulfur", /.+dust_sulfur/);
  event.remove("forge:gems/quartz", "minecraft:quartz");
});
