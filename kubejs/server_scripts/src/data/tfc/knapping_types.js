ServerEvents.highPriorityData((event) => {
  let knappingTypes = [
    {
      input: { ingredient: { tag: "tfc:lumber" }, count: 4 },
      amount_to_consume: 4,
      click_sound: "farmersdelight:block.cutting_board.knife",
      consume_after_complete: false,
      use_disabled_texture: false,
      spawns_particles: true,
      jei_icon_item: { item: "tfc:wood/lumber/acacia" },
    },
  ];

  knappingTypes.forEach((type) => {
    event.addJson("tfc:tfc/knapping_types/lumber.json", type);
  });
});
