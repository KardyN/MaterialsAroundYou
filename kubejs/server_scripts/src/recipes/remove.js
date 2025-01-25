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
    { type: "tfc:bloomery" },
    { type: "tfc:alloy" },
    //immersive & addons
    { type: "immersiveengineering:crusher" },
    { type: "immersiveengineering:arc_furnace" },
    { id: "immersiveengineering:cokeoven/coke" },
    { id: "immersiveengineering:cokeoven/coke_block" },
    { id: "tfc_ie_addon:cokeoven/lignite" },
    { id: "immersiveengineering:crafting/coke_to_coal_coke" },
    { id: "immersiveengineering:crafting/coal_coke_to_coke" },
    { id: "immersiveengineering:crafting/fluorescent_tube" },
    //create & addons
    { id: "create:crafting/kinetics/andesite_door" },
    { id: "firmalife:crafting/ashtray" },
    //mekanism & addons
    { id: "mekanism:charcoal" },
    { id: "mekanism:storage_blocks/charcoal" },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
