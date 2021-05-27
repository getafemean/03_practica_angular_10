export interface Factura {
    id?: string,
    cliente: string,
    cif: string,
    fechaFactura: Date,
    baseImponible: number,
    tipoIVA: number
}