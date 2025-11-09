import Button from "../components/button.tsx";
import PlusIcon from "../assets/icons/plus.svg?react";
import useTasks from "../hooks/use-tasks.ts";
import useTask from "../hooks/use-task.ts";
import TaskItem from "./task-item.tsx";
import {type Task, TaskState} from "../models/task.ts";

export default function TasksList() {
    const {tasks, isLoadingTasks} = useTasks()
    const { prepareTask } = useTask();

    function handleNewTask() {
        prepareTask()
    }
    return (
        <>
            <section>
                <Button
                    icon={PlusIcon}
                    className={"w-full"}
                    onClick={handleNewTask}
                    disabled={tasks.some((task) => task.state === TaskState.Creating) || isLoadingTasks}
                >Nova tarefa</Button>
            </section>
            <section className={"space-y-2"}>
                {!isLoadingTasks && tasks.map((task) => <TaskItem key={task.id} task={task} /> )}
                {isLoadingTasks && (
                    <>
                        <TaskItem task={{} as Task} loading />
                        <TaskItem task={{} as Task} loading />
                        <TaskItem task={{} as Task} loading />
                    </>
                )}
            </section>
        </>
    )
}