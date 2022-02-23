import cube2Image from '../assets/images/cubes/cube-2.png'
import cube3Image from '../assets/images/cubes/cube-3.png'
import cube4Image from '../assets/images/cubes/cube-4.png'
import cube5Image from '../assets/images/cubes/cube-5.png'

export class CubeVisualization {
  name: string;
  image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = image;
  }

  toString(): string {
    return this.name;
  }
};

const twoCube = new CubeVisualization('2x2x2', cube2Image);
const threeCube = new CubeVisualization('3x3x3', cube3Image);
const fourCube = new CubeVisualization('4x4x4', cube4Image);
const fiveCube = new CubeVisualization('5x5x5', cube5Image);


export const cubeVisualizations: { [key: string]: CubeVisualization } = {
  'two': twoCube,
  'three': threeCube,
  'four': fourCube,
  'five': fiveCube,
};
