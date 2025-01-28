//priority: 10
ServerEvents.recipes((event) => {
  const recipes = [
    //minecraft
    { id: "minecraft:charcoal" },
    //tfc & addons
    { id: /_cut$/ },
    { id: /heating\/ore/ },
    { id: /quern\/.+_.+$/ },
    { id: "tfc:quern/amethyst" },
    { id: "tfc:quern/diamond" },
    { id: "tfc:quern/emerald" },
    { id: "tfc:quern/lapis_lazuli" },
    { id: "tfc:quern/opal" },
    { id: "tfc:quern/pyrite" },
    { id: "tfc:quern/ruby" },
    { id: "tfc:quern/sapphire" },
    { id: "tfc:quern/topaz" },
    { id: "tfc:quern/cryolite" },
    { type: "tfc:bloomery" },
    { type: "tfc:alloy" },
    { id: /tfc:crafting\/stone\/shovel\/.+/ },
    { id: /tfc:crafting\/stone\/hammer\/.+/ },
    { id: /tfc:rock_knapping\/shovel\/.+/ },
    { id: /tfc:rock_knapping\/hammer\/.+/ },
    { id: /tfc:casting\/weak.+/ },
    { id: /tfc:casting\/high_carbon_.+steel/ },
    { id: /tfc:welding\/high_carbon.+/ },
    { id: /tfc:crafting\/wood\/.+axle/ },
    { id: /tfc:crafting\/wood\/.+support/ },
    { id: /tfc:crafting\/wood\/.+clutch/ },
    { id: /tfc:crafting\/wood\/.+gear_box/ },
    { id: "tfc:wattle" },
    //immersive & addons
    { type: "immersiveengineering:crusher" },
    { type: "immersiveengineering:arc_furnace" },
    { id: "immersiveengineering:cokeoven/coke" },
    { id: "immersiveengineering:cokeoven/coke_block" },
    { id: "tfc_ie_addon:cokeoven/lignite" },
    { id: "immersiveengineering:crafting/coke_to_coal_coke" },
    { id: "immersiveengineering:crafting/coal_coke_to_coke" },
    { id: "immersiveengineering:crafting/fluorescent_tube" },
    { id: /immersiveengineering:crafting\/.*nugget.*/ },
    //create & addons
    { id: "create:crafting/kinetics/andesite_door" },
    { id: "firmalife:crafting/ashtray" },
    { id: /create:.+\/andesite_alloy.*/ },
    //mekanism & addons
    { id: "mekanism:charcoal" },
    { id: "mekanism:storage_blocks/charcoal" },
    //farmer's delight &addons
    { id: /farmersdelight:cutting\/.+wood/ },
    { id: /farmersdelight:cutting\/.+log/ },
    { id: /farmersdelight:cutting\/.+sign/ },
    { id: /farmersdelight:cutting\/.+door/ },
    { id: /farmersdelight:cutting\/.+stem/ },
    { id: /farmersdelight:cutting\/.+hyphae/ },
    { id: /farmersdelight:cutting\/.+block/ },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
