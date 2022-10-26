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


type icarMockWidth = {
  _id: string,
  status: boolean,
  model: string,
  year: number,
  color: string,
  buyValue: number,
  doorsQty: number,
  seatsQty: number,
}


const icarMocKListen: icarMockWidth[] = [
	{
		_id: "6358577eafa164088865b5b7",
    status: true,
		model: "Ferrari Maranello",
		year: 1963,
		color: "red",
		buyValue: 3500000,
		doorsQty: 2,
		seatsQty: 2,
	}
]

const icarMockUpdatedSubmit: ICar = {
    model: "Maranello",
    year: 1963,
    color: "black",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
}


type IcarMockUpadetedExpect = {
  _id: string,
	model: string,
	year: number,
	color: string,
	buyValue: number,
	doorsQty: number,
	seatsQty: number
}

const icarMockUpdatedExpect: IcarMockUpadetedExpect = {
	_id: "6358fc9dae42019707e819ac",
	model: "Maranello",
	year: 1963,
	color: "black",
	buyValue: 3500000,
	doorsQty: 2,
	seatsQty: 2
}

export {
  icarMockSubmit,
  icarMockReceves, 
  icarMocKListen,
  icarMockUpdatedSubmit,
  icarMockUpdatedExpect
}