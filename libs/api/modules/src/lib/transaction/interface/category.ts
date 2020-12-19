export interface Category {
  id: number;
  name: string;
  description?: string;
  isGlobal: boolean;
}

export interface ICategoryShort {
  id: number;
  name: string;
  isGlobal: boolean;
}
