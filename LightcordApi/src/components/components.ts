import DiscordButton from "./inputs/Button"
import Switch from "./inputs/Switch"
import RadioGroup from "./inputs/RadioGroup"
import TextArea from "./inputs/TextArea"
import TextInput from "./inputs/TextInput"
import Dropdown from "./inputs/Dropdown"
import Title from "./general/Title"
import SettingsTitle from "./general/SettingsTitle"
import Tabs, { Tab } from "./general/Tabs"
import SettingSubTitle from "./general/SettingSubTitle"
import CodeBlock from "./general/CodeBlock"

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
        SettingsTitle: SettingsTitle,
        SettingSubTitle: SettingSubTitle,
        Tabs: Tabs,
        CodeBlock: CodeBlock
    }
}