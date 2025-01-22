ServerEvents.recipes((event) => {
  global.powderList.forEach((powder) => {
    event.shapeless(`4x ${powder.mod}:powder/${powder.name}`, [
      `kubejs:pile/${powder.name}`,
    ]);
  });
});
