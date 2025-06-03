BlockEvents.rightClicked('minecraft:campfire', e => {
    const { item, hand, player, block } = e
    if (hand != "MAIN_HAND") return;
    if (item.id != 'realistictorches:matchbox') return;

    if (block.properties.lit == 'false') {
        block.set('minecraft:campfire', {lit:'true'})
        player.damageHeldItem(hand, 1)
        e.server.runCommandSilent(`playsound minecraft:item.flintandsteel.use player ${player.username} ${block.x} ${block.y} ${block.z} 1 1`);
    }
})

BlockEvents.rightClicked('realistictorches:torch', e => {
    const { item, hand, player, block } = e
    if (hand != "MAIN_HAND") return;
    if (item.id != 'realistictorches:matchbox') return;

    if (block.properties.lit == 'false') {
        block.set('realistictorches:torch', {lit:'true'})
        player.damageHeldItem(hand, 1)
        e.server.runCommandSilent(`playsound minecraft:item.flintandsteel.use player ${player.username} ${block.x} ${block.y} ${block.z} 1 1`);
    }
})