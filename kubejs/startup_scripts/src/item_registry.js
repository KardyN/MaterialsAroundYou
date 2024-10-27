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
});
