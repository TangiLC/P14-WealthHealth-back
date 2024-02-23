const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "../data/employees.json");

// Route pour récupérer tous les employés
router.get("/getAllEmployees", async (req, res) => {
	try {
		const data = await fs.readFile(filePath, "utf-8");
		const employees = JSON.parse(data).data;
		res.json(employees);
	} catch (error) {
		console.error("Error reading employees data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Route pour récupérer les employés selon le prénom
router.get("/getByFirstName/:firstName", async (req, res) => {
	try {
		const { firstName } = req.params;
		const data = await fs.readFile(filePath, "utf-8");
		const employees = JSON.parse(data).data;
		const employee = employees.find((emp) => emp.firstName === firstName);
		if (employee) {
			res.json(employee);
		} else {
			res.status(404).json({ error: "Employee not found" });
		}
	} catch (error) {
		console.error("Error reading employees data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Route pour récupérer les employés selon le Nom
router.get("/getByLastName/:lastName", async (req, res) => {
	try {
		const { lastName } = req.params;
		const data = await fs.readFile(filePath, "utf-8");
		const employees = JSON.parse(data).data;
		const employee = employees.find((emp) => emp.lastName === lastName);
		if (employee) {
			res.json(employee);
		} else {
			res.status(404).json({ error: "Employee not found" });
		}
	} catch (error) {
		console.error("Error reading employees data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Route pour récupérer les employés selon State
router.get("/getByState/:st", async (req, res) => {
	try {
		const { st } = req.params;
		const data = await fs.readFile(filePath, "utf-8");
		const employees = JSON.parse(data).data;
		const filteredEmployees = employees.filter((emp) => emp.state === st);
		res.json(filteredEmployees);
	} catch (error) {
		console.error("Error reading employees data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Route pour récupérer les employés selon Départment
router.get("/getByDepartment/:dp", async (req, res) => {
	try {
		const { dp } = req.params;
		const data = await fs.readFile(filePath, "utf-8");
		const employees = JSON.parse(data).data;
		const departmentEmployees = employees.filter(
			(emp) => emp.department === dp
		);
		res.json(departmentEmployees);
	} catch (error) {
		console.error("Error reading employees data:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

function generateUniqueId(employeeData) {
	const firstNameInitials = employeeData.firstName
		.substring(0, 3)
		.toUpperCase();
	const lastNameInitials = employeeData.lastName.substring(0, 3).toUpperCase();
	const birthYear = new Date(employeeData.dateOfBirth)
		.getFullYear()
		.toString()
		.slice(-2);
	const birthMonth = (
		"0" +
		(new Date(employeeData.dateOfBirth).getMonth() + 1)
	).slice(-2);
	const birthDay = ("0" + new Date(employeeData.dateOfBirth).getDate()).slice(
		-2
	);
	const randomChars = Math.random().toString(36).substring(2, 9);
	const uniqueId = `${firstNameInitials}${lastNameInitials}${birthYear}${birthMonth}${birthDay}${randomChars}`;
	return uniqueId;
}

// Route pour ajouter un employé -création de l'id random
router.put("/addEmployee", async (req, res) => {
	try {
		const newEmployee = req.body;

		const data = await fs.readFile(filePath, "utf-8");
		let employees = JSON.parse(data).data;
		newEmployee.id = generateUniqueId(newEmployee);
		employees.push(newEmployee);
		await fs.writeFile(filePath, JSON.stringify({ data: employees }, null, 2));
		res.status(201).json(newEmployee);
	} catch (error) {
		console.error("Error adding new employee:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Route pour la modification d'une fiche employé (selon id)
router.patch("/patchEmployee/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const newData = req.body;
		const data = await fs.readFile(filePath, "utf-8");
		let employees = JSON.parse(data).data;
		const index = employees.findIndex((emp) => emp.id === id);
		if (index !== -1) {
			employees[index] = { ...employees[index], ...newData };
			await fs.writeFile(
				filePath,
				JSON.stringify({ data: employees }, null, 2)
			);
			res.status(200).json({ message: "Employee updated successfully" });
		} else {
			res.status(404).json({ error: "Employee not found" });
		}
	} catch (error) {
		console.error("Error updating employee:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Route pour la suppression d'une fiche employé (selon id)
router.delete("/deleteEmployee/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const data = await fs.readFile(filePath, "utf-8");
		let employees = JSON.parse(data).data;
		const index = employees.findIndex((emp) => emp.id === id);
		if (index !== -1) {
			employees.splice(index, 1);
			await fs.writeFile(
				filePath,
				JSON.stringify({ data: employees }, null, 2)
			);
			res.status(200).json({ message: "Employee deleted successfully" });
		} else {
			res.status(404).json({ error: "Employee not found" });
		}
	} catch (error) {
		console.error("Error deleting employee:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

module.exports = router;
