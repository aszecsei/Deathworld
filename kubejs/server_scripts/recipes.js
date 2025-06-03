ServerEvents.recipes(event => {
    event.replaceInput({ output: 'biomancy:primordial_core' }, 'rotten_flesh', 'caverns_and_chasms:living_flesh')

    event.replaceInput({ mod: 'tacz' }, '#forge:ingots/iron', '#forge:ingots/lead')

    event.remove({ id: 'sophisticatedbackpacks:diamond_backpack' })
    event.remove({ id: 'sophisticatedbackpacks:gold_backpack' })
    event.remove({ id: 'sophisticatedbackpacks:iron_backpack' })
    event.remove({ id: 'sophisticatedbackpacks:iron_backpack_from_copper' })
    event.remove({ id: 'sophisticatedbackpacks:copper_backpack' })
    event.remove({ id: 'sophisticatedbackpacks:feeding_upgrade' })
    event.remove({ id: 'sophisticatedbackpacks:advanced_feeding_upgrade' })
})