import { API_URL } from "../utils/constants.js";

export class Products {
  constructor() {}

  /**
   * @returns {Promise<[error: Error | null, data: [] | null]>}
   */
  static async getAll () {
    try {
      const result = await fetch(`${API_URL}/products`);

      if (!result.ok) throw new Error(result.statusText);

      const data = await result.json();

      return [null, data];
    } catch (error) {
      return [error, null];
    }
  }
}