import { PickerView, PickerViewColumn, View } from "@tarojs/components"
import { Component } from "react"

export default class Picks extends Component {

    constructor() {
        super(...arguments)
        const date = new Date()
        const years = []
        const months = []
        const days = []
        for (let i = 1990; i <= date.getFullYear(); i++) {
            years.push(i)
        }
        for (let i = 1; i <= 12; i++) {
            months.push(i)
        }
        for (let i = 1; i <= 31; i++) {
            days.push(i)
        }
        this.state = {
            years: years,
            year: date.getFullYear(),
            months: months,
            month: 2,
            days: days,
            day: 2,
            value: [9999, 1, 1]
        }
    }

    onChange = e => {
        const val = e.detail.value
        this.setState({
            year: this.state.years[val[0]],
            month: this.state.months[val[1]],
            day: this.state.days[val[2]],
            value: val
        })
    }

    render() {
        return (
            <View>
                <View>{this.state.year}-{this.state.month}-{this.state.day}</View>
                <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>
                    <PickerViewColumn>
                        {this.state.years.map(item => {
                            return (
                                <View>{item}</View>
                            );
                        })}
                    </PickerViewColumn>
                    <PickerViewColumn>
                        {this.state.months.map(item => {
                            return (
                                <View>{item}</View>
                            )
                        })}
                    </PickerViewColumn>
                    <PickerViewColumn>
                        {this.state.days.map(item => {
                            return (
                                <View>{item}</View>
                            )
                        })}
                    </PickerViewColumn>
                </PickerView>
            </View>
        )
    }
}
