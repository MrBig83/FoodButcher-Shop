export interface IOrderItems {
    creditedAmount: number
    discountRate: number
    ean: number
    imageUri: string
    itemId: string
    name: string
    quantity: number
    reference:string
    taxRate: number
    totalPriceExcludingTax: number
    totalPriceIncludingTax: number
    totalTaxAmount: number
    type: string
    unitPrice: number
    uri: string
}

export interface IOrderHistory {
    product: string
    quantity: number
    price: number
}

export interface IOrder {
    currency: string,
    items: IOrderItems[] ,
    totalCreditedAmount: number,
    totalFeeExcludingTax: number,
    totalFeeIncludingTax: number,
    totalPriceExcludingTax: number,
    totalPriceIncludingTax: number,
    totalTaxAmount: number
}

export interface IOrderResponse {
    customer: object,
    description: string,
    expirationTime: string
    gui: object,
    history: object,
    id: string,
    links: [],
    merchant: object,
    order: object,
    purchaseId: number,
    snippet: string,
    status: string
}