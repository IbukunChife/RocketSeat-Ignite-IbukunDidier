import {container} from "tsyringe";


import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"


container.registerSingleton<ICategoriesRepository>("CategoriesRepository",CategoriesRepository);
container.registerSingleton<ISpecificationRepository>("SpecificationsRepository",SpecificationRepository);
container.registerSingleton<IUsersRepository>("UsersRepository",UsersRepository);