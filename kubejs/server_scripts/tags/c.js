ServerEvents.tags("item", (event) => {
  event.add("c:dusts", /kubejs:powder.+/);
  event.add("c:ingots/iron", "tfc:metal/ingot/wrought_iron");
});
