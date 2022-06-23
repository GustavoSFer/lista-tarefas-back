import sinon from 'sinon';
import { expect } from 'chai';
import taskModel from '../../models/index';
import taskService from '../../service/index';
import { removerTask, RESULTASK, taskBody, updatedTask } from '../mock';
import { ITask } from '../../interfaces/index';

describe('Serivces', () => {

  describe('#Read', () => {
    describe('Buscando informações no banco de dados', () => {
      beforeEach(() => sinon.restore());
      it('Quando não existe dados deve retornar um array vazio', async () => {
        sinon.stub(taskModel, 'read').resolves([]);
        const findTask = await taskService.read();
        expect(findTask).to.be.empty;
      });
      it('Quando tiver dados, deve retornar um array com as informações', async () => {
        sinon.stub(taskModel, 'read').resolves(RESULTASK as ITask[]);
        const findTask = await taskService.read();
        expect(findTask).to.be.equal(RESULTASK);
      });
    });
  });

  describe('#Create', () => {
    describe('Criando Tasks no banco de dados', () => {
      it('Deve retornar a task criada', async () => {
        sinon.stub(taskModel, 'create').resolves(RESULTASK[0]);
        const createTask = await taskService.create(taskBody);
        expect(createTask).to.be.eqls(RESULTASK[0]);
      });
    });
  });

  describe('#UpDate', () => {
    beforeEach(() => sinon.restore());
    describe('Tentando fazer atualização', () => {
      it('Deve retornar undefined quando não existe a task', async () => {
        sinon.stub(taskModel, 'update').resolves(undefined);
        const updateTask = await taskService.update(
          "62aa290bc663a6d60439ee51",
          "Testando G123",
          "Andamento",
        );
          expect(updateTask).to.be.equal(undefined);
      });
      it('Deve conseguir atualizar com as informações corretas', async () =>{
        sinon.stub(taskModel, 'update').resolves(updatedTask);
        const updateTask = await taskService.update(
          "62aa290bc663a6d60439ee52",
          "Realizar tarefa do dia",
          "Andamento",
        )
        expect(updateTask).to.be.eqls(updatedTask)
      });
    });
  });

});