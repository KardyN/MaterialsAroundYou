LootJS.lootTables((event) => {
  global.panningList.forEach((deposit) => {
    event.create(`may:panning/gravel/${deposit.rock}`).createPool((pool) => {
      pool.addEntry(
        LootEntry.alternative(
          LootEntry.of("tfc:powder/native_copper").randomChance(0.4),
          LootEntry.of("tfc:powder/native_silver").randomChance(0.2),
          LootEntry.of("tfc:powder/native_gold").randomChance(0.1),
          LootEntry.of(`tfc:rock/loose/${deposit.rock}`).randomChance(0.6),
          LootEntry.of(deposit.secondary).randomChance(0.3),
          LootEntry.of(deposit.tertiary).randomChance(0.1)
        )
      );
    });
    // .createPool((pool) => {
    //   pool.addEntry(LootEntry.of("minecraft:stick"));
    // });
  });
  global.oreList.forEach((ore) => {
    let { name, mod, sand, gems } = ore;
    event
      .create(`may:panning/dirty_dust/${name}`)
      .createPool((pool) => {
        pool.addEntry(
          LootEntry.alternative(
            LootEntry.of(
              name == "chromite" || name == "cinnabar"
                ? `kubejs:powder/${name}`
                : `${mod}:powder/${name}`
            ).randomChance(0.999),
            LootEntry.group(
              gems.map((gem) => LootEntry.of(`tfc:powder/${gem}`))
            )
          )
        );
      })
      .createPool((pool) => {
        pool.addEntry(LootEntry.of(`kubejs:pile/${sand}_sand`));
      });
  });
});
