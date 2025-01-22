//priority: 99
StartupEvents.registry("item", (event) => {
  /*****************************************************************************
   * Registering dirty powder, sand piles, powder piles, compacted powders
   ****************************************************************************/
  global.oreList.forEach((ore) => {
    event.create(`dirty_dust/${ore.name}`).textureJson({
      layer0: `kubejs:item/dirty_dust/${ore.name}`,
      layer1: "kubejs:item/dirty_dust/overlay",
    });
    event.create(`pile/${ore.name}`).texture(`kubejs:item/pile/${ore.name}`);
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
  /*****************************************************************************
   * Registering osmirite tools
   ****************************************************************************/
  event
    .create("metal/pickaxe/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.75)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_pickaxe")
    .mineableBlocksTag("minecraft:mineable/pickaxe");

  event
    .create("metal/prospector_pickaxe/osmirite", "tfc:propick")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.75)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/propick/osmirite");

  event
    .create("metal/axe/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaselineTFC(1.5)
    .speedBaseline(-3.1)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_axe")
    .mineableBlocksTag("minecraft:mineable/axe");

  event
    .create("metal/shovel/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.875)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_shovel")
    .mineableBlocksTag("minecraft:mineable/shovel");

  event
    .create("metal/hoe/osmirite", "tfc:hoe")
    .tier("osmirite")
    .attackDamageBaseline(-1) // not calculateVanillaAttackDamage
    .speedBaseline(-2)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_hoe");

  event
    .create("metal/chisel/osmirite", "tfc:chisel")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.27)
    .speedBaseline(-1.5)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/chisel/osmirite");

  event
    .create("metal/hammer/osmirite", "tfc:hammer")
    .tier("osmirite")
    .attackDamageBaselineTFC(1.0)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/hammer/osmirite");
  //.metalTexture(texture: string); <-------------------------------------- TODO
  //auto hammer texture it is

  event
    .create("metal/saw/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.5)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/saw/osmirite");

  event
    .create("metal/knife/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.6)
    .speedBaseline(-2.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/knife/osmirite")
    .knife()
    .mineableBlocksTag("tfc:mineable_with_knife")
    .mineableBlocksTag("tfc:mineable_with_sharp_tool");

  event
    .create("metal/scythe/osmirite", "tfc:scythe")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.7)
    .speedBaseline(-3.2)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/scythe/osmirite")
    .mineableBlocksTag("tfc:mineable_with_scythe")
    .mineableBlocksTag("tfc:mineable_with_sharp_tool");

  event
    .create("metal/javelin/osmirite", "tfc:javelin")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.7)
    .speedBaseline(-2.6)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/javelin/osmirite")
    .thrownDamage(17);
  //.skeletonWeapon()
  // .throwingModel(m: string)
  //.modelAtPerspective(
  //   perspective: ItemDisplayContext,
  //   model: string
  //)
  //.guiModel(m: string)

  event
    .create("metal/sword/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaselineTFC(1.0)
    .speedBaseline(-2.4)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_sword");

  event
    .create("metal/mace/osmirite", "tfc:mace")
    .tier("osmirite")
    .attackDamageBaselineTFC(1.3)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/mace/osmirite");

  event
    .create("metal/fishing_rod/osmirite", "tfc:fishing_rod")
    .tier("osmirite")
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/fishing_rod/osmirite")
    //.fishinfStrength() //default is tier
    //.castModel(model: string) <------------------------------------------ TODO
    //auto from kubejs:metal/fishing_rod/osmirite_cast
    //.castTexture(t: string);
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
    .create("metal/prospector_hammer/osmirite", "precpros:hammer")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.6)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/prospector_hammer/osmirite");

  event
    .create("metal/prospector_drill/osmirite", "precpros:drill")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.6)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/prospector_drill/osmirite");

  event
    .create("metal/mineral_prospector/osmirite", "precpros:mineral")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.3)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("kubejs:item/metal/mineral_prospector/osmirite");

  global.metalToolHeads.forEach((item) => {
    event
      .create(`metal/${item}/osmirite`)
      .unstackable()
      .rarity("epic")
      .fireResistant(true)
      .texture(`kubejs:item/metal/${item}/osmirite`);
  });
});
