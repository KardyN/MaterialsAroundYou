//priority: 99
StartupEvents.registry("item", (event) => {
  /*****************************************************************************
   * Registering ore related stuff and all powders
   ****************************************************************************/

  global.oreList.forEach((ore) => {
    event
      .create(`dirty_dust/${ore.name}`)
      .texture("layer0", `kubejs:item/dirty_dust/${ore.name}`)
      .texture("layer1", "kubejs:item/dirty_dust/overlay");
    ore.name != "cinnabar" &&
      event.create(`pile/${ore.name}`).texture(`kubejs:item/pile/${ore.name}`);
    ore.name != "cinnabar" &&
      event
        .create(`briquette/${ore.name}`)
        .texture(`kubejs:item/briquette/${ore.name}`);
  });

  global.sandColors.forEach((color) => {
    event
      .create(`pile/${color}_sand`)
      .texture(`kubejs:item/pile/${color}_sand`);
  });

  event.create("powder/chromite").texture("kubejs:item/powder/chromite");
  event.create("powder/cryolite").texture("kubejs:item/powder/cryolite");
  event.create("powder/petcoke").texture("kubejs:item/powder/petcoke");
  event.create("powder/cinnabar").texture("kubejs:item/powder/cinnabar");

  event
    .create("ore/small_erlichmanite")
    .texture("kubejs:item/ore/small_erlichmanite");
  event
    .create("ore/poor_erlichmanite")
    .texture("kubejs:item/ore/poor_erlichmanite");
  event
    .create("ore/normal_erlichmanite")
    .texture("kubejs:item/ore/normal_erlichmanite");
  event
    .create("ore/rich_erlichmanite")
    .texture("kubejs:item/ore/rich_erlichmanite");

  event.create("raw_tin_bloom").texture("kubejs:item/blooms/tin/unrefined");
  event
    .create("raw_copper_bloom")
    .texture("kubejs:item/blooms/copper/unrefined");

  /*****************************************************************************
   * Registering misc stuff
   ****************************************************************************/

  event.create("wooden_gear").texture("kubejs:item/wooden_gear");
  event.create("large_wooden_gear").texture("kubejs:item/large_wooden_gear");

  event.create("small_clean_hide").texture("kubejs:item/hide/small/clean");
  event.create("medium_clean_hide").texture("kubejs:item/hide/medium/clean");
  event.create("large_clean_hide").texture("kubejs:item/hide/large/clean");
  event.create("small_tanned_hide").texture("kubejs:item/hide/small/tanned");
  event.create("medium_tanned_hide").texture("kubejs:item/hide/medium/tanned");
  event.create("large_tanned_hide").texture("kubejs:item/hide/large/tanned");
  event
    .create("small_waterproof_hide")
    .texture("kubejs:item/hide/small/waterproof");
  event
    .create("medium_waterproof_hide")
    .texture("kubejs:item/hide/medium/waterproof");
  event
    .create("large_waterproof_hide")
    .texture("kubejs:item/hide/large/waterproof");

  event
    .create("metal/spindle_head/copper")
    .texture("kubejs:item/metal/spindle_head/copper")
    .unstackable();
  event
    .create("metal/spindle_head/bronze")
    .texture("kubejs:item/metal/spindle_head/bronze")
    .unstackable();
  event
    .create("metal/spindle_head/wrought_iron")
    .texture("kubejs:item/metal/spindle_head/wrought_iron")
    .unstackable();
  event
    .create("metal/spindle/copper")
    .texture("kubejs:item/metal/spindle/copper")
    .unstackable()
    .maxDamage(600);
  event
    .create("metal/spindle/bronze")
    .texture("kubejs:item/metal/spindle/bronze")
    .unstackable()
    .maxDamage(1300);
  event
    .create("metal/spindle/wrought_iron")
    .texture("kubejs:item/metal/spindle/wrought_iron")
    .unstackable()
    .maxDamage(2200);
  event
    .create("kubejs:metal/ingot/osmirite")
    .rarity("epic")
    .texture("minecraft:item/netherite_ingot");
  event
    .create("kubejs:metal/double_ingot/osmirite")
    .rarity("epic")
    .texture("kubejs:item/metal/double_ingot/osmirite");
  event
    .create("kubejs:metal/sheet/osmirite")
    .rarity("epic")
    .texture("kubejs:item/metal/sheet/osmirite");
  event.create("kubejs:vacuum_tube_logic_board");
  event.create("kubejs:small_motor");
  event.create("kubejs:metal/double_sheet/electrum");
  event.create("kubejs:metal/double_sheet/constantan");
  event.create("kubejs:metal/double_sheet/aluminum");
  event.create("kubejs:metal/double_sheet/lead");
  event.create("kubejs:metal/double_sheet/uranium");
  event.create("kubejs:metal/rod/electrum");
  event.create("kubejs:metal/rod/constantan");
  event.create("kubejs:metal/rod/aluminum");
  event.create("kubejs:metal/rod/lead");
  event.create("kubejs:metal/rod/uranium");

  /*****************************************************************************
   * Registering osmirite tools
   ****************************************************************************/

  event
    .create("kubejs:metal/tuyere/osmirite", "tfc:tool")
    .tier("osmirite")
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/tuyere/osmirite");

  event
    .create("metal/pickaxe/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaseline(0.75)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/pickaxe/osmirite")
    .mineableBlocksTag("minecraft:mineable/pickaxe");

  event
    .create("metal/propick/osmirite", "tfc:propick")
    .tier("osmirite")
    .attackDamageBaseline(0.75)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/propick/osmirite")
    .level(5);

  event
    .create("metal/axe/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaseline(1.5)
    .speedBaseline(-3.1)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/axe/osmirite")
    .mineableBlocksTag("minecraft:mineable/axe");

  event
    .create("metal/shovel/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaseline(0.875)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/shovel/osmirite")
    .mineableBlocksTag("minecraft:mineable/shovel");

  event
    .create("metal/hoe/osmirite", "tfc:hoe")
    .tier("osmirite")
    .attackDamageBaseline(-1)
    .speedBaseline(-2)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/hoe/osmirite");

  event
    .create("metal/chisel/osmirite", "tfc:chisel")
    .tier("osmirite")
    .attackDamageBaseline(0.27)
    .speedBaseline(-1.5)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/chisel/osmirite");

  event
    .create("metal/hammer/osmirite", "tfc:hammer")
    .tier("osmirite")
    .attackDamageBaseline(1.0)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/hammer/osmirite")
    .tripHammerTexture("minecraft:netherite_block");

  event
    .create("metal/saw/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaseline(0.5)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/saw/osmirite");

  event
    .create("metal/knife/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaseline(0.6)
    .speedBaseline(-2.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/knife/osmirite")
    .knife()
    .mineableBlocksTag("tfc:mineable_with_sharp_tool");

  event
    .create("metal/scythe/osmirite", "tfc:scythe")
    .tier("osmirite")
    .attackDamageBaseline(0.7)
    .speedBaseline(-3.2)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/scythe/osmirite");

  event
    .create("metal/javelin/osmirite", "tfc:javelin")
    .tier("osmirite")
    .attackDamageBaseline(0.7)
    .speedBaseline(-2.6)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/javelin/osmirite")
    .thrownDamage(17);

  event
    .create("metal/sword/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaseline(1.0)
    .speedBaseline(-2.4)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/sword/osmirite")
    .mineableBlocksTag("tfc:mineable_with_sharp_tool");

  event
    .create("metal/mace/osmirite", "tfc:mace")
    .tier("osmirite")
    .attackDamageBaseline(1.3)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/mace/osmirite");

  event
    .create("metal/fishing_rod/osmirite", "tfc:fishing_rod")
    .fishingStrength(2.25)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/fishing_rod/osmirite")
    .fishingStrength(2)
    .smallBait()
    .largeBait();

  event
    .create("metal/shears/osmirite", "shears")
    .maxDamage(10000)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/shears/osmirite");

  event
    .create(
      "metal/prospector_hammer/osmirite",
      "precisionprospecting:prospector"
    )
    .builtinType("pros_hammer")
    .tier("osmirite")
    .attackDamageBaseline(0.6)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/prospector_hammer/osmirite")
    .level(5);

  event
    .create(
      "metal/prospector_drill/osmirite",
      "precisionprospecting:prospector"
    )
    .builtinType("pros_drill")
    .tier("osmirite")
    .attackDamageBaseline(0.6)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/prospector_drill/osmirite")
    .level(5);

  event
    .create(
      "metal/mineral_prospector/osmirite",
      "precisionprospecting:prospector"
    )
    .builtinType("min_pros")
    .tier("osmirite")
    .attackDamageBaseline(0.3)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/mineral_prospector/osmirite")
    .level(5);

  global.metalToolHeads.forEach((item) => {
    event
      .create(`metal/${item}/osmirite`)
      .unstackable()
      .rarity("epic")
      .fireResistant(true)
      .texture(`kubejs:item/metal/${item}/osmirite`);
  });

  /*****************************************************************************
   * Registering composite tools
   ****************************************************************************/

  event
    .create("kubejs:metal/tuyere/composite", "tfc:tool")
    .tier("composite")
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/tuyere/composite");

  event
    .create("metal/pickaxe/composite", "tfc:tool")
    .tier("composite")
    .attackDamageBaseline(0.75)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/pickaxe/composite")
    .mineableBlocksTag("minecraft:mineable/pickaxe");

  event
    .create("metal/propick/composite", "tfc:propick")
    .tier("composite")
    .attackDamageBaseline(0.75)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/propick/composite")
    .level(5);

  event
    .create("metal/axe/composite", "tfc:tool")
    .tier("composite")
    .attackDamageBaseline(1.5)
    .speedBaseline(-3.1)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/axe/composite")
    .mineableBlocksTag("minecraft:mineable/axe");

  event
    .create("metal/shovel/composite", "tfc:tool")
    .tier("composite")
    .attackDamageBaseline(0.875)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/shovel/composite")
    .mineableBlocksTag("minecraft:mineable/shovel");

  event
    .create("metal/hoe/composite", "tfc:hoe")
    .tier("composite")
    .attackDamageBaseline(-1)
    .speedBaseline(-2)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/hoe/composite");

  event
    .create("metal/chisel/composite", "tfc:chisel")
    .tier("composite")
    .attackDamageBaseline(0.27)
    .speedBaseline(-1.5)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/chisel/composite");

  event
    .create("metal/hammer/composite", "tfc:hammer")
    .tier("composite")
    .attackDamageBaseline(1.0)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/hammer/composite")
    .tripHammerTexture("minecraft:netherite_block");

  event
    .create("metal/saw/composite", "tfc:tool")
    .tier("composite")
    .attackDamageBaseline(0.5)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/saw/composite");

  event
    .create("metal/knife/composite", "tfc:tool")
    .tier("composite")
    .attackDamageBaseline(0.6)
    .speedBaseline(-2.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/knife/composite")
    .knife()
    .mineableBlocksTag("tfc:mineable_with_sharp_tool");

  event
    .create("metal/scythe/composite", "tfc:scythe")
    .tier("composite")
    .attackDamageBaseline(0.7)
    .speedBaseline(-3.2)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/scythe/composite");

  event
    .create("metal/javelin/composite", "tfc:javelin")
    .tier("composite")
    .attackDamageBaseline(0.7)
    .speedBaseline(-2.6)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/javelin/composite")
    .thrownDamage(17);

  event
    .create("metal/sword/composite", "tfc:tool")
    .tier("composite")
    .attackDamageBaseline(1.0)
    .speedBaseline(-2.4)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/sword/composite")
    .mineableBlocksTag("tfc:mineable_with_sharp_tool");

  event
    .create("metal/mace/composite", "tfc:mace")
    .tier("composite")
    .attackDamageBaseline(1.3)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/mace/composite");

  event
    .create("metal/fishing_rod/composite", "tfc:fishing_rod")
    .fishingStrength(2.25)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/fishing_rod/composite")
    .fishingStrength(2)
    .smallBait()
    .largeBait();

  event
    .create("metal/shears/composite", "shears")
    .maxDamage(10000)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/shears/composite");

  event
    .create(
      "metal/prospector_hammer/composite",
      "precisionprospecting:prospector"
    )
    .builtinType("pros_hammer")
    .tier("composite")
    .attackDamageBaseline(0.6)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/prospector_hammer/composite")
    .level(5);

  event
    .create(
      "metal/prospector_drill/composite",
      "precisionprospecting:prospector"
    )
    .builtinType("pros_drill")
    .tier("composite")
    .attackDamageBaseline(0.6)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/prospector_drill/composite")
    .level(5);

  event
    .create(
      "metal/mineral_prospector/composite",
      "precisionprospecting:prospector"
    )
    .builtinType("min_pros")
    .tier("composite")
    .attackDamageBaseline(0.3)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/mineral_prospector/composite")
    .level(5);

  global.metalToolHeads.forEach((item) => {
    event
      .create(`metal/${item}/composite`)
      .unstackable()
      .rarity("epic")
      .fireResistant(true)
      .texture(`kubejs:item/metal/${item}/composite`);
  });
});
