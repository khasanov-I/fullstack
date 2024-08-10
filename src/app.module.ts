import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://kristiansummer01:7mHNjcUjLNNfPdwi@cluster0.i9vs3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  ],
})
export class AppModule {}
