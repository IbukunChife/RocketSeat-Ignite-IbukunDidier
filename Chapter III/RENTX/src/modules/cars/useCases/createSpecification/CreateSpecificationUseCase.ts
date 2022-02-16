import { AppError } from "../../../../errors/AppError"
import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  
  constructor(
    @inject("SpecificationsRepository")
    private specificationRepository: ISpecificationRepository
    ) {}

  async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists!");
    }
    await this.specificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
