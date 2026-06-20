// priority: 90
ServerEvents.recipes((event) => {
  let alloyRecipeList = [
    {
      result: "tfc:metal/rose_gold",
      contents: [
        ["tfc:metal/gold", 0.7, 0.8],
        ["tfc:metal/copper", 0.2, 0.25],
        ["tfc:metal/silver", 0.05, 0.1],
      ],
    },
    {
      result: "tfc:metal/bronze",
      contents: [
        ["tfc:metal/copper", 0.85, 0.9],
        ["tfc:metal/tin", 0.1, 0.15],
      ],
    },
    {
      result: "kubejs:metal/bearing_alloy",
      contents: [
        ["tfc:metal/tin", 0.85, 0.9],
        ["tfc:metal/copper", 0.1, 0.15],
      ],
    },
    {
      result: "tfc:metal/brass",
      contents: [
        ["tfc:metal/copper", 0.6, 0.7],
        ["tfc:metal/zinc", 0.3, 0.35],
      ],
    },
    {
      result: "tfc:metal/sterling_silver",
      contents: [
        ["tfc:metal/copper", 0.85, 0.9],
        ["tfc:metal/silver", 0.1, 0.15],
      ],
    },
    {
      result: "tfc_ie_addon:metal/electrum",
      contents: [
        ["tfc:metal/gold", 0.4, 0.6],
        ["tfc:metal/silver", 0.4, 0.6],
      ],
    },
    {
      result: "tfc:metal/bismuth_bronze",
      contents: [
        ["tfc:metal/copper", 0.5, 0.6],
        ["tfc:metal/zinc", 0.25, 0.3],
        ["tfc:metal/bismuth", 0.15, 0.2],
      ],
    },
    {
      result: "tfc:metal/black_bronze",
      contents: [
        ["tfc:metal/copper", 0.5, 0.6],
        ["tfc:metal/gold", 0.15, 0.25],
        ["tfc:metal/silver", 0.15, 0.25],
      ],
    },
    {
      result: "tfc:metal/weak_steel",
      contents: [
        ["tfc:metal/steel", 0.75, 0.85],
        ["tfc:metal/nickel", 0.15, 0.25],
      ],
    },
    {
      result: "tfc:metal/weak_red_steel",
      contents: [
        ["tfc:metal/steel", 0.4, 0.6],
        ["tfc_ie_addon:metal/aluminum", 0.4, 0.6],
      ],
    },
    {
      result: "tfc:metal/weak_blue_steel",
      contents: [
        ["tfc:metal/steel", 0.7, 0.8],
        ["tfc:metal/nickel", 0.1, 0.2],
        ["firmalife:metal/chromium", 0.1, 0.2],
      ],
    },
    {
      result: "tfc_ie_addon:metal/constantan",
      contents: [
        ["tfc:metal/copper", 0.55, 0.65],
        ["tfc:metal/nickel", 0.35, 0.45],
      ],
    },
  ];

  const jsonBuilder = (alloy) => {
    let newJson = {
      type: "tfc:alloy",
      result: alloy.result,
      contents: [],
    };
    alloy.contents.forEach((component) => {
      newJson.contents.push({
        fluid: component[0],
        min: component[1],
        max: component[2],
      });
    });
    return newJson;
  };

  alloyRecipeList.forEach((alloy) => {
    event
      .custom(jsonBuilder(alloy))
      .id(`may:alloy/${/[a-z_]+$/.exec(alloy.result)[0]}`);
  });
});
