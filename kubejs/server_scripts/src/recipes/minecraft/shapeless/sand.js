ServerEvents.recipes((event) => {
  global.sandColors.forEach((color) => {
    event.shapeless(`tfc:sand/${color}`, [`4x kubejs:pile/${color}_sand`]);
  });
});
