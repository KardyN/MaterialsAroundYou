//priority: 10
ServerEvents.recipes((event) => {
  const recipes = [
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

    { type: "immersiveengineering:crusher" },
    { type: "immersiveengineering:arc_furnace" },
    { id: "immersiveengineering:cokeoven/coke" },
    { id: "immersiveengineering:cokeoven/coke_block" },
    { id: "tfc_ie_addon:cokeoven/bituminous_coal" },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
