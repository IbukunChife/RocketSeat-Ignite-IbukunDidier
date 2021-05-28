import express, { response } from 'express';
import CreateCourseService from './CreateCourseService';
import { createCourse } from './routes';

const app = express();;
app.get("/", createCourse);

app.listen(3333);