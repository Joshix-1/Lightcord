import DiscordButton from "./Discord/Button"
import Switch from "./Discord/Switch"
import RadioGroup from "./Discord/RadioGroup"
import TextArea from "./Discord/TextArea"
import TextInput from "./Discord/TextInput"
import Dropdown from "./Discord/Dropdown"

export default {
    inputs: {
        Button: DiscordButton,
        Switch: Switch,
        Choices: RadioGroup,
        RadioGroup: RadioGroup,
        TextArea: TextArea,
        TextInput: TextInput,
        Dropdown: Dropdown
    }
}