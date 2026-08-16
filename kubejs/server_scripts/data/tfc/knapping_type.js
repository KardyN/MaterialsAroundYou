ServerEvents.generateData("after_mods", (event) => {
  let knappingTypes = [
    {
      amount_to_consume: 2,
      click_sound: "minecraft:block.wood.break",
      consume_after_complete: false,
      has_off_texture: false,
      icon: { count: 1, id: "tfc:wood/lumber/ash" },
      input: { count: 2, tag: "tfc:lumber_knapping" },
      spawns_particles: true,
    },
  ];

  knappingTypes.forEach((type) => {
    event.json("tfc:tfc/knapping_type/lumber.json", type);
  });
});
