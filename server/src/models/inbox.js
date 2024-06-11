const mongoose = require('mongoose')
const moment = require('moment')

const inboxSchema = new mongoose.Schema({
    User : {
        type : String,
        required : true
    },
    Messages : {
        type : [
            {
                to : String,
                data : [
                    {
                        mes : String,
                        at : Number
                    }
                ]
            }
        ],
        required : false
    },
    Recived : {
        type : [
            {
                from : String,
                data : [
                    {
                        mes : String,
                        at : Number
                    }
                ]
            }
        ],
        required : false
    }
})

inboxSchema.pre('save', async function(next) {
    const currentDoc = this;

    const isMessagesModified = currentDoc.isModified('Messages')
    const isRecivedModified = currentDoc.isModified('Recived')

    if (!isMessagesModified && !isRecivedModified) {
        return next()
    }

    const oneDayAgo = moment().subtract(1, 'day').startOf('day').valueOf()

    if (isMessagesModified) {
        currentDoc.Messages.forEach(messageGroup => {
            messageGroup.data = messageGroup.data.filter(message => message.at > oneDayAgo)
        })
    }

    if (isRecivedModified) {
        currentDoc.Recived.forEach(messageGroup => {
            messageGroup.data = messageGroup.data.filter(message => message.at > oneDayAgo)
        })
    }

    next()
})


const Inbox = mongoose.model("Inbox", inboxSchema)

module.exports = Inbox

