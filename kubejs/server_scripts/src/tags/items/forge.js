ServerEvents.tags("item", (event) => {
  event.add("forge:dusts", /kubejs:powder.+/);
  event.remove("forge:dusts/sulfur", /.+dust_sulfur/);
  event.remove("forge:gems/quartz", "minecraft:quartz");
});
