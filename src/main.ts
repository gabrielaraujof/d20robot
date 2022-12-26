import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { Telegraf } from 'telegraf';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const appService = appContext.get(AppService);

  // const token = process.env.BOT_TOKEN;
  const bot = new Telegraf('1205811850:AAFW3c_ddB-LtCwk37RuofUbgNpvOt6FvpQ');

  bot.on('text', (ctx) => {
    console.log('Receiving', ctx.message);
    ctx.reply(ctx.message.text);
  });

  return serverlessExpress({ app: bot.webhookCallback('/telegraf') });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
