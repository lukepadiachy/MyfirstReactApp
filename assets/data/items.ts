
export type Category = 'Fridge' | 'Cupboard' | 'Pantry' | 'Bathroom' | 'Bedroom' | 'Living Room';

export type Item = {
  id: string;
  name: string;
  quantity: number;
  location: string;
  category: Category;
  addedAt: Date;
  updatedAt: Date;
};

let items: Item[] = [];

export function addItem(item: Item): void {
  item.addedAt = new Date();
  item.updatedAt = new Date();
  items.push(item);
}

export function removeItem(id: string): void {
  items = items.filter(item => item.id !== id);
}

export function updateItem(updatedItem: Item): void {
  updatedItem.updatedAt = new Date();
  items = items.map(item => (item.id === updatedItem.id ? updatedItem : item));
}

export function getItems(): Item[] {
  return items;
}

export function getItemsByCategory(category: Category): Item[] {
  return items.filter(item => item.category === category);
}