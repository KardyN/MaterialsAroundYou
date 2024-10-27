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
ServerEvents.recipes((event) => {
  oreTypes.forEach((item) => {
    switch (item.type) {
      case "tfc_ore":
        event
          .shapeless("1x kubejs:clump_" + item.id, [
            "tfc:ore/small_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "tfc:ore/poor_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x kubejs:clump_" + item.id, [
            "tfc:ore/normal_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x kubejs:clump_" + item.id, [
            "tfc:ore/rich_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);

        break;
      case "tfc_ie_ore":
        event
          .shapeless("1x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/small_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/poor_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/normal_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x kubejs:clump_" + item.id, [
            "tfc_ie_addon:ore/rich_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
      case "firmalife_ore":
        event
          .shapeless("1x kubejs:clump_" + item.id, [
            "firmalife:ore/small_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "firmalife:ore/poor_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("3x kubejs:clump_" + item.id, [
            "firmalife:ore/normal_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        event
          .shapeless("5x kubejs:clump_" + item.id, [
            "firmalife:ore/rich_" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
      case "tfc_mineral":
        event
          .shapeless("2x kubejs:clump_" + item.id, [
            "tfc:ore/" + item.id,
            "#tfc:hammers",
          ])
          .damageIngredient("#tfc:hammers", 1);
        break;
    }
  });
});
