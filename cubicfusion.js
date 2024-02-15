// .mjs
export default async robot => {
robot.hear(/badger/i, async res => {
res.send(`Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS`)
}

robot.respond(/open the pod bay doors/i, async res => {
res.reply(`I'm afraid I can't let you do that.`)
}

robot.hear(/I like pie/i, async res => {
res.emote('makes a freshly baked pie')
}
}
