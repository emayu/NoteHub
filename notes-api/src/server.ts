import  express, {Express, urlencoded} from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';


const app:Express = express();
const PORT = process.env.PORT || 3000;

app.use(
    morgan(
      '{"level":"info","message":":method :url :status",' +
        '"metadata":{"timestamp":":date","content-length":":res[content-length]","response-time":":response-time ms"}',
    ),
  ).use(urlencoded({ extended: true }))
  .use(cors());
  app.use(express.json());
  
app.use('/notes-api/v1', routes);

//monitoring and health
app.get('/version', (req, res) => {
    res.status(200).json({
      version: process.env['BUILD_TAG'] || 'unknown', //for future deploys
    });
  })
 .get('/healthz', (req, res) => res.json({ ok: true }));

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localahost:${PORT}`);
})