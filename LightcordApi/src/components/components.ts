import DiscordButton from "./inputs/Button"
import Switch from "./inputs/Switch"
import RadioGroup from "./inputs/RadioGroup"
import TextArea from "./inputs/TextArea"
import TextInput from "./inputs/TextInput"
import Dropdown from "./inputs/Dropdown"
import Title from "./general/Title"
import SettingsTitle from "./general/SettingsTitle"

export default {
    inputs: {
        Button: DiscordButton,
        Switch: Switch,
        Choices: RadioGroup,
        RadioGroup: RadioGroup,
        TextArea: TextArea,
        TextInput: TextInput,
        Dropdown: Dropdown
    },
    general: {
        Title: Title,
        SettingsTitle: SettingsTitle
    }
}