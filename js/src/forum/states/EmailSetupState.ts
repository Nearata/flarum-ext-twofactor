import SetupState from "./SetupState";
import Stream from "flarum/common/utils/Stream";

export default class EmailSetupState extends SetupState {
  email: Stream<string> = new Stream("");
  password: Stream<string> = new Stream("");
  passcode: Stream<string> = new Stream("");

  type() {
    return "email";
  }
}
