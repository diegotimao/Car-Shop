import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import Car from '../../../models/ICar';
import { icarMockReceves, icarMockSubmit } from '../../mocks/IcarsMock';

const { expect } = chai;


describe('Camada model Icar', () => {
  const carModel = new Car();

  before(async () => {
    sinon
      .stub(Model, 'create').resolves(icarMockReceves);
  });

  after(()=>{
    sinon.restore();
  })

  it('Verifica se é possivel cadastrar um carro com sucesso', async () => {
    const newCar = await carModel.create(icarMockSubmit);
    expect(newCar).to.be.deep.equal(icarMockReceves)
  });

});