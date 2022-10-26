import * as sinon from 'sinon';
import chai from 'chai';
import { NextFunction, Response, Request } from 'express';
import { icarMockReceves, icarMockSubmit, icarMocKListen, icarMockUpdatedExpect, icarMockUpdatedSubmit } from '../../mocks/IcarsMock';
import ICarController from '../../../controllers/ICar';
import IcarService from '../../../services/ICar';
import CarModel from '../../../models/ICarModel';

const { expect } = chai;

describe('Testando a camada Controller', () => {

  const icarModel = new CarModel();
  const icarService = new IcarService(icarModel);
  const icarController = new ICarController(icarService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon
      .stub(icarService, 'create').resolves(icarMockSubmit);
    sinon
      .stub(icarService, 'readOne').resolves(icarMockSubmit);
    sinon.stub(icarService, 'read').resolves(icarMocKListen);
    sinon.stub(icarService, 'update').resolves(icarMockUpdatedExpect);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Cadastrar um novo carro sistema', () => {
    it('Testa se é possivel cadastrar um carro com sucesso', async () => {
      req.body = icarMockSubmit;
      await icarController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(icarMockSubmit)).to.be.true
    });
  });

  describe('Buscar os dados de um carro', () => {
    it('É verificado se rotarna os dados de um carro passando um id', async () => {
      req.params = { id: icarMockReceves._id };
      await icarController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(icarMockSubmit)).to.be.true;
    })
  })

  describe('Deve retornar todos os carros cadastrados', () => {
    it('Verifica se retorna um array com todos os objetos cadastrados', async () => {
      await icarController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(icarMocKListen)).to.be.true;
    })
  })

  describe('Verifica se é possivel atualizar os dados', () => {
    it('Deve atualizar os dados com sucesso', async () => {
      req.params = { id: icarMockUpdatedExpect._id };
      req.body = icarMockUpdatedSubmit;
      await icarController.updated(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(icarMockUpdatedExpect)).to.be.true;

    })
  })

});