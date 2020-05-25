

export class Matrix {
  constructor(param) {
    this.filas = param.split('\n').map(row => row.split(' ').map(strNumber => Number(strNumber)));

    this.cantCol = this.filas[0].length; // first row defines number of columns
    this.columnas = [];
    for (let i=0; i< this.cantCol; i++) {
     this.columnas.push(this.filas.map(fila => fila[i]))
    }
    

  };

  get rows() {
    return this.filas;
  };

  get columns() {
    return this.columnas;
  };
};
