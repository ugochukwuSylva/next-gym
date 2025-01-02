// This hook (react-outside-click-handler) doesn't provide its own TypeScript types, thus, we're declaring the module manually

declare module "react-outside-click-handler" {
  import { ComponentType, ReactNode } from "react";

  type OutsideClickHandlerProps = {
    onOutsideClick: () => void;
    children: ReactNode; // This allows the children prop
  };

  const OutsideClickHandler: ComponentType<OutsideClickHandlerProps>;

  export default OutsideClickHandler;
}
