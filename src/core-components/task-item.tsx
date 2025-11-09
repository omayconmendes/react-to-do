import Card from "../components/card.tsx";
import InputCheckbox from "../components/input-checkbox.tsx";
import Text from "../components/text.tsx";
import ButtonIcon from "../components/button-icon.tsx";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import React from "react";
import InputText from "../components/input-text.tsx";
import {type Task, TaskState} from "../models/task.ts";
import {cx} from "class-variance-authority";
import useTask from "../hooks/use-task.ts";
import Skeleton from "../components/skeleton.tsx";

interface TaskItemProps {
    task: Task;
    loading: boolean;
}

export default function TaskItem({task, loading}: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating);
    const [taskTitle, setTaskTitle] = React.useState(task?.title || '');
    const {updateTask, updateTaskStatus, deleteTask, isDeletingTask, isUpdatingTask} = useTask();

    function handleEditTask() {
        setIsEditing(true)
    }

    function handleExitEditingTask() {
        if (task.state === TaskState.Creating) {
            deleteTask(task.id);
        }

        setIsEditing(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "");
    }

    async function handleSaveTask(e: React.FormEvent<HTMLInputElement>) {
      e.preventDefault();
      await updateTask(task.id, {title: taskTitle});
      setIsEditing(false);
    }

    function handleUpdateTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;
        updateTaskStatus(task.id, checked);
    }

    async function handleDeleteTask() {
        await deleteTask(task.id);
    }

    return (
        <Card size={"md"} >
            {!isEditing ? (
                    <div className={"flex items-center gap-4"}>
                        <InputCheckbox checked={task?.concluded} onChange={handleUpdateTaskStatus} loading={loading} />
                        {!loading ?
                            (<Text className={cx("flex-1", {'line-through': task?.concluded})}>{task?.title}</Text>)
                            :
                            (<Skeleton className={"flex-1 h-6"} />)
                        }
                        <div className={"flex gap-1"}>
                            <ButtonIcon type={"button"} icon={TrashIcon} variant={"tertiary"} onClick={handleDeleteTask} loading={loading} handling={isDeletingTask} />
                            <ButtonIcon type={"button"} icon={PencilIcon} variant={"tertiary"} onClick={handleEditTask} loading={loading} />
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSaveTask} className={"flex items-center gap-4"}>
                      <InputText value={taskTitle} className={"flex-1"} onChange={handleChangeTaskTitle} required autoFocus />
                      <div className={"flex gap-1"}>
                          <ButtonIcon type={"button"} icon={XIcon} variant={"secondary"} onClick={handleExitEditingTask} />
                          <ButtonIcon type={"submit"} icon={CheckIcon} variant={"primary"} handling={isUpdatingTask} />
                      </div>
                    </form>
                )
            }
        </Card>
    )
}