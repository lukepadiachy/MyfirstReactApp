// src/data/StocktakeItem.ts

import { Item } from './items';

export type StocktakeItem = {
  id: string;
  itemId: string;
  quantity: number;
  checkedAt: Date;
};

let stocktakeItems: StocktakeItem[] = [];

export function addStocktakeItem(stocktakeItem: StocktakeItem): void {
  stocktakeItem.checkedAt = new Date();
  stocktakeItems.push(stocktakeItem);
}

export function removeStocktakeItem(id: string): void {
  stocktakeItems = stocktakeItems.filter(stocktakeItem => stocktakeItem.id !== id);
}

export function updateStocktakeItem(updatedStocktakeItem: StocktakeItem): void {
  updatedStocktakeItem.checkedAt = new Date();
  stocktakeItems = stocktakeItems.map(stocktakeItem => 
    (stocktakeItem.id === updatedStocktakeItem.id ? updatedStocktakeItem : stocktakeItem)
  );
}

export function getStocktakeItems(): StocktakeItem[] {
  return stocktakeItems;
}

export function getStocktakeItemsByItemId(itemId: string): StocktakeItem[] {
  return stocktakeItems.filter(stocktakeItem => stocktakeItem.itemId === itemId);
}