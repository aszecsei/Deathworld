EntityEvents.checkSpawn('the_flesh_that_hates:plaqueincubatorstart', event => {
    event.cancel()
})

EntityEvents.spawned('the_flesh_that_hates:plaqueincubatorstart', event => {
    event.cancel()
})