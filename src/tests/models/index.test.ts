import sinon from 'sinon';
import { expect } from 'chai';
import taskModel from '../../models/index';
import model from '../../models/connectionDb';
import { RESULTASK, taskBody } from '../mock';
import { ITask } from '../../interfaces/index';

describe('Models', () => {
  describe('# Find', () => {

    describe('Buscando informações no banco de dados', () => {
      beforeEach(() => sinon.restore())
      it('Quando não existe dados deve retornar um array vazio', async () => {
        sinon.stub(model, 'find').resolves([]);
        const findTask = await taskModel.read();
        expect(findTask).to.be.empty;
      });
      it('Quando tiver dados, deve retornar um array com as informações', async () => {
        sinon.stub(model, 'find').resolves(RESULTASK as ITask[]);
        const findTask = await taskModel.read();
        expect(findTask).to.be.equal(RESULTASK);
      });
    });
  });
});