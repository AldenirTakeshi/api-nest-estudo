import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';

// Define um 'Apelido' para a class
export type EventDocument = HydratedDocument<Event>

// Decorator que diz que as infos abaixo sera Schemas da Entidade
@Schema()
export class Event extends Document {

    // Prop = Atributos da entidade
    @Prop({ require: true })
    name: string;

    @Prop({ require: true })
    date: Date;

    @Prop({ require: true })
    hour: number;

    @Prop({ require: true })
    description: string;

    @Prop({ required: true })
    value: number
}

// Transforma a classe em um Schema
export const EventSchema = SchemaFactory.createForClass(Event);
