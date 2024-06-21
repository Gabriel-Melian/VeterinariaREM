class Mascota {
    constructor() {
        this.id = null;
        this.nombre = null;
        this.especie = null;
        this.raza = null;
        this.fechaNac = null;
        this.caractGenerales = null;
        this.idHistoriaClinica = null;
        this.idDueno = null;
    }

    validateModel(model) {
        const keys = Object.keys(model);
        for (let key of keys) {
            if (key !== 'id' && (model[key] === null || model[key] === '')) {
                return false;
            }
        }
        return true;
    }
}
export default Mascota;