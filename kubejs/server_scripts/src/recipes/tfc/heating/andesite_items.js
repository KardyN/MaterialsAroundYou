ServerEvents.recipes((event) => {
  const andesiteAlloyStuff = [
    {
      recipe: {
        type: "tfc:heating",
        ingredient: { item: "create:andesite_alloy" },
        result_fluid: { fluid: "kubejs:metal/bearing_alloy", amount: 100 },
        temperature: 460,
      },
      id: "tfc:heating/metal/bearing_alloy_ingot",
    },
  ];

  andesiteAlloyStuff.forEach((item) => {
    event.custom(item.recipe).id(item.id);
  });
});
