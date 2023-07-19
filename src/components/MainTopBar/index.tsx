import { ArrowToRight, X } from "@styled-icons/boxicons-regular";
import { Notification } from "../FixedNotification";

export default function MainTopBar() {
  return (
    <div className="flex items-center h-[50px] justify-center px-2 bg-dark-primary border-b border-dark-border shadow-lg main-topbar">
      <Notification.Root>
        <Notification.Content text="Ajude o Porão Geek a continuar produzindo conteúdo. Lançamos nossa campanha no Apoia.se" />
        <Notification.Actions>
          <Notification.Action icon={ArrowToRight} text="Apoie o Porão" />
          <Notification.Action icon={X} />
        </Notification.Actions>
      </Notification.Root>
    </div>
  );
}
