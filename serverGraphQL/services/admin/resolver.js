const Redis = require('ioredis')
const redis = new Redis()
const { Teacher } = require('../../models')

module.exports = {
  Query: {
    teachers: async () => {
      try {
        let teachers = await redis.get('teachers')
        if(!teachers) {
          teachers = await Teacher.findAll()
          await redis.set('teachers', JSON.stringify(teachers))
        } else {
          teachers = JSON.parse(teachers)
        }
        return teachers
      } catch (error) {
        console.log(error)
        return null
      }
    } 
  },
  Mutation: {
    addTeacher: async (parent, args, context, info) => {
      try {
        const newTeacher = await Teacher.create(args)
        const teachers = await redis.get('teachers')

        if(teachers) {
          let temp = JSON.parse(teachers)
          temp.push(newTeacher)
          await redis.set('teachers', JSON.stringify(temp))
          return newTeacher
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}