const CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

PlayerEvents.tick(event => {
    const { player } = event

    if (player.server && player.age % 20 === 0) {
        if (player.block.light <= 4) {
            // in darkness
            // Check if mainHand or offHand items are lanterns
            let holdingLightSource = false
            if (player.mainHandItem == 'minecraft:lantern' || player.mainHandItem == 'minecraft:soul_lantern') {
                holdingLightSource = true
            }
            if (player.offHandItem == 'minecraft:lantern' || player.offHandItem == 'minecraft:soul_lantern') {
                holdingLightSource = true
            }
            if (CuriosApi.getCuriosHelper().findFirstCurio(e.player, 'minecraft:lantern').isPresent()) {
                holdingLightSource = true
            }
            if (CuriosApi.getCuriosHelper().findFirstCurio(e.player, 'minecraft:soul_lantern').isPresent()) {
                holdingLightSource = true
            }
            if (holdingLightSource) {
                player.addSanity(0.15)
            }
        }
    }
})