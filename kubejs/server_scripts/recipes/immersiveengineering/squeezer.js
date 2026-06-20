ServerEvents.recipes((event) => {
  let recipes = [
    {
      energy: 19200,
      input: { basePredicate: { item: "tfc:powder/graphite" }, count: 16 },
      result: { tag: "c:dusts/hop_graphite" },
      id: "may:squeezer/dust_hop_graphite/graphite",
    },
    {
      energy: 19200,
      input: { basePredicate: { item: "kubejs:powder/petcoke" }, count: 8 },
      result: { tag: "c:dusts/hop_graphite" },
      id: "may:squeezer/dust_hop_graphite/petcoke",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "immersiveengineering:squeezer";
    event.custom(recipe).id(recipe.id);
  });
});
