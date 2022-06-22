import sinon from 'sinon';
import { expect } from 'chai';
import taskModel from '../../models/index';
import model from '../../models/connectionDb';
import { RESULTASK, taskBody } from '../mock';

describe('Models', () => {
  describe('# Find', () => {

    describe('Buscando informações no banco de dados', () => {
      it('Quando não existe dados deve retornar um array vazio', async () => {
        sinon.stub(model, 'find').resolves([]);
        const findTask = await taskModel.read();
        expect(findTask).to.be.empty;
      })
    })
  })
})