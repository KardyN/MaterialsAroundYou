const oreTypes = [
  {
    id: "native_copper",
    color: "#d88854",
    type: "tfc_ore",
    sand: "pink",
  },
  {
    id: "native_gold",
    color: "#c89d28",
    type: "tfc_ore",
    sand: "yellow",
  },
  {
    id: "hematite",
    color: "#b05e56",
    type: "tfc_ore",
    sand: "pink",
  },
  {
    id: "native_silver",
    color: "#b4b7c4",
    type: "tfc_ore",
    sand: "white",
  },
  {
    id: "cassiterite",
    color: "#6a6655",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "bismuthinite",
    color: "#416f3d",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "garnierite",
    color: "#3c5035",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "malachite",
    color: "#587e79",
    type: "tfc_ore",
    sand: "green",
  },
  {
    id: "magnetite",
    color: "#3b3c3c",
    type: "tfc_ore",
    sand: "black",
  },
  {
    id: "limonite",
    color: "#93714a",
    type: "tfc_ore",
    sand: "yellow",
  },
  {
    id: "sphalerite",
    color: "#a4a3a3",
    type: "tfc_ore",
    sand: "white",
  },
  {
    id: "tetrahedrite",
    color: "#838283",
    type: "tfc_ore",
    sand: "black",
  },
  {
    id: "gypsum",
    color: "#977c62",
    type: "tfc_mineral",
    sand: "brown",
  },
  {
    id: "graphite",
    color: "#3a4249",
    type: "tfc_mineral",
    sand: "black",
  },
  {
    id: "sulfur",
    color: "#aaa552",
    type: "tfc_mineral",
    sand: "yellow",
  },
  {
    id: "cinnabar",
    color: "#ac161d",
    type: "tfc_mineral",
    sand: "red",
  },
  {
    id: "cryolite",
    color: "#909191",
    type: "tfc_mineral",
    sand: "white",
  },
  {
    id: "saltpeter",
    color: "#aaaaa9",
    type: "tfc_mineral",
    sand: "white",
  },
  {
    id: "sylvite",
    color: "#b98761",
    type: "tfc_mineral",
    sand: "yellow",
  },
  {
    id: "borax",
    color: "#a7a8a7",
    type: "tfc_mineral",
    sand: "white",
  },
  {
    id: "bauxite",
    color: "#e77263",
    type: "tfc_ie_ore",
    sand: "pink",
  },
  {
    id: "galena",
    color: "#5f5764",
    type: "tfc_ie_ore",
    sand: "black",
  },
  {
    id: "uraninite",
    color: "#7a9a65",
    type: "tfc_ie_ore",
    sand: "green",
  },
  {
    id: "chromite",
    color: "#ebebe8",
    type: "firmalife_ore",
    sand: "white",
  },
  //black, brown, green, pink, red, white, yellow
  //amethyst, diamond, emerald, lapis_lazuli, opal, pyrite, ruby, sapphire, topaz "gem"
];

const sandTypes = [
  { id: "black", color: "#383838" },
  { id: "brown", color: "#927755" },
  { id: "green", color: "#626c45" },
  { id: "pink", color: "#96706d" },
  { id: "red", color: "#93634f" },
  { id: "white", color: "#c9c9c9" },
  { id: "yellow", color: "#dacea2" },
];

const powderTypes = [
  { id: "chromite", color: "#ebebe8" },
  { id: "gypsum", color: "#977c62" },
  { id: "cryolite", color: "#909191" },
];

StartupEvents.registry("item", (event) => {
  /*****************************************************************************
   * Registering clumps, dusts, sand piles
   ****************************************************************************/
  oreTypes.forEach((item) => {
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

  sandTypes.forEach((item) => {
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

  powderTypes.forEach((item) => {
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
    .create("metal/propick/osmirite", "tfc:propick")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.75)
    .speedBaseline(-2.8)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_pickaxe");

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
    .texture("minecraft:item/netherite_pickaxe");

  event
    .create("metal/hammer/osmirite", "tfc:hammer")
    .tier("osmirite")
    .attackDamageBaselineTFC(1.0)
    .speedBaseline(-3.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_pickaxe");
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
    .texture("minecraft:item/netherite_pickaxe");

  event
    .create("metal/knife/osmirite", "tfc:tool")
    .tier("osmirite")
    .attackDamageBaselineTFC(0.6)
    .speedBaseline(-2.0)
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/netherite_pickaxe")
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
    .texture("minecraft:item/netherite_pickaxe")
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
    .texture("minecraft:item/netherite_pickaxe")
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
    .texture("minecraft:item/netherite_pickaxe");

  event
    .create("metal/fishing_rod/osmirite", "tfc:fishing_rod")
    .tier("osmirite")
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/fishing_rod")
    //.fishinfStrength() //default is tier
    //.castModel(model: string) <----------------------------- TODO
    //auto from kubejs:metal/fishing_rod/osmirite_cast texture
    //.castTexture(t: string);
    .smallBait()
    .largeBait();

  event
    .create("metal/shears/osmirite", "tfc:tool")
    .tier("osmirite")
    .unstackable()
    .rarity("epic")
    .fireResistant(true)
    .texture("minecraft:item/shears")
    .mineableBlocksTag("tfc:mineable_with_sharp_tool");
});
