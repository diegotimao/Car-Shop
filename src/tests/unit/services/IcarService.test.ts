import * as sinon from 'sinon';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/ICarModel';
import chai from 'chai';
import { icarMockReceves, icarMockSubmit } from '../../mocks/IcarsMock';
import IcarService from '../../../services/ICar';
import { ZodError } from 'zod';

const { expect } = chai;

describe('Testando a camada Service', () => {

  const carModel = new CarModel();
  const carService = new IcarService(carModel);

  before(async () => {
    sinon
      .stub(carModel, 'create').resolves(icarMockReceves);
    sinon
      .stub(carModel, 'readOne').onCall(0).resolves(icarMockReceves)
      .onCall(1).resolves(null)
  });

  after(()=>{
    sinon.restore();
  })

  describe('Cadastrando um carro no sistema', () => {
    it('Testando se é possível cadastrar um carro com sucesso', async () => {
      const responseCreated = await carService.create(icarMockSubmit);
      expect(responseCreated).to.be.equal(icarMockReceves);
    });

    it('Não será possível cadastrar um novo carro com informações incorretas', async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err
      }

      expect(error).to.be.instanceOf(ZodError);
    })
  });
});