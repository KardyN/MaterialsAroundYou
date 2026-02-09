ServerEvents.tags("item", (event) => {
  event.add("forge:dusts", /kubejs:powder.+/);
  event.add("forge:material/zinc", "tfc:metal/ingot/zinc");
  event.add("forge:material/bronze", "tfc:metal/ingot/bronze");
  event.add("forge:material/tin", "tfc:metal/ingot/tin");
  event.add("forge:material/chromium", "tfc:metal/ingot/chromium");
  event.add("forge:material/osmium", "tfc:metal/ingot/osmium");
  event.add(
    "forge:material/stainless_steel",
    "tfc:metal/ingot/stainless_steel"
  );
  event.remove("forge:dusts/sulfur", /.+dust_sulfur/);
  event.remove("forge:gems/quartz", "minecraft:quartz");
  event.add("forge:ingots/iron", "tfc:metal/ingot/wrought_iron");
});
