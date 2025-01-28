ServerEvents.tags("item", (event) => {
  event.removeAll("tfc:blast_furnace_fuel");
  event.add("tfc:blast_furnace_fuel", "immersiveengineering:coal_coke");

  event.add("tfc:blooms", ["kubejs:raw_tin_bloom", "kubejs:refined_tin_bloom"]);
});
