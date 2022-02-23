import { useParams } from 'react-router';

type RoomParams = {
  room: string;
};

function RoomPage() {
  const { room } = useParams<RoomParams>();

  return (
    <div>
      <h1>Room {room}</h1>
    </div>
  );
}

export default RoomPage;
