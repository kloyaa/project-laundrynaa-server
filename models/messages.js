const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { messageTypes } = require("../const/enum");

const options = {
    // capped: { size: 1024 },
    // bufferCommands: false,
    autoCreate: false
};

const MessageSchema = new Schema({
    accountId: {
        type: String,
        required: [true, "accountId is required"],
    },
    content: {
        type: String,
        required: [true, "content is required"],
    },
    opened: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        enum: messageTypes,
        required: [true, "type is required"],
    },
    date: {
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
        },
    },
}, options);


module.exports = Message = mongoose.model("messages", MessageSchema);
