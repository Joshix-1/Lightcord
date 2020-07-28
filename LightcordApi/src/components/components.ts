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
import { createProxyErrorCatcherClass } from "./private/ErrorCatcher"

const RadioGroupProxied = createProxyErrorCatcherClass(RadioGroup)
export default cloneNullProto({
    inputs: cloneNullProto({
        Button: createProxyErrorCatcherClass(DiscordButton),
        Switch: createProxyErrorCatcherClass(Switch),
        Choices: RadioGroupProxied,
        RadioGroup: RadioGroupProxied,
        TextArea: createProxyErrorCatcherClass(TextArea),
        TextInput: createProxyErrorCatcherClass(TextInput),
        Dropdown: createProxyErrorCatcherClass(Dropdown),
        ColorPicker: createProxyErrorCatcherClass(ColorPicker)
    }),
    general: cloneNullProto({
        Title: createProxyErrorCatcherClass(Title),
        SettingsTitle: createProxyErrorCatcherClass(SettingsTitle),
        SettingSubTitle: createProxyErrorCatcherClass(SettingSubTitle),
        Tabs: createProxyErrorCatcherClass(Tabs),
        CodeBlock: createProxyErrorCatcherClass(CodeBlock),
        Tooltip: createProxyErrorCatcherClass(Tooltip),
        AlertBox: createProxyErrorCatcherClass(AlertBox)
    })
})