const oreTypes = [
    {
        id: "native_copper",
        color: "#d88854",
        type: "tfc_ore",
        sand: "pink",
        gem: "",
        secondary: "",
    },
    {
        id: "native_gold",
        color: "#c89d28",
        type: "tfc_ore",
        sand: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "hematite",
        color: "#b05e56",
        type: "tfc_ore",
        sand: "pink",
        gem: "",
        secondary: "",
    },
    {
        id: "native_silver",
        color: "#b4b7c4",
        type: "tfc_ore",
        sand: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "cassiterite",
        color: "#6a6655",
        type: "tfc_ore",
        sand: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "bismuthinite",
        color: "#416f3d",
        type: "tfc_ore",
        sand: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "garnierite",
        color: "#3c5035",
        type: "tfc_ore",
        sand: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "malachite",
        color: "#587e79",
        type: "tfc_ore",
        sand: "green",
        gem: "",
        secondary: "",
    },
    {
        id: "magnetite",
        color: "#3b3c3c",
        type: "tfc_ore",
        sand: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "limonite",
        color: "#93714a",
        type: "tfc_ore",
        sand: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "sphalerite",
        color: "#a4a3a3",
        type: "tfc_ore",
        sand: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "tetrahedrite",
        color: "#838283",
        type: "tfc_ore",
        sand: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "gypsum",
        color: "#977c62",
        type: "tfc_mineral",
        sand: "brown",
        gem: "",
        secondary: "",
    },
    {
        id: "graphite",
        color: "#3a4249",
        type: "tfc_mineral",
        sand: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "sulfur",
        color: "#aaa552",
        type: "tfc_mineral",
        sand: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "cinnabar",
        color: "#ac161d",
        type: "tfc_mineral",
        sand: "red",
        gem: "",
        secondary: "",
    },
    {
        id: "cryolite",
        color: "#909191",
        type: "tfc_mineral",
        sand: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "saltpeter",
        color: "#aaaaa9",
        type: "tfc_mineral",
        sand: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "sylvite",
        color: "#b98761",
        type: "tfc_mineral",
        sand: "yellow",
        gem: "",
        secondary: "",
    },
    {
        id: "borax",
        color: "#a7a8a7",
        type: "tfc_mineral",
        sand: "white",
        gem: "",
        secondary: "",
    },
    {
        id: "bauxite",
        color: "#e77263",
        type: "tfc_ie_ore",
        sand: "pink",
        gem: "",
        secondary: "",
    },
    {
        id: "galena",
        color: "#5f5764",
        type: "tfc_ie_ore",
        sand: "black",
        gem: "",
        secondary: "",
    },
    {
        id: "uraninite",
        color: "#7a9a65",
        type: "tfc_ie_ore",
        sand: "green",
        gem: "",
        secondary: "",
    },
    //black, brown, green, pink, red, white, yellow
    //amethyst, diamond, emerald, lapis_lazuli, opal, pyrite, ruby, sapphire, topaz "gem"
];

ServerEvents.genericLootTables((event) => {
    oreTypes.forEach((item) => {
        event.addJson("kubejs:dirty_dust_" + item.id, {
            type: "minecraft:empty",
            pools: [
                {
                    name: "loot_pool",
                    rolls: 1,
                    entries: [
                        {
                            type: "minecraft:alternatives",
                            children: [
                                {
                                    type: "minecraft:item",
                                    name: "kubejs:dust/" + item.id,
                                    conditions: [
                                        {
                                            condition:
                                                "minecraft:random_chance",
                                            chance: 0.9,
                                        },
                                    ],
                                },
                                {
                                    type: "minecraft:item",
                                    name: "kubejs:powder/sand/" + item.sand,
                                    conditions: [
                                        {
                                            condition:
                                                "minecraft:random_chance",
                                            chance: 0.9,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    });
});

oreTypes.forEach((item) => {
    TFCEvents.data((event) => {
        event.sluicing(
            "kubejs:dirty_dust/" + item.id,
            "kubejs:dirty_dust/" + item.id
        );
    });
});
