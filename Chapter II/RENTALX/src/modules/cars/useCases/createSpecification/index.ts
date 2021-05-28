import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificaionController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const createSpecification = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  createSpecification
);
const createSpecificationController = new CreateSpecificaionController(
  createSpecificationUseCase
);

export { createSpecificationController };
