ServerEvents.recipes((event) => {
  global.powderList.forEach((powder) => {
    event.shapeless(`kubejs:pile/${powder.name}`, [
      `4x ${powder.mod}:powder/${powder.name}`,
    ]);
    event
      .shapeless(`5x kubejs:pile/${powder.name}`, [
        `kubejs:briquette/${powder.name}`,
        "#tfc:hammers",
      ])
      .damageIngredient("#tfc:hammers", 1);
  });
});
