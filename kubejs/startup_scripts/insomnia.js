ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerSleepInBedEvent', event => {
    const player = event.entity
    if (!player.isPlayer) return;
    if (player.stages.has(global.STAGES.INSOMNIA) && !player.hasEffect('kubejs:restful')) {
        player.server.runCommandSilent(`title ${player.username} actionbar ["",{"text":"You cannot sleep, due to "},{"text":"Insomnia","color":"red"},{"text":"."}]`)
        event.setResult('not_possible_now')
    }
})

StartupEvents.registry('mob_effect', event => {
    event.create('restful')
        .color(0xFFCE52)
        .beneficial()
        .displayName('Drowsy')
})

ItemEvents.modification(event => {
    event.modify('farmersrespite:dandelion_tea', item => {
        item.setFoodProperties(food => {
            food.effect('kubejs:restful', 20 * 60, 0, 1.0)
        })
    })
    event.modify('farmersrespite:long_dandelion_tea', item => {
        item.setFoodProperties(food => {
            food.effect('kubejs:restful', 20 * 60 * 1.5, 0, 1.0)
        })
    })
})