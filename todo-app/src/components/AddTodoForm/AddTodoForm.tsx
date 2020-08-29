import React, { useCallback, useReducer } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import apiController from '../../api/apiController';

interface IProps {
  disabled: boolean;
};

type InputNames = 'title' | 'description';

type IInputState = {
  value: string;
  isValid: boolean | undefined;
};

type State = Record<InputNames, IInputState>;

type Action = { type: 'reset' } |
  { type: 'change', name: string, value: string, isValid: boolean };

const defaultInputState: IInputState = { value: '', isValid: undefined };

const initialState: State = {
  'title': {...defaultInputState},
  'description': {...defaultInputState},
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'change':
      const { isValid, name, value } = action;
      return { ...state, [name]: { value, isValid }};
    case 'reset':
      return { ...initialState };
    default: return state;
  }
}

const validators: Record<InputNames, (value: string) => boolean> = {
  'title': value => !!value.length,
  'description': value => value.length ? !!value.trim().length : true
};

function AddTodoForm({ disabled }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = useCallback(
    ({ target: { name, value }}) => {
      const isValid = validators[name as InputNames](value);
      dispatch({ type: 'change', value, isValid, name });
    },
    [],
  )
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const {
      title: { value: title },
      description: { value: description }
    } = state;
    apiController.createTodo({ title, description });
    dispatch({ type: 'reset' });
  }

  const isSubmitDisabled = disabled || !state.title.isValid || state.description.isValid === false;

  return (
    <Form className='pt-3' onSubmit={submitHandler}>
      <FormGroup>
        <Label for="title-input">Title</Label>
        <Input
          type="text"
          name="title"
          id="title-input"
          valid={state.title.isValid}
          value={state.title.value}
          onChange={changeHandler} />
      </FormGroup>
      <FormGroup>
        <Label for="description-input">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description-input"
          valid={state.description.isValid}
          value={state.description.value}
          onChange={changeHandler} />
      </FormGroup>
      <Button
        type="submit"
        disabled={isSubmitDisabled}
        color={ isSubmitDisabled ? 'secondary' : 'primary'}>
          Add Todo
        </Button>
    </Form>
  );  
}

export default AddTodoForm;
