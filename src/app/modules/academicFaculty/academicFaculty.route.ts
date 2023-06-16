import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyController } from "./academicFaculty.controller";
import { AcademicFacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "/create-faculty",
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty
);

router.patch(
  "/:id",
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyController.updateFaculty
);

router.delete("/", AcademicFacultyController.deleteFaculty);

router.get("/:id", AcademicFacultyController.getSingleFaculty);

router.get("/", AcademicFacultyController.getAllFaculties);

export const AcademicFacultyRoutes = router;
