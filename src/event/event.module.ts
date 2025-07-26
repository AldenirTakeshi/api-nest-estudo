import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { CreateEventRepositorie } from './repositories/create-event-repositorie';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema } from './schema/event.schema';
import { CreatedEventService } from './services/create-event-service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Event', schema: EventSchema}])
  ],
  controllers: [EventController],
  // Oq precisa para trabalhar 
  providers: [CreateEventRepositorie, CreatedEventService ],
  // Se outro precisar ele pode usar
  exports:[CreateEventRepositorie, CreatedEventService]
})
export class EventModule { }
