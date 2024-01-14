export interface ICustomer {
    _id: string;
    city: string;
    countryCode: string;
    identityNumber: string | null;
    email: string;
    firstName: string;
    lastName: string;
    phone: string | null;
    postalCode: string;
    street: string;
    type: string;
  }
  
  export interface IItem {
    itemId: string;
    discountRate: number;
    ean: string | null;
    imageUri: string | null;
    name: string;
    quantity: number;
    reference: string;
    taxRate: number;
    totalPriceExcludingTax: number;
    totalPriceIncludingTax: number;
    totalTaxAmount: number;
    creditedAmount: number;
    type: string;
    unitPrice: number;
    uri: string | null;
  }
  
  export interface IOrder {
    status: string;
    id: string;
    expirationTime: string;
    description: string;
    snippet: string;
    customer: ICustomer;
    order: {
      currency: string;
      totalFeeExcludingTax: number;
      totalFeeIncludingTax: number;
      totalPriceExcludingTax: number;
      totalPriceIncludingTax: number;
      totalTaxAmount: number;
      totalCreditedAmount: number;
      items: IItem[];
    };
    merchant: {
      checkoutUri: string;
      confirmationUri: string;
      partnerId: string | null;
      notificationUri: string;
      validationUri: string | null;
      termsUri: string;
      integrationInfo: string | null;
      reference: string | null;
    };
    gui: {
      colorScheme: string;
      locale: string;
      requestPhone: boolean;
      phoneOptional: boolean;
      verification: string;
      countries: string[] | null;
    };
    history: {
      created: string;
      readyToPay: string;
      readyToShip: string;
      shipped: string | null;
      paidToAccount: string | null;
      canceled: string | null;
      expired: string | null;
      denied: string | null;
    };
    purchaseId: number;
    links: Array<{
      href: string;
      rel: string;
    }>;
  }
  

// export interface IOrderItems {
//     creditedAmount: number
//     discountRate: number
//     ean: number
//     imageUri: string
//     itemId: string
//     name: string
//     quantity: number
//     reference:string
//     taxRate: number
//     totalPriceExcludingTax: number
//     totalPriceIncludingTax: number
//     totalTaxAmount: number
//     type: string
//     unitPrice: number
//     uri: string
// }

// export interface IOrderHistory {
//     product: string
//     quantity: number
//     price: number
// }

// export interface IOrder {
//     currency: string,
//     items: IOrderItems[] ,
//     totalCreditedAmount: number,
//     totalFeeExcludingTax: number,
//     totalFeeIncludingTax: number,
//     totalPriceExcludingTax: number,
//     totalPriceIncludingTax: number,
//     totalTaxAmount: number
// }

// export interface IOrderResponse {
//     customer: object,
//     description: string,
//     expirationTime: string
//     gui: object,
//     history: object,
//     id: string,
//     links: [],
//     merchant: object,
//     order: object,
//     purchaseId: number,
//     snippet: string,
//     status: string
// }