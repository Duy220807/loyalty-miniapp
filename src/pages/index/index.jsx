import { Component } from 'react'
import { View, Text, Image, Input, Button } from '@tarojs/components'
import { AtAvatar, AtGrid, AtTabs, AtCard, AtButton } from 'taro-ui'

import './index.scss'
import money from '../../../assets/flat-color-icons_money-transfer.png'
import mobile from '../../../assets/noto_mobile-phone.png'
import park from '../../../assets/icon-park_tv-one.png'
import wallet from '../../../assets/marketeq_wallet-money.png'
import traffic from '../../../assets/noto-v1_horizontal-traffic-light.png'
import wrapped from '../../../assets/noto-v1_wrapped-gift.png'
import soon from '../../../assets/token-branded_soon.png'
import banner1 from '../../../assets/image.png'
import banner2 from '../../../assets/image2.png'
import banner3 from '../../../assets/banner3.png'
import Picks from '../../utils/Picks'
import Taro from '@tarojs/taro'

class Index extends Component {
  state = {
    currentTab: 0, // Tab mặc định là "Cards"
    currentHistoryTab: 0, // Default tab for history
    startDate: '', // Selected start date
    endDate: '', // Selected end date
  }

  handleTabClick = (value) => {
    this.setState({
      currentTab: value,
    })
  }

  handleHistoryTabClick = (value) => {
    this.setState({
      currentHistoryTab: value,
    })
  }

  handleStartDateChange = (e) => {
    this.setState({
      startDate: e.detail.value,
    })
  }

  handleEndDateChange = (e) => {
    this.setState({
      endDate: e.detail.value,
    })
  }

  handleSearch = () => {
    const { startDate, endDate } = this.state;
    if (startDate && endDate) {
      // Xử lý tìm kiếm theo ngày
      console.log('Searching from:', startDate, 'to:', endDate);
    } else {
      // Thông báo người dùng cần nhập ngày
      Taro.showToast({
        title: 'Please select both start and end dates',
        icon: 'none',
      });
    }
  }

  render() {
    const { currentTab, currentHistoryTab, startDate, endDate } = this.state;

    // Thông tin người dùng
    const userInfo = {
      points: 1200,
      rank: 'Gold',
    }

    // Dữ liệu cho tab "Cards"
    const cardData = [
      { image: money, value: 'Transfer' },
      { image: mobile, value: 'Mobile' },
      { image: traffic, value: 'Traffic' },
      { image: park, value: 'Services' },
      { image: wallet, value: 'Fee' },
      { image: wrapped, value: 'UrBox' },
      { image: soon, value: 'Soon' },
      { image: soon, value: 'Soon' }
    ]

    // Dữ liệu cho tab "Histories"
    const historyData = [
      { id: 1, title: 'History 1', date: '2024-11-01' },
      { id: 2, title: 'History 2', date: '2024-11-02' },
      { id: 3, title: 'History 3', date: '2024-11-03' },
    ]

    return (
      <View className="flex flex-col items-center p-4">
        {/* Tab */}
        <AtTabs
          current={currentTab}
          tabList={[
            { title: 'Cards' },
            { title: 'Histories' }
          ]}
          onClick={this.handleTabClick}
        />

        {/* Nội dung theo từng tab */}
        {currentTab === 0 && (
          <View className="w-full">
            {/* Hiển thị thông tin người dùng */}
            <View className='background-image'>

            </View>

            <View className="mb-5 content">
              <View className='mt-5 mb-5'>
                <AtCard
                  title={`${userInfo.points} point`}
                  extra={`Rank: ${userInfo.rank}`}
                  thumb={money}
                />
              </View>
              <AtGrid
                style={{
                  backgroundColor: 'white'
                }}
                data={cardData} columnNum={4}
                onClick={(item) => {
                  if (item.value === 'UrBox') {
                    // Chuyển hướng đến trang UrBox khi người dùng nhấn vào "UrBox"
                    Taro.navigateTo({ url: '/pages/urbox/index' })
                  }
                }}
              />
            </View>
            <View className="w-full mt-4 flex flex-col">
              <Text className="text-[0.8rem] font-semibold mb-2">Hot</Text>
              <Image src={banner1} className="w-full h-auto rounded-lg mb-3" />
              <Image src={banner2} className="w-full h-auto rounded-lg mb-3" />
              <Image src={banner3} className="w-full h-auto rounded-lg" />
            </View>
          </View>
        )}

        {currentTab === 1 && (
          <View className="w-full mt-4">
            {/* Bọc phần chọn ngày vào trong Card */}
            <AtCard title="Select Date Range" className="mb-4">
              <View className="flex gap-4 mb-4">
                <View className="mr-4 shadow-style">
                  <Text>From: </Text>
                  <Input
                    type="date"
                    value={startDate}
                    onInput={this.handleStartDateChange}
                    placeholder="Enter Start Date"
                  />
                </View>
                <View className='shadow-style'>
                  <Text>To: </Text>
                  <Input
                    type="date"
                    value={endDate}
                    onInput={this.handleEndDateChange}
                    placeholder="Enter End Date"
                  />
                </View>
              </View>
              {/* Dòng thông báo */}
              <Text className="text-gray-500">
                You can query to view transaction history within 1 year with a maximum period of 31 days per search.
              </Text>
              <View className='mt-6'>

              </View>
              {/* Nút tìm kiếm */}
              <AtButton type="primary" onClick={this.handleSearch}>
                Search
              </AtButton>
            </AtCard>

            {/* Tabs for Accumulate and Use */}
            <AtTabs
              current={currentHistoryTab}
              tabList={[
                { title: 'Accumulate' },
                { title: 'Use' }
              ]}
              onClick={this.handleHistoryTabClick}
            />

            {/* Content for Accumulate */}
            {currentHistoryTab === 0 && (
              <View className="mt-4">
                <Text className='text-[0.8rem]'>Showing accumulate data...</Text>
                {/* Add your content for Accumulate */}
              </View>
            )}

            {/* Content for Use */}
            {currentHistoryTab === 1 && (
              <View className="mt-4">
                <Text className='text-[0.8rem]'>Showing use data...</Text>
                {/* Add your content for Use */}
              </View>
            )}

            {/* Filtered Histories based on Date Range */}
          </View>
        )}
      </View>
    )
  }
}

export default Index
