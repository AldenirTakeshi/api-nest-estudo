import { Injectable } from "@nestjs/common";
import { CreateEventRepositorie } from "../repositories/create-event-repositorie";
import { IEventEntity } from "../interfaces/IEventEntity";

@Injectable()
export class CreatedEventService{
    constructor(
        private readonly createEventReposity : CreateEventRepositorie
    ) { }
    
    async execute(event: IEventEntity): Promise<IEventEntity>{

        //Validacao
        if (event.value < 20) {

        } 
            
        let newEvent = await this.createEventReposity.execute(event);

        return newEvent

    }
}