// priority: 90
const alloyRecipeList = [
  {
    result: "tfc:rose_gold",
    contents: [
      ["tfc:gold", 0.7, 0.8],
      ["tfc:copper", 0.2, 0.25],
      ["tfc:silver", 0.05, 0.1],
    ],
  },
  {
    result: "tfc:bronze",
    contents: [
      ["tfc:copper", 0.85, 0.9],
      ["tfc:tin", 0.1, 0.15],
    ],
  },
  {
    result: "tfc:bearing_alloy",
    contents: [
      ["tfc:tin", 0.85, 0.9],
      ["tfc:copper", 0.1, 0.15],
    ],
  },
  {
    result: "tfc:brass",
    contents: [
      ["tfc:copper", 0.6, 0.7],
      ["tfc:zinc", 0.3, 0.35],
    ],
  },
  {
    result: "tfc:sterling_silver",
    contents: [
      ["tfc:copper", 0.85, 0.9],
      ["tfc:silver", 0.1, 0.15],
    ],
  },
  {
    result: "tfc_ie_addon:electrum",
    contents: [
      ["tfc:gold", 0.4, 0.6],
      ["tfc:silver", 0.4, 0.6],
    ],
  },
  {
    result: "tfc:bismuth_bronze",
    contents: [
      ["tfc:copper", 0.5, 0.6],
      ["tfc:zinc", 0.25, 0.3],
      ["tfc:bismuth", 0.15, 0.2],
    ],
  },
  {
    result: "tfc:black_bronze",
    contents: [
      ["tfc:copper", 0.5, 0.6],
      ["tfc:gold", 0.15, 0.25],
      ["tfc:silver", 0.15, 0.25],
    ],
  },
  {
    result: "tfc:weak_steel",
    contents: [
      ["tfc:steel", 0.75, 0.85],
      ["tfc:nickel", 0.15, 0.25],
    ],
  },
  {
    result: "tfc:weak_red_steel",
    contents: [
      ["tfc:steel", 0.4, 0.6],
      ["tfc_ie_addon:aluminum", 0.4, 0.6],
    ],
  },
  {
    result: "tfc:weak_blue_steel",
    contents: [
      ["tfc:steel", 0.7, 0.8],
      ["tfc:nickel", 0.1, 0.2],
      ["firmalife:chromium", 0.1, 0.2],
    ],
  },
  {
    result: "tfc_ie_addon:constantan",
    contents: [
      ["tfc:copper", 0.55, 0.65],
      ["tfc:nickel", 0.35, 0.45],
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
      metal: component[0],
      min: component[1],
      max: component[2],
    });
  });
  return newJson;
};

ServerEvents.recipes((event) => {
  alloyRecipeList.forEach((alloy) => {
    event
      .custom(jsonBuilder(alloy))
      .id(`tfc:alloy/${/[a-z_]+$/.exec(alloy.result)[0]}`);
  });
});
