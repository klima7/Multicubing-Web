import cube2Image from '../assets/images/cubes/cube-2.png'
import cube3Image from '../assets/images/cubes/cube-3.png'
import cube4Image from '../assets/images/cubes/cube-4.png'
import cube5Image from '../assets/images/cubes/cube-5.png'

export class Cube {
  id: number;
  name: string;
  image: string;

  constructor(id: number, name: string, image: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}

const twoCube = new Cube(0, '2x2x2', cube2Image);
const threeCube = new Cube(1, '3x3x3', cube3Image);
const fourCube = new Cube(2, '4x4x4', cube4Image);
const fiveCube = new Cube(3, '5x5x5', cube5Image);

export const cubes = [
  twoCube, threeCube, fourCube, fiveCube
]

export function getCubeById(id: number): Cube | null {
  const filtered = cubes.filter(cube => cube.id === id)
  if(filtered.length === 0)
    return null;
  return filtered[0];
}