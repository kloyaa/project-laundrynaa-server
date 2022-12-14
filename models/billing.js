const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { paymentType } = require("../const/enum");

const options = {
    // capped: { size: 1024 },
    // bufferCommands: false,
    autoCreate: false
};

const BillingSchema = new Schema({
    refNumber: {
        type: String,
        required: [true, "refNumber  is required"]
    },
    header: {
        laundry: {
            accountId: {
                type: String,
                required: [true, "accountId is required"]
            },
            name: {
                first: {
                    type: String,
                    required: [true, "firstName is required"],
                },
                last: {
                    type: String,
                    required: [true, "lastName is required"],
                },
            },
            avatar: {
                type: String,
                required: [true, "avatar is required"]
            },
        },
        customer: {
            accountId: {
                type: String,
                required: [true, "accountId is required"]
            },
            name: {
                first: {
                    type: String,
                    required: [true, "firstName is required"],
                },
                last: {
                    type: String,
                    required: [true, "lastName is required"],
                },
            },
            avatar: {
                type: String,
                required: [true, "avatar is required"]
            },
        },
    },
    content: {
        paymentMethod: {
            type: String,
            enum: paymentType,
            required: [true, "paymentMethod is required"]
        },
        paymentDetails: {
            type: Map,
            required: [true, "paymentDetails is required"],
        },
        amount: {
            type: String,
            required: [true, "amount is required"]
        },
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
}, options)

module.exports = Billing = mongoose.model("billings", BillingSchema);
