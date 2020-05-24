//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(param) {
    this.fila = param.split('\n').map(row => row.split(' ').map(srtNumber => Number(srtNumber)));
    this.aux = [];
   this.aux.push([''],['']);
    console.log(this.aux)
    this.columna = this.fila.map(filas => filas.map((columnas, i) => this.aux.push(columnas)));

    
    // rows = ["1 2", "3 4"]
    // rows = [[1,2],[3,4]]
    // rows = [["1","2"],["3","4"]]
  };

  get rows() {
    return this.fila;
  };

  get columns() {
    return this.columna;
  };
};
