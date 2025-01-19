//priority: 99
StartupEvents.registry("item", (event) => {
  /*****************************************************************************
   * Registering clumps, dusts, sand piles
   ****************************************************************************/
  global.oreTypes.forEach((item) => {
    event
      .create("clump_" + item.id)
      .tooltip("Try grinding it!")
      .color(0, item.color)
      .color(1, "#222222")
      .textureJson({
        layer0: "mekanism:item/clump",
        layer1: "mekanism:item/clump_overlay",
      });
    event
      .create("dirty_dust_" + item.id)
      .tooltip("Try washing it!")
      .color(0, item.color)
      .color(1, "#222222")
      .textureJson({
        layer0: "mekanism:item/dirty_dust",
        layer1: "mekanism:item/dirty_dust_overlay",
      });
    event
      .create("dust_" + item.id)
      .tooltip("Try melting it!")
      .color(item.color)
      .texture("mekanism:item/dust");
  });

  global.sandTypes.forEach((item) => {
    event
      .create("powder_sand_" + item.id)
      .color(item.color)
      .texture("tfc:item/powder/salt");
  });

  event
    .create("dust_silver")
    .color(0, "#f0f0ff")
    .color(1, "#f0f0f0")
    .textureJson({
      layer0: "mekanism:item/dust_tin",
      layer1: "mekanism:item/dirty_dust_overlay",
    });

  global.powderTypes.forEach((item) => {
    event
      .create("powder_" + item.id)
      .color(item.color)
      .texture(
        item.id == "chromite"
          ? "tfc:item/powder/native_silver"
          : "tfc:item/powder/salt"
      );
  });

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
    .attackDamageBaseline(-1) // NOT calculateVanillaAttackDamage
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
  //.metalTexture(texture: string); <----------------------- TODO
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
    .mineableBlocksTag("tfc:mineable_with_sharp_tool"); //default value

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
  //.modelAtPerspective(perspective: ItemDisplayContext, model: string)
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
    //.castModel(model: string) <----------------------------- TODO
    //auto from kubejs:metal/fishing_rod/osmirite_cast texture
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

  //NYI
  //const metalItems = ["ingot", "double_ingot", "sheet", "double_sheet"];

  global.metalToolHeads.forEach((item) => {
    event
      .create(`metal/${item}/osmirite`)
      .unstackable()
      .rarity("epic")
      .fireResistant(true)
      .texture(`kubejs:item/metal/${item}/osmirite`); // <--------------- TODO
  });
});
