import { Request, Response } from "Express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  
  async handle(request: Request, response: Response): Promise<Response> {
    const all = await this.listCategoriesUseCase.execute();
    return response.json(all);
  }
}

export { ListCategoriesController };
