import {container} from "tsyringe";


import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";


container.registerSingleton<ICategoriesRepository>("CategoriesRepository",CategoriesRepository);
container.registerSingleton<ISpecificationRepository>("SpecificationsRepository",SpecificationRepository);