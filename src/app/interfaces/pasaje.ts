import { Categoria } from "../enums/categoria.enum";

export interface Pasaje {
dni: string;
precio: number | null;
CategoriaTurista: Categoria;
FechaCompra: Date;
email: string;

}
