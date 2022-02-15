import { Router } from "express";

// import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";


const createSpecificationController = new CreateSpecificationController();

const specificationsRoutes = Router();
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
