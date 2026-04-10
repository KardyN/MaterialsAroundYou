ServerEvents.tags("item", (event) => {
  const removeAllItemTags = [
    /^minecraft:.+((log)|(wood)|(stem)|(hyphae))$/,
    /^minecraft:((wooden)|(stone)|(chainmail)|(iron)|(golden)|(diamond)|(netherite))_((shovel)|(pickaxe)|(axe)|(hoe)|(sword)|(helmet)|(chestplate)|(leggings)|(boots))$/,
    /^ad_astra:.+((log)|(wood)|(stem)|(hyphae))$/,
    "create:brass_ingot",
    "createaddition:electrum_ingot",
    "immersiveengineering:ingot_steel",
    "ad_astra:steel_ingot",
    "mekanism:ingot_steel",
    "minecraft:gold_ingot",
    "minecraft:copper_ingot",
    "create:zinc_ingot",
    "immersivegeology:ingot_zinc",
    "immersivegeology:ingot_bronze",
    "immersivegeology:ingot_tin",
    "immersiveengineering:ingot_silver",
    "immersiveengineering:ingot_nickel",
    "immersivegeology:ingot_chromium",
    "immersivegeology:ingot_osmium",
    "immersivegeology:ingot_stainless_steel",
    "immersivegeology:ingot_lignite",
    "mekanism:ingot_bronze",
    "mekanism:ingot_tin",
    "immersiveengineering:ingot_lead",
    "immersiveengineering:ingot_uranium",
    "minecraft:iron_ingot",
    "immersiveengineering:stick_iron",
    "immersiveengineering:stick_steel",
    "immersiveengineering:stick_aluminum",
  ];

  removeAllItemTags.forEach((item) => {
    event.removeAllTagsFrom(item);
  });
});
