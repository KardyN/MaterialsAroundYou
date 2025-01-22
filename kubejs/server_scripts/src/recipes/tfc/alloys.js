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
  global.alloyRecipeList.forEach((alloy) => {
    event.custom(jsonBuilder(alloy));
  });
});
