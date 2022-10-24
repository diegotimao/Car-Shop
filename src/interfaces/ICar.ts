import { z } from 'zod';
import { IVehiclesSchema } from './IVehicle';

const ICarSchema = IVehiclesSchema.extend({
  doorsQty: z.number().min(2).max(4),
  seatsQty: z.number().min(2).max(7),
});

export type ICar = z.infer<typeof ICarSchema>;

export { ICarSchema };