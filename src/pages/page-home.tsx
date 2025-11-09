import Container from "../components/container.tsx";
import TasksSummary from "../core-components/tasks-summary.tsx";
import TasksList from "../core-components/tasks-list.tsx";

export default function PageHome() {
    return (
        <>
            <Container as={"article"} className={"space-y-3"}>
                <header className={"flex items-center justify-between"}>
                    <TasksSummary />
                </header>
                <TasksList />
            </Container>
        </>
    )
}