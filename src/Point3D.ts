export default class Point3D {
  public w: number = 1.0;  
  
  constructor(
      public x: number, 
      public y: number, 
      public z: number
      ) {
    }

    toMatrix() {
      return [this.x, this.y, this.z, this.w]
    }

    updateFromMatrix(matrix: number[]) {
      this.x = matrix[0];
      this.y = matrix[1];
      this.z = matrix[2];
      this.w = matrix[3];
    }
}
