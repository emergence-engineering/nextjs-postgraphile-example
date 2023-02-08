import { makePluginHook, postgraphile } from 'postgraphile';
import PubSub from '@graphile/pg-pubsub'
import cors from 'cors'
import express from 'express';
import compression from 'compression';


const pluginHook = makePluginHook([ PubSub ]);

const app = express();

app.use(compression())
app.use(cors())

app.use(
  postgraphile(
    process.env.DATABASE_URL,
    'public',
    {
      watchPg: true,
      pluginHook,
      subscriptions: true,
      simpleSubscriptions: true,
      enableCors: true,
      graphiql: Boolean(process.env.GRAPHIQL_ENABLED),
      enhanceGraphiql: Boolean(process.env.GRAPHIQL_ENABLED),
    }
  )
);

app.get('/version', (req, res) => {
      //TODO: implement version/monitoring logic
      res.send({version: process.env.VERSION || 'local'})
});

app.get('/health', (req, res) => {
      //TODO: implement health check logic
      res.status(200).send({})
})

app.listen(3001);
