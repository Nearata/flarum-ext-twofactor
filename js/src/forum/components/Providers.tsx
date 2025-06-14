import icon from "flarum/common/helpers/icon";
import { forumTranslator as trans } from "../helpers/trans";
import AppSetupModal from "./AppSetupModal";
import EmailSetupModal from "./EmailSetupModal";

export const providers = [
  {
    key: "app",
    icon: (attrs: any = {}) => icon("fas fa-mobile-alt", {...attrs}),
    title: () => trans("app_label"),
    desc: () => trans("app_description"),
    setupModal: AppSetupModal,
  },
  {
    key: "email",
    icon: (attrs: any = {}) => icon("fas fa-envelope-open", {...attrs}),
    title: () => trans("email_label"),
    desc: () => trans("email_description"),
    setupModal: EmailSetupModal,
  },
];
