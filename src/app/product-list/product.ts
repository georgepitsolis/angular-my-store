export class Product {
  _name: string;
  _description?: string;
  _price: number;

  constructor(_name: string, _price: number, _description?: string) {
    this._name = _name;
    this._description = _description;
    this._price = _price;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get price() {
    return this._price;
  }
}
