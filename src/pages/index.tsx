import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Defina o tipo da task
interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

// Função para buscar as tasks
const fetchTasks = async (): Promise<Task[]> => {
  const { data } = await axios.get('http://localhost:3000/tasks');
  return data;
};

export default function Home() {
  // Passando corretamente o queryKey e a função de busca
  const { data: tasks, isLoading } = useQuery<Task[], Error>({
    queryKey: ['tasks'], // Chave de consulta
    queryFn: fetchTasks, // Função que faz a requisição
  });

  if (isLoading) return <div>Loading...</div>;

  // Verifique se 'tasks' existe antes de mapear
  if (!tasks) {
    return <div>No tasks found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 border rounded-lg ${
              task.isCompleted ? 'bg-green-200' : 'bg-red-200'
            }`}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
