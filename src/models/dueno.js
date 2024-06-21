class Dueno{
    constructor() {
        this.id = null;
        this.apellido = null;
        this.nombre = null;
        this.dni = null;
        this.telefono = null;
        this.email = null;
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
export default Dueno;