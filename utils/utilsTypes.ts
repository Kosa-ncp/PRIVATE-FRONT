export interface Instance {
  (url: string, option?: InstanceOption): Promise<Response>;
}

interface InstanceOption {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: BodyInit;
}

export interface getDashboardDataType {
  totalAssets: number;
  investmentPrincipal: number;
  profitAndLoss: number;
  assetsCount: number;
  assetType: {
    name: string;
    rateOfReturn: number;
  }[];
  report: "string";
}

export interface getDashboardListTypes {
  status: string;
  data: getDashboardDataType;
}

export interface getPortfolioDataType {
  assetId: string;
  assetName: string;
  assetType: string;
  quantity: number;
  currentPrice: number;
  averagePrice: number;
  principal: number;
  profit: number;
  profitRate: number;
  valuation: number;
}

export interface getPortfolioListTypes {
  status: string;
  data: getPortfolioDataType[];
}

export interface addPortfolioResponseDataType {
  assetId: string;
  assetName: string;
  assetType: string;
  quantity: number;
  currentPrice: number;
  valuation: number;
  averagePrice: number;
  principal: number;
  profit: number;
  profitRate: number;
}

export interface addPortfolioResponseTypes {
  status: string;
  data: addPortfolioResponseDataType[];
}

export interface DeletePortfolioResponseDataType {
  assetId: "string";
  assetName: "string";
  deletedAt: "string";
}

export interface DeletePortfolioResponseTypes {
  status: "string";
  message: "string";
  data: DeletePortfolioResponseDataType;
}
