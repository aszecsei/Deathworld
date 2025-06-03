/**
 * 
 * @param {Special.Item[]} item 
 */
const yeet = (item) => {
    ServerEvents.recipes(event => {
        event.remove({ output: item })
    })
    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

yeet([
    'spelunkery:parachute',
    'berry_good:sweet_berry_basket',
    'berry_good:glow_berry_basket',
    'farmersdelight:potato_crate',
    'farmersdelight:beetroot_crate',
    'farmersdelight:carrot_crate',
])