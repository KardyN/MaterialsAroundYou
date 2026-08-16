//priority: 9

ServerEvents.tags("item", (event) => {
  const removeAllItemTags = [
    /^minecraft:.+((log)|(wood)|(stem)|(hyphae))$/,
    /^minecraft:((wooden)|(stone)|(chainmail)|(iron)|(golden)|(diamond)|(netherite))_((shovel)|(pickaxe)|(axe)|(hoe)|(sword)|(helmet)|(chestplate)|(leggings)|(boots))$/,
    "create:brass_ingot",
    "createaddition:electrum_ingot",
    "immersiveengineering:ingot_steel",
    // "mekanism:ingot_steel",
    "minecraft:gold_ingot",
    "minecraft:copper_ingot",
    "create:zinc_ingot",
    "immersiveengineering:ingot_silver",
    "immersiveengineering:ingot_nickel",
    "mekanism:ingot_bronze",
    "mekanism:ingot_tin",
    "mekanism:ingot_steel",
    "immersiveengineering:ingot_lead",
    "immersiveengineering:ingot_uranium",
    "minecraft:iron_ingot",
    "immersiveengineering:stick_iron",
    "immersiveengineering:stick_steel",
    "immersiveengineering:stick_aluminum",
    "minecraft:grass_block",
    "minecraft:podzol",
    "minecraft:mycelium",
    "minecraft:dirt_path",
    "minecraft:dirt",
    "minecraft:coarse_dirt",
    "minecraft:rooted_dirt",
    "minecraft:farmland",
    /^createaddition:.+_rod$/,
    "immersiveengineering:stick_netherite",
  ];

  removeAllItemTags.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});

ServerEvents.tags("block", (event) => {
  const removeAllBlockTags = [
    /^minecraft:.*ore.*$/,
    "minecraft:ancient_debris",
    /^mekanism:.*ore.*$/,
    /^create:.*ore.*$/,
    /^immersiveengineering:.*ore.*$/,
  ];

  removeAllBlockTags.forEach((block) => {
    event.removeAllTagsFrom(block);
  });
});
