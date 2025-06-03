PlayerEvents.loggedIn(event => {
    const { player } = event
    if (!player.stages.has(global.STAGES.STARTING)) {
        player.give(Item.of('grapplemod:grapplinghook', '{Damage:0,custom:{angle:20.0d,attract:0b,attractradius:3.0d,crc32:2252267022L,detachonkeyrelease:0b,doublehook:0b,enderstaff:0b,hookgravity:1.0d,maxlen:30.0d,motor:0b,motoracceleration:0.2d,motordampener:0b,motormaxspeed:4.0d,motorwhencrouching:0b,motorwhennotcrouching:1b,oneropepull:0b,phaserope:0b,playermovementmult:1.0d,pullbackwards:1b,reelin:1b,repel:0b,repelforce:1.0d,rocket:0b,rocket_active_time:0.5d,rocket_force:1.0d,rocket_refuel_ratio:15.0d,rocket_vertical_angle:0.0d,smartdoublemotor:1b,smartmotor:0b,sneakingangle:10.0d,sneakingverticalthrowangle:0.0d,sticky:0b,throwspeed:2.0d,verticalthrowangle:0.0d}}').enchant('minecraft:unbreaking', 1).enchant('minecraft:mending', 1))
        player.setOffHandItem(Item.of('minecraft:lantern'))

        player.setHeadArmorItem(
            Item.of('minecraft:leather_helmet').enchant('minecraft:unbreaking', 1)
        );

        player.setChestArmorItem(
            Item.of('minecraft:leather_chestplate').enchant('minecraft:unbreaking', 1)
        );

        player.setLegsArmorItem(
            Item.of('minecraft:leather_leggings').enchant('minecraft:unbreaking', 1)
        );

        player.setFeetArmorItem(
            Item.of('minecraft:leather_boots').enchant('minecraft:unbreaking', 1)
        );

        player.stages.add(global.STAGES.INSOMNIA)
        player.stages.add(global.STAGES.STARTING)
    }
})