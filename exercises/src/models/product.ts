export class Product {
  #id: string
  #name: string
  #price: number

  constructor (id: string, name: string, price: number) {
    this.#id = id
    this.#name = name
    this.#price = price
  }

  get id (): string {
    return this.#id
  }

  get name (): string {
    return this.#name
  }

  get price (): number {
    return this.#price
  }
}
