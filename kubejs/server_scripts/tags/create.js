ServerEvents.tags("item", (event) => {
  event.add("create:create_ingots", [
    "tfc:metal/ingot/brass",
    "tfc:metal/ingot/zinc",
  ]);
});
