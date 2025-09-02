ServerEvents.recipes((event) => {
  let recipes = [
    // cleaning
    {
      input_item: { ingredient: { item: "tfc:large_raw_hide" } },
      input_fluid: { ingredient: "minecraft:water", amount: 4000 },
      output_item: { item: "kubejs:large_clean_hide" },
      duration: 8000,
      id: "may:barrel_sealed/large_clean_hide",
    },
    {
      input_item: { ingredient: { item: "tfc:medium_raw_hide" } },
      input_fluid: { ingredient: "minecraft:water", amount: 2000 },
      output_item: { item: "kubejs:medium_clean_hide" },
      duration: 8000,
      id: "may:barrel_sealed/medium_clean_hide",
    },
    {
      input_item: { ingredient: { item: "tfc:small_raw_hide" } },
      input_fluid: { ingredient: "minecraft:water", amount: 1000 },
      output_item: { item: "kubejs:small_clean_hide" },
      duration: 8000,
      id: "may:barrel_sealed/small_clean_hide",
    },
    // soaking
    {
      input_item: { ingredient: { item: "kubejs:large_clean_hide" } },
      input_fluid: { ingredient: "tfc:limewater", amount: 500 },
      output_item: { item: "tfc:large_soaked_hide" },
      duration: 8000,
      id: "may:barrel_sealed/large_soaked_hide",
    },
    {
      input_item: { ingredient: { item: "kubejs:medium_clean_hide" } },
      input_fluid: { ingredient: "tfc:limewater", amount: 400 },
      output_item: { item: "tfc:medium_soaked_hide" },
      duration: 8000,
      id: "may:barrel_sealed/medium_soaked_hide",
    },
    {
      input_item: { ingredient: { item: "kubejs:small_clean_hide" } },
      input_fluid: { ingredient: "tfc:limewater", amount: 300 },
      output_item: { item: "tfc:small_soaked_hide" },
      duration: 8000,
      id: "may:barrel_sealed/small_soaked_hide",
    },
    //preparing w/ salt water
    {
      input_item: { ingredient: { item: "tfc:large_scraped_hide" } },
      input_fluid: { ingredient: "tfc:salt_water", amount: 500 },
      output_item: { item: "tfc:large_prepared_hide" },
      duration: 8000,
      id: "may:barrel_sealed/large_prepared_hide_salt_water",
    },
    {
      input_item: { ingredient: { item: "tfc:medium_scraped_hide" } },
      input_fluid: { ingredient: "tfc:salt_water", amount: 400 },
      output_item: { item: "tfc:medium_prepared_hide" },
      duration: 8000,
      id: "may:barrel_sealed/medium_prepared_hide_salt_water",
    },
    {
      input_item: { ingredient: { item: "tfc:small_scraped_hide" } },
      input_fluid: { ingredient: "tfc:salt_water", amount: 300 },
      output_item: { item: "tfc:small_prepared_hide" },
      duration: 8000,
      id: "may:barrel_sealed/small_prepared_hide_salt_water",
    },
    //preparing w/ brine
    {
      input_item: { ingredient: { item: "tfc:large_scraped_hide" } },
      input_fluid: { ingredient: "tfc:brine", amount: 250 },
      output_item: { item: "tfc:large_prepared_hide" },
      duration: 8000,
      id: "may:barrel_sealed/large_prepared_hide_brine",
    },
    {
      input_item: { ingredient: { item: "tfc:medium_scraped_hide" } },
      input_fluid: { ingredient: "tfc:brine", amount: 200 },
      output_item: { item: "tfc:medium_prepared_hide" },
      duration: 8000,
      id: "may:barrel_sealed/medium_prepared_hide_brine",
    },
    {
      input_item: { ingredient: { item: "tfc:small_scraped_hide" } },
      input_fluid: { ingredient: "tfc:brine", amount: 150 },
      output_item: { item: "tfc:small_prepared_hide" },
      duration: 8000,
      id: "may:barrel_sealed/small_prepared_hide_brine",
    },
    //tanning
    {
      input_item: { ingredient: { item: "tfc:large_prepared_hide" } },
      input_fluid: { ingredient: "tfc:tannin", amount: 500 },
      output_item: { item: "kubejs:large_tanned_hide" },
      duration: 8000,
      id: "may:barrel_sealed/large_tanned_hide",
    },
    {
      input_item: { ingredient: { item: "tfc:medium_prepared_hide" } },
      input_fluid: { ingredient: "tfc:tannin", amount: 400 },
      output_item: { item: "kubejs:medium_tanned_hide" },
      duration: 8000,
      id: "may:barrel_sealed/medium_tanned_hide",
    },
    {
      input_item: { ingredient: { item: "tfc:small_prepared_hide" } },
      input_fluid: { ingredient: "tfc:tannin", amount: 300 },
      output_item: { item: "kubejs:small_tanned_hide" },
      duration: 8000,
      id: "may:barrel_sealed/small_tanned_hide",
    },
    //waterproofing w/ tallow
    {
      input_item: { ingredient: { item: "kubejs:large_tanned_hide" } },
      input_fluid: { ingredient: "tfc:tallow", amount: 250 },
      output_item: { item: "kubejs:large_waterproof_hide" },
      duration: 8000,
      id: "may:barrel_sealed/large_waterproof_hide_tallow",
    },
    {
      input_item: { ingredient: { item: "kubejs:medium_tanned_hide" } },
      input_fluid: { ingredient: "tfc:tallow", amount: 200 },
      output_item: { item: "kubejs:medium_waterproof_hide" },
      duration: 8000,
      id: "may:barrel_sealed/medium_waterproof_hide_tallow",
    },
    {
      input_item: { ingredient: { item: "kubejs:small_tanned_hide" } },
      input_fluid: { ingredient: "tfc:tallow", amount: 150 },
      output_item: { item: "kubejs:small_waterproof_hide" },
      duration: 8000,
      id: "may:barrel_sealed/small_waterproof_hide_tallow",
    },
    //waterproofing w/ olive oil
    {
      input_item: { ingredient: { item: "kubejs:large_tanned_hide" } },
      input_fluid: { ingredient: "tfc:olive_oil", amount: 500 },
      output_item: { item: "kubejs:large_waterproof_hide" },
      duration: 8000,
      id: "may:barrel_sealed/large_waterproof_hide_olive_oil",
    },
    {
      input_item: { ingredient: { item: "kubejs:medium_tanned_hide" } },
      input_fluid: { ingredient: "tfc:olive_oil", amount: 400 },
      output_item: { item: "kubejs:medium_waterproof_hide" },
      duration: 8000,
      id: "may:barrel_sealed/medium_waterproof_hide_olive_oil",
    },
    {
      input_item: { ingredient: { item: "kubejs:small_tanned_hide" } },
      input_fluid: { ingredient: "tfc:olive_oil", amount: 300 },
      output_item: { item: "kubejs:small_waterproof_hide" },
      duration: 8000,
      id: "may:barrel_sealed/small_waterproof_hide_olive_oil",
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "tfc:barrel_sealed";
    event.custom(recipe).id(recipe.id);
  });
});
