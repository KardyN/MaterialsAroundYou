ServerEvents.recipes((event) => {
  let recipes = [
    {
      result: { item: "tfc:metal/ingot/wrought_iron" },
      fluid: { ingredient: `kubejs:ore/hematite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 5,
      },
      duration: 15000,
      id: "tfc:bloomery/wrought_iron_hematite",
    },
    {
      result: { item: "tfc:metal/ingot/wrought_iron" },
      fluid: { ingredient: `kubejs:ore/magnetite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 5,
      },
      duration: 15000,
      id: "tfc:bloomery/wrought_iron_magnetite",
    },
    {
      result: { item: "tfc:metal/ingot/wrought_iron" },
      fluid: { ingredient: `kubejs:ore/limonite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 5,
      },
      duration: 15000,
      id: "tfc:bloomery/wrought_iron_limonite",
    },
    {
      result: { item: "tfc:metal/ingot/tin" },
      fluid: { ingredient: `kubejs:ore/cassiterite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 3,
      },
      duration: 6000,
      id: "tfc:bloomery/tin",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:bloomery";
    event.custom(recipe).id(recipe.id);
  });
});
