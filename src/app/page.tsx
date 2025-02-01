import { prisma } from '@/lib/db';
import { addTodo } from '@/actions/actions';
export default async function TodoList() {
  const tasks = await prisma.task.findMany();
  return (
    <div>
      <div>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </div>
    <form action={addTodo}>
      <input type="text" name="title" />
      <button
        type="submit"
      >
        Add
      </button>
    </form>
    </div>

  )
}