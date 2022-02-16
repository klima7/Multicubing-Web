import axios from 'axios';

function RequestPage() {
  const env = process.env.NODE_ENV;
  return (
    <div>
        <button onClick={performRequest}>Perform request</button>
        <p>Environment: {env}</p>
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
