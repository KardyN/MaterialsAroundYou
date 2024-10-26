const oreTypes = [
    {
        id: "native_copper",
        color: "#d88854",
        type: "tfc_ore",
        colour: "pink",
        gem: "",
        secondary: "",
    },
    {
        id: "native_gold",
        color: "#c89d28",
        type: "tfc_ore",
        colour: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "hematite",
        color: "#b05e56",
        type: "tfc_ore",
        colour: "pink",
        gem: "",
        secondary: "",
    },
    {
        id: "native_silver",
        color: "#b4b7c4",
        type: "tfc_ore",
        colour: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "cassiterite",
        color: "#6a6655",
        type: "tfc_ore",
        colour: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "bismuthinite",
        color: "#416f3d",
        type: "tfc_ore",
        colour: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "garnierite",
        color: "#3c5035",
        type: "tfc_ore",
        colour: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "malachite",
        color: "#587e79",
        type: "tfc_ore",
        colour: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "magnetite",
        color: "#3b3c3c",
        type: "tfc_ore",
        colour: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "limonite",
        color: "#93714a",
        type: "tfc_ore",
        colour: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "sphalerite",
        color: "#a4a3a3",
        type: "tfc_ore",
        colour: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "tetrahedrite",
        color: "#838283",
        type: "tfc_ore",
        colour: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "gypsum",
        color: "#977c62",
        type: "tfc_mineral",
        colour: "brown",
        gem: "",
        secondary: "",
    },
    {
        id: "graphite",
        color: "#3a4249",
        type: "tfc_mineral",
        colour: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "sulfur",
        color: "#aaa552",
        type: "tfc_mineral",
        colour: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "cinnabar",
        color: "#ac161d",
        type: "tfc_mineral",
        colour: "red",
        gem: "",
        secondary: "",
    },
    {
        id: "cryolite",
        color: "#909191",
        type: "tfc_mineral",
        colour: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "saltpeter",
        color: "#aaaaa9",
        type: "tfc_mineral",
        colour: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "sylvite",
        color: "#b98761",
        type: "tfc_mineral",
        colour: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "borax",
        color: "#a7a8a7",
        type: "tfc_mineral",
        colour: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "bauxite",
        color: "#e77263",
        type: "tfc_ie_ore",
        colour: "pink",
        gem: "",
        secondary: "",
    },
    {
        id: "galena",
        color: "#5f5764",
        type: "tfc_ie_ore",
        colour: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "uraninite",
        color: "#7a9a65",
        type: "tfc_ie_ore",
        colour: "green",
        gem: "",
        secondary: "",
    },
    //black, brown, green, pink, red, white, yellow
    //amethyst, diamond, emerald, lapis_lazuli, opal, pyrite, ruby, sapphire, topaz "gem"
];

ServerEvents.recipes((event) => {
    oreTypes.forEach((item) => {
        switch (item.type) {
            case "tfc_ore":
                //TEST THIS
                event.recipes.tfc.extra_products_shapeless_crafting(
                    ["tfc:rock/loose/andesite"],
                    recipes
                        .shapeless("1x kubejs:clump_" + item.id, [
                            "tfc:ore/small_" + item.id,
                            "#tfc:hammers",
                        ])
                        .damageIngredient("#tfc:hammers", 1)
                );
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
                    .damageIngredient("#tfc:hammers", 2);
                event
                    .shapeless("3x kubejs:clump_" + item.id, [
                        "tfc:ore/normal_" + item.id,
                        "#tfc:hammers",
                    ])
                    .damageIngredient("#tfc:hammers", 3);
                event
                    .shapeless("5x kubejs:clump_" + item.id, [
                        "tfc:ore/rich_" + item.id,
                        "#tfc:hammers",
                    ])
                    .damageIngredient("#tfc:hammers", 5);
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
                    .damageIngredient("#tfc:hammers", 2);
                event
                    .shapeless("3x kubejs:clump_" + item.id, [
                        "tfc_ie_addon:ore/normal_" + item.id,
                        "#tfc:hammers",
                    ])
                    .damageIngredient("#tfc:hammers", 3);
                event
                    .shapeless("5x kubejs:clump_" + item.id, [
                        "tfc_ie_addon:ore/rich_" + item.id,
                        "#tfc:hammers",
                    ])
                    .damageIngredient("#tfc:hammers", 5);
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
