'use server';

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function addTodo(formData: FormData) {
  const title = formData.get('title');
  console.log(title);

  if (!title) {
    return;
  }
  await prisma.task.create({
    data: {
      title: title?.toString(),
    }
  });
  revalidatePath("/")
}