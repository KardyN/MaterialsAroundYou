ServerEvents.recipes((event) => {
  let recipes = [
    {
      additives: [
        { base_ingredient: { item: "tfc:powder/charcoal" }, count: 3 },
        { base_ingredient: { item: "tfc:powder/flux" }, count: 2 },
      ],
      energy: 204800,
      input: {
        item: "kubejs:briquette/garnierite",
      },
      results: [
        {
          item: "tfc:metal/ingot/weak_blue_steel",
        },
      ],
      slag: { item: "immersiveengineering:slag" },
      time: 400,
      id: "immersiveengineering:arc_furnace/arc_garnierite_briquette_to_ferronickel_ingot",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:arc_furnace";
    event.custom(recipe).id(recipe.id);
  });
});
