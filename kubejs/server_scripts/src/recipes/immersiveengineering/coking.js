ServerEvents.recipes((event) => {
  let recipes = [
    {
      creosote: 500,
      input: {
        item: "tfc:ore/lignite",
      },
      result: {
        item: "immersiveengineering:coal_coke",
      },
      time: 1800,
      id: "may:coke_oven/lignite_to_coke",
    },
    {
      creosote: 500,
      input: {
        item: "tfc:ore/bituminous_coal",
      },
      result: {
        item: "immersiveengineering:coal_coke",
      },
      time: 1800,
      id: "may:coke_oven/bituminous_coal_to_coke",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:coke_oven";
    event.custom(recipe).id(recipe.id);
  });
});
