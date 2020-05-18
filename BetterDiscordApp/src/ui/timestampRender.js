"use strict";
import BDV2 from "../modules/v2"
const React = BDV2.react

const intervalModule1 = BDModules.get(e => e.Interval)[0]


export default function(component, Messages) {
    class TimeRender extends React.PureComponent {
        constructor(props){
            super(props)
            this._interval = new intervalModule1.Interval()

            this.state = Object.assign({}, this.getUpdatedTime())
        }

        componentDidMount(){
            let self = this;
            this._interval.start(1e3, (function() {
                return self.setState(self.getUpdatedTime())
            }))
        }

        componentWillUnmount(){
            this._interval.stop()
        }

        componentDidUpdate(activity){
            if(activity.timestamps.end === this.props.timestamps.end && activity.timestamps.start === this.props.timestamps.start)return
            this.setState(this.getUpdatedTime())
        }

        getUpdatedTime(){
            let timestamps = this.props.timestamps
            let now = Date.now() / 1e3;
            if(null != timestamps.end){
                return this.getDiff(now, checkUnix(timestamps.end) / 1e3)
            }
            if(null != timestamps.start){
                return this.getDiff(checkUnix(timestamps.start) / 1e3, now)
            }
            return {
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }

        renderTime(number, removeZero){
            if(removeZero === undefined)removeZero = false
            if(removeZero && number <= 0)return -1
            if(number < 10)return "0"+number
            return number
        }

        getDiff(timestamp, now){
            let hours = Math.max(now - timestamp, 0)
            let seconds = Math.floor(hours) % 60
            let minutes = Math.floor(hours / 60) % 60
            return {
                hours: Math.floor(hours / 3600) % 24,
                minutes,
                seconds
            }
        }

        render(){
            let props = this.props
            let timestamps = props.timestamps

            let usedProps = function(props, items) {
                if (null == props) return {};

                let timestamps = {}
                let keys = Object.keys(props);

                for (let i = 0; i < keys.length; i++){
                    let key = keys[i]
                    if(!items.indexOf(key) >= 0){
                        timestamps[key] = props[key]
                    }
                }

                return timestamps
            }(props, ["timestamps"])

            let state = this.state
            let hours = state.hours
            let minutes = state.minutes
            let seconds = state.seconds
            let data = {
                hours: this.renderTime(hours, !0),
                minutes: this.renderTime(minutes),
                seconds: this.renderTime(seconds)
            };
            if(timestamps.end !== null){
                return React.createElement(component, Object.assign({}, usedProps, {
                    message: Messages.USER_ACTIVITY_TIMESTAMP_END.format(data)
                }))
            }
            if(timestamps.start !== null){
                return React.createElement(component, Object.assign({}, usedProps, {
                    message: Messages.USER_ACTIVITY_TIMESTAMP_START.format(data)
                }))
            }
            return null
        }
    }
    return TimeRender
};

function checkUnix(e) {
    return ("" + e).length < 13 ? 1e3 * e : e
}