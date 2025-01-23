//priority: 99
StartupEvents.registry("fluid", (event) => {
  //metals
  event.create("metal/osmirite").thickTexture("#444444").noBlock().noBucket();
  event
    .create("metal/bearing_alloy")
    .thickTexture("#444444")
    .noBlock()
    .noBucket();
  //molten ores
  event.create("ore/cassiterite").thickTexture("#444444").noBlock().noBucket();
  event.create("ore/hematite").thickTexture("#444444").noBlock().noBucket();
  event.create("ore/magnetite").thickTexture("#444444").noBlock().noBucket();
  event.create("ore/limonite").thickTexture("#444444").noBlock().noBucket();
});
