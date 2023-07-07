import { BUTTONS, EVENTS } from "./consts";

function navigate(href: string) {
  window.history.pushState({}, "", href);

  const navigationEvent = new Event(EVENTS.PUSH_STATE);
  window.dispatchEvent(navigationEvent);
}

interface LinkProps {
  to: string;
}

type Props = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({ to, target, ...props }: Props) {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const isMainEvent = event.button === BUTTONS.primary; // primary click
    const isModifiedEvent =
      event.metaKey || event.altKey || event.ctrlKey || event.shiftKey; // modifier key
    const isManageableEvent = target === undefined || target === "_self"; // target

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to); // SPA navigation
    }
  };

  return <a onClick={handleClick} href={to} {...props} />;
}
