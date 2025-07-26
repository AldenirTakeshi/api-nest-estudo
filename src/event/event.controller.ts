import { Body, Controller, Post } from '@nestjs/common';
import { CreatedEventService } from './services/create-event-service';
import { IEventEntity } from './interfaces/IEventEntity';

@Controller('event')
export class EventController {
    constructor(
        private readonly createEventService : CreatedEventService
    ) { }

    @Post('create')
    async create(@Body() event: IEventEntity) :Promise<IEventEntity> {
        return this.createEventService.execute(event);
    }
    
    // site.com/event // Get Put Delete Post
}
