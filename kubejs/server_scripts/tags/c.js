ServerEvents.tags("item", (event) => {
  event.add("c:dusts", /kubejs:powder.+/);
  event.add("c:ingots/iron", "tfc:metal/ingot/wrought_iron");
  event.add("c:ingots", "kubejs:metal/ingot/osmirite");
  event.add("c:ingots/osmirite", "kubejs:metal/ingot/osmirite");
  event.add("c:double_ingots", "kubejs:metal/double_ingot/osmirite");
  event.add("c:double_ingots/osmirite", "kubejs:metal/double_ingot/osmirite");
  event.add("c:sheets", "kubejs:metal/sheet/osmirite");
  event.add("c:sheets/osmirite", "kubejs:metal/sheet/osmirite");
});
