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
import cloneNullProto from "../modules/cloneNullProto"
import Tooltip from "./general/Tooltip"
import ColorPicker from "./inputs/ColorPicker"
import AlertBox from "./general/AlertBox"

export default cloneNullProto({
    inputs: cloneNullProto({
        Button: DiscordButton,
        Switch: Switch,
        Choices: RadioGroup,
        RadioGroup: RadioGroup,
        TextArea: TextArea,
        TextInput: TextInput,
        Dropdown: Dropdown,
        ColorPicker: ColorPicker
    }),
    general: cloneNullProto({
        Title: Title,
        SettingsTitle: SettingsTitle,
        SettingSubTitle: SettingSubTitle,
        Tabs: Tabs,
        CodeBlock: CodeBlock,
        Tooltip: Tooltip,
        AlertBox: AlertBox
    })
})