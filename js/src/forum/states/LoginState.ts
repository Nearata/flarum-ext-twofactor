import Stream from "flarum/common/utils/Stream";
import type { Children } from "mithril";

export default abstract class LoginState {
  loading: boolean = false;
  code: Stream<string> = Stream("");

  abstract get type(): string;

  abstract get onErrorMessage(): any;

  abstract content(): Children;
}
