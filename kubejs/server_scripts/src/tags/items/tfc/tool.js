ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom([/tfc:stone\/hammer\/.+/, /tfc:stone\/shovel\/.+/]);
});
