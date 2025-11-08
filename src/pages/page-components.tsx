import Container from "../components/container.tsx";
import Icon from "../components/icon.tsx";
import ButtonIcon from "../components/button-icon.tsx";
import Button from "../components/button.tsx";
import Badge from "../components/badge.tsx";
import InputText from "../components/input-text.tsx";
import InputCheckbox from "../components/input-checkbox.tsx";
import Card from "../components/card.tsx";
import Skeleton from "../components/skeleton.tsx";
import Text from "../components/text.tsx";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/trash.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";

export default function PageComponents() {
    return (
        <Container>
            <div className="grid gap-10">
                <div className="flex flex-col gap-2">
                    <Text variant="body-sm-bold" className="text-pink-base">Olá, mundo!</Text>
                    <Text variant="body-md" className="text-green-base">Olá, mundo!</Text>
                    <Text variant="body-md-bold" className="text-shadow-gray-300">Olá, mundo!</Text>
                </div>
                <div className="flex gap-1">
                    <Icon svg={TrashIcon} className="fill-green-base"/>
                    <Icon svg={CheckIcon} className="fill-pink-base"/>
                    <Icon svg={SpinnerIcon} className="fill-gray-base" animate/>
                </div>
                <div className="flex gap-1">
                    <Badge variant="secondary">5</Badge>
                    <Badge variant="primary">2 de 5</Badge>
                    <Badge loading>5</Badge>
                </div>
                <div>
                    <Button icon={PlusIcon}>
                        Nova tarefa
                    </Button>
                </div>
                <div className="flex gap-1">
                    <ButtonIcon icon={TrashIcon}/>
                    <ButtonIcon icon={TrashIcon} variant="secondary"/>
                    <ButtonIcon icon={TrashIcon} variant="tertiary"/>
                    <ButtonIcon icon={TrashIcon} loading/>
                </div>
                <div>
                    <InputText/>
                </div>
                <div>
                    <InputCheckbox/>
                    <InputCheckbox loading/>

                </div>
                <div>
                    <Card size="md">Olá, mundo!</Card>
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-5"/>
                    <Skeleton className="h-6"/>
                    <Skeleton className="w-94"/>
                </div>
            </div>
        </Container>
    );
}