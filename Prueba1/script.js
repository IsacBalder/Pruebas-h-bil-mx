
let employees = [];

// Obtener elementos
const nameInput = document.getElementById("name");
const lastname1Input = document.getElementById("lastname1");
const lastname2Input = document.getElementById("lastname2");
const bornInput = document.getElementById("born");
const areaInput = document.getElementById("area");
const addEmployeeButton = document.getElementById("addEmployeeButton");

// Agregar empleado
addEmployeeButton.onclick = function() {
    const name = nameInput.value.trim();
    const lastname1 = lastname1Input.value.trim();
    const lastname2 = lastname2Input.value.trim();
    const born = bornInput.value.trim();
    const area = areaInput.value.trim();

    if (!name || !lastname1 || !lastname2 || !born || !area) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    const employee = { name, lastname1, lastname2, born, area };
    employees.push(employee);
    renderTable();
    clearForm();
}

// Limpiar formulario
function clearForm() {
    nameInput.value = "";
    lastname1Input.value = "";
    lastname2Input.value = "";
    bornInput.value = "";
    areaInput.value = "";
}

// Actualizar tabla
function renderTable() {
    const tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; 

    employees.forEach((employee, index) => {
        const row = tableBody.insertRow();

        row.insertCell(0).textContent = employee.name;
        row.insertCell(1).textContent = employee.lastname1;
        row.insertCell(2).textContent = employee.lastname2;
        row.insertCell(3).textContent = employee.born;
        row.insertCell(4).textContent = employee.area;

        // Botón de eliminar
        const deleteCell = row.insertCell(5);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
            deleteEmployee(index);
        };
        deleteCell.appendChild(deleteButton);
    });
}

// Eliminar empleado funcion 
function deleteEmployee(index) {
    employees.splice(index, 1); 
    renderTable(); 
}
