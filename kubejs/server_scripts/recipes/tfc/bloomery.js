ServerEvents.recipes((event) => {
  let recipes = [
    {
      result: { id: "tfc:raw_iron_bloom" },
      fluid: { fluid: `kubejs:metal/hematite`, amount: 100 },
      catalyst: {
        item: "tfc:powder/charcoal",
        count: 5,
      },
      duration: 15000,
      id: "may:bloomery/wrought_iron_hematite",
    },
    {
      result: { id: "tfc:raw_iron_bloom" },
      fluid: { fluid: `kubejs:metal/magnetite`, amount: 100 },
      catalyst: {
        item: "tfc:powder/charcoal",
        count: 5,
      },
      duration: 15000,
      id: "may:bloomery/wrought_iron_magnetite",
    },
    {
      result: { id: "tfc:raw_iron_bloom" },
      fluid: { fluid: `kubejs:metal/limonite`, amount: 100 },
      catalyst: {
        item: "tfc:powder/charcoal",
        count: 5,
      },
      duration: 15000,
      id: "may:bloomery/wrought_iron_limonite",
    },
    {
      result: { id: "kubejs:raw_tin_bloom" },
      fluid: { fluid: `kubejs:metal/cassiterite`, amount: 100 },
      catalyst: {
        item: "tfc:powder/charcoal",
        count: 3,
      },
      duration: 4000,
      id: "may:bloomery/tin",
    },
    {
      result: { id: "kubejs:raw_copper_bloom" },
      fluid: { fluid: `kubejs:metal/malachite`, amount: 100 },
      catalyst: {
        item: "tfc:powder/charcoal",
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
