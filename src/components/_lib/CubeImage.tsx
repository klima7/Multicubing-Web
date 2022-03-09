import { FC } from 'react';
import { cubeVisualizations } from '../../utils/cube-visualization';

interface Props {
  cube: string;
}

const CubeImage: FC<Props> = ({cube}) => {
  return (
    <div style={{padding: '4px', backgroundColor: '#FFFFFFB0', borderRadius: '5px', lineHeight: 0}}>
      <img src={cubeVisualizations[cube].image} alt="" style={{width: '100%'}} />
    </div>
  );
};

export default CubeImage;
