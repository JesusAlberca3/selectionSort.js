/**

 * 1. Iniciar un Ciclo FOR hasta la longitud del arreglo menos uno (i)
 * 2. Definir una variable 'min' con el valor de i
 * 3. Anidar un ciclo FOR hasta la longitud del arreglo (j) con el contador (j) con valor i + 1
 * 4.  Definir un condicional del arreglo en posicion [j] menor que el arreglo en la posicion [min]
 * 5. Se asigna el valor de (j) a 'min'
 * 6. Declarar un auxiliar con el valor del arreglo en la posicion [i]
 * 7. Dar el valor de Arreglo posicion (i) igual a arreglo en posicion (min)
 * 8. Dar el valor de arreglo en posicion (min) el valor de auxiliar
 * 9. Retornar arreglo
 * 
 * selectionSort(array)
 * input: An Array A[0...n-1] of orderable elements
 * output: An array A[0..n-1] of sorted elements
 * 
 * FOR i <- 0 TO n-2 DO:
 *      min <- i
 *      FOR j <- i +1 to n - 1 DO:
 *          IF A[j] < A[min]:
 *          min <- j
 *    aux <- A[i]
 *    A[i] <- A[min]
 *    A[min] = aux
 */

function selectionSort(array){
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
            
        }
        let aux = array[i];
        array[i] = array[min];
        array[min] = aux;
    }
    return array; 
}

const arr = [6,23,1,5,9,10,11,8];

console.log(selectionSort(arr))
