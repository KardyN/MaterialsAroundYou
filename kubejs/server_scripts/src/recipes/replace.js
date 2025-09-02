ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: "minecraft:quartz" },
    "minecraft:quartz",
    "#forge:gems/quartz"
  );
  event.replaceInput(
    { input: "minecraft:iron_pickaxe" },
    "minecraft:iron_pickaxe",
    "tfc:metal/pickaxe/wrought_iron"
  );
  event.replaceInput(
    { input: "minecraft:iron_hoe" },
    "minecraft:iron_hoe",
    "tfc:metal/hoe/wrought_iron"
  );
  event.replaceInput(
    { input: "minecraft:iron_sword" },
    "minecraft:iron_sword",
    "tfc:metal/sword/wrought_iron"
  );
  event.replaceInput(
    { input: "minecraft:diamond_pickaxe" },
    "minecraft:diamond_pickaxe",
    "tfc:metal/pickaxe/blue_steel"
  );
  event.replaceInput(
    { input: "minecraft:diamond_axe" },
    "minecraft:diamond_axe",
    "tfc:metal/axe/blue_steel"
  );
  event.replaceInput(
    { input: "minecraft:diamond_shovel" },
    "minecraft:diamond_shovel",
    "tfc:metal/shovel/blue_steel"
  );
  event.replaceInput(
    { input: "minecraft:diamond_sword" },
    "minecraft:diamond_sword",
    "tfc:metal/sword/blue_steel"
  );
  event.replaceInput(
    { input: "minecraft:diamond_leggings" },
    "minecraft:diamond_leggings",
    "tfc:metal/greaves/blue_steel"
  );
  event.replaceInput(
    { input: "minecraft:netherite_helmet" },
    "minecraft:netherite_helmet",
    "tfc:metal/helmet/black_steel"
  );
  event.replaceInput(
    { input: "minecraft:netherite_chestplate" },
    "minecraft:netherite_chestplate",
    "tfc:metal/chestplate/black_steel"
  );
  event.replaceInput(
    { input: "minecraft:netherite_leggings" },
    "minecraft:netherite_leggings",
    "tfc:metal/greaves/black_steel"
  );
  event.replaceInput(
    { input: "minecraft:netherite_boots" },
    "minecraft:netherite_boots",
    "tfc:metal/boots/black_steel"
  );
  event.replaceInput(
    { input: "minecraft:copper_ingot" },
    "minecraft:copper_ingot",
    "tfc:metal/ingot/copper"
  );
});
