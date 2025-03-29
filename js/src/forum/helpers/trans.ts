import app from "flarum/forum/app";

export default function trans(key: string, params = {}) {
  return app.translator.trans(
    `nearata-twofactor.forum.settings.${key}`,
    params
  );
};
