import express from "express";
import { addNewAdmin, addNewDoctor, getUserDetails, login, logoutAdmin,logoutPatient, patientRegister } from "../controller/userController.js";
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";
import { getAllDoctors } from "../controller/userController.js";
const router = express.Router(); 

router.post("/patient/register",patientRegister);
router.post("/login",login);
router.post("/admin/addnew",isAdminAuthenticated, addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated,getUserDetails);  // first isAdminAuthenticated function will get success then getUserDetails function will start it's work
router.get("/patient/me", isPatientAuthenticated,getUserDetails);
router.get("/admin/logout", isAdminAuthenticated,logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated,logoutPatient);
router.post("/doctor/addnew", isAdminAuthenticated,addNewDoctor);


export default router;