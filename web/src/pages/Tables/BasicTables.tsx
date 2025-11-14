import { useCallback, useEffect, useState, memo } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import Input from "../../components/form/input/InputField";
import Button from "../../components/ui/button/Button";
import Loader from "../../components/ui/loader/Loader";
import { Todo, useCreateTodo, useCreateUser, useGetTodos, User } from "../../hooks/useApiCall";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

// eslint-disable-next-line
const UserForm = memo(({ name, setName, onSubmit, loading }: any) => (
  <div className='flex items-center gap-3'>
    <Input value={name} onChange={(e) => setName(e.target.value)} />
    <Button onClick={onSubmit} disabled={loading}>
      {loading ? <Loader /> : "Create User"}
    </Button>
  </div>
));

// eslint-disable-next-line
const TodoForm = memo(({ todo, setTodo, onSubmit, loading, user }: any) => (
  <div className='flex items-center gap-3'>
    <p className='dark:text-gray-300 text-gray-800'>Hi {user.name}, create a todo</p>
    <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
    <Button onClick={onSubmit} disabled={loading}>
      {loading ? <Loader /> : "Create Todo"}
    </Button>
  </div>
));

export default function BasicTables() {
  const [name, setName] = useState("");
  const [clicked, setClicked] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const { isLoading: isCreatingUser, createUser } = useCreateUser();
  const { isLoading: isCreatingTodo, createTodo } = useCreateTodo();
  const { getTodos } = useGetTodos();

  const fetchTodos = useCallback(async () => {
    if (!user) return;
    const todos = await getTodos(user.id);
    setTodos(todos!);
    
  }, [getTodos, user]);

  useEffect(() => {
    if (user?.id && clicked) {
      fetchTodos();
      setClicked(false);
    }
    // eslint-disable-next-line
  }, [user]);

  const handleCreateUser = useCallback(async () => {
    const newUser = await createUser(name);
    if (newUser) setUser(newUser);
  }, [name, createUser]);

  const handleCreateTodo = useCallback(async () => {
    if (!user) return;
    setClicked(true);
    const newTodo = await createTodo({ title: todo, userId: user.id });
    if (newTodo) setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  }, [todo, user, createTodo]);

  return (
    <>
      <PageMeta
        title='React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template'
        description='This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template'
      />
      <PageBreadcrumb pageTitle='Basic Tables' />
      <div className='space-y-6'>
        <ComponentCard title='Basic Table 1'>
          {user ? (
            <TodoForm todo={todo} setTodo={setTodo} onSubmit={handleCreateTodo} loading={isCreatingTodo} user={user} />
          ) : (
            <UserForm name={name} setName={setName} onSubmit={handleCreateUser} loading={isCreatingUser} />
          )}
        </ComponentCard>
        {user && <BasicTableOne data={todos} user={user!} />}
      </div>
    </>
  );
}
