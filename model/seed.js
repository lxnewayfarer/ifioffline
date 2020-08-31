const db = require('.')

// test data for database
async function start () {
  await db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db.')
  })

  db.Users.create({ name: 'Jane Watson', email: 'mjwatson@example.com' })
  db.Users.create({ name: 'Michel Prado', email: 'pradomichele@example.com' })
  db.Users.create({ name: 'Иван Бураков', email: 'ioburakov1997@example.com' })

  db.Services.create({ name: 'VK', link: 'vk.com', isCheckable: true, isSendable: false })
  db.Services.create({ name: 'Instagram', link: 'instagram.com', isCheckable: true, isSendable: false })
  db.Services.create({ name: 'Facebook', link: 'facebook.com', isCheckable: true, isSendable: false })

  db.TrackedServices.create({ identifier: 'lxnewayfarer', id_user: 3, id_service: 1})
  db.TrackedServices.create({ identifier: 'lxnewayfarer', id_user: 1, id_service: 3})
  db.TrackedServices.create({ identifier: 'lxnewayfarer', id_user: 2, id_service: 2})

  db.Recievers.create({ identifier: 'lxnewayfarer', message: '111Hello! How are you111', id_user: 1, id_service: 1 })
  db.Recievers.create({ identifier: 'lxnewayfarer', message: '222Hello! How are you222', id_user: 2, id_service: 2 })
  db.Recievers.create({ identifier: 'lxnewayfarer', message: '333Hello! How are you222', id_user: 3, id_service: 3 })

  db.UserDelay.create({ value: 5, id_user: 1 })
  db.UserDelay.create({ value: 10, id_user: 3 })
  db.UserDelay.create({ value: 15, id_user: 2 })
}
start()
