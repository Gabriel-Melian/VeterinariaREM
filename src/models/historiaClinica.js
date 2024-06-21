class HistoriaClinica{
    constructor() {
        this.id = null;
        this.diagnostico = null;
        this.tratamiento = null;
        this.motivo = null;
        this.fechaAtencion = null;
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
export default HistoriaClinica;