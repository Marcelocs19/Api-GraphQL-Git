const db = require("../db")

class TasksRegistersService {

    async getTasks(user_id) {
        return await db("tasks").where({ user_id });
    }
}

module.exports = new TasksRegistersService();