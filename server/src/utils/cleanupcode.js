const cron = require("node-cron")
const Inbox = require('../models/inbox')
const moment = require('moment')

const cleanupJob = cron.schedule('0 0 * * *', async () => { 
    const oneDayAgo = moment().subtract(1, 'day').startOf('day').valueOf()

    try {
        const deletedCount = await Inbox.deleteMany({
            $or: [
                { "Messages.data.at": { $lt: oneDayAgo } },
                { "Recived.data.at": { $lt: oneDayAgo } }
            ]
        })
        
        console.log(`Deleted ${deletedCount} day-old messages during cleanup`)
    } catch (error) {
        console.error('Error deleting day-old messages:', error)
    }
})

module.exports = cleanupJob