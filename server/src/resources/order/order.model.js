const { Schema, model, models } = require("mongoose");

const OrderSchema = new Schema({
  status: { type: String, required:  false },
  id: { type: String, required:  false },
  expirationTime: { type: Date, required:  false },
  description: { type: Schema.Types.ObjectId, ref: "user", required: true },
  snippet: { type: String, required:  false },
  customer: {
      city: { type: String, required:  false },
      countryCode: { type: String, required:  false },
      identityNumber: { type: String, required: false },
      email: { type: String, required:  false },
      firstName: { type: String, required:  false },
      lastName: { type: String, required:  false },
      phone: { type: String, required: false },
      postalCode: { type: String, required:  false },
      street: { type: String, required:  false },
      type: { type: String, required:  false },
  },
  order: {
      currency: { type: String, required:  false },
      totalFeeExcludingTax: { type: Number, required:  false },
      totalFeeIncludingTax: { type: Number, required:  false },
      totalPriceExcludingTax: { type: Number, required:  false },
      totalPriceIncludingTax: { type: Number, required:  false },
      totalTaxAmount: { type: Number, required:  false },
      totalCreditedAmount: { type: Number, required:  false },
      items: [{
          itemId: { type: String, required:  false },
          discountRate: { type: Number, required:  false },
          ean: { type: String, required: false },
          imageUri: { type: String, required: false },
          name: { type: String, required:  false },
          quantity: { type: Number, required:  false },
          reference: { type: Schema.Types.ObjectId, ref: "product", required: true },
          taxRate: { type: Number, required:  false },
          totalPriceExcludingTax: { type: Number, required:  false },
          totalPriceIncludingTax: { type: Number, required:  false },
          totalTaxAmount: { type: Number, required:  false },
          creditedAmount: { type: Number, required:  false },
          type: { type: String, required:  false },
          unitPrice: { type: Number, required:  false },
          uri: { type: String, required: false },
      }],
  },
  history: {
      created: { type: Date, required:  false },
      readyToPay: { type: Date, required:  false },
      readyToShip: { type: Date, required:  false },
      shipped: { type: Date, required: false },
      paidToAccount: { type: Date, required: false },
      canceled: { type: Date, required: false },
      expired: { type: Date, required: false },
      denied: { type: Date, required: false },
  },
  purchaseId: { type: Number, required:  false },
  links: [{
      href: { type: String, required:  false },
      rel: { type: String, required:  false },
  }],
});

const OrderModel = model("Order", OrderSchema)

module.exports = { 
  OrderModel
};