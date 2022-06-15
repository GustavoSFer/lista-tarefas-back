import Joi from 'joi';

const schema = Joi.object({
  task: Joi.string().required().messages({
    'string.base': 'A tarefa precisa ser String',
    'any.required': 'Tarefa obrigatório',
  }),
  status: Joi.string().required().messages({
    'string.base': 'status precisa ser uma string',
    'any.required': 'status obrigatório',
  })
})

export default schema;
