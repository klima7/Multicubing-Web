import { FC } from 'react';

interface Props {
  src: string;
}

const CubeImage: FC<Props> = ({src, ...rest}) => {
  return (
    <div style={{padding: '2px', backgroundColor: '#FFFFFF80', borderRadius: '5px', lineHeight: 0}}>
      <img src={src} alt="" style={{width: '100%'}} />
    </div>
  );
};

export default CubeImage;
