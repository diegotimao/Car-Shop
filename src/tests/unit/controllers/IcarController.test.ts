import * as sinon from 'sinon';
import chai from 'chai';
import { NextFunction, Response, Request } from 'express';
import { icarMockReceves, icarMockSubmit } from '../../mocks/IcarsMock';
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
  })

});