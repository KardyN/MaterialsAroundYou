ServerEvents.tags("item", (event) => {
  global.powderList.forEach((powder) => {
    event.add("may:ore_powders", `${powder.mod}:powder/${powder.name}`);
  });
  event.add("may:dirty_dusts", /kubejs:dirty_dust.+/);
  event.add("may:piles", /^kubejs:pile((?!sand).)*$/);
  event.add("may:briquettes", /kubejs:briquette.+/);
  event.add("may:heap/sand", /kubejs:pile\/.+sand/);
  event.add("may:blooms", /kubejs:raw.+bloom/);
  event.add("may:encased_axles", /.fc:wood\/encased_axle\/.+/);
  event.add("may:axles", /.fc:wood\/axle\/.+/);
  event.add("may:ropes", "firmaciv:rope_coil");
  event.add("may:bars", /.+bars.*/);
  event.add("may:stripped_log", /.+stripped_log.*/);
  event.add("may:spindle", [/kubejs:metal\/spindle\/.+/, "tfc:spindle"]);
  event.add("may:locometal", [/^railways:.*locometal.*$/]);
  event.add("may:carved_pumpkin", [/^firmalife:carved_pumpkin.*$/]);
  event.add("may:warning_sign", [/^immersiveengineering:warning_sign.*$/]);
  event.add("may:alabaster", [/^tfc:alabaster.*$/]);

  // Makes_X_Dye
  event.add("may:makes_white_dye", [
    "tfc:plant/houstonia",
    "tfc:plant/oxeye_daisy",
    "tfc:plant/primrose",
    "tfc:plant/snapdragon_white",
    "tfc:plant/trillium",
    "tfc:plant/spanish_moss",
    "tfc:plant/tulip_white",
    "tfc:plant/white_water_lily",
    "tfc:plant/lily_of_the_valley",
    "tfc:plant/edelweiss",
    "tfc:plant/beachgrass",
  ]);
  event.add("may:makes_light_gray_dye", [
    "tfc:plant/yucca",
    "tfc:plant/silver_bromeliad",
  ]);
  event.add("may:makes_gray_dye", []);
  event.add("may:makes_black_dye", []);
  event.add("may:makes_brown_dye", [
    "tfc:plant/field_horsetail",
    "tfc:plant/sargassum",
  ]);
  event.add("may:makes_red_dye", [
    "tfc:plant/guzmania",
    "tfc:plant/poppy",
    "tfc:plant/rose",
    "tfc:plant/snapdragon_red",
    "tfc:plant/tropical_milkweed",
    "tfc:plant/tulip_red",
    "tfc:plant/vriesea",
    "tfc:plant/anthurium",
    "tfc:plant/blood_lily",
    "tfc:plant/heliconia",
    "tfc:plant/kangaroo_paw",
    "tfc:plant/tank_bromeliad",
    "tfc:plant/kinnikinnick",
  ]);
  event.add("may:makes_orange_dye", [
    "tfc:plant/butterfly_milkweed",
    "tfc:plant/canna",
    "tfc:plant/nasturtium",
    "tfc:plant/strelitzia",
    "tfc:plant/tulip_orange",
    "tfc:plant/water_canna",
    "tfc:plant/marigold",
    "tfc:plant/flame_vine",
    "tfc:plant/palash",
    "tfc:plant/qantu",
  ]);
  event.add("may:makes_yellow_dye", [
    "tfc:plant/calendula",
    "tfc:plant/dandelion",
    "tfc:plant/meads_milkweed",
    "tfc:plant/goldenrod",
    "tfc:plant/snapdragon_yellow",
    "tfc:plant/desert_flame",
    "tfc:plant/yellow_water_lily",
    "tfc:plant/elegant_sunburst_lichen",
    "tfc:plant/yellow_saxifrage",
    "tfc:plant/buttercup",
    "tfc:plant/sunflower",
  ]);
  event.add("may:makes_lime_dye", ["tfc:plant/moss"]);
  event.add("may:makes_green_dye", [
    "tfc:plant/barrel_cactus",
    "tfc:plant/reindeer_lichen",
    "tfc:plant/silken_pincushion_cactus",
    "tfc:plant/prickly_pear",
    "tfc:plant/prickly_pear_purple",
  ]);
  event.add("may:makes_cyan_dye", []);
  event.add("may:makes_light_blue_dye", [
    "tfc:plant/labrador_tea",
    "tfc:plant/sapphire_tower",
    "tfc:plant/mountain_hullwort",
    "tfc:plant/penwortel",
  ]);
  event.add("may:makes_blue_dye", [
    "tfc:plant/blue_orchid",
    "tfc:plant/grape_hyacinth",
    "tfc:plant/cornflower",
  ]);
  event.add("may:makes_purple_dye", [
    "tfc:plant/allium",
    "tfc:plant/black_orchid",
    "tfc:plant/perovskia",
    "tfc:plant/blue_ginger",
    "tfc:plant/pickerelweed",
    "tfc:plant/heather",
    "tfc:plant/purple_water_lily",
    "tfc:plant/shawiash",
  ]);
  event.add("may:makes_magenta_dye", [
    "tfc:plant/athyrium_fern",
    "tfc:plant/morning_glory",
    "tfc:plant/pulsatilla",
    "tfc:plant/lilac",
    "tfc:plant/silver_spurflower",
    "tfc:plant/azalea",
  ]);
  event.add("may:makes_pink_dye", [
    "tfc:plant/foxglove",
    "tfc:plant/sacred_datura",
    "tfc:plant/tulip_pink",
    "tfc:plant/snapdragon_pink",
    "tfc:plant/hibiscus",
    "tfc:plant/lotus",
    "tfc:plant/maiden_pink",
    "tfc:plant/moss_campion",
    "tfc:plant/ramunda",
  ]);
});
