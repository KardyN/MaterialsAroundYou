//priority: 99
StartupEvents.registry("fluid", (event) => {
  event
    .create("metal/osmirite", "kubejs:thick")
    .tint("#444444")
    .noBlock()
    .noBucket();
  event
    .create("metal/osmium", "kubejs:thick")
    .tint("#83B6D3")
    .noBlock()
    .noBucket();

  global.oreList.forEach((ore) => {
    ore.color &&
      event
        .create(`metal/${ore.name}`, "kubejs:thick")
        .tint(ore.color)
        .noBlock()
        .noBucket();
  });
  event
    .create("metal/bearing_alloy", "kubejs:thick")
    .tint("#7f9789")
    .noBlock()
    .noBucket();
  event.create("boiled_water", "kubejs:thin").tint("#3F76E4");
});
