import { ICar } from "../../interfaces/ICar";

const icarMockSubmit: ICar = {
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
}

const icarMockReceves: ICar & { _id: string } = {
	_id: "63582532143d597f738567a5",
  model: 'Ferrari Maranello',
	year: 1963,
	color: "red",
	buyValue: 3500000,
	doorsQty: 2,
	seatsQty: 2,
}

export { icarMockSubmit, icarMockReceves }