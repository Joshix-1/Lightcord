export const ReactSelector = mod => !["Component", "PureComponent", "Children", "createElement", "cloneElement"].find(k => !mod[k])
export const ReactDOMSelector = mod => mod.findDOMNode