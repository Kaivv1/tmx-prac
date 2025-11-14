import { useState } from "react";

export interface User {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (name: string) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      return (await res.json()) as User;
    } catch (error) {
      // @ts-expect-error asd
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, createUser };
};

export interface Todo {
  id: string;
  userId: string;
  title: string;
  updatedAt: string;
  createdAt: string;
}

export const useCreateTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createTodo = async (params: { userId: string; title: string }) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/v1/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...params }),
      });
      return (await res.json()) as Todo;
    } catch (error) {
      // @ts-expect-error asd
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, createTodo };
};

export const useGetTodos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTodos = async (userId: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/v1/todos/${userId}`, {
        method: "GET",
      });
      return (await res.json()) as Todo[];
    } catch (error) {
      // @ts-expect-error asd
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, getTodos };
};
