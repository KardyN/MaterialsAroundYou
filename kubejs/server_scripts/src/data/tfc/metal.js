// priority: 100
const customMetalList = [
  {
    tier: 1,
    fluid: "kubejs:metal/bearing_alloy",
    melt_temperature: 460,
    specific_heat_capacity: 0.02143,
    //ingots: { tag: "forge:ingots/bearing_alloy" },
    //double_ingots: { tag: "forge:double_ingots/bearing_alloy" },
    //sheets: { tag: "forge:sheets/bearing_alloy" },
  },
];

ServerEvents.highPriorityData((event) => {
  customMetalList.forEach((metal) => {
    event.addJson(
      `tfc:tfc/metals/${/[a-z_]+$/.exec(metal.fluid)[0]}.json`,
      metal
    );
  });
});
