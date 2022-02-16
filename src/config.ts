const env = process.env.NODE_ENV

const prod = {
    backendUrl: 'https://multicubing-backend.herokuapp.com'
};

const dev = {
    backendUrl: 'http://localhost:8000'
};


const config = env === 'development' ? dev : prod;


export default config;