export interface Factura {
    cliente: string,
    cif: string,
    fechaFactura: Date,
    baseImponible: number,
    tipoIVA: number,
    user: string
}