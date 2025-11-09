export const TASKS_KEY = "tasks";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export enum TaskState {
    Creating = "creating",
    Created = "created"
}

export interface Task {
    id: string;
    title: string;
    concluded?: boolean;
    state?: TaskState;
}