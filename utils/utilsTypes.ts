export interface Instance {
  (url: string, option?: InstanceOption): Promise<Response>;
}

interface InstanceOption {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
}

export interface getDashboardListTypes {
  status: string;
  data: {
    totalAssets: number;
    investmentPrincipal: number;
    profitAndLoss: number;
    assetsCount: number;
    assetType: {
      name: string;
      rateOfReturn: number;
    }[];
    report: "string";
  };
}

export interface getPortfolioListTypes {
  status: string;
  data: {
    assetName: string;
    assetType: string;
    quantity: number;
    marketValue: number;
    averagePrice: number;
    principal: number;
    profit: number;
    profitRate: number;
  }[];
}
