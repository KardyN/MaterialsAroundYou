ServerEvents.recipes((event) => {
  oreTypesSluicing.forEach((item) => {
    event.shapeless("kubejs:dust_" + item.id, [""]);
  });
});
