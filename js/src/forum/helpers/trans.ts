import app from "flarum/forum/app";

export function forumTranslator(key: string, params = {}) {
  return app.translator.trans(`nearata-twofactor.forum.${key}`, params);
};
