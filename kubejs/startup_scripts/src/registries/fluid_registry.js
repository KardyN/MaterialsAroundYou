//priority: 99
StartupEvents.registry("fluid", (event) => {
  event.create("metal/osmirite").thickTexture("#444444").bucketColor("#444444");
  event.create("ore/cassiterite");
  event.create("ore/hematite");
  event.create("ore/magnetite");
  event.create("ore/limonite");
});
