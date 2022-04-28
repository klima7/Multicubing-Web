import { FC } from 'react';

interface Props {
  roomSlug: string;
}

const Stats: FC<Props> = ({roomSlug}) => {

  return (
    <div style={{
      border: 'solid 2px black', 
      borderRadius: 10,
      textAlign: 'left',
      height: '100%'
      }}>

      <div style={{textAlign: 'center', borderBottom: 'solid 2px black'}}>
        <h2 style={{marginBottom: 0, marginTop: 0}}>Stats</h2>
      </div>

      <div style={{height: '100%'}}>

      </div>

    </div>
  );
}

export default Stats;
