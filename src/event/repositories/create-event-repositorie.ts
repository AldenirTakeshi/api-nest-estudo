import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Event, EventDocument } from "../schema/event.schema";
import { Model } from "mongoose";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class CreateEventRepositorie{
    constructor(
        @InjectModel("Event") private eventModel: Model<EventDocument>
    ) { }
    
    async execute(event: IEventEntity): Promise<IEventEntity>{
        const createdEvent = new this.eventModel(event);
        await createdEvent.save()
        return createdEvent.toObject()
    }
}