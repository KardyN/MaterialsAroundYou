ServerEvents.recipes((event) => {
  let recipes = [
    {
      result: { item: "tfc:raw_iron_bloom" },
      fluid: { ingredient: `kubejs:metal/hematite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 5,
      },
      duration: 15000,
      id: "may:bloomery/wrought_iron_hematite",
    },
    {
      result: { item: "tfc:raw_iron_bloom" },
      fluid: { ingredient: `kubejs:metal/magnetite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 5,
      },
      duration: 15000,
      id: "may:bloomery/wrought_iron_magnetite",
    },
    {
      result: { item: "tfc:raw_iron_bloom" },
      fluid: { ingredient: `kubejs:metal/limonite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 5,
      },
      duration: 15000,
      id: "may:bloomery/wrought_iron_limonite",
    },
    {
      result: { item: "kubejs:raw_tin_bloom" },
      fluid: { ingredient: `kubejs:metal/cassiterite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 3,
      },
      duration: 4000,
      id: "may:bloomery/tin",
    },
    {
      result: { item: "kubejs:raw_copper_bloom" },
      fluid: { ingredient: `kubejs:metal/malachite`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 3,
      },
      duration: 8000,
      id: "may:bloomery/copper",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:bloomery";
    event.custom(recipe).id(recipe.id);
  });
});
