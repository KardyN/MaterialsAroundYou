ServerEvents.generateData("after_mods", (event) => {
  let knappingTypes = [
    {
      amount_to_consume: 1,
      click_sound: "tfc:item.knapping.stone",
      consume_after_complete: false,
      has_off_texture: false,
      icon: { count: 1, id: "tfc:wood/lumber/acacia" },
      input: { count: 1, tag: "tfc:lumber_knapping" },
      spawns_particles: true,
    },
  ];

  knappingTypes.forEach((type) => {
    event.json("tfc:tfc/knapping_type/lumber.json", type);
  });
});
