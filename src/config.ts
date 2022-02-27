const env = process.env.NODE_ENV

const prod = {
    backend: 'multicubing-backend.herokuapp.com',
    secured: true,
};

const dev = {
    backend: 'localhost:8000',
    secured: false,
};


const config = env === 'development' ? dev : prod;


export default config;