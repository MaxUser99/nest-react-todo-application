import { useState, useEffect } from "react";
import { Loadable } from "../classes/Loadable";
import apiController from "../api/apiController";
import { ITodo } from "../interfaces/ITodo";

export function useTodos() {
  const [todos, setTodosState] = useState(new Loadable<ITodo[]>({ isLoading: true }));

  useEffect(() => {
    const minimumDelay = 1500; // ms
    const begin = Date.now();

    apiController.getTodos().then(data => {
      const diff = Date.now() - begin;

      const delay = diff < minimumDelay
        ? minimumDelay - diff
        : 0;

      setTimeout(
        () => setTodosState(new Loadable({ data })),
        delay
      );

    });
  }, []);

  const setTodos = (data: ITodo[] | null) => setTodosState(prev => ({ ...prev, data }));

  return { todos, setTodos };
}
