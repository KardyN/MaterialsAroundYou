const multitoolIds = [
  "kubejs:metal/prospector_pickaxe/osmirite",
  "kubejs:metal/prospector_hammer/osmirite",
  "kubejs:metal/prospector_drill/osmirite",
  "kubejs:metal/mineral_prospector/osmirite",
  "kubejs:metal/prospector_pickaxe/osmirite",
];

const swapToNext = (event) => {
  const { player, item } = event;
  if (
    player.crouching &&
    !player.cooldowns.isOnCooldown(item.id) &&
    /^kubejs:metal\/.*prospector.*\/osmirite/.test(item.id)
  ) {
    let nextId = multitoolIds[multitoolIds.indexOf(item.id) + 1];
    player.setMainHandItem(Item.of(nextId, `{Damage:${item.damageValue}}`));
    player.cooldowns.addCooldown(nextId, 10);
    event.cancel(); // cancels finding event
  }
};

BlockEvents.rightClicked((event) => {
  event.hand == "MAIN_HAND" && swapToNext(event);
});

ItemEvents.rightClicked((event) => {
  event.hand == "MAIN_HAND" && swapToNext(event);
});
