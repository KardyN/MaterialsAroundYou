// priority: 100
const customMetalList = [
  {
    tier: 0,
    fluid: "kubejs:metal/bearing_alloy",
    melt_temperature: 460,
    specific_heat_capacity: 0.005,
    //ingots: { tag: "forge:ingots/bearing_alloy" },
    //double_ingots: { tag: "forge:double_ingots/bearing_alloy" },
    //sheets: { tag: "forge:sheets/bearing_alloy" },
  },
  {
    fluid: "kubejs:metal/bismuthinite",
    melt_temperature: 270,
    specific_heat_capacity: 0.02143,
  },
  {
    fluid: "kubejs:metal/hematite",
    melt_temperature: 1535,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/limonite",
    melt_temperature: 1535,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/magnetite",
    melt_temperature: 1535,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/malachite",
    melt_temperature: 1080,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/garnierite",
    melt_temperature: 1453,
    specific_heat_capacity: 0.00625,
  },
  {
    fluid: "kubejs:metal/native_silver",
    melt_temperature: 961,
    specific_heat_capacity: 0.00625,
  },
  {
    fluid: "kubejs:metal/cassiterite",
    melt_temperature: 230,
    specific_heat_capacity: 0.02143,
  },
  {
    fluid: "kubejs:metal/sphalerite",
    melt_temperature: 420,
    specific_heat_capacity: 0.01429,
  },
  {
    fluid: "kubejs:metal/tetrahedrite",
    melt_temperature: 1080,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/bauxite",
    melt_temperature: 650,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/galena",
    melt_temperature: 500,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/uraninite",
    melt_temperature: 1250,
    specific_heat_capacity: 0.00857,
  },
  {
    fluid: "kubejs:metal/chromite",
    melt_temperature: 1250,
    specific_heat_capacity: 0.00857,
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
