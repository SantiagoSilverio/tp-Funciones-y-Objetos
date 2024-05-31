const calcular = () => {
    const numero = parseInt(document.getElementById("numeroInput").value);
    const resultadoFactorial = calcularFactorial(numero);
    document.getElementById("resultado").textContent = `El factorial de ${numero} es: ${resultadoFactorial}`;
};

const calcularFactorial = (numero) => {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
};

const verificar = () => {
    const cadena = document.getElementById("cadenaInput").value;
    const esPalindromoResultado = esPalindromo(cadena);
    document.getElementById("resultado2").textContent = `¿Es un palíndromo? ${esPalindromoResultado}`;
};

const esPalindromo = (cadena) => {
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z]/g, "");
    const cadenaInvertida = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia === cadenaInvertida;
};


const crearLibro = () => {
    const titulo = document.getElementById("tituloInput").value;
    const autores = document.getElementById("autoresInput").value;
    const editorial = document.getElementById("editorialInput").value;
    const año = parseInt(document.getElementById("añoInput").value);

    const libro = { titulo, autores, editorial, año };
    document.getElementById("libroResultado").textContent = `Libro creado: ${JSON.stringify(libro)}`;
};


const empresa = {
    empleados: [],

    agregarEmpleado: function (nombre, salario) {
        this.empleados.push({ nombre, salario });
    },

    calcularSalarioPromedio: function () {
        const totalSalarios = this.empleados.reduce((sum, empleado) => sum + empleado.salario, 0);
        return totalSalarios / this.empleados.length;
    },

    obtenerEmpleadoSalarioMaximo: function () {
        return this.empleados.reduce((max, empleado) => (empleado.salario > max.salario ? empleado : max), this.empleados[0]);
    },
};

const agregarEmpleado = () => {
    const nombre = document.getElementById("nombreInput").value;
    const salario = parseFloat(document.getElementById("salarioInput").value);
    empresa.agregarEmpleado(nombre, salario);
    document.getElementById("resultados").textContent = `Empleado agregado: ${nombre} (Salario: ${salario})`;
};

const saludar = () => {
    const nombre = document.getElementById("nombreInput").value;
    const apellido = document.getElementById("apellidoInput").value;
    const edad = document.getElementById("edadInput").value;
    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        saludar: function () {
            document.getElementById("resultados3").textContent = `¡Hola! Mi nombre es ${this.nombre} ${this.apellido}. Tengo ${this.edad} años.`;
        },
    };

    // Ejemplo de uso:
    persona.saludar();
};

const filtrarPorEdad = () => {
    const edadFiltrar = parseInt(document.getElementById("edadInput").value);
    const personasFiltradas = personas.filter(persona => persona.edad === edadFiltrar);
    document.getElementById("resulta3").textContent = JSON.stringify(personasFiltradas);
};