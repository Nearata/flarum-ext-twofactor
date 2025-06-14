import { forumTranslator as trans } from "../helpers/trans";
import AppSetupModal from "./AppSetupModal";
import EmailSetupModal from "./EmailSetupModal";

export const providers = [
  {
    key: "app",
    icon: "fas fa-mobile-alt",
    title: () => trans("app_label"),
    desc: () => trans("app_description"),
    setupModal: AppSetupModal,
  },
  {
    key: "email",
    icon: "fas fa-envelope-open",
    title: () => trans("email_label"),
    desc: () => trans("email_description"),
    setupModal: EmailSetupModal,
  },
];
