import Stream from "flarum/common/utils/Stream";
import SetupState from "./SetupState";

export default class EmailSetupState extends SetupState {
  email: Stream<string> = new Stream("")
  password: Stream<string> = new Stream("")
  passcode: Stream<string> = new Stream("")

  type() {
    return "email"
  }
}
