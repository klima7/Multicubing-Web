import axios from 'axios';

function RequestPage() {
  return (
    <div>
        <button onClick={performRequest}>Perform request</button>
    </div>
  );
}

function performRequest() {
  axios.post(`https://multicubing-backend.herokuapp.com/api/accounts/register/`)
  .then(res => {
    const persons = res.data;
    console.log(persons);
  })
}

export default RequestPage;
