import * as sinon from 'sinon';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/ICarModel';
import chai from 'chai';
import { icarMockReceves, icarMockSubmit, icarMocKListen, icarMockUpdatedExpect, icarMockUpdatedSubmit } from '../../mocks/IcarsMock';
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
      .onCall(1).resolves(null);
    sinon.stub(carModel, 'read').resolves(icarMocKListen);
    sinon.stub(carModel, 'update').onCall(0).resolves(icarMockUpdatedExpect)
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

  describe('Buscando dados de um carro especifico', () => {
    it('Testando se os dados são retornados com sucesso', async () => {
      const responseCreate = await carService.readOne('63582c16143d597f738567a7');
      expect(responseCreate).to.be.deep.equal(icarMockReceves);
    });

    it('Testa que não é possível buscar os dados com um id inexistente', async () => {
      let error;
      try {
        await carService.readOne('63582c16143d597f738567a7');
      } catch (err: any) {
        error = err;
      }

      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound)
    })
  });

  describe('Buscando todos os dados', () => {
    it('Deve retornar um array com todos os objetos cadastrado no banco', async () => {
      const responseCars = await carService.read();
      expect(responseCars).to.be.deep.equal(icarMocKListen)
    })
  });

  describe('Verifica se é possivel atualizar os dados', () => {
    it('Deve atualizar os dados com sucesso', async () => {
      const responseUpdated = await carService.update('6358fc9dae42019707e819ac', icarMockUpdatedSubmit);
      expect(responseUpdated).to.be.deep.equal(icarMockUpdatedExpect);
    });

    it('Verifica que não é possivel atualizar os dados com um id incorreto', async () => {
      let err;
      try {
        await carService.update('125466', icarMockUpdatedSubmit);
      } catch (error: any) {
        err = error;
      }

      expect(err.message).to.be.equal(ErrorTypes.EntityNotFound);
    });
  })
});