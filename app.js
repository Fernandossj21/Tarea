// Lista de usuarios
const users = [];

// Función para generar contraseña segura
function generatePassword() {
    const length = 16;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+{}+-/";

    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    const allChars = uppercase + lowercase + numbers + specialChars;
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Mezclar los caracteres para evitar patrones predecibles
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    return password;
}

// Función para registrar usuarios mediante alertas
function registerUsers() {
    while (true) {
        let name = prompt("Ingrese su nombre:");
        if (!name) break;

        let age = prompt("Ingrese su edad:");
        if (!age || isNaN(age) || age <= 0) {
            alert("Edad no válida. Intente de nuevo.");
            continue;
        }

        let curp = prompt("Ingrese su CURP:");
        if (!curp) break;

        // Generar contraseña segura
        let password = generatePassword();

        // Guardar usuario en la lista
        users.push({ Nombre: name, Edad: age, CURP: curp, Contraseña: password });

        alert(`Usuario registrado con éxito.\nContraseña generada: ${password}`);

        let continueRegister = confirm("¿Desea registrar otro usuario?");
        if (!continueRegister) break;
    }

    // Mostrar todos los usuarios en la consola
    console.clear();
    console.table(users);
    alert("Registro finalizado. Revise la consola (F12 > Console) para ver los datos.");
}

// Iniciar el registro
registerUsers();