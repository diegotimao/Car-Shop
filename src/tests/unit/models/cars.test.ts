import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import CarModel from '../../../models/ICarModel';
import { icarMockReceves, icarMockSubmit, icarMocKListen, icarMockUpdatedSubmit, icarMockUpdatedExpect } from '../../mocks/IcarsMock';
import { ErrorTypes } from '../../../errors/catalog';

const { expect } = chai;


describe('Camada model Icar', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(icarMockReceves);
    sinon.stub(Model, 'findOne').resolves(icarMockReceves);
    sinon.stub(Model, 'find').resolves(icarMocKListen);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(icarMockUpdatedExpect)
  });

  after(()=>{
    sinon.restore();
  })

  describe('Cadastrando um novo objeto', () => {
    it('Verifica se é possivel cadastrar um carro com sucesso', async () => {
      const newCar = await carModel.create(icarMockSubmit);
      expect(newCar).to.be.deep.equal(icarMockReceves)
    });
  })

  describe('Buscando um objeto pelo id', () => {
    it('Verifica se ao passar um id por parâmentro ele retorna os dados de um carro', async () => {
      const responseCar = await carModel.readOne('63582c16143d597f738567a7');
      expect(responseCar).to.be.deep.equal(icarMockReceves)
    });
  
    it('Não é possível buscar um carro com id inexistente', async () => {
      try {
        await carModel.readOne('1254ee');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId')
      }
    });
  })

  describe('Buscando todos os objetos do banco', () => {
    it('Deve retornar um array', async () => {
      const responseCar = await carModel.read();
      expect(responseCar).to.be.deep.equal(icarMocKListen)
    });
  });

  describe('Verifica se é possivel atualizar os dados', () => {
    it('Deve atualizar os dados com sucesso', async () => {
      const icarUpdated = await carModel.update('6358fc9dae42019707e819ac', icarMockUpdatedSubmit);
      expect(icarUpdated).to.be.deep.equal(icarMockUpdatedExpect)
    });

    it('Verifica que não é possível atualizar os dados com id incorreto', async () => {
      try {
        await carModel.update('12555221', icarMockUpdatedSubmit);
      } catch (error: any) {
        expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
      }
    });
  })
});