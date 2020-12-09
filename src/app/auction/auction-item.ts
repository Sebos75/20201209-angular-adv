export interface AuctionItem {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  isPromoted?: boolean;
  description?: string;
}
