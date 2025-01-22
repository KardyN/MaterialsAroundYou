ServerEvents.recipes((event) => {
  event.custom({
    type: "tfc:bloomery",
    result: { item: "tfc:metal/ingot/tin" },
    fluid: { ingredient: "kubejs:metal/cassiterite", amount: 100 },
    catalyst: {
      ingredient: { item: "tfc:powder/charcoal" },
      count: 3,
    },
    duration: 6000,
  });
});
