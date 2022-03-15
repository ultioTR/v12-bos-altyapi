module.exports = (client) => {

//  WATCHING  : !ping izliyor
//  LISTENING : !ping dinliyor
//  PLAYING   : !ping oynuyor 
//  STREAMING : !ping yayında

    client.user.setActivity('This is a template',{ type: 'PLAYING'} )
    console.log(`${client.user.username} Aktif!`)
