// src/utils/utils.js
export function getActivatedZones(rutinas) {
    const zonas = new Set();

    rutinas.forEach((rutina) => {
        rutina.ejercicios.forEach((ejercicio) => {
            switch (ejercicio.musculo.toLowerCase()) {
                case "chest":
                    zonas.add("pecho");
                    break;
                case "legs":
                    zonas.add("piernas");
                    break;
                case "shoulders":
                    zonas.add("hombros");
                    break;
                case "gluteos":
                    zonas.add("gluteos");
                    break;
                case "abdomen":
                    zonas.add("abdomen");
                    break;
                case "espalda":
                    zonas.add("espalda");
                    break;
                case "biceps":
                    zonas.add("biceps");
                    break;
                case "triceps":
                    zonas.add("triceps");
                    break;
                default:
                    break;
            }
        });
    });

    return Array.from(zonas);
}
