// import { expect } from "chai";
// import Sinon from 'sinon';
// import TaskService from '../../service';
// import taskController from '../../controller';

// describe('#Controller', () => {
//   const response = {};
//   const request = {};
//   before(function () {
//     request.body = { };
//     response.status = Sinon.stub().returns(response);
//     response.json = Sinon.stub().returns();
//   });

//   describe('Buscando dados no banco', () => {
//     it('Quando não existe deve retornar um array vazio', async () => {
//       Sinon.stub(TaskService, 'read').resolves([]);
//       await taskController.read(request, response);
//       expect(response.json.calleWith([])).to.be.equal(true);
//     })
//   },)
// })