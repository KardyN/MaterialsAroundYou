ServerEvents.recipes((event) => {
  const ironOreTypes = ["hematite", "magnetite", "limonite"];
  ironOreTypes.forEach((oreType) => {
    event.custom({
      type: "tfc:bloomery",
      result: { item: "tfc:metal/ingot/wrought_iron" },
      fluid: { ingredient: `kubejs:ore/${oreType}`, amount: 100 },
      catalyst: {
        ingredient: { item: "tfc:powder/charcoal" },
        count: 5,
      },
      duration: 15000,
    });
  });
});
